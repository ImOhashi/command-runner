import { Command } from "commander";
import { config } from "dotenv";

import { colors } from "./enums";
import { writeTitle } from "./utils";

config();

const program = new Command();

writeTitle("Command Runner", colors.RED);

program
  .version(process.env.npm_package_version)
  .description(process.env.npm_package_description);

program.parse(process.argv);
