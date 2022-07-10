import { Message } from "discord.js";

export async function recebeMensagemDM(mensagem:Message) {
    
}
export async function recebeMensagemChanel(mensagem:Message) {
    var x = await mensagem.awaitReactions();
    console.log(x);
}