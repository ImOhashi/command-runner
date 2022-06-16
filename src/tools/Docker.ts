import { logger } from "cyber-logger";
import { dockerInfo } from "systeminformation";

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
}
