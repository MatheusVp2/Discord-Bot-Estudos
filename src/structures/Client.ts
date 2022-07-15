import { Client } from "discord.js";
import "dotenv/config";
import { readdirSync, writeFileSync } from "fs";
import { join } from "path/posix";


export default class extends Client {
    public comandos: any[];
    
    constructor(options) {
        super(options)

        this.comandos = []
        this.loadCommands();
        this.loadEvents();
    }

    async registryCommands() {
        this.application.commands.set(this.comandos);
    }

    async loadCommands(path = 'src/commands') {
        const categories = readdirSync(path)
        for (const category of categories) {
            const commands = readdirSync(`${path}/${category}`)
            for (const command of commands) {
                const commandClass = await import(join(process.cwd(), `${path}/${category}/${command}`));
                console.log(commandClass);
                
                const cmd = new (commandClass).default(this)

                this.comandos.push(cmd)
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