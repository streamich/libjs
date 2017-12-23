import {IType} from './typebase';

export const NULL: number;
export const int8: IType;
export const uint8: IType;
export const int16: IType;
export const uint16: IType;
export const int32: IType;
export const uint32: IType;
export const int64: IType;
export const uint64: IType;
export type uint64 = [number, number];
export const size_t: IType;
export const time_t: IType;
export const pid_t: IType;
export const optval_t: IType;
export const pointer_t: IType;
export type pointer_t = uint64;
