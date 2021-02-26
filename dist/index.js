"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const fs = require('fs').promises;
const path = require("path");
const user_1 = require("./models/user");
const mocksDir = path.resolve(__dirname, '../mocks');
async function parse() {
    console.log('Reading file...');
    const file = await fs.readFile(mocksDir + '/old-users.json');
    const oldUsers = JSON.parse(file.toString('UTF-8'));
    console.log('Parsing old users...');
    const users = oldUsers.map(oldUser => {
        var _a, _b, _c, _d;
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
                coupon: (_b = (_a = oldUser.charge) === null || _a === void 0 ? void 0 : _a.coupon) === null || _b === void 0 ? void 0 : _b.name,
                invoiceId: parseInt((_c = oldUser.charge) === null || _c === void 0 ? void 0 : _c.id),
                productId: (_d = oldUser.charge) === null || _d === void 0 ? void 0 : _d.sku
            },
            devices: oldUser.devices ? JSON.parse(oldUser.devices) : []
        };
        return new user_1.User(newUser);
    });
    return users;
}
parse()
    .then(async (users) => {
    console.log('Writing users...');
    return fs.writeFile(mocksDir + '/new-users.json', JSON.stringify(users));
})
    .then(() => {
    console.log(`The old users has been parsed and created on ${mocksDir}/new-users.json`);
})
    .catch(console.log);
//# sourceMappingURL=../src/dist/index.js.map