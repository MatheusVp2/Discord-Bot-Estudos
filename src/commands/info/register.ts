import { CommandInteraction } from './../../../node_modules/discord.js/typings/index.d';
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

    run = async (dados: any) => {
        const interaction = dados as CommandInteraction
        const message = dados as Message;
        
        if( message.channel.type !== "DM" ){
            interaction.reply({
                content: "Esse comando so mente pode ser utilizado no privado do bot.",
                ephemeral: true
            })
        }

    }

}