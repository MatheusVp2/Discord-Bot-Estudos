import axios from "axios";
import { Message } from "discord.js";

const urlBase = 'https://api-scraping.herokuapp.com'

var emojis = ['😎','😀','😂','😃','🐵'];
export async function recebeMensagemDM(mensagem:Message) {
	const textMensagem = mensagem.content.slice(5,mensagem.content.length)
    reajirMensagem(mensagem, emojis);
	
	console.log('antes if');
	console.log(textMensagem);
	if (textMensagem.split(' ')[0] === 'logar') {
		console.log('entrou logar');
		
		const login = textMensagem.split(' ')[1];
		const senha = textMensagem.split(' ')[2];
		var token;
		var notas;
		try {
			token = (await logarWebAluno(login, senha)).data.token;
			notas = (await getNotas(token)).data.periodo;
			console.log('notas');
			console.log(notas);
			
		} catch (error) {
			console.log(error);
			
		}
		
		mensagem.author.send(notas ?? 'sem dados retornados');
		return;
	}


    
}
export async function recebeMensagemChanel(mensagem:Message) {
    reajirMensagem(mensagem, emojis);
}

async function logarWebAluno(login:string, senha: string) {
	var options = {
		method: 'POST',
		url: urlBase+'/auth',
		headers: {'Content-Type': 'application/json'},
		data: {LOGIN: login, SENHA: senha}
	  };
	  
	  return axios.request(options);
}

async function getNotas(token:string) {
	var options = {
		method: 'GET',
		url: urlBase+'/notas',
		headers: {
		  'x-access-token': token,
		  'Content-Type': 'application/json'
		}
	  };
	  
	  return axios.request(options);
}

async function reajirMensagem(mensagem:Message, emojis: Array<string>) {
    return emojis.map(async (emoji) => {
        (await mensagem).react(emoji);
    });
}