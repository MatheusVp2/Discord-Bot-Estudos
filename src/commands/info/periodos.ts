import { ObjectConcat } from './../../utils/object-concat';
import Client from "../../structures/Client";
import { Command } from "../../structures/Command";

export default class AulasCommand extends Command {
    constructor(client: Client) {
        super(client, {
            name: 'ucl-periodos',
            description: 'De acordo com o dia da semana '
        })
    }

    run = async (data: any) => {
        const { interaction, message } = ObjectConcat.ofMessageAndCommandInteraction(data);
    }
}