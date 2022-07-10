import { Client, Intents } from "discord.js";
import "dotenv/config";
import { recebeMensagemChanel, recebeMensagemDM } from "./controller/operations";


const SERVER_ID = process.env.CLIENT_ID_DISCORD || null;
const CLIENT_SECRET = process.env.SECRET_DISCORD_BOT || null;

const client = new Client({
    partials: ["CHANNEL"],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES
    ]
});

client.login( CLIENT_SECRET );

client.once( 'ready', async () => {
    console.log("Bot Online com Sucesso.");

    let servidor = client.guilds.cache.get(SERVER_ID)
    let usuarios = servidor.members;
    
    let usuarioMatheus = client.users.cache.get('222043465825910784')
    // usuarioMatheus.send('piru');
    
    
});

client.on('messageCreate', async (message) => {
    if(message.author.bot) return;

    if (message.channel.type === 'DM') recebeMensagemDM(message);
    if (message.channel.type === 'GUILD_TEXT') recebeMensagemChanel(message);
    
    console.log(message.author.username);
    console.log(message.channel.type);
    
     
})