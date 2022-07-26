import { RequisicoesService } from "../../services/ServicesScrappingUCL/Index";
import { RequestRegisterType } from "../../services/ServicesScrappingUCL/RequestTypes";
import Client from "../../structures/Client";
import { Command } from "../../structures/Command";
import { ObjectConcat } from '../../utils/object-concat';



export default class PingCommand extends Command {

    constructor(client: Client) {
        super(client, {
            name: 'ucl-register',
            description: 'Regsitra na Aplicação de Scraping da UCL.',
            options: [
                {
                    name: 'email',
                    type: 'STRING',
                    description: 'Seu email da UCL',
                    required: true
                },
                {
                    name: 'password',
                    type: 'STRING',
                    description: 'Sua senha da UCL',
                    required: true
                },
                {
                    name: 'send_email',
                    type: 'BOOLEAN',
                    description: 'EM DESENVOLVIMENTO...',
                    required: true
                }
            ]
        })
    }

    run = async (data: any) => {
        const { interaction } = ObjectConcat.ofMessageAndCommandInteraction(data);

        await interaction.reply({ content: "Cadastrando, aguarde um instante...", ephemeral: true })

        const email = interaction.options.getString('email');
        const password = interaction.options.getString('password');
        const send_email = interaction.options.getBoolean('send_email');
        
        const user: RequestRegisterType = { email, password, send_email, discord_id: interaction.user.id }

        const service = new RequisicoesService();
        const dados = await service.registrar(user)

        interaction.editReply({ content: dados.message })
    }

}