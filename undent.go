// Package undent removes leading indentation/white-space from strings and byte
// slices.
package undent

import (
	"fmt"
	"io"
)

const (
	tab = 9
	lf  = 10
	spc = 32
)

// Bytes removes leading indentation/white-space from given string and returns
// it as a byte slice.
func Bytes(s string) []byte {
	if len(s) == 0 {
		return []byte{}
	}

	// find line feeds
	lfs := []int{}

	if s[0] != lf {
		lfs = append(lfs, -1)
	}

	for i := 0; i < len(s); i++ {
		if s[i] == lf {
			lfs = append(lfs, i)
		}
	}

	// find smallest indent relative to each line-feed
	min := 99999999999
	count := 0

	for i := 0; i < len(lfs); i++ {
		offset := lfs[i]
		end := len(s) - 1
		if i+1 < len(lfs) {
			end = lfs[i+1]
		}

		if offset+1 >= end {
			continue
		}

		indent := 0
	lineSeek:
		for n := offset + 1; n < end && indent < min; n++ {
			switch s[n] {
			case spc, tab:
				indent++
			default:
				break lineSeek
			}
		}
		if indent < min {
			min = indent
		}
		if indent > 0 {
			count++
		}
	}

	// extract each line without indentation
	out := make([]byte, 0, len(s)-(min*count))

	for i := 0; i < len(lfs); i++ {
		offset := lfs[i] + 1
		end := len(s)
		if i+1 < len(lfs) {
			end = lfs[i+1] + 1
		}

		if offset+min < end {
			out = append(out, s[offset+min:end]...)
		} else if offset < end {
			out = append(out, s[offset:end]...)
		}
	}

	return out
}

// Bytesf removes leading indentation/white-space from given format string
// before passing format and all additional arguments to fmt.Sprintf, returning
// the result as a byte slice.
func Bytesf(format string, a ...interface{}) []byte {
	return []byte(Stringf(format, a...))
}

// String removes leading indentation/white-space from given string.
func String(s string) string {
	return string(Bytes(s))
}

// Stringf removes leading indentation/white-space from given format string
// before passing format and all additional arguments to fmt.Sprintf, returning
// the result.
func Stringf(format string, a ...interface{}) string {
	return fmt.Sprintf(String(format), a...)
}

// Print will undent any string arguments before passing them to fmt.Print.
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
