"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const user_1 = require("./models/user");
const oldUsers = [];
class App {
    constructor() {
    }
    static parseUsers(parserUsers) {
        const users = oldUsers.map(oldUser => {
            var _a, _b, _c;
            const newUser = {
                id: oldUser.id,
                email: oldUser.email,
                name: oldUser.name,
                language: oldUser.lang,
                deviceLimit: +oldUser.deviceLimit,
                password: oldUser.password,
                subscriptionWeb: {
                    active: !!oldUser.statusSubscription,
                    trialPeriodEndDate: oldUser.trialPeriodEnd,
                    activeSinceDate: oldUser.active_since_date.toString(),
                    coupon: (_a = oldUser.charge) === null || _a === void 0 ? void 0 : _a.coupon.name,
                    invoiceId: parseInt((_b = oldUser.charge) === null || _b === void 0 ? void 0 : _b.id),
                    productId: (_c = oldUser.charge) === null || _c === void 0 ? void 0 : _c.sku
                },
                devices: oldUser.devices
            };
            return new user_1.User(newUser);
        });
        console.log(users);
    }
}
exports.App = App;
//# sourceMappingURL=../src/dist/app.js.map