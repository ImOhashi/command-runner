import { logger } from "cyber-logger";
import { diskLayout } from "systeminformation";

export class Disk {
  public async getDiskLayout(): Promise<void> {
    diskLayout()
      .then((disks) => {
        logger.info("Finding disks layout.");
        console.log(disks);
      })
      .catch((err) => {
        logger.error(`Error while finding disks layout: ${err}`);
        throw new Error(err);
      });
  }
}
