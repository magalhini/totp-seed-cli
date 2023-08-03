# TOTP ClI

Given a TOTP seed, you can generate one-time passcodes on your CLI, also receiving the time remaining for a particular code. Passing the `-c` option will also immediately copy it to the clipboard.

```bash
topt-seed-cli -s AC6ZWNRLFOG5JUQHC5YW6BXX2K675AZX


   ╔════════════╗
   ║            ║
   ║   047232   ║
   ║            ║
   ╚════════════╝

9 seconds remaining for this code.
```

## tl;dr

1. Install it globally using `npm i -g totp-seed-cli`
2. Pass it a seed and use the optional `-c` flag to copy the code to your clipboard: `totp -s ABCDEFGH -c`

## Installing

If you're using a particular seed every time, I recommend globally installing this package and either:

- save the key to a local file using the `-S` option
- creating a shell alias containing your key

To install it globally:

`npm i -g totp-seed-cli`

## Usage

If you've installed it globally:

`totp -s ABCDEFGH`

Will output the code to the console.

`totp -s ABCDEFGH -c`

Will also copy the code to your clipboard.

To save the seed in a local file for future use:

`totp -s ABCDEFGH -S`

From here on, you can just call `totp`.

**Acknowledgements**: the source for the `TOTP` Class is entirely sourced from the [Blendist's TOTP.io](https://github.com/venables/totp.io) project, which is the web equivalent of this project and where I got the inspiration to do this from.

## Requirements

Non-ESM packages specifically to work with `node v16.15.0`.