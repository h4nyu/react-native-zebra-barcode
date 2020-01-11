import { NativeModules } from 'react-native';
const { RNZebraBarcode } = NativeModules;

export interface IDevice {
  name: string;
  address: string;
}
export const connect: (deviceName: string) => Promise<string> = RNZebraBarcode.connect;
export const disconnect: (deviceName: string) => Promise<string> = RNZebraBarcode.disconnect;
export const getAvailableDevices: () => Promise<Array<IDevice>> = RNZebraBarcode.getAvailableDevices;
export const aimOn: () => Promise<string> = RNZebraBarcode.aimOn;
export const aimOff: () => Promise<string> = RNZebraBarcode.aimOff;
