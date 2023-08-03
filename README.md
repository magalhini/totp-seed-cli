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

To use `totp` locally in your CLI, install it globally using npm:

`npm i -g totp-seed-cli`

## Usage

Use `-s` to pass in your seed:

`totp -s ABCDEFGH`

This will output the code to the console.

### Copy to clipboard

To display the code and the time remaining, but also copy it to the clipboard, pass `-c`:

`totp -s ABCDEFGH -c`

### Save seed and read it from local file:

To save the seed in a local file for future use, pass `-S`

`totp -s ABCDEFGH -S`

From here on, you can just call `totp`.

### Create an alias for your seed

Using your shell of choice, you can create an alias so you can call this from anywhere without having to pass your seed.
If you're using `zsh`, use your editor to edit your `.zshrc`:

1. `vi ~/.zshrc`

Add an alias with your seed and the copy command, such as:

`alias otp="totp -s ABCDEFGH -c"`

Save the file and restart your terminal. You can now simply call `otp` from anywhere.

**Acknowledgements**: the source for the `TOTP` Class is entirely sourced from the [Blendist's TOTP.io](https://github.com/venables/totp.io) project, which is the web equivalent of this project and where I got the inspiration to do this from.

## Requirements

Non-ESM packages specifically to work with `node v16.15.0`.