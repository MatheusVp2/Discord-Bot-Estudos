import { api } from "../api";
import { RequestAulasType, RequestBoletosType, RequestDeleteType, RequestNotasType, RequestRegisterType } from "./RequestTypes";
import { ResponseAulasType, ResponseBoletosType, ResponseDeleteType, ResponseLogarType, ResponseNotasType, ResponseRegisterType } from "./ResponseTypes";

export class RequisicoesService {

    static async logar(discord_id: string): Promise<ResponseLogarType> {
        return await api.post('/api/v1/bot/login', {
            discord_id
        });
    }
    
    static async registrar(data: RequestRegisterType): Promise<ResponseRegisterType> {
        return (await api.post('/api/v1/bot/register', data)).data
    }

    static async delete({discord_id}: RequestDeleteType): Promise<ResponseDeleteType> {
        return await api.post('/api/v1/bot/delete', {
            discord_id
        });
    }

    static async notas(data: RequestNotasType): Promise<ResponseNotasType> {
        return await api.get('/api/v1/bot/notas', {
            params: data
        });
    }

    static async aulas(data: RequestAulasType): Promise<ResponseAulasType> {
        try {
            return await api.get('/api/v1/bot/aulas', {
                params: data
            })

            
        } catch (error) {
            console.log(error.response);
            
        }
    }
    
    static async boletos(data: RequestBoletosType): Promise<ResponseBoletosType> {
        return await api.get('/api/v1/bot/boletos', {
            params: data
        })
    }
}