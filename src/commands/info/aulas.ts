import { MessageEmbed } from "discord.js";
import { DiasSemanaEnum } from "../../enums/DiasSemana";
import Client from "../../structures/Client";
import { Command } from "../../structures/Command";
import { ObjectConcat } from "../../utils/object-concat";

export default class AulasCommand extends Command {
    constructor(client: Client) {
        super(client, {
            name: 'aulas',
            description: 'De acordo com o dia da semana ',
            options: [
                {
                    name: 'dia',
                    type: 'STRING',
                    description: 'Dia da semana para ver o horário das aulas.',
                    required: true,
                    choices: Object.values(DiasSemanaEnum).map(item => {return {name: item, value: item}})
                },
            ]
        })
    }

    run = (data: any) => {
        const { interaction, message } = ObjectConcat.ofMessageAndCommandInteraction(data);
        const diaEscolhido = interaction.options.getString('dia');
        console.log(DiasSemanaEnum.SEGUNDA == diaEscolhido);
        const exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(diaEscolhido)
            .setURL('https://eies.ucl.br/webaluno/horarioindividual/')
            .setDescription(`Suas aulas na ${diaEscolhido}`)
            .addFields(
                { name: '\u200B', value: '\u200B' }, // Espaço
                { name: 'Nome matéria', value: 'Horário\nSala', inline: true },
                { name: 'Nome matéria', value: 'Horário\nSala', inline: true },
            )
            .addField('Terça-Feira', '', false)
        
        interaction.reply({content: `Suas aulas de ${diaEscolhido}`, ephemeral: false, embeds: [exampleEmbed]})
        
    }
}