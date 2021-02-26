"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionWeb = void 0;
class SubscriptionWeb {
    constructor(props) {
        this.active = props.active || false;
        this.activeSinceDate = props.activeSinceDate || '';
        this.coupon = props.coupon || '';
        this.invoiceId = props.invoiceId || 0;
        this.productId = props.productId || '';
        this.trialPeriodEndDate = props.trialPeriodEndDate || '';
    }
}
exports.SubscriptionWeb = SubscriptionWeb;
//# sourceMappingURL=../../src/dist/models/subscription-web.js.map