// Type definitions for web-serial with exports to support angular applicaitons
// Forked from: https://wicg.github.io/serial
// Original Definitions by: Reilly Grant <https://github.com/reillyeon>
// Minimum TypeScript Version: 4.1

/*~ https://wicg.github.io/serial/#dom-paritytype */
export type ParityType = 'none' | 'even' | 'odd';

/*~ https://wicg.github.io/serial/#dom-flowcontroltype */
export type FlowControlType = 'none' | 'hardware';

/*~ https://wicg.github.io/serial/#dom-serialoptions */
export interface SerialOptions {
    baudRate: number;
    dataBits?: number | undefined;
    stopBits?: number | undefined;
    parity?: ParityType | undefined;
    bufferSize?: number | undefined;
    flowControl?: FlowControlType | undefined;
}

/*~ https://wicg.github.io/serial/#dom-serialoutputsignals */
export interface SerialOutputSignals {
    dataTerminalReady?: boolean | undefined;
    requestToSend?: boolean | undefined;
    break?: boolean | undefined;
}

/*~ https://wicg.github.io/serial/#dom-serialinputsignals */
export  interface SerialInputSignals {
    dataCarrierDetect: boolean;
    clearToSend: boolean;
    ringIndicator: boolean;
    dataSetReady: boolean;
}

/*~ https://wicg.github.io/serial/#serialportinfo-dictionary */
export interface SerialPortInfo {
    usbVendorId?: number | undefined;
    usbProductId?: number | undefined;
}

/*~ https://wicg.github.io/serial/#dom-serialport */
export declare class SerialPort extends EventTarget {
    onconnect: ((this: this, ev: Event) => any) | null;
    ondisconnect: ((this: this, ev: Event) => any) | null;
    readonly readable: ReadableStream<Uint8Array> | null;
    readonly writable: WritableStream<Uint8Array> | null;

    open(options: SerialOptions): Promise<void>;
    setSignals(signals: SerialOutputSignals): Promise<void>;
    getSignals(): Promise<SerialInputSignals>;
    getInfo(): SerialPortInfo;
    close(): Promise<void>;
    forget(): Promise<void>;

    addEventListener(
        type: 'connect' | 'disconnect',
        listener: (this: this, ev: Event) => any,
        useCapture?: boolean): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject | null,
        options?: boolean | AddEventListenerOptions): void;
    removeEventListener(
        type: 'connect' | 'disconnect',
        callback: (this: this, ev: Event) => any,
        useCapture?: boolean): void;
    removeEventListener(
        type: string,
        callback: EventListenerOrEventListenerObject | null,
        options?: EventListenerOptions | boolean): void;
}

/*~ https://wicg.github.io/serial/#dom-serialportfilter */
export interface SerialPortFilter {
    usbVendorId?: number | undefined;
    usbProductId?: number | undefined;
}

/*~ https://wicg.github.io/serial/#dom-serialportrequestoptions */
export interface SerialPortRequestOptions {
    filters?: SerialPortFilter[] | undefined;
}

/*~ https://wicg.github.io/serial/#dom-serial */
export declare class Serial extends EventTarget {
    onconnect: ((this: this, ev: Event) => any) | null;
    ondisconnect: ((this: this, ev: Event) => any) | null;

    getPorts(): Promise<SerialPort[]>;
    requestPort(options?: SerialPortRequestOptions): Promise<SerialPort>;
    addEventListener(
        type: 'connect' | 'disconnect',
        listener: (this: this, ev: Event) => any,
        useCapture?: boolean): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject | null,
        options?: boolean | AddEventListenerOptions): void;
    removeEventListener(
        type: 'connect' | 'disconnect',
        callback: (this: this, ev: Event) => any,
        useCapture?: boolean): void;
    removeEventListener(
        type: string,
        callback: EventListenerOrEventListenerObject | null,
        options?: EventListenerOptions | boolean): void;
}

/*~ https://wicg.github.io/serial/#extensions-to-the-navigator-interface */
export interface Navigator {
    readonly serial: Serial;
}

/*~ https://wicg.github.io/serial/#extensions-to-workernavigator-interface */
export interface WorkerNavigator {
    readonly serial: Serial;
}
