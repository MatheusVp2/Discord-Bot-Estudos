import { api } from "./api";

export class RequisicoesService {
    async register(email:string, password: string, discordId: string, sendMail: boolean) {
        return await api.post('/api/v1/bot/register', {
            email,
            password,
            discordId,
            sendMail

        });
    }
    
    async logar(discordId: string) {
        return await api.post('/api/v1/bot/register', {
            discordId
        });
    }

    async delete(discordId:string) {
        return await api.post('/api/v1/bot/delete', {
            discordId
        });
    }

    async notas(discordId: string) {
        return await api.get('/api/v1/bot/notas', {
            params: {discordId}
        });
    }
    
    async boletos(discordId: string) {
        return await api.get('/api/v1/bot/boletos', {
            params: {discordId}
        });
    }
}