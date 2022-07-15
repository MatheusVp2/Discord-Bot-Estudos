
import { OptionsType } from "../types/optionsType";
import Client from "./Client";

export class Command {

    private client: Client;
    private name: string;
    private description: string;
    private options: string;

    constructor(client: Client, options: OptionsType) {
        this.client = client;
        this.name = options.name;
        this.description = options.description;
        this.options = options.options;
    }

}