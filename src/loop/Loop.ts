import {TArg, TCallback} from "../types";

export interface Loop {
  asyscall:
    | ((num: number, callback: TCallback) => void)
    | ((num: number, a: TArg, callback: TCallback) => void)
    | ((num: number, a: TArg, b: TArg, callback: TCallback) => void)
    | ((num: number, a: TArg, b: TArg, c: TArg, callback: TCallback) => void)
    | ((num: number, a: TArg, b: TArg, c: TArg, d: TArg, callback: TCallback) => void)
    | ((num: number, a: TArg, b: TArg, c: TArg, d: TArg, e: TArg, callback: TCallback) => void)
    | ((num: number, a: TArg, b: TArg, c: TArg, d: TArg, e: TArg, f: TArg, callback: TCallback) => void);
}
