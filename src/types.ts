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

export interface ILibSys {
  syscall(num: number, arg1?: TArg, arg2?: TArg, arg3?: TArg, arg4?: TArg, arg5?: TArg, arg6?: TArg): number;
  syscall64(num: number, arg1?: TArg, arg2?: TArg, arg3?: TArg, arg4?: TArg, arg5?: TArg, arg6?: TArg): number64;

  asyscall(num: number, callback: (res: number) => void);
  asyscall(num: number, arg1: TArg, callback: (res: number) => void);
  asyscall(num: number, arg1: TArg, arg2: TArg, callback: (res: number) => void);
  asyscall(num: number, arg1: TArg, arg2: TArg, arg3: TArg, callback: (res: number) => void);
  asyscall(num: number, arg1: TArg, arg2: TArg, arg3: TArg, arg4: TArg, callback: (res: number) => void);
  asyscall(num: number, arg1: TArg, arg2: TArg, arg3: TArg, arg4: TArg, arg5: TArg, callback: (res :number) => void);
  asyscall(num: number, arg1: TArg, arg2: TArg, arg3: TArg, arg4: TArg, arg5: TArg, arg6: TArg, callback: (res :number) => void);

  asyscall64(num: number, callback: (res: number64) => void);
  asyscall64(num: number, arg1: TArg, callback: (res: number64) => void);
  asyscall64(num: number, arg1: TArg, arg2: TArg, callback: (res: number64) => void);
  asyscall64(num: number, arg1: TArg, arg2: TArg, arg3: TArg, callback: (res: number64) => void);
  asyscall64(num: number, arg1: TArg, arg2: TArg, arg3: TArg, arg4: TArg, callback: (res: number64) => void);
  asyscall64(num: number, arg1: TArg, arg2: TArg, arg3: TArg, arg4: TArg, arg5: TArg, callback: (res :number64) => void);
  asyscall64(num: number, arg1: TArg, arg2: TArg, arg3: TArg, arg4: TArg, arg5: TArg, arg6: TArg, callback: (res :number64) => void);

  dlsym: (symbol: string) => [number, number];
  call64: (addr: [number, number], offset: number, args: number[]) => [number, number];
}
