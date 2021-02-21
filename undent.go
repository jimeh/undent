// Package undent removes leading indentation/white-space from strings and byte
// slices.
package undent

import (
	"fmt"
	"io"
	"regexp"
)

var matcher = regexp.MustCompile(`(?m)^([ \t]*)(?:\S)`)

// Bytes removes leading indentation/white-space from given string and returns
// it as a byte slice.
func Bytes(s string) []byte {
	return []byte(String(s))
}

// Bytesf removes leading indentation/white-space from given format string
// before passing format and all additional arguments to fmt.Sprintf, returning
// the result as a byte slice.
func Bytesf(format string, a ...interface{}) []byte {
	return []byte(Stringf(format, a...))
}

// String removes leading indentation/white-space from given string.
func String(s string) string {
	if len(s) > 0 && s[0] == '\n' {
		s = s[1:]
	}

	matches := matcher.FindAllString(s, -1)
	if len(matches) == 0 {
		return s
	}

	index := 0
	length := len(matches[0])

	for i, s := range matches[1:] {
		l := len(s)
		if l < length {
			index = i + 1
			length = l
		}
	}

	if length <= 1 {
		return s
	}
	indent := matches[index][0 : length-1]

	return regexp.MustCompile(
		`(?m)^`+regexp.QuoteMeta(indent),
	).ReplaceAllLiteralString(s, "")
}

// Stringf removes leading indentation/white-space from given format string
// before passing format and all additional arguments to fmt.Sprintf, returning
// the result.
func Stringf(format string, a ...interface{}) string {
	return fmt.Sprintf(String(format), a...)
}

// Print will undent any strings arguments before passing them to fmt.Print.
func Print(a ...interface{}) (n int, err error) {
	return fmt.Print(undentInterfaces(a)...)
}

// Printf will undent the given format string before passing it and all
// arguments to fmt.Printf.
func Printf(format string, a ...interface{}) (n int, err error) {
	return fmt.Printf(String(format), a...)
}

// Fprint will undent any string arguments before passing them to fmt.Fprint.
func Fprint(w io.Writer, a ...interface{}) (n int, err error) {
	return fmt.Fprint(w, undentInterfaces(a)...)
}

// Fprintf will undent the given format string before passing it and all
// arguments to fmt.Fprintf.
func Fprintf(w io.Writer, format string, a ...interface{}) (n int, err error) {
	return fmt.Fprintf(w, String(format), a...)
}

func undentInterfaces(a []interface{}) []interface{} {
	var r []interface{}

	for _, v := range a {
		if s, ok := v.(string); ok {
			v = String(s)
		}
		r = append(r, v)
	}

	return r
}
