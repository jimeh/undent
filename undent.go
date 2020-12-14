// Package undent removes leading indentation/white-space from strings and byte
// slices.
package undent

import (
	"fmt"
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
