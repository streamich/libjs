export const noop = () => {};


export type Toffset = number;
export type Tmethod = (Toffset) => number;
export type TStructDefinition = {[s: string]: [Toffset, Tmethod]};
export type TStructParsed = {[s: string]: number};
export function parseStruct(buf: Buffer, definition): any {
    var result: any = {};
    for(var prop in definition) {
        var [offset, method] = definition[prop];
        result[prop] = method.call(buf, offset);
    }
    return result;
}

export const buffer = (size: number) => Buffer.allocUnsafe(size);

export const bufferFrom = (from: string[] | number[]) => Buffer.from(from);
