import { RequisicoesService } from './../../services/ServicesScrappingUCL/Index';
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
        const { interaction } = ObjectConcat.ofMessageAndCommandInteraction(data);

        interaction.reply({
            content: "Efetuando o login na UCL, criando a sessao.",
            ephemeral: true
        })

        const service = new RequisicoesService()
        const response = await service.logar({ discord_id: interaction.user.id })

        interaction.editReply({ content: response.message })
    }

}