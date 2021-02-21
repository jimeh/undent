package undent

import (
	"bytes"
	"testing"

	"github.com/rhysd/go-fakeio"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

var stringTestCases = []struct {
	name string
	s    string
	want string
}{
	{
		name: "empty",
		s:    "",
		want: "",
	},
	{
		name: "single-line",
		s:    "hello world",
		want: "hello world",
	},
	{
		name: "single-line indented",
		s:    "            hello world",
		want: "hello world",
	},
	{
		name: "multi-line",
		s: `
{
  "hello": "world",
  "foo": [
    "bar"
  ]
}`,
		want: `{
  "hello": "world",
  "foo": [
    "bar"
  ]
}`,
	},
	{
		name: "multi-line space indented",
		s: `
            {
              "hello": "world",
              "foo": [
                "bar"
              ]
            }`,
		want: `{
  "hello": "world",
  "foo": [
    "bar"
  ]
}`,
	},
	{
		name: "multi-line space indented without any leading line-breaks",
		s: `            {
              "hello": "world",
              "foo": [
                "bar"
              ]
            }`,
		want: `{
  "hello": "world",
  "foo": [
    "bar"
  ]
}`,
	},
	{
		name: "multi-line space indented with leading line-breaks",
		s: `


            {
              "hello": "world",
              "foo": [
                "bar"
              ]
            }`,
		want: `

{
  "hello": "world",
  "foo": [
    "bar"
  ]
}`,
	},
	{
		name: "multi-line tab indented",
		s: `
			{
				"hello": "world",
				"foo": [
					"bar"
				]
			}`,
		want: `{
	"hello": "world",
	"foo": [
		"bar"
	]
}`,
	},
	{
		name: "multi-line tab indented without any leading line-breaks",
		s: `			{
				"hello": "world",
				"foo": [
					"bar"
				]
			}`,
		want: `{
	"hello": "world",
	"foo": [
		"bar"
	]
}`,
	},
	{
		name: "multi-line tab indented with leading line-breaks",
		s: `


			{
				"hello": "world",
				"foo": [
					"bar"
				]
			}`,
		want: `

{
	"hello": "world",
	"foo": [
		"bar"
	]
}`,
	},
	{
		name: "multi-line tab indented with tabs and spaces after indent",
		s: `
			{
			  "hello": "world",
			  "foo": [
				"bar"
			  ]
			}`,
		want: `{
  "hello": "world",
  "foo": [
	"bar"
  ]
}`,
	},
	{
		name: "multi-line space indented with blank lines",
		s: `
            {
              "hello": "world",
              "foo": [

                "bar"

              ]
            }`,
		want: `{
  "hello": "world",
  "foo": [

    "bar"

  ]
}`,
	},
	{
		name: "multi-line tab indented with blank lines",
		s: `
			{
				"hello": "world",
				"foo": [

					"bar"

				]
			}`,
		want: `{
	"hello": "world",
	"foo": [

		"bar"

	]
}`,
	},
	{
		name: "multi-line space indented with random indentation",
		s: `
              hello
            world
              foo
                bar`,
		want: `  hello
world
  foo
    bar`,
	},
	{
		name: "multi-line tab indented with random indentation",
		s: `
				hello
			world
				foo
					bar`,
		want: `	hello
world
	foo
		bar`,
	},
	{
		name: "long block of text",
		s: `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
			ornare, tellus vel luctus tristique, ipsum ante varius mauris, non
			hendrerit tellus urna quis ex. Donec efficitur arcu sed iaculis
			lobortis. Phasellus facilisis vitae mi quis accumsan. Suspendisse
			rhoncus viverra odio ultricies rhoncus. Cras laoreet tortor
			vestibulum pharetra luctus. Vivamus sit amet volutpat elit.
			Suspendisse feugiat lectus id arcu sollicitudin tincidunt. Duis ut
			sem auctor orci sodales varius in ac odio. Nullam finibus odio at
			lacus tristique malesuada.

			Morbi nisl nulla, euismod eu enim in, tincidunt varius turpis. Morbi
			ullamcorper tortor mi, ut aliquam metus posuere vel. Etiam vel dui
			at quam placerat sollicitudin. Proin aliquam justo vitae mauris
			gravida porta. Praesent hendrerit egestas ligula, faucibus tincidunt
			tortor aliquet at. Ut luctus vehicula arcu eget cursus. Suspendisse
			eget enim mollis, condimentum lacus eu, viverra nulla. Aenean vel
			sapien eget enim convallis accumsan. Donec dictum ullamcorper leo
			placerat sollicitudin. Pellentesque habitant morbi tristique
			senectus et netus et malesuada fames ac turpis egestas. Vestibulum
			volutpat mattis est, a feugiat purus feugiat at. Quisque at velit ut
			mauris convallis sodales a et erat. Mauris condimentum augue sit
			amet arcu sodales, aliquet ultrices ipsum tempor. Donec scelerisque
			mi ligula, vel volutpat velit posuere a. Sed faucibus dui pulvinar
			lorem commodo egestas. In facilisis suscipit lacus non suscipit.

			Nunc dictum est nulla, a rhoncus mi posuere id. Morbi at tempus
			augue. Quisque ac nibh auctor velit auctor placerat id non eros.
			Nulla condimentum quam id risus suscipit, ut fermentum mauris
			lacinia. Vestibulum suscipit rutrum ex, sed vulputate nisi tempus
			ultricies. Sed id ante pretium, accumsan sapien eget, malesuada
			quam. Phasellus quis commodo enim. Vivamus in purus ac lorem ornare
			posuere non eu quam. Sed arcu tortor, gravida quis fringilla nec,
			ultricies et sem. Pellentesque arcu enim, tempor id nisl at, rhoncus
			efficitur sem. Ut quis placerat quam. Donec maximus a risus sed
			posuere. Curabitur pretium a diam non aliquet.

			Class aptent taciti sociosqu ad litora torquent per conubia nostra,
			per inceptos himenaeos. Morbi volutpat felis leo, vel ultrices orci
			bibendum ac. Integer eu mattis urna. Donec dictum vehicula
			fermentum. Pellentesque a rutrum ipsum. Donec ultricies elit purus,
			eget viverra tellus tristique sed. In hac habitasse platea dictumst.
			Duis elementum semper elit, sit amet rhoncus lacus dictum ac. Nunc
			pretium enim ac urna efficitur, eget facilisis enim interdum.

			Vivamus vel lectus lacus. Praesent vestibulum vel ligula eget
			cursus. Quisque eu dignissim erat. Quisque maximus arcu eu turpis
			pulvinar egestas. Nam aliquet neque sed tellus finibus mollis.
			Phasellus consequat nibh nec ornare egestas. Donec at pellentesque
			lorem.`,
		want: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
ornare, tellus vel luctus tristique, ipsum ante varius mauris, non
hendrerit tellus urna quis ex. Donec efficitur arcu sed iaculis
lobortis. Phasellus facilisis vitae mi quis accumsan. Suspendisse
rhoncus viverra odio ultricies rhoncus. Cras laoreet tortor
vestibulum pharetra luctus. Vivamus sit amet volutpat elit.
Suspendisse feugiat lectus id arcu sollicitudin tincidunt. Duis ut
sem auctor orci sodales varius in ac odio. Nullam finibus odio at
lacus tristique malesuada.

Morbi nisl nulla, euismod eu enim in, tincidunt varius turpis. Morbi
ullamcorper tortor mi, ut aliquam metus posuere vel. Etiam vel dui
at quam placerat sollicitudin. Proin aliquam justo vitae mauris
gravida porta. Praesent hendrerit egestas ligula, faucibus tincidunt
tortor aliquet at. Ut luctus vehicula arcu eget cursus. Suspendisse
eget enim mollis, condimentum lacus eu, viverra nulla. Aenean vel
sapien eget enim convallis accumsan. Donec dictum ullamcorper leo
placerat sollicitudin. Pellentesque habitant morbi tristique
senectus et netus et malesuada fames ac turpis egestas. Vestibulum
volutpat mattis est, a feugiat purus feugiat at. Quisque at velit ut
mauris convallis sodales a et erat. Mauris condimentum augue sit
amet arcu sodales, aliquet ultrices ipsum tempor. Donec scelerisque
mi ligula, vel volutpat velit posuere a. Sed faucibus dui pulvinar
lorem commodo egestas. In facilisis suscipit lacus non suscipit.

Nunc dictum est nulla, a rhoncus mi posuere id. Morbi at tempus
augue. Quisque ac nibh auctor velit auctor placerat id non eros.
Nulla condimentum quam id risus suscipit, ut fermentum mauris
lacinia. Vestibulum suscipit rutrum ex, sed vulputate nisi tempus
ultricies. Sed id ante pretium, accumsan sapien eget, malesuada
quam. Phasellus quis commodo enim. Vivamus in purus ac lorem ornare
posuere non eu quam. Sed arcu tortor, gravida quis fringilla nec,
ultricies et sem. Pellentesque arcu enim, tempor id nisl at, rhoncus
efficitur sem. Ut quis placerat quam. Donec maximus a risus sed
posuere. Curabitur pretium a diam non aliquet.

Class aptent taciti sociosqu ad litora torquent per conubia nostra,
per inceptos himenaeos. Morbi volutpat felis leo, vel ultrices orci
bibendum ac. Integer eu mattis urna. Donec dictum vehicula
fermentum. Pellentesque a rutrum ipsum. Donec ultricies elit purus,
eget viverra tellus tristique sed. In hac habitasse platea dictumst.
Duis elementum semper elit, sit amet rhoncus lacus dictum ac. Nunc
pretium enim ac urna efficitur, eget facilisis enim interdum.

Vivamus vel lectus lacus. Praesent vestibulum vel ligula eget
cursus. Quisque eu dignissim erat. Quisque maximus arcu eu turpis
pulvinar egestas. Nam aliquet neque sed tellus finibus mollis.
Phasellus consequat nibh nec ornare egestas. Donec at pellentesque
lorem.`,
	},
}

var stringfTestCases = []struct {
	name string
	s    string
	a    []interface{}
	want string
}{
	{
		name: "empty",
		s:    "",
		want: "",
	},
	{
		name: "single-line",
		s:    "hello %s, %d",
		a:    []interface{}{"world", 42},
		want: "hello world, 42",
	},
	{
		name: "single-line indented",
		s:    "            hello %s, %d",
		a:    []interface{}{"world", 42},
		want: "hello world, 42",
	},
	{
		name: "multi-line",
		s: `
{
  "hello": "%s",
  "foo": [
    %d
  ]
}`,
		a: []interface{}{"world", 42},
		want: `{
  "hello": "world",
  "foo": [
    42
  ]
}`,
	},
	{
		name: "multi-line space indented",
		s: `
            {
              "hello": "%s",
              "foo": [
                %d
              ]
            }`,
		a: []interface{}{"world", 42},
		want: `{
  "hello": "world",
  "foo": [
    42
  ]
}`,
	},
	{
		name: "multi-line space indented without any leading line-breaks",
		s: `            {
              "hello": "%s",
              "foo": [
                %d
              ]
            }`,
		a: []interface{}{"world", 42},
		want: `{
  "hello": "world",
  "foo": [
    42
  ]
}`,
	},
	{
		name: "multi-line space indented with leading line-breaks",
		s: `


            {
              "hello": "%s",
              "foo": [
                %d
              ]
            }`,
		a: []interface{}{"world", 42},
		want: `

{
  "hello": "world",
  "foo": [
    42
  ]
}`,
	},
	{
		name: "multi-line tab indented",
		s: `
			{
				"hello": "%s",
				"foo": [
					%d
				]
			}`,
		a: []interface{}{"world", 42},
		want: `{
	"hello": "world",
	"foo": [
		42
	]
}`,
	},
	{
		name: "multi-line tab indented without any leading line-breaks",
		s: `			{
				"hello": "%s",
				"foo": [
					%d
				]
			}`,
		a: []interface{}{"world", 42},
		want: `{
	"hello": "world",
	"foo": [
		42
	]
}`,
	},
	{
		name: "multi-line tab indented with leading line-breaks",
		s: `


			{
				"hello": "%s",
				"foo": [
					%d
				]
			}`,
		a: []interface{}{"world", 42},
		want: `

{
	"hello": "world",
	"foo": [
		42
	]
}`,
	},
	{
		name: "multi-line tab indented with tabs and spaces after indent",
		s: `
			{
			  "hello": "%s",
			  "foo": [
				%d
			  ]
			}`,
		a: []interface{}{"world", 42},
		want: `{
  "hello": "world",
  "foo": [
	42
  ]
}`,
	},
	{
		name: "multi-line space indented with blank lines",
		s: `
            {
              "hello": "%s",
              "foo": [

                %d

              ]
            }`,
		a: []interface{}{"world", 42},
		want: `{
  "hello": "world",
  "foo": [

    42

  ]
}`,
	},
	{
		name: "multi-line tab indented with blank lines",
		s: `
			{
				"hello": "%s",
				"foo": [

					%d

				]
			}`,
		a: []interface{}{"world", 42},
		want: `{
	"hello": "world",
	"foo": [

		42

	]
}`,
	},
	{
		name: "multi-line space indented with random indentation",
		s: `
              hello
            %s
              foo
                %d`,
		a: []interface{}{"world", 42},
		want: `  hello
world
  foo
    42`,
	},
	{
		name: "multi-line tab indented with random indentation",
		s: `
				hello
			%s
				foo
					%d`,
		a: []interface{}{"world", 42},
		want: `	hello
world
	foo
		42`,
	},
	{
		name: "long block of text",
		s: `
			Lorem %s dolor sit amet, consectetur adipiscing elit. Nunc
			ornare, tellus vel luctus tristique, ipsum ante varius mauris, non
			hendrerit tellus urna quis ex. %s efficitur arcu sed iaculis
			lobortis. Phasellus facilisis vitae mi quis accumsan. Suspendisse
			rhoncus viverra odio ultricies rhoncus. Cras laoreet tortor
			vestibulum pharetra luctus. Vivamus sit amet volutpat elit.
			Suspendisse feugiat lectus id arcu sollicitudin tincidunt. Duis ut
			sem auctor orci sodales varius in ac odio. Nullam finibus odio at
			lacus tristique malesuada.

			Morbi nisl nulla, euismod eu enim in, tincidunt varius turpis. Morbi
			ullamcorper tortor mi, ut aliquam metus posuere vel. Etiam vel dui
			at quam placerat sollicitudin. Proin aliquam justo vitae mauris
			gravida porta. Praesent hendrerit egestas ligula, faucibus tincidunt
			tortor aliquet at. Ut luctus vehicula arcu eget cursus. Suspendisse
			eget enim mollis, condimentum lacus eu, viverra nulla. Aenean vel
			sapien eget enim convallis accumsan. Donec dictum ullamcorper leo
			placerat sollicitudin. Pellentesque habitant morbi tristique
			senectus et netus et malesuada fames ac turpis egestas. Vestibulum
			volutpat mattis est, a feugiat purus feugiat at. Quisque at velit ut
			mauris convallis sodales a et erat. Mauris condimentum augue sit
			amet arcu sodales, aliquet ultrices ipsum tempor. Donec scelerisque
			mi ligula, vel volutpat velit posuere a. Sed faucibus dui pulvinar
			lorem commodo egestas. In facilisis suscipit lacus non suscipit.

			Nunc dictum est nulla, a rhoncus mi posuere id. Morbi at tempus
			augue. Quisque ac nibh auctor velit auctor placerat id non eros.
			Nulla condimentum quam id risus suscipit, ut fermentum mauris
			lacinia. Vestibulum suscipit rutrum ex, sed vulputate nisi tempus
			ultricies. Sed id ante pretium, accumsan sapien eget, malesuada
			quam. Phasellus quis commodo enim. Vivamus in purus ac lorem ornare
			posuere non eu quam. Sed arcu tortor, gravida quis fringilla nec,
			ultricies et sem. Pellentesque arcu enim, tempor id nisl at, rhoncus
			efficitur sem. Ut quis placerat quam. Donec maximus a risus sed
			posuere. Curabitur pretium a diam non aliquet.

			Class aptent taciti sociosqu ad litora torquent per conubia nostra,
			per inceptos himenaeos. Morbi volutpat felis leo, vel ultrices orci
			bibendum ac. Integer eu mattis urna. Donec dictum vehicula
			fermentum. Pellentesque a rutrum ipsum. Donec ultricies elit purus,
			eget viverra tellus tristique sed. In hac habitasse platea dictumst.
			Duis elementum semper elit, sit amet rhoncus lacus dictum ac. Nunc
			pretium enim ac urna efficitur, eget facilisis enim interdum.

			Vivamus vel lectus lacus. Praesent vestibulum vel ligula eget
			cursus. Quisque eu dignissim erat. Quisque maximus arcu eu turpis
			pulvinar egestas. Nam aliquet neque sed tellus finibus mollis.
			Phasellus consequat nibh nec ornare egestas. Donec at pellentesque
			lorem.`,
		a: []interface{}{"ipsum", "Donec"},
		want: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
ornare, tellus vel luctus tristique, ipsum ante varius mauris, non
hendrerit tellus urna quis ex. Donec efficitur arcu sed iaculis
lobortis. Phasellus facilisis vitae mi quis accumsan. Suspendisse
rhoncus viverra odio ultricies rhoncus. Cras laoreet tortor
vestibulum pharetra luctus. Vivamus sit amet volutpat elit.
Suspendisse feugiat lectus id arcu sollicitudin tincidunt. Duis ut
sem auctor orci sodales varius in ac odio. Nullam finibus odio at
lacus tristique malesuada.

Morbi nisl nulla, euismod eu enim in, tincidunt varius turpis. Morbi
ullamcorper tortor mi, ut aliquam metus posuere vel. Etiam vel dui
at quam placerat sollicitudin. Proin aliquam justo vitae mauris
gravida porta. Praesent hendrerit egestas ligula, faucibus tincidunt
tortor aliquet at. Ut luctus vehicula arcu eget cursus. Suspendisse
eget enim mollis, condimentum lacus eu, viverra nulla. Aenean vel
sapien eget enim convallis accumsan. Donec dictum ullamcorper leo
placerat sollicitudin. Pellentesque habitant morbi tristique
senectus et netus et malesuada fames ac turpis egestas. Vestibulum
volutpat mattis est, a feugiat purus feugiat at. Quisque at velit ut
mauris convallis sodales a et erat. Mauris condimentum augue sit
amet arcu sodales, aliquet ultrices ipsum tempor. Donec scelerisque
mi ligula, vel volutpat velit posuere a. Sed faucibus dui pulvinar
lorem commodo egestas. In facilisis suscipit lacus non suscipit.

Nunc dictum est nulla, a rhoncus mi posuere id. Morbi at tempus
augue. Quisque ac nibh auctor velit auctor placerat id non eros.
Nulla condimentum quam id risus suscipit, ut fermentum mauris
lacinia. Vestibulum suscipit rutrum ex, sed vulputate nisi tempus
ultricies. Sed id ante pretium, accumsan sapien eget, malesuada
quam. Phasellus quis commodo enim. Vivamus in purus ac lorem ornare
posuere non eu quam. Sed arcu tortor, gravida quis fringilla nec,
ultricies et sem. Pellentesque arcu enim, tempor id nisl at, rhoncus
efficitur sem. Ut quis placerat quam. Donec maximus a risus sed
posuere. Curabitur pretium a diam non aliquet.

Class aptent taciti sociosqu ad litora torquent per conubia nostra,
per inceptos himenaeos. Morbi volutpat felis leo, vel ultrices orci
bibendum ac. Integer eu mattis urna. Donec dictum vehicula
fermentum. Pellentesque a rutrum ipsum. Donec ultricies elit purus,
eget viverra tellus tristique sed. In hac habitasse platea dictumst.
Duis elementum semper elit, sit amet rhoncus lacus dictum ac. Nunc
pretium enim ac urna efficitur, eget facilisis enim interdum.

Vivamus vel lectus lacus. Praesent vestibulum vel ligula eget
cursus. Quisque eu dignissim erat. Quisque maximus arcu eu turpis
pulvinar egestas. Nam aliquet neque sed tellus finibus mollis.
Phasellus consequat nibh nec ornare egestas. Donec at pellentesque
lorem.`,
	},
}

func TestBytes(t *testing.T) {
	for _, tt := range stringTestCases {
		t.Run(tt.name, func(t *testing.T) {
			got := Bytes(tt.s)

			assert.IsType(t, []byte{}, got)
			assert.Equal(t, tt.want, string(got))
		})
	}
}

func TestBytesf(t *testing.T) {
	for _, tt := range stringfTestCases {
		t.Run(tt.name, func(t *testing.T) {
			got := Bytesf(tt.s, tt.a...)

			assert.IsType(t, []byte{}, got)
			assert.Equal(t, tt.want, string(got))
		})
	}
}

func TestString(t *testing.T) {
	for _, tt := range stringTestCases {
		t.Run(tt.name, func(t *testing.T) {
			got := String(tt.s)

			assert.IsType(t, "", got)
			assert.Equal(t, tt.want, got)
		})
	}
}

func TestStringf(t *testing.T) {
	for _, tt := range stringfTestCases {
		t.Run(tt.name, func(t *testing.T) {
			got := Stringf(tt.s, tt.a...)

			assert.IsType(t, "", got)
			assert.Equal(t, tt.want, got)
		})
	}
}

func TestPrint(t *testing.T) {
	for _, tt := range stringTestCases {
		t.Run(tt.name, func(t *testing.T) {
			got, err := fakeio.Stdout().Do(func() {
				Print(tt.s, 5, tt.s)
			})
			require.NoError(t, err)

			assert.IsType(t, "", got)
			assert.Equal(t, tt.want+"5"+tt.want, got)
		})
	}
}

func TestPrintf(t *testing.T) {
	for _, tt := range stringfTestCases {
		t.Run(tt.name, func(t *testing.T) {
			got, err := fakeio.Stdout().Do(func() {
				Printf(tt.s, tt.a...)
			})
			require.NoError(t, err)

			assert.IsType(t, "", got)
			assert.Equal(t, tt.want, got)
		})
	}
}

func TestFprint(t *testing.T) {
	for _, tt := range stringTestCases {
		t.Run(tt.name, func(t *testing.T) {
			var buf bytes.Buffer

			Fprint(&buf, tt.s, 5, tt.s)
			got := buf.String()

			assert.IsType(t, "", got)
			assert.Equal(t, tt.want+"5"+tt.want, got)
		})
	}
}

func TestFprintf(t *testing.T) {
	for _, tt := range stringfTestCases {
		t.Run(tt.name, func(t *testing.T) {
			var buf bytes.Buffer

			Fprintf(&buf, tt.s, tt.a...)
			got := buf.String()

			assert.IsType(t, "", got)
			assert.Equal(t, tt.want, got)
		})
	}
}

func BenchmarkBytes(b *testing.B) {
	for _, tt := range stringTestCases {
		b.Run(tt.name, func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				Bytes(tt.s)
			}
		})
	}
}

func BenchmarkString(b *testing.B) {
	for _, tt := range stringTestCases {
		b.Run(tt.name, func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				String(tt.s)
			}
		})
	}
}
