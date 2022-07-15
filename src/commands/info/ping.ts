import { Message } from "discord.js";
import Client from "../../structures/Client";
import { Command } from "../../structures/Command";

export default class PingCommand extends Command {
    constructor(client: Client) {
        super(client, {
            name: 'ucl-ping',
            description: 'Mostra o ping do bot'
        })
    }

    run = (interaction: Message) => {
        interaction.reply('pong');
    }
}