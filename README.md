# undent


Go package which removes leading indentation/white-space from multi-line strings
and byte slices.

```go
s := undent.String(`
	{
	  "hello": "world"
	}`,
)
fmt.Println(s)
```

```
{
  "hello": "world"
}
```
