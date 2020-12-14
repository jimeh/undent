package undent_test

import (
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
