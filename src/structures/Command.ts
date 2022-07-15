
import { OptionsType } from "../types/OptionsType";
import Client from "./Client";

export class Command {

    public client: Client;
    public name: string;
    public description: string;
    public options: any;

    constructor(client: Client, options: OptionsType ) {
        this.client = client;
        this.name = options.name;
        this.description = options.description;
        this.options = options.options;
    }

}