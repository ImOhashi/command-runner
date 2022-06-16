import { Command } from "commander";
import { config } from "dotenv";

import { OperatingSystem } from "./tools";

config();

const program = new Command();

const os = new OperatingSystem();

program
  .name(process.env.npm_package_name)
  .version(process.env.npm_package_version)
  .description(process.env.npm_package_description);

program
  .option("-u, --users, Get all system registered users.")
  .action(os.getAllSystemUsers)
  .description("Get all system registered users.");

program.parse(process.argv);
