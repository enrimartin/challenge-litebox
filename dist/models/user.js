"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const device_1 = require("./device");
const subscription_web_1 = require("./subscription-web");
class User {
    constructor(props) {
        var _a;
        this.deviceLimit = props.deviceLimit || 0;
        this.devices = ((_a = props.devices) === null || _a === void 0 ? void 0 : _a.length) ? props.devices.map(device => new device_1.Device(device)) : [];
        this.email = props.email || '';
        this.id = props.id || '';
        this.language = props.language || '';
        this.name = props.name || '';
        this.password = props.password || '';
        this.subscriptionWeb = new subscription_web_1.SubscriptionWeb(props.subscriptionWeb);
    }
}
exports.User = User;
//# sourceMappingURL=../../src/dist/models/user.js.map