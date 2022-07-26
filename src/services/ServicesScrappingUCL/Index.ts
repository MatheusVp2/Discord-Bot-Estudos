import { api } from './../api';
import { RequestAulasType, RequestBoletosType, RequestDeleteType, RequestNotasType, RequestRegisterType } from "./RequestTypes";
import { ResponseAulasType, ResponseBoletosType, ResponseDeleteType, ResponseLogarType, ResponseNotasType, ResponseRegisterType } from "./ResponseTypes";

export class RequisicoesService {

    constructor(){}

    async logar({  discord_id }: RequestNotasType): Promise<ResponseLogarType> {
        return await api.post('/api/v1/bot/login', {
            discord_id
        }).then(item => {
            return item.data
        })
        .catch(error => {
            console.log(error);
            
            return error.response.data
        })
    }
    
    async registrar(data: RequestRegisterType): Promise<ResponseRegisterType> {
        return await api.post('/api/v1/bot/register', data)
            .then(item => {
                return item.data
            })
            .catch(error => {
                return error.response.data
            })
    }

    async delete( { discord_id } : RequestDeleteType): Promise<ResponseDeleteType> {
        return await api.post('/api/v1/bot/delete', {
            discord_id
        }).then(item => {
            return item.data
        })
        .catch(error => {
            return error.response.data
        })
    }

    async notas(data: RequestNotasType): Promise<ResponseNotasType> {
        return await api.get('/api/v1/bot/notas', {
            params: data
        }).then(item => {
            return item.data
        })
        .catch(error => {
            return error.response.data
        })
    }

    async horarios(data: RequestAulasType): Promise<ResponseAulasType[]> {
        return await api.get('/api/v1/bot/horarios', {
            params: data
        }).then(item => {
            return item.data
        })
        .catch(error => {
            return error.response.data
        })
    }
    
    async boletos(data: RequestBoletosType): Promise<ResponseBoletosType> {
        return await api.get('/api/v1/bot/boletos', {
            params: data
        }).then(item => {
            return item.data
        })
        .catch(error => {
            return error.response.data
        })
    }
}