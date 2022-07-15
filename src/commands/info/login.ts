import { Message } from "discord.js";
import Client from "../../structures/Client";
import { Command } from "../../structures/Command";

export default class PingCommand extends Command {

    constructor(client: Client) {
        super(client, {
            name: 'ucl-login',
            description: 'Efetua o Login para Gerar Sessao do Scraping.'
        })
    }

    run = (interaction: Message) => {
        interaction.reply('ping');
    }

}