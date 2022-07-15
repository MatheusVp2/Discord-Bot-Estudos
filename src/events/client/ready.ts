import Client from "../../structures/Client";
import { Event } from "../../structures/Event";

export default class extends Event {
    constructor(client: Client){
        super(client, {
            name: 'ready'
        })
    }

    run = () => {
        console.log(`Bot ${this.client.user.username} logado com sucesso em ${this.client.guilds.cache.size} servidores.`);
        this.client.registryCommands();
    }
}