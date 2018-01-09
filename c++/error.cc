// g++ ./c++/error.cc -o ./build/error && ./build/error
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


int main() {
    long SYS_WRITE = 0x2000004;
    long STDOUT = 1;

    long result;
    char* str = "Hello world";

    __asm__ __volatile__ (
        "syscall;\n"
        : "=a" (result)
        : "a" (SYS_WRITE), "D" (STDOUT), "S" (str), "d" (10)
        :
    );

    std::cout << result << endl;

    return 0;
}
