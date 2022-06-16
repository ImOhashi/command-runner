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
  .command("users")
  .action(os.getAllSystemUsers)
  .description("Get all system registered users.");

program
  .command("info")
  .action(os.getOsInfo)
  .description("Get all system information.");

program
  .command("shell")
  .action(os.getShell)
  .description("Get shell information.");

program
  .command("docker")
  .action(docker.getInfo)
  .description("Get all Docker information.");

program
  .command("docker-images")
  .action(docker.getImages)
  .description("Get all Docker images.");

program
  .command("docker-containers")
  .action(docker.getContainers)
  .description("Get all Docker containers.");

program.parse(process.argv);
