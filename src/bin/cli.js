#!/usr/bin/env node

const program = require("commander");

const PACKAGE = require("../../package");

program.version(PACKAGE.version, "-v, --version");

/** @todo: find how to make command arguments optional */
program
    .command("hello <name>")
    .description("says hello!")
    .option("-c, --capitalize", "says hello with caps")
    .action((name = "", lastname = "", cmd) => {
        require("../scripts/SayHello")({ name, capitalize: cmd.capitalize });
    });

program
    .command("args")
    .description("show arguments")
    .action(() => {
        console.log(`raw args: \n${process.argv.join("\n")}`);
    });

// main function
program.parse(process.argv);
