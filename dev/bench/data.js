window.BENCHMARK_DATA = {
  "lastUpdate": 1729471898493,
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
      },
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4dfb3691491567b8462b7e26943efd3d2bfabf08",
          "message": "Merge pull request #1 from jimeh/initial-implementation\n\nfeat(undent): initial implementation",
          "timestamp": "2020-11-26T04:04:55Z",
          "tree_id": "db23b96493884375d067fba64e4c40874d171913",
          "url": "https://github.com/jimeh/undent/commit/4dfb3691491567b8462b7e26943efd3d2bfabf08"
        },
        "date": 1606363551218,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 20.9,
            "unit": "ns/op",
            "extra": "60322183 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 731,
            "unit": "ns/op",
            "extra": "1638342 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 4825,
            "unit": "ns/op",
            "extra": "243601 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 2804,
            "unit": "ns/op",
            "extra": "417213 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 11155,
            "unit": "ns/op",
            "extra": "121438 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 7572,
            "unit": "ns/op",
            "extra": "143679 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 7689,
            "unit": "ns/op",
            "extra": "152414 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 10955,
            "unit": "ns/op",
            "extra": "104686 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 7689,
            "unit": "ns/op",
            "extra": "158121 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 8217,
            "unit": "ns/op",
            "extra": "143545 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 5780,
            "unit": "ns/op",
            "extra": "210904 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 19.5,
            "unit": "ns/op",
            "extra": "60682777 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 701,
            "unit": "ns/op",
            "extra": "1737265 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 4718,
            "unit": "ns/op",
            "extra": "272043 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 2833,
            "unit": "ns/op",
            "extra": "471331 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 10629,
            "unit": "ns/op",
            "extra": "103923 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 7847,
            "unit": "ns/op",
            "extra": "153081 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 7649,
            "unit": "ns/op",
            "extra": "156463 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 10612,
            "unit": "ns/op",
            "extra": "113762 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 7768,
            "unit": "ns/op",
            "extra": "157117 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 8025,
            "unit": "ns/op",
            "extra": "138409 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 5704,
            "unit": "ns/op",
            "extra": "204166 times"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffa6b79166c089bfed6751308d8c8aacdbb8677a",
          "message": "Merge pull request #2 from jimeh/update-readme\n\ndocs(readme): add badges, Go ref, and lincense links",
          "timestamp": "2020-11-26T04:13:58Z",
          "tree_id": "053f9ee005531d6082f997a88705d9e24d7dd2b3",
          "url": "https://github.com/jimeh/undent/commit/ffa6b79166c089bfed6751308d8c8aacdbb8677a"
        },
        "date": 1606364091702,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 23.7,
            "unit": "ns/op",
            "extra": "52997710 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 829,
            "unit": "ns/op",
            "extra": "1436694 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 5423,
            "unit": "ns/op",
            "extra": "219007 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 3213,
            "unit": "ns/op",
            "extra": "337766 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 12145,
            "unit": "ns/op",
            "extra": "103702 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 8726,
            "unit": "ns/op",
            "extra": "119076 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8628,
            "unit": "ns/op",
            "extra": "122499 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 12755,
            "unit": "ns/op",
            "extra": "87938 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 8793,
            "unit": "ns/op",
            "extra": "141729 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 9376,
            "unit": "ns/op",
            "extra": "126196 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6594,
            "unit": "ns/op",
            "extra": "181110 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 22,
            "unit": "ns/op",
            "extra": "52180275 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 803,
            "unit": "ns/op",
            "extra": "1356346 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 5521,
            "unit": "ns/op",
            "extra": "226129 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 3212,
            "unit": "ns/op",
            "extra": "387344 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 12299,
            "unit": "ns/op",
            "extra": "102586 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 8788,
            "unit": "ns/op",
            "extra": "144045 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8603,
            "unit": "ns/op",
            "extra": "142371 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 12656,
            "unit": "ns/op",
            "extra": "90754 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 9043,
            "unit": "ns/op",
            "extra": "136629 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 9325,
            "unit": "ns/op",
            "extra": "128096 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 6599,
            "unit": "ns/op",
            "extra": "181618 times"
          }
        ]
      },
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
          "id": "28d6c7e8deab4d61c11d9691568fe69de1e19bea",
          "message": "chore(release): 1.0.0",
          "timestamp": "2020-11-26T04:31:56Z",
          "tree_id": "87e5aebb7d0c8cd954a2c930b1167ac1178681cb",
          "url": "https://github.com/jimeh/undent/commit/28d6c7e8deab4d61c11d9691568fe69de1e19bea"
        },
        "date": 1606365199790,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 20.7,
            "unit": "ns/op",
            "extra": "58049722 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 736,
            "unit": "ns/op",
            "extra": "1591202 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 4734,
            "unit": "ns/op",
            "extra": "278613 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 2774,
            "unit": "ns/op",
            "extra": "417421 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 10936,
            "unit": "ns/op",
            "extra": "117288 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 7551,
            "unit": "ns/op",
            "extra": "163764 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 7839,
            "unit": "ns/op",
            "extra": "160695 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 11797,
            "unit": "ns/op",
            "extra": "108907 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 7615,
            "unit": "ns/op",
            "extra": "156967 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 7828,
            "unit": "ns/op",
            "extra": "157654 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 5507,
            "unit": "ns/op",
            "extra": "219584 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 17.7,
            "unit": "ns/op",
            "extra": "65268918 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 663,
            "unit": "ns/op",
            "extra": "1739820 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 4749,
            "unit": "ns/op",
            "extra": "259990 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 2762,
            "unit": "ns/op",
            "extra": "433444 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 10195,
            "unit": "ns/op",
            "extra": "120030 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 7321,
            "unit": "ns/op",
            "extra": "176485 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 7668,
            "unit": "ns/op",
            "extra": "154486 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 11371,
            "unit": "ns/op",
            "extra": "105601 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8091,
            "unit": "ns/op",
            "extra": "146640 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 8151,
            "unit": "ns/op",
            "extra": "137414 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 5927,
            "unit": "ns/op",
            "extra": "214809 times"
          }
        ]
      },
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
          "id": "30dba699516312c618260820a530de3010f6b496",
          "message": "docs(readme): add Benchmarks section, update Go Reference link",
          "timestamp": "2020-11-26T12:32:58Z",
          "tree_id": "8f0c9e93e71f7fb54a208284d4ed81bed4fbbec3",
          "url": "https://github.com/jimeh/undent/commit/30dba699516312c618260820a530de3010f6b496"
        },
        "date": 1606394064042,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 21.7,
            "unit": "ns/op",
            "extra": "47996979 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 768,
            "unit": "ns/op",
            "extra": "1524324 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 5055,
            "unit": "ns/op",
            "extra": "230023 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 3037,
            "unit": "ns/op",
            "extra": "420430 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 11490,
            "unit": "ns/op",
            "extra": "101982 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 7968,
            "unit": "ns/op",
            "extra": "148880 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8489,
            "unit": "ns/op",
            "extra": "151522 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 11778,
            "unit": "ns/op",
            "extra": "99343 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 8449,
            "unit": "ns/op",
            "extra": "134156 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 8767,
            "unit": "ns/op",
            "extra": "136150 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6216,
            "unit": "ns/op",
            "extra": "203775 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 21.1,
            "unit": "ns/op",
            "extra": "55788116 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 743,
            "unit": "ns/op",
            "extra": "1549167 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 5139,
            "unit": "ns/op",
            "extra": "221722 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 3005,
            "unit": "ns/op",
            "extra": "409856 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 11855,
            "unit": "ns/op",
            "extra": "106443 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 8490,
            "unit": "ns/op",
            "extra": "146564 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8210,
            "unit": "ns/op",
            "extra": "138861 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 11868,
            "unit": "ns/op",
            "extra": "99577 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8524,
            "unit": "ns/op",
            "extra": "134637 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 8753,
            "unit": "ns/op",
            "extra": "143037 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 6215,
            "unit": "ns/op",
            "extra": "199380 times"
          }
        ]
      },
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
          "id": "24e64f6c392df5b463d27a1f917e80cec77d5fc2",
          "message": "docs(readme): fix readme description to match godoc description",
          "timestamp": "2020-11-26T12:42:41Z",
          "tree_id": "5d4a2b2a675338e46355aa601bb011b8398cbcba",
          "url": "https://github.com/jimeh/undent/commit/24e64f6c392df5b463d27a1f917e80cec77d5fc2"
        },
        "date": 1606394659647,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 24,
            "unit": "ns/op",
            "extra": "47116692 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 804,
            "unit": "ns/op",
            "extra": "1447393 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 5339,
            "unit": "ns/op",
            "extra": "234223 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 3234,
            "unit": "ns/op",
            "extra": "356186 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 11640,
            "unit": "ns/op",
            "extra": "100738 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 7964,
            "unit": "ns/op",
            "extra": "151142 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8302,
            "unit": "ns/op",
            "extra": "146415 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 11703,
            "unit": "ns/op",
            "extra": "105994 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 8417,
            "unit": "ns/op",
            "extra": "141337 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 9013,
            "unit": "ns/op",
            "extra": "123956 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6064,
            "unit": "ns/op",
            "extra": "193590 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 21.7,
            "unit": "ns/op",
            "extra": "55964701 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 780,
            "unit": "ns/op",
            "extra": "1538371 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 5392,
            "unit": "ns/op",
            "extra": "228728 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 3047,
            "unit": "ns/op",
            "extra": "391995 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 11783,
            "unit": "ns/op",
            "extra": "88065 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 8296,
            "unit": "ns/op",
            "extra": "143689 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8525,
            "unit": "ns/op",
            "extra": "141883 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 11973,
            "unit": "ns/op",
            "extra": "98079 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8647,
            "unit": "ns/op",
            "extra": "138540 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 9124,
            "unit": "ns/op",
            "extra": "134347 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 6423,
            "unit": "ns/op",
            "extra": "200659 times"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc372da881593b8d0022af61b9e5df3d0fae0ca1",
          "message": "Merge pull request #3 from jimeh/remove-leading-line-break-on-undented-values\n\nfix(whitespace): remove leading line-break from input",
          "timestamp": "2020-12-07T10:46:31Z",
          "tree_id": "8b8df0a05a6b308f71ca38052df66c60801cbf32",
          "url": "https://github.com/jimeh/undent/commit/cc372da881593b8d0022af61b9e5df3d0fae0ca1"
        },
        "date": 1607338058422,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 24.2,
            "unit": "ns/op",
            "extra": "52563888 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 827,
            "unit": "ns/op",
            "extra": "1418517 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 5692,
            "unit": "ns/op",
            "extra": "221683 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 3152,
            "unit": "ns/op",
            "extra": "390319 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 12478,
            "unit": "ns/op",
            "extra": "99933 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 12731,
            "unit": "ns/op",
            "extra": "93147 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 8798,
            "unit": "ns/op",
            "extra": "138013 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 9514,
            "unit": "ns/op",
            "extra": "131019 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8661,
            "unit": "ns/op",
            "extra": "129746 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 13291,
            "unit": "ns/op",
            "extra": "91206 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 9229,
            "unit": "ns/op",
            "extra": "126303 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 10012,
            "unit": "ns/op",
            "extra": "109483 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6502,
            "unit": "ns/op",
            "extra": "170544 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 23.6,
            "unit": "ns/op",
            "extra": "51495760 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 839,
            "unit": "ns/op",
            "extra": "1443525 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 5735,
            "unit": "ns/op",
            "extra": "235575 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 3191,
            "unit": "ns/op",
            "extra": "405847 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 12843,
            "unit": "ns/op",
            "extra": "92944 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 12952,
            "unit": "ns/op",
            "extra": "94962 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 8473,
            "unit": "ns/op",
            "extra": "137326 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 9346,
            "unit": "ns/op",
            "extra": "140916 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8621,
            "unit": "ns/op",
            "extra": "143965 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 12472,
            "unit": "ns/op",
            "extra": "94111 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8893,
            "unit": "ns/op",
            "extra": "144510 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 9477,
            "unit": "ns/op",
            "extra": "126600 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 6201,
            "unit": "ns/op",
            "extra": "172933 times"
          }
        ]
      },
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
          "id": "d79e413e8e850311b314af5895e9a0e30330edd9",
          "message": "chore(release): 1.0.1",
          "timestamp": "2020-12-07T10:48:40Z",
          "tree_id": "8814f191f27b6fa41c8c764c1db1ef5b4d69d0a1",
          "url": "https://github.com/jimeh/undent/commit/d79e413e8e850311b314af5895e9a0e30330edd9"
        },
        "date": 1607338205387,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 24.1,
            "unit": "ns/op",
            "extra": "49101105 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 809,
            "unit": "ns/op",
            "extra": "1488776 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 5307,
            "unit": "ns/op",
            "extra": "237110 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 3127,
            "unit": "ns/op",
            "extra": "400209 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 11757,
            "unit": "ns/op",
            "extra": "101338 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 12086,
            "unit": "ns/op",
            "extra": "101486 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 8279,
            "unit": "ns/op",
            "extra": "141848 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8444,
            "unit": "ns/op",
            "extra": "134828 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8404,
            "unit": "ns/op",
            "extra": "145153 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 11970,
            "unit": "ns/op",
            "extra": "101787 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 8669,
            "unit": "ns/op",
            "extra": "146359 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 8845,
            "unit": "ns/op",
            "extra": "132127 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6086,
            "unit": "ns/op",
            "extra": "196512 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 22.3,
            "unit": "ns/op",
            "extra": "53519550 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 769,
            "unit": "ns/op",
            "extra": "1548238 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 5370,
            "unit": "ns/op",
            "extra": "233052 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 2959,
            "unit": "ns/op",
            "extra": "419191 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 12111,
            "unit": "ns/op",
            "extra": "105697 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 11716,
            "unit": "ns/op",
            "extra": "103083 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 8074,
            "unit": "ns/op",
            "extra": "127765 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8588,
            "unit": "ns/op",
            "extra": "144450 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8354,
            "unit": "ns/op",
            "extra": "151011 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 11947,
            "unit": "ns/op",
            "extra": "95739 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8446,
            "unit": "ns/op",
            "extra": "126568 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 8974,
            "unit": "ns/op",
            "extra": "130006 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 6165,
            "unit": "ns/op",
            "extra": "197230 times"
          }
        ]
      },
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
          "id": "ce14abd405cbfd1fa374272de1b5227f01c3b7d0",
          "message": "chore(release): 2.0.0",
          "timestamp": "2020-12-14T14:33:35Z",
          "tree_id": "674bd72b2f5495418aa31d9b177af5a871c4ad74",
          "url": "https://github.com/jimeh/undent/commit/ce14abd405cbfd1fa374272de1b5227f01c3b7d0"
        },
        "date": 1607956499057,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 29.5,
            "unit": "ns/op",
            "extra": "40302934 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 831,
            "unit": "ns/op",
            "extra": "1445715 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 5826,
            "unit": "ns/op",
            "extra": "212235 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 3076,
            "unit": "ns/op",
            "extra": "410421 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 12518,
            "unit": "ns/op",
            "extra": "99068 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 12645,
            "unit": "ns/op",
            "extra": "99741 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 8710,
            "unit": "ns/op",
            "extra": "136531 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 9007,
            "unit": "ns/op",
            "extra": "122779 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8799,
            "unit": "ns/op",
            "extra": "126748 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 12995,
            "unit": "ns/op",
            "extra": "95871 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 8960,
            "unit": "ns/op",
            "extra": "139060 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 9566,
            "unit": "ns/op",
            "extra": "126868 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6623,
            "unit": "ns/op",
            "extra": "174798 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 23.5,
            "unit": "ns/op",
            "extra": "52048722 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 827,
            "unit": "ns/op",
            "extra": "1455385 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 6039,
            "unit": "ns/op",
            "extra": "220981 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 3015,
            "unit": "ns/op",
            "extra": "413352 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 12176,
            "unit": "ns/op",
            "extra": "95286 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 13085,
            "unit": "ns/op",
            "extra": "97170 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 8751,
            "unit": "ns/op",
            "extra": "147678 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8914,
            "unit": "ns/op",
            "extra": "130951 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8710,
            "unit": "ns/op",
            "extra": "134439 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 12268,
            "unit": "ns/op",
            "extra": "92160 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8744,
            "unit": "ns/op",
            "extra": "132495 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 9518,
            "unit": "ns/op",
            "extra": "132589 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 6633,
            "unit": "ns/op",
            "extra": "169468 times"
          }
        ]
      },
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
          "id": "d79e413e8e850311b314af5895e9a0e30330edd9",
          "message": "chore(release): 1.0.1",
          "timestamp": "2020-12-07T10:48:40Z",
          "tree_id": "8814f191f27b6fa41c8c764c1db1ef5b4d69d0a1",
          "url": "https://github.com/jimeh/undent/commit/d79e413e8e850311b314af5895e9a0e30330edd9"
        },
        "date": 1607957472175,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 22.8,
            "unit": "ns/op",
            "extra": "55615014 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 749,
            "unit": "ns/op",
            "extra": "1527490 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 4921,
            "unit": "ns/op",
            "extra": "260138 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 2903,
            "unit": "ns/op",
            "extra": "410658 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 11115,
            "unit": "ns/op",
            "extra": "103917 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 11289,
            "unit": "ns/op",
            "extra": "107178 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 7892,
            "unit": "ns/op",
            "extra": "147502 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8048,
            "unit": "ns/op",
            "extra": "149490 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 7821,
            "unit": "ns/op",
            "extra": "158200 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 11290,
            "unit": "ns/op",
            "extra": "100768 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 8232,
            "unit": "ns/op",
            "extra": "136588 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 8474,
            "unit": "ns/op",
            "extra": "139500 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6009,
            "unit": "ns/op",
            "extra": "201492 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 21.6,
            "unit": "ns/op",
            "extra": "56643848 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 743,
            "unit": "ns/op",
            "extra": "1537620 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 5191,
            "unit": "ns/op",
            "extra": "231368 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 2878,
            "unit": "ns/op",
            "extra": "402592 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 11116,
            "unit": "ns/op",
            "extra": "96424 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 11342,
            "unit": "ns/op",
            "extra": "107301 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 7528,
            "unit": "ns/op",
            "extra": "157417 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8530,
            "unit": "ns/op",
            "extra": "151578 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 7968,
            "unit": "ns/op",
            "extra": "154232 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 11105,
            "unit": "ns/op",
            "extra": "105189 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 7723,
            "unit": "ns/op",
            "extra": "143833 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 7904,
            "unit": "ns/op",
            "extra": "152386 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 5667,
            "unit": "ns/op",
            "extra": "189460 times"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68a97519d51546a5e3a1e1a0a82411693a24bb4f",
          "message": "Merge pull request #4 from jimeh/fix-bytes-method\n\nfix(bytes): change Bytes function to accept string input but return a byte slice",
          "timestamp": "2020-12-14T14:55:04Z",
          "tree_id": "c7ec4bfe68bced7b89b6233de0ee98bab33f7ee2",
          "url": "https://github.com/jimeh/undent/commit/68a97519d51546a5e3a1e1a0a82411693a24bb4f"
        },
        "date": 1607957792395,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 29.4,
            "unit": "ns/op",
            "extra": "40335099 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 814,
            "unit": "ns/op",
            "extra": "1459738 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 5812,
            "unit": "ns/op",
            "extra": "219811 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 3031,
            "unit": "ns/op",
            "extra": "406080 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 12212,
            "unit": "ns/op",
            "extra": "97826 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 12728,
            "unit": "ns/op",
            "extra": "94416 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 8778,
            "unit": "ns/op",
            "extra": "128239 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8821,
            "unit": "ns/op",
            "extra": "140367 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8876,
            "unit": "ns/op",
            "extra": "145209 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 12087,
            "unit": "ns/op",
            "extra": "97450 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 8787,
            "unit": "ns/op",
            "extra": "142975 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 9214,
            "unit": "ns/op",
            "extra": "124872 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6435,
            "unit": "ns/op",
            "extra": "193056 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 22.9,
            "unit": "ns/op",
            "extra": "53393767 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 786,
            "unit": "ns/op",
            "extra": "1507812 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 5559,
            "unit": "ns/op",
            "extra": "216819 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 2968,
            "unit": "ns/op",
            "extra": "419611 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 12162,
            "unit": "ns/op",
            "extra": "104604 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 11951,
            "unit": "ns/op",
            "extra": "101146 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 8425,
            "unit": "ns/op",
            "extra": "134959 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 9128,
            "unit": "ns/op",
            "extra": "139125 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8556,
            "unit": "ns/op",
            "extra": "142621 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 12296,
            "unit": "ns/op",
            "extra": "98108 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8513,
            "unit": "ns/op",
            "extra": "140769 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 8898,
            "unit": "ns/op",
            "extra": "137068 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 6432,
            "unit": "ns/op",
            "extra": "192337 times"
          }
        ]
      },
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
          "id": "4ded03bd725a761d94289ec761f60e4189308a28",
          "message": "chore(release): 1.0.2",
          "timestamp": "2020-12-14T14:55:43Z",
          "tree_id": "04d47a5c43d892e791c0317ac201d83fa07857a8",
          "url": "https://github.com/jimeh/undent/commit/4ded03bd725a761d94289ec761f60e4189308a28"
        },
        "date": 1607957830537,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 24.5,
            "unit": "ns/op",
            "extra": "48784120 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 656,
            "unit": "ns/op",
            "extra": "1841052 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 4464,
            "unit": "ns/op",
            "extra": "267642 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 2487,
            "unit": "ns/op",
            "extra": "486991 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 9675,
            "unit": "ns/op",
            "extra": "124574 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 9919,
            "unit": "ns/op",
            "extra": "118741 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 6881,
            "unit": "ns/op",
            "extra": "171734 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 7214,
            "unit": "ns/op",
            "extra": "168086 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 7125,
            "unit": "ns/op",
            "extra": "172548 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 10038,
            "unit": "ns/op",
            "extra": "116754 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 7188,
            "unit": "ns/op",
            "extra": "159961 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 7454,
            "unit": "ns/op",
            "extra": "164959 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 5373,
            "unit": "ns/op",
            "extra": "224455 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 18.8,
            "unit": "ns/op",
            "extra": "63953294 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 637,
            "unit": "ns/op",
            "extra": "1846982 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 4592,
            "unit": "ns/op",
            "extra": "271050 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 2428,
            "unit": "ns/op",
            "extra": "505633 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 9615,
            "unit": "ns/op",
            "extra": "121070 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 9888,
            "unit": "ns/op",
            "extra": "121832 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 6851,
            "unit": "ns/op",
            "extra": "176575 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 7099,
            "unit": "ns/op",
            "extra": "164346 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 6996,
            "unit": "ns/op",
            "extra": "172620 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 10102,
            "unit": "ns/op",
            "extra": "118636 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 7079,
            "unit": "ns/op",
            "extra": "173204 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 7333,
            "unit": "ns/op",
            "extra": "161696 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 5108,
            "unit": "ns/op",
            "extra": "236418 times"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c3e2bd98b0affa3a0c9b628ac5515bd300f5a505",
          "message": "Merge pull request #5 from jimeh/add-print-funcs\n\nfeat(print) add Print, Printf, Fprint, and Fprintf functions",
          "timestamp": "2021-02-21T00:10:54Z",
          "tree_id": "66b48a2a2f8e572bd6cba1f0606cd872dbdeda74",
          "url": "https://github.com/jimeh/undent/commit/c3e2bd98b0affa3a0c9b628ac5515bd300f5a505"
        },
        "date": 1613866320701,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 29.8,
            "unit": "ns/op",
            "extra": "40923033 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 824,
            "unit": "ns/op",
            "extra": "1445350 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 5418,
            "unit": "ns/op",
            "extra": "203694 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 3097,
            "unit": "ns/op",
            "extra": "390739 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 11969,
            "unit": "ns/op",
            "extra": "91128 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 12222,
            "unit": "ns/op",
            "extra": "98329 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 8405,
            "unit": "ns/op",
            "extra": "142440 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8737,
            "unit": "ns/op",
            "extra": "137066 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8523,
            "unit": "ns/op",
            "extra": "139654 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 12170,
            "unit": "ns/op",
            "extra": "98876 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 8889,
            "unit": "ns/op",
            "extra": "131976 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 9016,
            "unit": "ns/op",
            "extra": "134689 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6390,
            "unit": "ns/op",
            "extra": "171356 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 23,
            "unit": "ns/op",
            "extra": "53577548 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 830,
            "unit": "ns/op",
            "extra": "1434673 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 5482,
            "unit": "ns/op",
            "extra": "222997 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 3055,
            "unit": "ns/op",
            "extra": "406969 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 12090,
            "unit": "ns/op",
            "extra": "93958 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 12118,
            "unit": "ns/op",
            "extra": "96960 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 8441,
            "unit": "ns/op",
            "extra": "137487 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8875,
            "unit": "ns/op",
            "extra": "137877 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8591,
            "unit": "ns/op",
            "extra": "139005 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 12198,
            "unit": "ns/op",
            "extra": "97150 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8747,
            "unit": "ns/op",
            "extra": "132692 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 9216,
            "unit": "ns/op",
            "extra": "134044 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 6504,
            "unit": "ns/op",
            "extra": "193850 times"
          }
        ]
      },
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
          "id": "f0855f3a835618e5ee23ff20614e0a4010675977",
          "message": "chore(git): update \"master\" branch references to \"main\"",
          "timestamp": "2021-02-21T03:45:19Z",
          "tree_id": "e376f5c2db978c39b6025350bfef2b880290e3e4",
          "url": "https://github.com/jimeh/undent/commit/f0855f3a835618e5ee23ff20614e0a4010675977"
        },
        "date": 1613879242163,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 30.5,
            "unit": "ns/op",
            "extra": "39153974 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 820,
            "unit": "ns/op",
            "extra": "1448900 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 5380,
            "unit": "ns/op",
            "extra": "223918 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 3119,
            "unit": "ns/op",
            "extra": "392096 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 11934,
            "unit": "ns/op",
            "extra": "92980 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 12037,
            "unit": "ns/op",
            "extra": "98084 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 8403,
            "unit": "ns/op",
            "extra": "144128 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8603,
            "unit": "ns/op",
            "extra": "141571 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8471,
            "unit": "ns/op",
            "extra": "145340 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 12431,
            "unit": "ns/op",
            "extra": "100932 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 8823,
            "unit": "ns/op",
            "extra": "120620 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 8935,
            "unit": "ns/op",
            "extra": "137197 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6239,
            "unit": "ns/op",
            "extra": "194119 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 23.3,
            "unit": "ns/op",
            "extra": "49822848 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 816,
            "unit": "ns/op",
            "extra": "1469389 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 5269,
            "unit": "ns/op",
            "extra": "233065 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 3035,
            "unit": "ns/op",
            "extra": "396009 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 11926,
            "unit": "ns/op",
            "extra": "103881 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 12125,
            "unit": "ns/op",
            "extra": "101802 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 8189,
            "unit": "ns/op",
            "extra": "145843 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8570,
            "unit": "ns/op",
            "extra": "137158 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8343,
            "unit": "ns/op",
            "extra": "142023 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 12224,
            "unit": "ns/op",
            "extra": "96583 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8811,
            "unit": "ns/op",
            "extra": "136650 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 8831,
            "unit": "ns/op",
            "extra": "134703 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 6253,
            "unit": "ns/op",
            "extra": "198012 times"
          }
        ]
      },
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
          "id": "98946bf286d1f3ee09b06108591f50566617d2fd",
          "message": "docs(readme): fix main description",
          "timestamp": "2021-02-21T04:03:48Z",
          "tree_id": "67ef215add4647b432512417826226bb0b592cd4",
          "url": "https://github.com/jimeh/undent/commit/98946bf286d1f3ee09b06108591f50566617d2fd"
        },
        "date": 1613880312168,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 31.5,
            "unit": "ns/op",
            "extra": "38213323 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 813,
            "unit": "ns/op",
            "extra": "1455752 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 5380,
            "unit": "ns/op",
            "extra": "190162 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 3123,
            "unit": "ns/op",
            "extra": "404511 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 12547,
            "unit": "ns/op",
            "extra": "95335 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 12879,
            "unit": "ns/op",
            "extra": "94958 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 8937,
            "unit": "ns/op",
            "extra": "132457 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8893,
            "unit": "ns/op",
            "extra": "138754 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8752,
            "unit": "ns/op",
            "extra": "133063 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 12619,
            "unit": "ns/op",
            "extra": "92732 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 9160,
            "unit": "ns/op",
            "extra": "131676 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 9218,
            "unit": "ns/op",
            "extra": "127497 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 6614,
            "unit": "ns/op",
            "extra": "185167 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 23.9,
            "unit": "ns/op",
            "extra": "52638196 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 780,
            "unit": "ns/op",
            "extra": "1499378 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 5587,
            "unit": "ns/op",
            "extra": "226996 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 3156,
            "unit": "ns/op",
            "extra": "412546 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 11847,
            "unit": "ns/op",
            "extra": "93483 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 12467,
            "unit": "ns/op",
            "extra": "93001 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 8818,
            "unit": "ns/op",
            "extra": "128054 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 8798,
            "unit": "ns/op",
            "extra": "133249 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 8733,
            "unit": "ns/op",
            "extra": "140170 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 12184,
            "unit": "ns/op",
            "extra": "95964 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 8918,
            "unit": "ns/op",
            "extra": "141051 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 9194,
            "unit": "ns/op",
            "extra": "137670 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 6450,
            "unit": "ns/op",
            "extra": "177422 times"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "86be1bf614c453c4bce1cc4ccc679e3b2552c7ca",
          "message": "Merge pull request #6 from jimeh/performance-improvements\n\nfeat(performance): improve core undenting performance by 20-30x",
          "timestamp": "2021-02-22T22:47:02Z",
          "tree_id": "a1abd1abe7f05564caec75f8fd297cf8ae77599c",
          "url": "https://github.com/jimeh/undent/commit/86be1bf614c453c4bce1cc4ccc679e3b2552c7ca"
        },
        "date": 1614034094103,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 3.18,
            "unit": "ns/op",
            "extra": "368082030 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 82.3,
            "unit": "ns/op",
            "extra": "14693774 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 106,
            "unit": "ns/op",
            "extra": "12200888 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 305,
            "unit": "ns/op",
            "extra": "3557227 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 436,
            "unit": "ns/op",
            "extra": "2710044 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 465,
            "unit": "ns/op",
            "extra": "2623471 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 470,
            "unit": "ns/op",
            "extra": "2552070 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 333,
            "unit": "ns/op",
            "extra": "3522346 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 332,
            "unit": "ns/op",
            "extra": "3517050 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 353,
            "unit": "ns/op",
            "extra": "3299762 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 333,
            "unit": "ns/op",
            "extra": "3378147 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 474,
            "unit": "ns/op",
            "extra": "2600763 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 351,
            "unit": "ns/op",
            "extra": "3390705 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 315,
            "unit": "ns/op",
            "extra": "3854610 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 233,
            "unit": "ns/op",
            "extra": "5185474 times"
          },
          {
            "name": "BenchmarkBytes__long_block_of_text",
            "value": 4770,
            "unit": "ns/op",
            "extra": "261072 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 6.07,
            "unit": "ns/op",
            "extra": "192350522 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 84,
            "unit": "ns/op",
            "extra": "14179921 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 109,
            "unit": "ns/op",
            "extra": "10827930 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 333,
            "unit": "ns/op",
            "extra": "3598873 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 483,
            "unit": "ns/op",
            "extra": "2484819 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 489,
            "unit": "ns/op",
            "extra": "2331409 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 507,
            "unit": "ns/op",
            "extra": "2329806 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 356,
            "unit": "ns/op",
            "extra": "2994057 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 372,
            "unit": "ns/op",
            "extra": "3323822 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 385,
            "unit": "ns/op",
            "extra": "3135927 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 371,
            "unit": "ns/op",
            "extra": "3237798 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 492,
            "unit": "ns/op",
            "extra": "2435053 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 381,
            "unit": "ns/op",
            "extra": "3260289 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 315,
            "unit": "ns/op",
            "extra": "3935944 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 232,
            "unit": "ns/op",
            "extra": "5024467 times"
          },
          {
            "name": "BenchmarkString__long_block_of_text",
            "value": 5170,
            "unit": "ns/op",
            "extra": "236572 times"
          }
        ]
      },
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
          "id": "369ec87dddfae22534693f8cf3be6cb85bc46f9d",
          "message": "chore(release): 1.1.0",
          "timestamp": "2021-02-22T22:56:08Z",
          "tree_id": "6976638e4d69cb52634d8061e69c9c4fe0cf8605",
          "url": "https://github.com/jimeh/undent/commit/369ec87dddfae22534693f8cf3be6cb85bc46f9d"
        },
        "date": 1614034711975,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 3.41,
            "unit": "ns/op",
            "extra": "353960242 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 84.9,
            "unit": "ns/op",
            "extra": "14052466 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 111,
            "unit": "ns/op",
            "extra": "10933618 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 315,
            "unit": "ns/op",
            "extra": "3782178 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 462,
            "unit": "ns/op",
            "extra": "2482609 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 471,
            "unit": "ns/op",
            "extra": "2551149 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 486,
            "unit": "ns/op",
            "extra": "2431174 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 343,
            "unit": "ns/op",
            "extra": "3505428 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 361,
            "unit": "ns/op",
            "extra": "3230112 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 353,
            "unit": "ns/op",
            "extra": "3342363 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 348,
            "unit": "ns/op",
            "extra": "3600672 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 478,
            "unit": "ns/op",
            "extra": "2462922 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 363,
            "unit": "ns/op",
            "extra": "3298686 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 327,
            "unit": "ns/op",
            "extra": "3774304 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 245,
            "unit": "ns/op",
            "extra": "5001487 times"
          },
          {
            "name": "BenchmarkBytes__long_block_of_text",
            "value": 4865,
            "unit": "ns/op",
            "extra": "227642 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 6.01,
            "unit": "ns/op",
            "extra": "191616340 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 87.9,
            "unit": "ns/op",
            "extra": "12688129 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 114,
            "unit": "ns/op",
            "extra": "10995603 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 358,
            "unit": "ns/op",
            "extra": "3456680 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 523,
            "unit": "ns/op",
            "extra": "2415663 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 515,
            "unit": "ns/op",
            "extra": "2356629 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 526,
            "unit": "ns/op",
            "extra": "2300325 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 389,
            "unit": "ns/op",
            "extra": "3146538 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 390,
            "unit": "ns/op",
            "extra": "2713346 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 394,
            "unit": "ns/op",
            "extra": "2965753 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 396,
            "unit": "ns/op",
            "extra": "2992845 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 522,
            "unit": "ns/op",
            "extra": "2343189 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 395,
            "unit": "ns/op",
            "extra": "2947498 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 332,
            "unit": "ns/op",
            "extra": "3618997 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 249,
            "unit": "ns/op",
            "extra": "4909492 times"
          },
          {
            "name": "BenchmarkString__long_block_of_text",
            "value": 5465,
            "unit": "ns/op",
            "extra": "224233 times"
          }
        ]
      },
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
          "id": "044587fb4cc4a70ab341a9fc7f3b8ebb03b64aa2",
          "message": "ci(benchmarks): fix store benchmark job",
          "timestamp": "2022-12-04T23:32:55Z",
          "tree_id": "66569c9bbb463e3ce50b2c5156604c9c5452940a",
          "url": "https://github.com/jimeh/undent/commit/044587fb4cc4a70ab341a9fc7f3b8ebb03b64aa2"
        },
        "date": 1670196876316,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 2.92,
            "unit": "ns/op",
            "extra": "416006446 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 71.1,
            "unit": "ns/op",
            "extra": "16624962 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 103,
            "unit": "ns/op",
            "extra": "11686840 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 282,
            "unit": "ns/op",
            "extra": "4270324 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 468,
            "unit": "ns/op",
            "extra": "2544583 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 466,
            "unit": "ns/op",
            "extra": "2573949 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 491,
            "unit": "ns/op",
            "extra": "2338514 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 320,
            "unit": "ns/op",
            "extra": "3683586 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 313,
            "unit": "ns/op",
            "extra": "3706478 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 336,
            "unit": "ns/op",
            "extra": "3608581 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 318,
            "unit": "ns/op",
            "extra": "3754664 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 487,
            "unit": "ns/op",
            "extra": "2468317 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 331,
            "unit": "ns/op",
            "extra": "3628188 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 326,
            "unit": "ns/op",
            "extra": "3676900 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 223,
            "unit": "ns/op",
            "extra": "5407312 times"
          },
          {
            "name": "BenchmarkBytes__long_block_of_text",
            "value": 5419,
            "unit": "ns/op",
            "extra": "213006 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 4.55,
            "unit": "ns/op",
            "extra": "260611564 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 76.3,
            "unit": "ns/op",
            "extra": "15488415 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 108,
            "unit": "ns/op",
            "extra": "11163526 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 312,
            "unit": "ns/op",
            "extra": "3801380 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 498,
            "unit": "ns/op",
            "extra": "2395387 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 497,
            "unit": "ns/op",
            "extra": "2411997 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 516,
            "unit": "ns/op",
            "extra": "2286315 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 345,
            "unit": "ns/op",
            "extra": "3431482 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 344,
            "unit": "ns/op",
            "extra": "3508851 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 364,
            "unit": "ns/op",
            "extra": "3303834 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 348,
            "unit": "ns/op",
            "extra": "3456643 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 519,
            "unit": "ns/op",
            "extra": "2314406 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 364,
            "unit": "ns/op",
            "extra": "3334750 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 330,
            "unit": "ns/op",
            "extra": "3646658 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 227,
            "unit": "ns/op",
            "extra": "5294586 times"
          },
          {
            "name": "BenchmarkString__long_block_of_text",
            "value": 5843,
            "unit": "ns/op",
            "extra": "207186 times"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20ac9c9824dda5dab56c3499f5cac7771378bca4",
          "message": "Merge pull request #9 from jimeh/release-please",
          "timestamp": "2022-12-04T23:46:44Z",
          "tree_id": "ff034a3dc1c357aed66128827ac9be5c5750f7a4",
          "url": "https://github.com/jimeh/undent/commit/20ac9c9824dda5dab56c3499f5cac7771378bca4"
        },
        "date": 1670197682846,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 2.81,
            "unit": "ns/op",
            "extra": "426550083 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 70.2,
            "unit": "ns/op",
            "extra": "16385689 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 94.8,
            "unit": "ns/op",
            "extra": "13982046 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 269,
            "unit": "ns/op",
            "extra": "4504261 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 433,
            "unit": "ns/op",
            "extra": "2833334 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 426,
            "unit": "ns/op",
            "extra": "2867090 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 455,
            "unit": "ns/op",
            "extra": "2633947 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 299,
            "unit": "ns/op",
            "extra": "3849690 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 448,
            "unit": "ns/op",
            "extra": "3939684 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 323,
            "unit": "ns/op",
            "extra": "3723568 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 304,
            "unit": "ns/op",
            "extra": "3932714 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 437,
            "unit": "ns/op",
            "extra": "2758224 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 321,
            "unit": "ns/op",
            "extra": "3722092 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 293,
            "unit": "ns/op",
            "extra": "4082940 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 212,
            "unit": "ns/op",
            "extra": "5647863 times"
          },
          {
            "name": "BenchmarkBytes__long_block_of_text",
            "value": 4961,
            "unit": "ns/op",
            "extra": "241596 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 5.49,
            "unit": "ns/op",
            "extra": "217934967 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 77.4,
            "unit": "ns/op",
            "extra": "15212606 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 100,
            "unit": "ns/op",
            "extra": "11603445 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 314,
            "unit": "ns/op",
            "extra": "3908970 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 460,
            "unit": "ns/op",
            "extra": "2574823 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 476,
            "unit": "ns/op",
            "extra": "2621420 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 505,
            "unit": "ns/op",
            "extra": "2365719 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 348,
            "unit": "ns/op",
            "extra": "3433806 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 348,
            "unit": "ns/op",
            "extra": "3474999 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 364,
            "unit": "ns/op",
            "extra": "3237288 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 354,
            "unit": "ns/op",
            "extra": "3366931 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 484,
            "unit": "ns/op",
            "extra": "2463055 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 363,
            "unit": "ns/op",
            "extra": "3287493 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 304,
            "unit": "ns/op",
            "extra": "4004119 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 216,
            "unit": "ns/op",
            "extra": "5497402 times"
          },
          {
            "name": "BenchmarkString__long_block_of_text",
            "value": 5463,
            "unit": "ns/op",
            "extra": "218888 times"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e31bd0485c8657d0f47902ff0754ff5d454da5b",
          "message": "Merge pull request #7 from jimeh/improve-performance",
          "timestamp": "2022-12-04T23:55:21Z",
          "tree_id": "5d2b914ce525ca8a00f6dd9d57ff6a13288ba15a",
          "url": "https://github.com/jimeh/undent/commit/5e31bd0485c8657d0f47902ff0754ff5d454da5b"
        },
        "date": 1670198200153,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 2.86,
            "unit": "ns/op",
            "extra": "371662176 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 83.5,
            "unit": "ns/op",
            "extra": "13945108 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 130,
            "unit": "ns/op",
            "extra": "9854720 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 192,
            "unit": "ns/op",
            "extra": "5760625 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 389,
            "unit": "ns/op",
            "extra": "3055688 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 425,
            "unit": "ns/op",
            "extra": "2818795 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 408,
            "unit": "ns/op",
            "extra": "2943662 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 224,
            "unit": "ns/op",
            "extra": "5266591 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 262,
            "unit": "ns/op",
            "extra": "4497195 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 241,
            "unit": "ns/op",
            "extra": "4963060 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 232,
            "unit": "ns/op",
            "extra": "5165936 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 410,
            "unit": "ns/op",
            "extra": "2954272 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 237,
            "unit": "ns/op",
            "extra": "5054940 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 267,
            "unit": "ns/op",
            "extra": "4608867 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 155,
            "unit": "ns/op",
            "extra": "7609166 times"
          },
          {
            "name": "BenchmarkBytes__long_block_of_text",
            "value": 7481,
            "unit": "ns/op",
            "extra": "156082 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 4.84,
            "unit": "ns/op",
            "extra": "246571318 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 90.7,
            "unit": "ns/op",
            "extra": "13201396 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 139,
            "unit": "ns/op",
            "extra": "9351565 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 249,
            "unit": "ns/op",
            "extra": "4949115 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 437,
            "unit": "ns/op",
            "extra": "2723242 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 484,
            "unit": "ns/op",
            "extra": "2520034 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 463,
            "unit": "ns/op",
            "extra": "2541591 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 263,
            "unit": "ns/op",
            "extra": "4350736 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 295,
            "unit": "ns/op",
            "extra": "4032598 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 275,
            "unit": "ns/op",
            "extra": "4248573 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 267,
            "unit": "ns/op",
            "extra": "4492683 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 443,
            "unit": "ns/op",
            "extra": "2709428 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 268,
            "unit": "ns/op",
            "extra": "4495231 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 272,
            "unit": "ns/op",
            "extra": "4417524 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 158,
            "unit": "ns/op",
            "extra": "7633672 times"
          },
          {
            "name": "BenchmarkString__long_block_of_text",
            "value": 8035,
            "unit": "ns/op",
            "extra": "152113 times"
          }
        ]
      },
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
          "id": "5890256a45e144a79d30f2bacd65cc0c7bca0590",
          "message": "ci(release): fix filename of release-please config",
          "timestamp": "2022-12-04T23:57:41Z",
          "tree_id": "a952ba5537f329896611319f7271dbe7dd5bae9d",
          "url": "https://github.com/jimeh/undent/commit/5890256a45e144a79d30f2bacd65cc0c7bca0590"
        },
        "date": 1670198358371,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 2.86,
            "unit": "ns/op",
            "extra": "422970721 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 83.7,
            "unit": "ns/op",
            "extra": "14228169 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 122,
            "unit": "ns/op",
            "extra": "9785277 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 195,
            "unit": "ns/op",
            "extra": "6243483 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 396,
            "unit": "ns/op",
            "extra": "2993107 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 426,
            "unit": "ns/op",
            "extra": "2786492 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 431,
            "unit": "ns/op",
            "extra": "2907328 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 226,
            "unit": "ns/op",
            "extra": "5178772 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 264,
            "unit": "ns/op",
            "extra": "4600141 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 243,
            "unit": "ns/op",
            "extra": "4950986 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 230,
            "unit": "ns/op",
            "extra": "5212296 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 409,
            "unit": "ns/op",
            "extra": "2931136 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 236,
            "unit": "ns/op",
            "extra": "5076194 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 269,
            "unit": "ns/op",
            "extra": "4621470 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 155,
            "unit": "ns/op",
            "extra": "7516315 times"
          },
          {
            "name": "BenchmarkBytes__long_block_of_text",
            "value": 7635,
            "unit": "ns/op",
            "extra": "160003 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 4.91,
            "unit": "ns/op",
            "extra": "245993482 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 90.2,
            "unit": "ns/op",
            "extra": "13212456 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 128,
            "unit": "ns/op",
            "extra": "9379420 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 222,
            "unit": "ns/op",
            "extra": "5240770 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 425,
            "unit": "ns/op",
            "extra": "2827549 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 464,
            "unit": "ns/op",
            "extra": "2613746 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 443,
            "unit": "ns/op",
            "extra": "2719647 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 255,
            "unit": "ns/op",
            "extra": "4692788 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 294,
            "unit": "ns/op",
            "extra": "4088832 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 272,
            "unit": "ns/op",
            "extra": "4416406 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 265,
            "unit": "ns/op",
            "extra": "4598664 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 437,
            "unit": "ns/op",
            "extra": "2686912 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 266,
            "unit": "ns/op",
            "extra": "4536201 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 268,
            "unit": "ns/op",
            "extra": "4482000 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 156,
            "unit": "ns/op",
            "extra": "7723158 times"
          },
          {
            "name": "BenchmarkString__long_block_of_text",
            "value": 7957,
            "unit": "ns/op",
            "extra": "148849 times"
          }
        ]
      },
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
          "id": "bf5d7b709ea147bb1aaa16a2160e4dd78f4018e9",
          "message": "ci: release depends on lint, tidy and test",
          "timestamp": "2022-12-05T00:00:58Z",
          "tree_id": "b8b920b796f0639159c2a7e9a581cf2a763e4670",
          "url": "https://github.com/jimeh/undent/commit/bf5d7b709ea147bb1aaa16a2160e4dd78f4018e9"
        },
        "date": 1670198550794,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 2.89,
            "unit": "ns/op",
            "extra": "410601008 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 83.1,
            "unit": "ns/op",
            "extra": "14285707 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 122,
            "unit": "ns/op",
            "extra": "9927387 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 193,
            "unit": "ns/op",
            "extra": "6195896 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 386,
            "unit": "ns/op",
            "extra": "3110025 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 433,
            "unit": "ns/op",
            "extra": "2846559 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 411,
            "unit": "ns/op",
            "extra": "2650213 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 224,
            "unit": "ns/op",
            "extra": "5358351 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 260,
            "unit": "ns/op",
            "extra": "4580655 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 240,
            "unit": "ns/op",
            "extra": "5020110 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 229,
            "unit": "ns/op",
            "extra": "5258755 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 404,
            "unit": "ns/op",
            "extra": "2977603 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 235,
            "unit": "ns/op",
            "extra": "5116930 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 259,
            "unit": "ns/op",
            "extra": "4632834 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 147,
            "unit": "ns/op",
            "extra": "8220602 times"
          },
          {
            "name": "BenchmarkBytes__long_block_of_text",
            "value": 7798,
            "unit": "ns/op",
            "extra": "160207 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 4.92,
            "unit": "ns/op",
            "extra": "245213407 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 97.2,
            "unit": "ns/op",
            "extra": "13214689 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 138,
            "unit": "ns/op",
            "extra": "9143163 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 244,
            "unit": "ns/op",
            "extra": "4823401 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 424,
            "unit": "ns/op",
            "extra": "2731316 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 463,
            "unit": "ns/op",
            "extra": "2606940 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 440,
            "unit": "ns/op",
            "extra": "2707549 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 254,
            "unit": "ns/op",
            "extra": "4701918 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 294,
            "unit": "ns/op",
            "extra": "4089942 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 271,
            "unit": "ns/op",
            "extra": "4422597 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 261,
            "unit": "ns/op",
            "extra": "4590451 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 440,
            "unit": "ns/op",
            "extra": "2752788 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 268,
            "unit": "ns/op",
            "extra": "4440033 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 270,
            "unit": "ns/op",
            "extra": "4493016 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 154,
            "unit": "ns/op",
            "extra": "7768174 times"
          },
          {
            "name": "BenchmarkString__long_block_of_text",
            "value": 8034,
            "unit": "ns/op",
            "extra": "151958 times"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23c6c4cd7d2c055e9bdf064ef0a9338e07e713fe",
          "message": "Merge pull request #10 from jimeh/release-please--branches--main",
          "timestamp": "2022-12-05T00:02:42Z",
          "tree_id": "d572ad54135b460d5d6e191e00865d6d8c7c6ce0",
          "url": "https://github.com/jimeh/undent/commit/23c6c4cd7d2c055e9bdf064ef0a9338e07e713fe"
        },
        "date": 1670198657622,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 2.83,
            "unit": "ns/op",
            "extra": "409090435 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 83.7,
            "unit": "ns/op",
            "extra": "13799109 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 122,
            "unit": "ns/op",
            "extra": "9866262 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 193,
            "unit": "ns/op",
            "extra": "6192406 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 387,
            "unit": "ns/op",
            "extra": "3094994 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 425,
            "unit": "ns/op",
            "extra": "2802915 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 421,
            "unit": "ns/op",
            "extra": "2937236 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 224,
            "unit": "ns/op",
            "extra": "5375544 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 261,
            "unit": "ns/op",
            "extra": "4598476 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 241,
            "unit": "ns/op",
            "extra": "4999242 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 231,
            "unit": "ns/op",
            "extra": "5223535 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 405,
            "unit": "ns/op",
            "extra": "2958747 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 236,
            "unit": "ns/op",
            "extra": "5092696 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 262,
            "unit": "ns/op",
            "extra": "4592211 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 148,
            "unit": "ns/op",
            "extra": "8151284 times"
          },
          {
            "name": "BenchmarkBytes__long_block_of_text",
            "value": 7475,
            "unit": "ns/op",
            "extra": "160686 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 4.89,
            "unit": "ns/op",
            "extra": "247520314 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 91.7,
            "unit": "ns/op",
            "extra": "12938956 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 131,
            "unit": "ns/op",
            "extra": "8671828 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 223,
            "unit": "ns/op",
            "extra": "5369184 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 424,
            "unit": "ns/op",
            "extra": "2826248 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 461,
            "unit": "ns/op",
            "extra": "2585608 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 447,
            "unit": "ns/op",
            "extra": "2719972 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 256,
            "unit": "ns/op",
            "extra": "4692817 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 296,
            "unit": "ns/op",
            "extra": "4057537 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 272,
            "unit": "ns/op",
            "extra": "4384206 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 261,
            "unit": "ns/op",
            "extra": "4597719 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 437,
            "unit": "ns/op",
            "extra": "2744638 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 267,
            "unit": "ns/op",
            "extra": "4502616 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 270,
            "unit": "ns/op",
            "extra": "4489611 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 155,
            "unit": "ns/op",
            "extra": "7761204 times"
          },
          {
            "name": "BenchmarkString__long_block_of_text",
            "value": 7934,
            "unit": "ns/op",
            "extra": "151270 times"
          }
        ]
      },
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
          "id": "3878874bbeb53c54d86b3eab454fdc69956f7464",
          "message": "chore: remove bootstrap values in release-please config",
          "timestamp": "2022-12-05T01:24:42Z",
          "tree_id": "b19c1129caa515c0bfd7de454484a5b1c121feb6",
          "url": "https://github.com/jimeh/undent/commit/3878874bbeb53c54d86b3eab454fdc69956f7464"
        },
        "date": 1670203566792,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 2.81,
            "unit": "ns/op",
            "extra": "426561178 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 85.1,
            "unit": "ns/op",
            "extra": "13746393 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 131,
            "unit": "ns/op",
            "extra": "9731596 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 170,
            "unit": "ns/op",
            "extra": "6776300 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 364,
            "unit": "ns/op",
            "extra": "3210079 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 407,
            "unit": "ns/op",
            "extra": "2893846 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 387,
            "unit": "ns/op",
            "extra": "3073276 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 187,
            "unit": "ns/op",
            "extra": "6067984 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 232,
            "unit": "ns/op",
            "extra": "5267154 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 224,
            "unit": "ns/op",
            "extra": "5505369 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 204,
            "unit": "ns/op",
            "extra": "5837175 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 379,
            "unit": "ns/op",
            "extra": "3123595 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 208,
            "unit": "ns/op",
            "extra": "5814897 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 266,
            "unit": "ns/op",
            "extra": "4502744 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 138,
            "unit": "ns/op",
            "extra": "8989406 times"
          },
          {
            "name": "BenchmarkBytes__long_block_of_text",
            "value": 5607,
            "unit": "ns/op",
            "extra": "217881 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 5.13,
            "unit": "ns/op",
            "extra": "230076577 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 94,
            "unit": "ns/op",
            "extra": "12856698 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 131,
            "unit": "ns/op",
            "extra": "9166402 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 206,
            "unit": "ns/op",
            "extra": "5794530 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 401,
            "unit": "ns/op",
            "extra": "2900401 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 438,
            "unit": "ns/op",
            "extra": "2674860 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 419,
            "unit": "ns/op",
            "extra": "2826056 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 221,
            "unit": "ns/op",
            "extra": "5436007 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 265,
            "unit": "ns/op",
            "extra": "4531554 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 236,
            "unit": "ns/op",
            "extra": "5008477 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 237,
            "unit": "ns/op",
            "extra": "5084780 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 405,
            "unit": "ns/op",
            "extra": "2984019 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 239,
            "unit": "ns/op",
            "extra": "5070998 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 268,
            "unit": "ns/op",
            "extra": "4578775 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 141,
            "unit": "ns/op",
            "extra": "8387938 times"
          },
          {
            "name": "BenchmarkString__long_block_of_text",
            "value": 5989,
            "unit": "ns/op",
            "extra": "199202 times"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@jimeh.me",
            "name": "Jim Myhrberg",
            "username": "jimeh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af31c21ec11fef194bb82d07cf88001aaa2a3c55",
          "message": "Merge pull request #11 from jimeh/perf-improvement\n\nfix(perf): minor improvement when no indent is found",
          "timestamp": "2024-10-21T01:50:25+01:00",
          "tree_id": "fe427fb415555bad2456cc589bcc25ccec5b992d",
          "url": "https://github.com/jimeh/undent/commit/af31c21ec11fef194bb82d07cf88001aaa2a3c55"
        },
        "date": 1729471897574,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkBytes__empty",
            "value": 2.79,
            "unit": "ns/op",
            "extra": "425751841 times"
          },
          {
            "name": "BenchmarkBytes__single_line",
            "value": 72.4,
            "unit": "ns/op",
            "extra": "16577638 times"
          },
          {
            "name": "BenchmarkBytes__single_line_indented",
            "value": 108,
            "unit": "ns/op",
            "extra": "11139321 times"
          },
          {
            "name": "BenchmarkBytes__multi_line",
            "value": 159,
            "unit": "ns/op",
            "extra": "7567010 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented",
            "value": 317,
            "unit": "ns/op",
            "extra": "3800172 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 349,
            "unit": "ns/op",
            "extra": "3464032 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_leading_line_breaks",
            "value": 330,
            "unit": "ns/op",
            "extra": "3620138 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented",
            "value": 181,
            "unit": "ns/op",
            "extra": "6627398 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 213,
            "unit": "ns/op",
            "extra": "5656185 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_leading_line_breaks",
            "value": 191,
            "unit": "ns/op",
            "extra": "6303259 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 185,
            "unit": "ns/op",
            "extra": "6584892 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_blank_lines",
            "value": 322,
            "unit": "ns/op",
            "extra": "3744698 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_blank_lines",
            "value": 191,
            "unit": "ns/op",
            "extra": "6324984 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_space_indented_with_random_indentation",
            "value": 212,
            "unit": "ns/op",
            "extra": "5692495 times"
          },
          {
            "name": "BenchmarkBytes__multi_line_tab_indented_with_random_indentation",
            "value": 122,
            "unit": "ns/op",
            "extra": "9850612 times"
          },
          {
            "name": "BenchmarkBytes__long_block_of_text",
            "value": 6488,
            "unit": "ns/op",
            "extra": "198952 times"
          },
          {
            "name": "BenchmarkString__empty",
            "value": 4.66,
            "unit": "ns/op",
            "extra": "253229143 times"
          },
          {
            "name": "BenchmarkString__single_line",
            "value": 76.4,
            "unit": "ns/op",
            "extra": "15561805 times"
          },
          {
            "name": "BenchmarkString__single_line_indented",
            "value": 113,
            "unit": "ns/op",
            "extra": "10589274 times"
          },
          {
            "name": "BenchmarkString__multi_line",
            "value": 186,
            "unit": "ns/op",
            "extra": "6526258 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented",
            "value": 343,
            "unit": "ns/op",
            "extra": "3483082 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_without_any_leading_line_breaks",
            "value": 384,
            "unit": "ns/op",
            "extra": "3124066 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_leading_line_breaks",
            "value": 360,
            "unit": "ns/op",
            "extra": "3371970 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented",
            "value": 206,
            "unit": "ns/op",
            "extra": "5388762 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_without_any_leading_line_breaks",
            "value": 244,
            "unit": "ns/op",
            "extra": "4860903 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_leading_line_breaks",
            "value": 216,
            "unit": "ns/op",
            "extra": "5568152 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_tabs_and_spaces_after_indent",
            "value": 214,
            "unit": "ns/op",
            "extra": "5775513 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_blank_lines",
            "value": 349,
            "unit": "ns/op",
            "extra": "3396564 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_blank_lines",
            "value": 216,
            "unit": "ns/op",
            "extra": "5580368 times"
          },
          {
            "name": "BenchmarkString__multi_line_space_indented_with_random_indentation",
            "value": 220,
            "unit": "ns/op",
            "extra": "5468811 times"
          },
          {
            "name": "BenchmarkString__multi_line_tab_indented_with_random_indentation",
            "value": 128,
            "unit": "ns/op",
            "extra": "9385910 times"
          },
          {
            "name": "BenchmarkString__long_block_of_text",
            "value": 6578,
            "unit": "ns/op",
            "extra": "183488 times"
          }
        ]
      }
    ]
  }
}