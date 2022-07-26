export type ResponseRegisterType = {
    message: string
}

export type ResponseLogarType = {
    message: string
}

export type ResponseNotasType = NotasType | NotasType[]

type NotasType = {
    periodo: string
    aulas: {
        materia: string
        professor: {
            nome: string
            email: string
        }
        chip: {
            situacao: string
            carga_horaria: string
            faltas: string
            media: string
        }
        avaliacao: {
            grupo: string
            data: string
            avaliacao: string
            peso: string
            nota: string
        }[]
    }[]
}

export type ResponseDeleteType = {
    discord_id: string
}

export type ResponseBoletosType = {
	boletos: [
		{
			ocorrencia: string,
			processamento: string,
			vencimento: string,
			valor: string,
			boleto?: string
		}
	]
}

export type ResponseAulasType = {
    materia: string
    professor: string
    semana: string
    horario: string
    sala: string
}[]

