import Client from "../../structures/Client";
import { Command } from "../../structures/Command";
import { ObjectConcat } from "../../utils/object-concat";

export default class PingCommand extends Command {

    constructor(client: Client) {
        super(client, {
            name: 'ucl-login',
            description: 'Efetua o Login para Gerar Sessao do Scraping.'
        })
    }

    run = async (data: any) => {
        const { interaction, message } = ObjectConcat.ofMessageAndCommandInteraction(data);
    }

}