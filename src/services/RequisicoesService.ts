import { api } from "./api";

export class RequisicoesService {
    async register(email:string, password: string, discord_id: string, send_email: boolean) {
        return await api.post('/api/v1/bot/register', {
            email,
            password,
            discord_id,
            send_email

        });
    }
    
    async logar(discord_id: string) {
        return await api.post('/api/v1/bot/register', {
            discord_id
        });
    }

    async delete(discord_id:string) {
        return await api.post('/api/v1/bot/delete', {
            discord_id
        });
    }

    async notas(discord_id: string) {
        return await api.get('/api/v1/bot/notas', {
            params: {discord_id}
        });
    }
    async aulas(discord_id: string) {
        return await api.get('/api/v1/bot/aulas', {
            params: {discord_id}
        });
    }
    
    async boletos(discord_id: string) {
        return await api.get('/api/v1/bot/boletos', {
            params: {discord_id}
        });
    }
}