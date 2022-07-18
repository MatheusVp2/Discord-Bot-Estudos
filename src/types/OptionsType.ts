import { ApplicationCommandOption } from "discord.js";

export type OptionsType = {
    name: string;
    description?: string
    options?: ApplicationCommandOption[]
}