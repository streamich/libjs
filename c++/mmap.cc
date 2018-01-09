// g++ ./c++/mmap.cc -o ./build/mmap && ./build/mmap
#include <iostream>
#include <stdint.h>
#include <string.h>
#include <unistd.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <sys/mman.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/mman.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
#include <string.h>
#include <time.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netdb.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <errno.h>
#include <arpa/inet.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <utime.h>
#include <sys/time.h>
#include <dirent.h>
#include <stdio.h>
#include <sys/dir.h>
#include <unistd.h>
#include <sys/syscall.h>
#include <sys/types.h>

using namespace std;

// syscallArgs         = [o.rax, o.rdi, o.rsi, o.rdx, o.r10, o.r8, o.r9];

inline long long int syscall3(long long int num, long long int arg1, long long int arg2, long long int arg3) {
    long long int result;

    __asm__ __volatile__ (
        "syscall"
        : "=a"(result)
        : "a"(num), "D"(arg1), "S"(arg2), "d"(arg3)
        :
    );

    return result;
}

inline long syscall6(long num, long arg1, long arg2, long arg3, long arg4, long arg5, long arg6) {
    long result;

    __asm__ __volatile__ (
        "movq %5, %%r10;\n"
        "movq %6, %%r8;\n"
        "movq %7, %%r9;\n"
        "syscall;\n"
        : "=a" (result)
        : "a" (num), "D" (arg1), "S" (arg2), "d" (arg3), "r" (arg4), "r" (arg5), "r" (arg6)
        : "%r10", "%r8", "%r9"
    );

    return result;
}

inline long sys3(long num, long arg1, long arg2, long arg3) {
    long result;

    __asm__ __volatile__ (
        "movq %1, %%rax;\n"
        "movq %2, %%rdi;\n"
        "movq %3, %%rsi;\n"
        "movq %4, %%rdx;\n"
        "syscall;\n"
        "movq %%rax, %0;\n"
        : "=r" (result)
        : "g" (num), "g" (arg1), "g" (arg2), "g" (arg3)
        : "%rdi", "%rsi", "%rdx"
    );

    return result;
}

inline long sys6(long num, long arg1, long arg2, long arg3, long arg4, long arg5, long arg6) {
    long result;

    __asm__ __volatile__ (
        "movq %1, %%rax;\n"
        "movq %2, %%rdi;\n"
        "movq %3, %%rsi;\n"
        "movq %4, %%rdx;\n"
        "movq %5, %%r10;\n"
        "movq %6, %%r8;\n"
        "movq %7, %%r9;\n"
        "syscall;\n"
        "movq %%rax, %0;\n"
        : "=a" (result)
        : "g" (num), "g" (arg1), "g" (arg2), "g" (arg3), "g" (arg4), "g" (arg5), "g" (arg6)
        : "%rdi", "%rsi", "%rdx", "%r10", "%r8", "%r9"
    );

    return result;
}

int main() {
    // int* addr = (int*) mmap(0, 100, 1 | 2, 2 | 4096, -1, 0);
//    int* addr = (int*) syscall6(0x2000000 + SYS_mmap, 0, 100, 1 | 2, 2 | 4096, -1, 0);
//    mmap(0, 100, 1 | 2, 2 | 4096, -1, 0);
//    long result;
//    asm volatile ("movq %%rax, %0;\n" : "=g" (result));


//    std::cout << addr << endl;

//    *addr = 25;

    std::cout << sys3(0x2000004, 1000, 0, 0) << endl;

    // char* str = "Hello world!";
//    std::cout << sys3(0x2000004, 1, (long) str, 11) << endl;
//    std::cout << syscall(0x2000004, 1, (long) str, 11) << endl;
//    std::cout << syscall(4, 1, (long) str, 11) << endl;
    // std::cout << syscall6(0x2000004, 1, (long) str, 11, 0, 0, 0) << endl;


    return 0;
}

//dtrace: error on enabled probe ID 2158 (ID 561: syscall::sysctl:return): invalid kernel access in action #10 at DIF offset 40
//ulock_wake(0x1, 0x7FFF5DE0A000, 0x0)             = -1 Err#2
//csops(0x8534, 0x7, 0x7FFF5DE09360)               = -1 Err#22
//mmap(0x0, 0x64, 0x3, 0x1002, 0xFFFFFFFF, 0x0)            = 0x101E2A000 0


