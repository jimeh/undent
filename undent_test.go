package undent

import (
	"testing"

	"github.com/stretchr/testify/assert"
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
		name: "multi-line tab indented with leading line breaks",
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
}

func TestBytes(t *testing.T) {
	for _, tt := range stringTestCases {
		t.Run(tt.name, func(t *testing.T) {
			got := Bytes([]byte(tt.s))

			assert.Equal(t, []byte(tt.want), got)
		})
	}
}

func TestString(t *testing.T) {
	for _, tt := range stringTestCases {
		t.Run(tt.name, func(t *testing.T) {
			got := String(tt.s)

			assert.Equal(t, tt.want, got)
		})
	}
}

func TestStringf(t *testing.T) {
	for _, tt := range stringfTestCases {
		t.Run(tt.name, func(t *testing.T) {
			got := Stringf(tt.s, tt.a...)

			assert.Equal(t, tt.want, got)
		})
	}
}

func BenchmarkBytes(b *testing.B) {
	for _, tt := range stringTestCases {
		b.Run(tt.name, func(b *testing.B) {
			input := []byte(tt.s)

			for i := 0; i < b.N; i++ {
				Bytes(input)
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
