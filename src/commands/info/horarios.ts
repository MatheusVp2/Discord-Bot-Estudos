
import { EmbedFieldData, MessageEmbed } from "discord.js";
import { DiasSemanaEnum } from "../../enums/DiasSemana";
import { RequisicoesService } from "../../services/ServicesScrappingUCL/Index";
import Client from "../../structures/Client";
import { Command } from "../../structures/Command";
import { ObjectConcat } from "../../utils/object-concat";

export default class HorariosCommand extends Command {
    constructor(client: Client) {
        super(client, {
            name: 'ucl-horarios',
            description: 'Busca os horarios do periodo.',
            options: [
                {
                    name: 'dia',
                    type: 'STRING',
                    description: 'Dia da semana para ver o horário das aulas.',
                    required: true,
                    choices: Object.values(DiasSemanaEnum).map(item => { return { name: item, value: item } })
                }
            ]
        })
    }

    run = async (data: any) => {

        function createEmbedHorarios(semana: string, aulas: EmbedFieldData[]): MessageEmbed{
            return new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(semana)
                .setURL('https://eies.ucl.br/webaluno/horarioindividual/')
                .setDescription(`Suas aulas na ${semana}`)
                .addFields(aulas)
        }

        const { interaction } = ObjectConcat.ofMessageAndCommandInteraction(data);

        const semana = interaction.options.getString('dia');

        interaction.reply({
            content: `Buscando suas aulas de ${semana}!`,
            ephemeral: true
        })

        const service = new RequisicoesService()
        const aulas = await service.horarios({ discord_id: interaction.user.id })

        const dados  = aulas
            .filter(item => item.semana.toLowerCase() === semana.toLowerCase())
            .map(item => { return { name: item.materia, value: `Horario: ${item.horario}\n${item.sala}`, inline: false } })

        const aulasEmbed = createEmbedHorarios( semana, dados )
        
        const msg = {
            content: dados.length != 0 ? `Suas aulas de ${semana}` : `Não existe aulas na ${semana}`,
        }
        if( dados.length != 0) msg["embeds"] = [ aulasEmbed ]

        interaction.editReply( msg )

    }
}