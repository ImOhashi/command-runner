import { Command } from "commander";
import { config } from "dotenv";

import { Docker, OperatingSystem } from "./tools";

config();

const program = new Command();

const os = new OperatingSystem();
const docker = new Docker();

program
  .name(process.env.npm_package_name)
  .version(process.env.npm_package_version)
  .description(process.env.npm_package_description);

program
  .option("-u, --users, Get all system registered users.")
  .action(os.getAllSystemUsers)
  .description("Get all system registered users.");

program
  .option("-d, --docker, Get all Docker information.")
  .action(docker.getInfo)
  .description("Get all Docker information.");

program
  .option("-di, --docker-images, Get all Docker images.")
  .action(docker.getImages)
  .description("Get all Docker images.");

program.parse(process.argv);
