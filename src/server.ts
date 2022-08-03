import { Intents } from "discord.js";
import "dotenv/config";
import Client from "./structures/Client";

import fs from "fs";

import express from 'express'
import cors from 'cors'

const app = express()

app.use( cors() );
app.use( express.json() );


app.get("/", (request, response) => {
    response.status(200).json({
        message: "BOT ESTA LIGADO"
    })
})

const pasta = fs.readdirSync("/")
console.log(pasta);

const CLIENT_SECRET = process.env.SECRET_DISCORD_BOT || null;

const client = new Client({
    partials: ["CHANNEL"],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_INVITES,
    ]
});

var server_port = process.env.PORT || 5000;

app.listen(server_port, function() {
    client.login( CLIENT_SECRET );
    console.log('Listening on port %d', server_port);
});