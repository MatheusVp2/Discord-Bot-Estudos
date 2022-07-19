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
        
        
        interaction.reply({content: `Suas aulas de ${diaEscolhido}`, ephemeral: false})
        
    }
}