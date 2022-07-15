import { Intents } from "discord.js";
import "dotenv/config";
import Client from "./structures/Client";


const SERVER_ID = process.env.CLIENT_ID_DISCORD || null;
const CLIENT_SECRET = process.env.SECRET_DISCORD_BOT || null;

const client = new Client({
    partials: ["CHANNEL"],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_INVITES,
    ]
});

client.login( CLIENT_SECRET );