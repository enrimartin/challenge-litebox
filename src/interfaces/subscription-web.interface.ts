export interface ISubscriptionWeb {
    active: boolean;
    activeSinceDate: string;
    productId: string;
    trialPeriodEndDate: string;
    invoiceId: number;
    coupon: string;
}