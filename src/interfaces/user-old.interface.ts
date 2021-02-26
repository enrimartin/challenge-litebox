import { IDevice } from "./device.interface";

export interface IOldUser{
    active_since_date?: number;
    email?: string;
    password?: string;
    status?: number;
    statusSubscription?: number;
    token?: string;
    id?: string;
    name?: string;
    charge?: {
        amount: string,
        coupon: {
            discount: string,
            name: string
        },
        date: string,
        due: string,
        id: string,
        isTrial: number,
        recurringAmount: number,
        renewPeriod: string,
        sku: string,
        status: string
    };
    deviceLimit?: string,
    devices?: IDevice[],
    graceInterval?: number;
    gracePeriod?: number;
    manualLimit?: number;
    passwordToken?: string;
    lang?: string;
    trialPeriodEnd?: string;

}
