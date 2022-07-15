import { CacheType, Interaction } from "discord.js";
import Client from "../../structures/Client";
import { Event } from "../../structures/Event";

export default class extends Event {
    constructor(client: Client){
        super(client, {
            name: 'interactionCreate'
        })
    }

    run = (interaction: Interaction<CacheType>) => {
        if (interaction.isCommand()) {
            const cmd = this.client.comandos.find( c => c.name === interaction.commandName )
            if (cmd) cmd.run(interaction)
        }
    }
}