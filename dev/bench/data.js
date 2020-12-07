window.BENCHMARK_DATA = {
  "lastUpdate": 1607338059021,
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
      }
    ]
  }
}