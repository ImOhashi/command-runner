import { logger } from "cyber-logger";
import { blockDevices, diskLayout } from "systeminformation";

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

  public async getBlockDevices(): Promise<void> {
    blockDevices()
      .then((devices) => {
        logger.info("Finding all block devices.");
        console.log(devices);
      })
      .catch((err) => {
        logger.error(`Error while finding block devices: ${err}`);
        throw new Error(err);
      });
  }
}
