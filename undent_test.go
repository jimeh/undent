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
