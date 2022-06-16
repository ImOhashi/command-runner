import { logger } from "cyber-logger";
import { osInfo, shell, users, versions } from "systeminformation";

export class OperatingSystem {
  public async getAllSystemUsers(): Promise<void> {
    users()
      .then((users) => {
        logger.info("Finding system users.");
        console.table(users);
      })
      .catch((err) => {
        logger.error(`Error while finding system users: ${err}`);
        throw new Error(err);
      });
  }

  public async getOsInfo(): Promise<void> {
    osInfo()
      .then((info) => {
        logger.info("Finding OS information.");
        console.table(info);
      })
      .catch((err) => {
        logger.error(`Error while finding system information: ${err}`);
        throw new Error(err);
      });
  }

  public async getShell(): Promise<void> {
    shell()
      .then((info) => {
        logger.info("Finding shell information.");
        console.table(info);
      })
      .catch((err) => {
        logger.error(`Error while finding shell information: ${err}`);
        throw new Error(err);
      });
  }

  public async getVersions(): Promise<void> {
    versions()
      .then((apps) => {
        logger.info("Finding apps versions.");
        console.table(apps);
      })
      .catch((err) => {
        logger.error(`Error while finding apps version: ${err}`);
        throw new Error(err);
      });
  }
}
