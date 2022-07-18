import axios from "axios";

export class RequisicoesService {
    async register(email:string, password: string) {
        return axios.get('/api/v1/');
    }
}