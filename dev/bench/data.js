window.BENCHMARK_DATA = {
  "lastUpdate": 1613866321225,
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
      }
    ]
  }
}