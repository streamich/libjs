import {TArg, number64} from "./types";

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
}
