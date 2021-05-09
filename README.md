# Caesar cipher CLI tool

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

This tool can be runed from command-line using nodeJS

```bash
$ node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"

CLI tool can accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode