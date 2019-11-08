import {Arr} from '../../../typebase';
import {syscall, dlsym, call} from '../../../libsys';
import {SYS, F, FCNTL, IkeventStruct, NULL, keventStruct} from '../specification';

/*
MacBook Pro, 2.9 GHz Intel Core i9, macOS Mojave v10.14.5
Source: https://github.com/apple/darwin-xnu/blob/0a798f6738bc1db01281fc08ae024145e84df927/libsyscall/wrappers/cancelable/fcntl-base.c

_fcntl:
0000000000002a41        pushq   %rbp                            ; save base pointer
0000000000002a42        movq    %rsp, %rbp                      ; put stack pointer into base pointer
0000000000002a45        subq    $0xd0, %rsp                     ; subtract 26 bytes from stack pointer
0000000000002a4c        testb   %al, %al                        ; test against itself to set flags, if AND is 0, ZF is set to 1
0000000000002a4e        je      0x2a76                          ; skip next `movaps` operations, if ZP flag is 1
0000000000002a50        movaps  %xmm0, -0xa0(%rbp)              ; move data from XMM registers to stack
0000000000002a57        movaps  %xmm1, -0x90(%rbp)
0000000000002a5e        movaps  %xmm2, -0x80(%rbp)
0000000000002a62        movaps  %xmm3, -0x70(%rbp)
0000000000002a66        movaps  %xmm4, -0x60(%rbp)
0000000000002a6a        movaps  %xmm5, -0x50(%rbp)
0000000000002a6e        movaps  %xmm6, -0x40(%rbp)
0000000000002a72        movaps  %xmm7, -0x30(%rbp)
0000000000002a76        leaq    -0xd0(%rbp), %rax               ; move into AX address from BX
0000000000002a7d        movq    %r9, 0x28(%rax)                 ; move onto stack value from R9
0000000000002a81        movq    %r8, 0x20(%rax)                 ; move onto stack value from R9
0000000000002a85        movq    %rcx, 0x18(%rax)                ; move onto stack value from R9
0000000000002a89        movq    %rdx, 0x10(%rax)                ; move onto stack value from R9
0000000000002a8d        movq    %rax, -0x10(%rbp)               ; move RAX to stack
0000000000002a91        leaq    0x10(%rbp), %rax                ; move stack address to AX
0000000000002a95        movq    %rax, -0x18(%rbp)               ; save stack address onto stack
0000000000002a99        movabsq $0x3000000010, %rax    <---     ; move big number into AX
0000000000002aa3        movq    %rax, -0x20(%rbp)               ; move that big number onto stack
0000000000002aa7        leal    -0x2a(%rsi), %eax               ; move some number from SX into AX
0000000000002aaa        cmpl    $0x3a, %eax                     ; compare RAX to 58; ZF = 1 if equal, CF = 1 if RAX smaller, CF = 0 if RAX larger
0000000000002aad        ja      0x2af5                          ; jump if CF = 0 and ZF = 0 (RAX > 0x3a)
0000000000002aaf        movabsq $0x79f0212618ac587, %rcx        ; move large number into RCX
0000000000002ab9        btq     %rax, %rcx
0000000000002abd        jae     0x2af5
0000000000002abf        movslq  -0x20(%rbp), %rcx
0000000000002ac3        cmpq    $0x28, %rcx
0000000000002ac7        ja      0x2ad8
0000000000002ac9        movq    %rcx, %rax
0000000000002acc        addq    -0x10(%rbp), %rax
0000000000002ad0        leal    0x8(%rcx), %ecx
0000000000002ad3        movl    %ecx, -0x20(%rbp)
0000000000002ad6        jmp     0x2ae4
0000000000002ad8        movq    -0x18(%rbp), %rax
0000000000002adc        leaq    0x8(%rax), %rcx
0000000000002ae0        movq    %rcx, -0x18(%rbp)
0000000000002ae4        movq    (%rax), %rdx
0000000000002ae7        callq   ___fcntl
0000000000002aec        addq    $0xd0, %rsp
0000000000002af3        popq    %rbp
0000000000002af4        retq
0000000000002af5        leal    -0x7(%rsi), %eax                ; move value from stack into AX
0000000000002af8        cmpl    $0x4, %eax                      ; compare AX to 4
0000000000002afb        jb      0x2abf                          ; jump back
0000000000002afd        movslq  -0x20(%rbp), %rcx               ; move value from stack in CX
0000000000002b01        cmpq    $0x28, %rcx                     ; compare CX to 40
0000000000002b05        ja      0x2b16
0000000000002b07        movq    %rcx, %rax
0000000000002b0a        addq    -0x10(%rbp), %rax
0000000000002b0e        leal    0x8(%rcx), %ecx
0000000000002b11        movl    %ecx, -0x20(%rbp)
0000000000002b14        jmp     0x2b22
0000000000002b16        movq    -0x18(%rbp), %rax               ; move stack address into AX
0000000000002b1a        leaq    0x8(%rax), %rcx                 ; move value from stack into CX
0000000000002b1e        movq    %rcx, -0x18(%rbp)
0000000000002b22        movslq  (%rax), %rdx
0000000000002b25        jmp     0x2ae7
0000000000002b27        nop
___fcntl:
0000000000002b28        movl    $0x200005c, %eax
0000000000002b2d        movq    %rcx, %r10
0000000000002b30        syscall
0000000000002b32        jae     0x2b3c
0000000000002b34        movq    %rax, %rdi
0000000000002b37        jmp     _cerror
0000000000002b3c        retq
*/

// const fcntlAddress = dlsym('fcntl');

/**
 * 
 * @param fd 
 * @param cmd 
 * @param arg Use `0` if there is no `arg` argument.
 */
export function fcntl (fd: number, cmd: FCNTL | F, arg: number): number {
    // return call(fcntlAddress, 0, [fd, cmd, arg]);
    return syscall(SYS.fcntl, fd, cmd, arg);
}

// export function fcntlAsync (fd: number, cmd: FCNTL | F, arg: number, callback: TCallback) {
    // asyscall(SYS.fcntl, fd, cmd, arg, callback);
// }

const pipeAddr = dlsym('pipe');
export function pipe () {
    const buf = Buffer.allocUnsafe(8);
    const res = call(pipeAddr, 0, [buf as any]);
    return res === 0
        ? [buf.readInt32LE(0), buf.readInt32LE(4)]
        : res;
}

/**
 * In C.
 * 
 * ```c
 * int kqueue(void);
 * ```
 */
export function kqueue(): number {
    return syscall(SYS.kqueue);
}

export function __kevent(kq: number, changelist: Buffer | null, nchanges: number,        
        eventlist: Buffer, nevents: number, timeout: number): number {
    return syscall(SYS.kevent, kq, changelist || NULL, nchanges, eventlist || NULL, nevents, timeout);
}

/**
 * In C.
 * 
 * ```c
 * int kevent(int kq, const struct kevent *changelist, int nchanges,
 *      struct kevent *eventlist, int nevents, const struct timespec *timeout);
 * int kevent64(int kq, const struct kevent64_s *changelist, int nchanges, 
 *      struct kevent64_s *eventlist, int nevents, unsigned int flags, 
 *      const struct timespec *timeout);
 * ```
 * 
 * @param kq 
 * @param changelist 
 * @param nevents 
 * @param timeout 
 */
export function kevent(kq: number, changelist: IkeventStruct[], nevents: number, timeout: number): IkeventStruct[] | number {
    let changelistBuf: Buffer | null = null;
    let eventlistBuf: Buffer | null = null;
    let nchanges: number = 0;

    if (changelist && changelist.length) {
        nchanges = changelist.length;
        changelistBuf = new Buffer(keventStruct.size * nchanges);
    }

    if (nevents > 0) {
        eventlistBuf = new Buffer(nevents * keventStruct.size);
    }

    const res = __kevent(kq, changelistBuf, nchanges, eventlistBuf, nevents, timeout);

    if (res <= 0) return res;
    else  {
        const keventStructArr = Arr.define(keventStruct, res);
        const out: IkeventStruct[] = keventStructArr.unpack(eventlistBuf);
        return out;
    }
};

/**
 * EV_SET(&evSet, localFd, EVFILT_READ, EV_ADD, 0, 0, NULL);
 * 
 * #define EV_SET(kevp, a, b, c, d, e, f) do {	\
 *	struct kevent *__kevp__ = (kevp);	\
 *	__kevp__->ident = (a);			\
 *	__kevp__->filter = (b);			\
 *	__kevp__->flags = (c);			\
 *	__kevp__->fflags = (d);			\
 *	__kevp__->data = (e);			\
 *	__kevp__->udata = (f);			\
} while(0)
 */
export const EV_SET = (fd: number, filter: number, flags: number, fflags: number, data: [number, number], udata: [number, number]): Buffer => {
    const kevp: IkeventStruct = {
        ident: [fd, 0],
        filter,
        flags,
        fflags,
        data,
        udata,
    };
    const buf = keventStruct.pack(kevp);
    return buf;
};
