import { IDevice } from "interfaces/device.interface";

export class Device implements IDevice {
    id: string;
    model: string;

    constructor(props: IDevice) {
        this.id = props.id || '';
        this.model = props.model || '';
    }
}