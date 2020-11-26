window.BENCHMARK_DATA = {
  "lastUpdate": 1606362919453,
  "repoUrl": "https://github.com/jimeh/undent",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "distinct": true,
          "id": "f51ce980ba5d6c32cd3075cb49a392c8cb447d8c",
          "message": "ci(github): add CI workflow for GitHub Actions",
          "timestamp": "2020-11-26T03:54:23Z",
          "tree_id": "03a723b6e557034436403a3f044e664e4bc41c0c",
          "url": "https://github.com/jimeh/undent/commit/f51ce980ba5d6c32cd3075cb49a392c8cb447d8c"
        },
        "date": 1606362918916,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 20.7,
            "unit": "ns/op",
            "extra": "52226138 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 730,
            "unit": "ns/op",
            "extra": "1632382 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 4693,
            "unit": "ns/op",
            "extra": "221154 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 2877,
            "unit": "ns/op",
            "extra": "448887 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 10745,
            "unit": "ns/op",
            "extra": "110846 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 7589,
            "unit": "ns/op",
            "extra": "161454 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 7705,
            "unit": "ns/op",
            "extra": "153444 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 11319,
            "unit": "ns/op",
            "extra": "108550 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 7927,
            "unit": "ns/op",
            "extra": "152143 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 8154,
            "unit": "ns/op",
            "extra": "150394 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6182,
            "unit": "ns/op",
            "extra": "200983 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 19.9,
            "unit": "ns/op",
            "extra": "59715295 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 724,
            "unit": "ns/op",
            "extra": "1691210 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 4762,
            "unit": "ns/op",
            "extra": "249838 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 2904,
            "unit": "ns/op",
            "extra": "449601 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 10607,
            "unit": "ns/op",
            "extra": "108074 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 7608,
            "unit": "ns/op",
            "extra": "158068 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 7772,
            "unit": "ns/op",
            "extra": "155520 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 10901,
            "unit": "ns/op",
            "extra": "105156 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8005,
            "unit": "ns/op",
            "extra": "152037 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 8152,
            "unit": "ns/op",
            "extra": "132182 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 5851,
            "unit": "ns/op",
            "extra": "215294 times"
          }
        ]
      }
    ]
  }
}
