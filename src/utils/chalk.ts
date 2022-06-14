import chalk from "chalk";

import { colors } from "../enums";

export function paintText(text: string, color: colors): string {
  return chalk[color](text);
}
