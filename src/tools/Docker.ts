import { logger } from "cyber-logger";
import { dockerContainers, dockerImages, dockerInfo } from "systeminformation";

export class Docker {
  public async getInfo(): Promise<void> {
    dockerInfo()
      .then((info) => {
        logger.info("Finding Docker info.");
        console.table(info);
      })
      .catch((err) => {
        logger.error(`Error while finding Docker info: ${err}`);
        throw new Error(err);
      });
  }

  public async getImages(): Promise<void> {
    dockerImages()
      .then((images) => {
        logger.info("Finding all Docker images.");
        console.info(images);
      })
      .catch((err) => {
        logger.error(`Error while finding all Docker images: ${err}`);
        throw new Error(err);
      });
  }

  public async getContainers(): Promise<void> {
    dockerContainers()
      .then((containers) => {
        logger.info("Finding all Docker containers.");
        console.info(containers);
      })
      .catch((err) => {
        logger.error(`Error while finding all Docker containers: ${err}`);
        throw new Error(err);
      });
  }
}
