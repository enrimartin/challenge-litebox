import 'reflect-metadata';
const fs = require('fs').promises;
import * as path from 'path';
import { IUser } from "./interfaces/user.interface";
import { User } from "./models/user";

const mocksDir = path.resolve(__dirname, '../mocks');

async function parse(): Promise<IUser[]> {
    console.log('Reading file...');
    const file = await fs.readFile(mocksDir + '/old-users.json');
    const oldUsers = JSON.parse(file.toString('UTF-8'));

    console.log('Parsing old users...');
    const users = oldUsers.map(oldUser => {
        const newUser: IUser = {
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
                coupon: oldUser.charge?.coupon?.name,
                invoiceId: parseInt(oldUser.charge?.id),
                productId: oldUser.charge?.sku
            },
            devices: oldUser.devices? JSON.parse(oldUser.devices) : []
        };

        return new User(newUser);
    });
    return users;
}

parse()
    .then(async users => {
        console.log('Writing users...');
        return fs.writeFile(mocksDir + '/new-users.json', JSON.stringify(users));
    })
    .then(() => {
        console.log(`The old users has been parsed and created on ${mocksDir}/new-users.json`);
    })
    .catch(console.log);





