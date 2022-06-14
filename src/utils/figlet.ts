import figlet from "figlet";

import { colors } from "../enums";
import { paintText } from "./";

export function writeTitle(anyText: string, color: colors): void {
    console.log(paintText(figlet.textSync(anyText), color))
}