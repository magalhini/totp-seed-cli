# TOTP Cli

Given a TOTP seed, you can generate one-time passcodes on your CLI, with the time remaining for a particular code:

```bash
topt-seed-cli -s AC6ZWNRLFOG5JUQHC5YW6BXX2K675AZX


   ╔════════════╗
   ║            ║
   ║   047232   ║
   ║            ║
   ╚════════════╝

9 seconds remaining for this code.
```

## Installing

If you're using a particular seed every time, I recommend globally installing this package and creating a bash alias with your seed.

`npm i -g totp-seed-cli`

Acknowledgements: the source for the `TOTP` Class is entirely sourced from the [Blendist's TOTP.io](https://github.com/venables/totp.io) project, which is the web version of this project and where I got the inspiration to do this from.