declare const StaticBuffer;

interface StaticBuffer extends Buffer {

}

type TBuffer = Buffer | StaticBuffer;

type number64 = [number, number];
type TNumber = number | number64;

type TCallbackTyped<T> = (result: T) => void;
type TCallback = TCallbackTyped<number>;
type TCallbackWithError <E, T> = (err?: E, result?: T) => void;

type TAddress = TNumber | TBuffer | ArrayBuffer | Uint8Array;
type TArg = TNumber | string | TBuffer | Uint8Array | ArrayBuffer;

declare module NodeJS {
    export interface Process {
        loop: any; // Main event loop

        // Whether `process` has `frame()` and `call()` methods.
        hasBinaryUtils: boolean;

        syscall(num:number): number;
        syscall(num:number, arg1:TArg): number;
        syscall(num:number, arg1:TArg, arg2:TArg): number;
        syscall(num:number, arg1:TArg, arg2:TArg, arg3:TArg): number;
        syscall(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg): number;
        syscall(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg, arg5:TArg): number;
        syscall(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg, arg5:TArg, arg6:TArg): number;

        syscall64(num:number): number64;
        syscall64(num:number, arg1:TArg): number64;
        syscall64(num:number, arg1:TArg, arg2:TArg): number64;
        syscall64(num:number, arg1:TArg, arg2:TArg, arg3:TArg): number64;
        syscall64(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg): number64;
        syscall64(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg, arg5:TArg): number64;
        syscall64(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg, arg5:TArg, arg6:TArg): number64;

        asyscall(num:number, callback:(res:number) => void);
        asyscall(num:number, arg1:TArg, callback:(res:number) => void);
        asyscall(num:number, arg1:TArg, arg2:TArg, callback:(res:number) => void);
        asyscall(num:number, arg1:TArg, arg2:TArg, arg3:TArg, callback:(res:number) => void);
        asyscall(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg, callback:(res:number) => void);
        asyscall(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg, arg5:TArg, callback:(res:number) => void);
        asyscall(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg, arg5:TArg, arg6:TArg, callback:(res:number) => void);

        asyscall64(num:number, callback:(res:number64) => void);
        asyscall64(num:number, arg1:TArg, callback:(res:number64) => void);
        asyscall64(num:number, arg1:TArg, arg2:TArg, callback:(res:number64) => void);
        asyscall64(num:number, arg1:TArg, arg2:TArg, arg3:TArg, callback:(res:number64) => void);
        asyscall64(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg, callback:(res:number64) => void);
        asyscall64(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg, arg5:TArg, callback:(res:number64) => void);
        asyscall64(num:number, arg1:TArg, arg2:TArg, arg3:TArg, arg4:TArg, arg5:TArg, arg6:TArg, callback:(res:number64) => void);
    }
}
