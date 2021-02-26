import { ISubscriptionWeb } from "interfaces/subscription-web.interface";
import { IUser } from "interfaces/user.interface";
import { Device } from "./device";
import { SubscriptionWeb } from "./subscription-web";
import { IDevice } from "../interfaces/device.interface";

export class User implements IUser {
    deviceLimit: number;
    devices: IDevice[];
    email: string;
    id: string;
    language: string;
    name: string;
    password: string;
    subscriptionWeb: ISubscriptionWeb;

    constructor(props: IUser) {
        this.deviceLimit = props.deviceLimit || 0;
        this.devices = props.devices?.length ? props.devices.map(device => new Device(device)) : [];
        this.email = props.email || '';
        this.id = props.id || '';
        this.language = props.language || '';
        this.name = props.name || '';
        this.password = props.password || '';
        this.subscriptionWeb = new SubscriptionWeb(props.subscriptionWeb);
    }
}
