import { Client, Intents, User } from "discord.js";
import "dotenv/config";

import fs from "fs";

const SERVER_ID = process.env.CLIENT_ID_DISCORD || null;
const CLIENT_SECRET = process.env.SECRET_DISCORD_BOT || null;

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES
    ]
});

client.login( CLIENT_SECRET );

client.on( 'ready', async () => {
    console.log("Bot Online com Sucesso.");

    let servidor = client.guilds.cache.get(SERVER_ID)
    let usuarios = servidor.members;
    let usuarioMatheus = client.users.cache.get('327604693411037184')

    usuarioMatheus.send("Ola Matheus");
    
    
    
});
