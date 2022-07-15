import { Client, Intents } from "discord.js";
import "dotenv/config";

const CLIENT_SECRET = process.env.SECRET_DISCORD_BOT || null;

const client = new Client({
    partials: ["CHANNEL"],
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});

client.login( CLIENT_SECRET );

/* client.once( 'ready', async () => {
    console.log("Bot Online com Sucesso.");

    let servidor = client.guilds.cache.get(SERVER_ID)
    let usuarios = servidor.members;
    
    let usuarioMatheus = client.users.cache.get('222043465825910784')
    // usuarioMatheus.send('piru');
    
    
});

client.on('messageCreate', async (message) => {
    console.log('atnes');
    
    if(message.author.bot || (message.content.slice(0,3) === '.bot')) return;
    if (message.channel.type === 'DM') await recebeMensagemDM(message);
    if (message.channel.type === 'GUILD_TEXT') await recebeMensagemChanel(message);
    console.log('depoisIf');
    
     
}) */