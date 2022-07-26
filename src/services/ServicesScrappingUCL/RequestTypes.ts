export type RequestRegisterType = {
    email: string
    password: string
    discord_id: string
    send_email: boolean
}

export type RequestLogarType = {
    email: string
    password: string
    discord_id: string
}

export type RequestNotasType = {
    discord_id: string
}

export type RequestDeleteType = {
    discord_id: string
}

export type RequestBoletosType = {
    discord_id: string
}

export type RequestAulasType = {
    discord_id: string
}