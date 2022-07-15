import { Client } from "discord.js";
import "dotenv/config";
import { readdirSync } from "fs";
import { join } from "path/posix";

export default class extends Client {
    public commands: any[];
    constructor(options) {
        super(options)

        this.commands = []
        this.loadCommands();
        this.loadEvents();
    }

    registryCommands() {
        this.guilds.cache.get(process.env.CLIENT_ID_DISCORD).commands.set(this.commands);
    }

    async loadCommands(path = 'src/commands') {
        const categories = readdirSync(path)
        for (const category of categories) {
            const commands = readdirSync(`${path}/${category}`)
            for (const command of commands) {
                const commandClass = await import(join(process.cwd(), `${path}/${category}/${command}`));
                console.log(commandClass);
                
                const cmd = new (commandClass).default(this)

                this.commands.push(cmd)
                console.log(`Comando ${cmd.name} carregado`);

            }
        }
    }

    async loadEvents(path = 'src/events') {
        const categories = readdirSync(path);
        for (const category of categories) {
            const events = readdirSync(`${path}/${category}`)
            for (const event of events) {
                const eventClass = await import(join(process.cwd(), `${path}/${category}/${event}`));
                const evt = new (eventClass).default(this)


                this.on(evt.name, evt.run);
                console.log(`Event ${evt.name} carregado`);
            }
        }
    }

}