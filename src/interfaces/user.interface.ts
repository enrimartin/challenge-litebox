import { Device } from "models/device";
import { IDevice } from "./device.interface";
import { ISubscriptionWeb } from "./subscription-web.interface";

export interface IUser {
    deviceLimit: number;
    id: string;
    email: string;
    language: string;
    name: string;
    subscriptionWeb: ISubscriptionWeb;
    devices: Device[];
    password: string;

}