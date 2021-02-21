<h1 align="center">
  undent
</h1>

<p align="center">
  <strong>
    Go package which removes leading indentation/white-space from strings.
  </strong>
</p>

<p align="center">
  <a href="https://pkg.go.dev/github.com/jimeh/undent">
    <img src="https://img.shields.io/badge/%E2%80%8B-reference-387b97.svg?logo=go&logoColor=white"
  alt="Go Reference">
  </a>
  <a href="https://github.com/jimeh/undent/releases">
    <img src="https://img.shields.io/github/v/tag/jimeh/undent?label=release" alt="GitHub tag (latest SemVer)">
  </a>
  <a href="https://github.com/jimeh/undent/actions">
    <img src="https://img.shields.io/github/workflow/status/jimeh/undent/CI.svg?logo=github" alt="Actions Status">
  </a>
  <a href="https://codeclimate.com/github/jimeh/undent">
    <img src="https://img.shields.io/codeclimate/coverage/jimeh/undent.svg?logo=code%20climate" alt="Coverage">
  </a>
  <a href="https://github.com/jimeh/undent/issues">
    <img src="https://img.shields.io/github/issues-raw/jimeh/undent.svg?style=flat&logo=github&logoColor=white"
alt="GitHub issues">
  </a>
  <a href="https://github.com/jimeh/undent/pulls">
    <img src="https://img.shields.io/github/issues-pr-raw/jimeh/undent.svg?style=flat&logo=github&logoColor=white" alt="GitHub pull requests">
  </a>
  <a href="https://github.com/jimeh/undent/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/jimeh/undent.svg?style=flat" alt="License Status">
  </a>
</p>

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

## Documentation

Please see the
[Go Reference](https://pkg.go.dev/github.com/jimeh/undent#section-documentation)
for documentation and examples.

## Benchmarks

Benchmark reports and graphs are available here:
https://jimeh.me/undent/dev/bench/

## License

[MIT](https://github.com/jimeh/undent/blob/main/LICENSE)
