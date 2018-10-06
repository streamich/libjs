export interface StaticBuffer extends Buffer {
}

export type TBuffer = Buffer | StaticBuffer;

export type number64 = [number, number];
export type TNumber = number | number64;

export type TCallbackTyped<T> = (result: T) => void;
export type TCallback = TCallbackTyped<number>;
export type TCallbackWithError <E, T> = (err?: E, result?: T) => void;

export type TAddress = TNumber | TBuffer | ArrayBuffer | Uint8Array;
export type TArg = TNumber | string | TBuffer | Uint8Array | ArrayBuffer;
