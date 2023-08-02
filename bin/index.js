import yargs from "yargs";
import TOTP from "../src/TOTP.js";
import chalk from "chalk";
import boxen from "boxen";

const usage = chalk.blue("Usage: totp -s <seed>");

const options = yargs(process.argv.slice(2))
  .usage(usage)
  .option("s", {
    alias: "seed",
    describe: "The seed to use for the OTP",
    type: "string",
    demandOption: true,
  })
  .option("w", {
    alias: "watch",
    describe: "Watch the OTP code",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;

const totp = new TOTP(options.seed);

if (options.watch) {
  const timer = setInterval(() => {
    const seconds = totp.timeRemaining;

    if (seconds === 30) {
      printCode();
    }
  }, 1000);
}

function printCode() {
  const otpKey = totp.otpKey();
  if (otpKey === "Invalid Key: undefined") {
    console.log("The seed provided is invalid. Please try again.");
    process.exit(0);
  }

  console.log(
    boxen(totp.otpKey(), {
      padding: 1,
      margin: 1,
      borderStyle: "double",
    })
  );
  console.log(
    `${chalk.blue(totp.timeRemaining)} seconds remaining for this code.`
  );
}

printCode();
