package undent_test

import (
	"bytes"
	"fmt"

	"github.com/jimeh/undent"
)

func ExampleBytes() {
	b := undent.Bytes(`
		{
		  "hello": "world"
		}`,
	)

	fmt.Println(string(b))
	// Output:
	// {
	//   "hello": "world"
	// }
}

func ExampleBytesf() {
	s := undent.Bytesf(`
		{
		  "hello": "%s"
		}`,
		"world",
	)
	fmt.Println(string(s))
	// Output:
	// {
	//   "hello": "world"
	// }
}

func ExampleString() {
	s := undent.String(`
		{
		  "hello": "world"
		}`,
	)
	fmt.Println(s)
	// Output:
	// {
	//   "hello": "world"
	// }
}

func ExampleStringf() {
	s := undent.Stringf(`
		{
		  "hello": "%s"
		}`,
		"world",
	)
	fmt.Println(s)
	// Output:
	// {
	//   "hello": "world"
	// }
}

func ExamplePrint() {
	undent.Print(`
		{
		  "hello": "world"
		}`,
	)
	// Output:
	// {
	//   "hello": "world"
	// }
}

func ExamplePrintf() {
	undent.Printf(`
		{
		  "hello": "%s"
		}`,
		"world",
	)
	// Output:
	// {
	//   "hello": "world"
	// }
}

func ExampleFprint() {
	var buf bytes.Buffer
	undent.Fprint(&buf, `
		{
		  "hello": "world"
		}`,
	)
	fmt.Println(buf.String())
	// Output:
	// {
	//   "hello": "world"
	// }
}

func ExampleFprintf() {
	var buf bytes.Buffer
	undent.Fprintf(&buf, `
		{
		  "hello": "%s"
		}`,
		"world",
	)
	fmt.Println(buf.String())
	// Output:
	// {
	//   "hello": "world"
	// }
}
