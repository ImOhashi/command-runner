import { logger } from "cyber-logger";
import { dockerImages, dockerInfo } from "systeminformation";

export class Docker {
  async getInfo(): Promise<void> {
    await dockerInfo()
      .then((info) => {
        logger.info("Finding Docker info.");
        console.table(info);
      })
      .catch((err) => {
        logger.error(`Error while finding Docker info: ${err}`);
        throw new Error(err);
      });
  }

  async getImages(): Promise<void> {
    await dockerImages()
      .then((images) => {
        logger.info("Finding all Docker images.");
        console.info(images);
      })
      .catch((err) => {
        logger.error(`Error while finding all Docker images: ${err}`);
        throw new Error(err);
      });
  }
}
