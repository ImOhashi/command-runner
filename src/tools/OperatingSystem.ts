import { logger } from "cyber-logger";
import { users } from "systeminformation";

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
}
