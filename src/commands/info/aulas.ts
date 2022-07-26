import { EmbedHorarios } from "../../Components/EmbedHorarios";
import { DiasSemanaEnum } from "../../enums/DiasSemana";
import { RequisicoesService } from "../../services/ServicesScrappingUCL/Index";
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

    run = async (data: any) => {
        const { interaction, message } = ObjectConcat.ofMessageAndCommandInteraction(data);
        const diaEscolhido = interaction.options.getString('dia');
        const aulas = await RequisicoesService.aulas({ discord_id: interaction.user.id })

        console.log(DiasSemanaEnum.SEGUNDA == diaEscolhido);
        const exampleEmbed = EmbedHorarios.HorarioDia(diaEscolhido, [
            { name: 'Algoritmos e Estruturas de Dados III', value: '18:45 → 20:15\nSala Lab BD 209', inline: true },
            { name: 'Analytics – Inteligência de Negócios', value: '20:30 → 22:00\nSala Lab BD 209', inline: true },
        ])
        
        interaction.reply({content: `Suas aulas de ${diaEscolhido}`, ephemeral: true, embeds: [exampleEmbed]})
        
    }
}