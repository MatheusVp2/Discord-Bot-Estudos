import { Message } from "discord.js";
import Client from "../../structures/Client";
import { Command } from "../../structures/Command";

export default class PingCommand extends Command {

    constructor(client: Client) {
        super(client, {
            name: 'ucl-register',
            description: 'Regsitra na Aplicação de Scraping da UCL.',
        })
    }

    run = (interaction: Message) => {
        interaction.reply('ping');
    }

}