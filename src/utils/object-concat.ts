import { CommandInteraction, Message } from "discord.js";

export class ObjectConcat {
    static ofMessageAndCommandInteraction(obj: any) {
        const interaction = obj as CommandInteraction
        const message = obj as Message;
        return { interaction, message };
    }
}