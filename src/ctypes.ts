

// https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes


// Copy-pasted from:
// 
//  - http://stackoverflow.com/questions/19213148/javascript-convert-a-52-bit-integer-to-20-bit-and-32-bit-integers
export class UInt64 {

    static hi(a: number, lo: number = UInt64.lo(a)): number {
        var hi = a - lo;
        hi /= 4294967296;
        if ((hi < 0) || (hi >= 1048576)) throw Error (`Not an int52: ${a}`);
        return hi;
    }

    static lo(a: number): number {
        var lo = a | 0;
        if (lo < 0) lo += 4294967296;
        return lo;
    }

    // static join(high, low): UInt64 {
    //
    // }

    static joinToNumber(hi: number, lo: number): number {
        // if ((lo !== lo|0) && (lo !== (lo|0) + 4294967296))  throw new Error ("lo out of range: "+lo);
        // if ((hi !== hi|0) && hi >= 1048576)                 throw new Error ("hi out of range: "+hi);

        if (lo < 0) lo += 4294967296;
        return hi * 4294967296 + lo;
    }
}

