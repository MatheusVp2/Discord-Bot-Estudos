import { EmbedFieldData, MessageEmbed } from "discord.js";

export class EmbedHorarios {
    static create(semana: string, aulas: EmbedFieldData[]): MessageEmbed {
        return new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(semana)
            .setURL('https://eies.ucl.br/webaluno/horarioindividual/')
            .setDescription(`Suas aulas na ${semana}`)
            .addFields(aulas)
    }
}