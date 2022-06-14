import { Command } from "commander";
import { config } from "dotenv";

config();

const program = new Command();

program
  .name(process.env.npm_package_name)
  .version(process.env.npm_package_version)
  .description(process.env.npm_package_description);

program.parse(process.argv);
