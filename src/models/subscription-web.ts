import { ISubscriptionWeb } from "interfaces/subscription-web.interface";

export class SubscriptionWeb implements ISubscriptionWeb{
    active: boolean;
    activeSinceDate: string;
    coupon: string;
    invoiceId: number;
    productId: string;
    trialPeriodEndDate: string;

    constructor(props: ISubscriptionWeb) {
        this.active = props.active || false;
        this.activeSinceDate = props.activeSinceDate || '';
        this.coupon = props.coupon || '';
        this.invoiceId = props.invoiceId || 0;
        this.productId = props.productId || '';
        this.trialPeriodEndDate = props.trialPeriodEndDate || '';
    }
}