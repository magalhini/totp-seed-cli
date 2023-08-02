#!/usr/bin/env node

const yargs = require("yargs");
const TOTP = require("../src/TOTP");
const chalk = require("chalk");
const fs = require("fs");
const boxen = require("boxen");

const usage = chalk.blue("Usage: totp -s <seed>");

const options = yargs(process.argv.slice(2))
  .usage(usage)
  .option("s", {
    alias: "seed",
    describe: "The seed to use for the OTP. Pass -S if you want to store it.",
    type: "string",
    demandOption: false,
  })
  .option("w", {
    alias: "watch",
    describe: "Watch the OTP code",
    type: "boolean",
    demandOption: false,
  })
  .option("S", {
    alias: "save",
    describe: "Save the seed to a file",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

fs.readFile("seed.txt", "utf8", (err, data) => {
  const seed = options.seed || data;
  const totp = new TOTP(seed);
  const seconds = totp.timeRemaining;
  const key = totp.otpKey();

  if (options.watch) {
    const timer = setInterval(() => {
      if (seconds === 30) {
        console.clear();
        printCode(key, seconds);
      }
    }, 1000);
  }

  if (options.save) {
    const fs = require("fs");

    fs.writeFile("seed.txt", options.seed, (err) => {
      if (err) {
        console.log(err);
        process.exit(0);
      }

      console.log(`Seed saved to ${chalk.blue("seed.txt")}`);
    });
  }

  printCode(key, seconds);
});

function printCode(otpKey, seconds) {
  if (otpKey === "Invalid Key: undefined") {
    console.log("The seed provided is invalid. Please try again.");
    process.exit(0);
  }

  console.log(
    boxen(otpKey, {
      padding: 1,
      margin: 1,
      borderStyle: "double",
    })
  );
  console.log(`${chalk.blue(seconds)} seconds remaining for this code.`);
}
