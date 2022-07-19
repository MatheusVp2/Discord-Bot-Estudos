import { DiasSemanaEnum } from "../../enums/DiasSemana";
import Client from "../../structures/Client";
import { Command } from "../../structures/Command";
import { ObjectConcat } from "../../utils/object-concat";

export default class PingCommand extends Command {
    constructor(client: Client) {
        super(client, {
            name: 'somar',
            description: 'Realiza a soma de dois números',
            options: [
                {
                    name: 'num1',
                    type: 'INTEGER',
                    description: 'Primeiro número',
                    required: true
                },
                {
                    name: 'num2',
                    type: 'INTEGER',
                    description: 'Segundo número',
                    required: true
                },
            ]
        })
    }

    run = (data: any) => {
        const { interaction, message } = ObjectConcat.ofMessageAndCommandInteraction(data);
        const num1 = interaction.options.getInteger('num1');
        const num2 = interaction.options.getInteger('num2');
        console.log(Object.values(DiasSemanaEnum).map(item => {return {name: item, value: item}}));
        
        ;

        message.channel.type == "DM"
        interaction.reply({
            content: `${num1} + ${num2} = ${num1 + num2}`,
            ephemeral: true
        });
    }
}