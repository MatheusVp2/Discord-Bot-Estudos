
import { OptionsType } from "../types/OptionsType";
import Client from "./Client";

export class Event {

    protected client: Client;
    protected name: string;

    constructor(client: Client, options: OptionsType) {
        this.client = client;
        this.name = options.name;
    }
}
