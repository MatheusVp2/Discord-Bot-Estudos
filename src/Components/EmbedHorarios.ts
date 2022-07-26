import { MessageEmbed } from "discord.js";

export class EmbedHorarios {
    static HorarioDia(dia: string, aulas: AulaValue[]): MessageEmbed {
        return new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(dia)
            .setURL('https://eies.ucl.br/webaluno/horarioindividual/')
            .setDescription(`Suas aulas na ${dia}`)
            .addFields(aulas)
            // { name: 'Algoritmos e Estruturas de Dados III', value: '18:45 → 20:15\nSala Lab BD 209', inline: true },
            //     { name: 'Analytics – Inteligência de Negócios', value: '20:30 → 22:00\nSala Lab BD 209', inline: true },
    }
}

type AulaValue = {
    name: string
    value: string
    inline?: boolean 
}