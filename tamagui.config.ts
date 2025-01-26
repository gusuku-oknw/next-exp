import { config as configBase } from "@tamagui/config";
import { createTamagui } from "tamagui";
import { themes } from "./themes";

export const config = createTamagui({
    ...themes,
    ...configBase,
})


export type Conf = typeof config;

declare module "tamagui" {
    interface TamaguiCustomConfig extends Conf {}
}
