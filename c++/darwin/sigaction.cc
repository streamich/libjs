// g++ ./c++/darwin/sigaction.cc -o ./build/sigaction && ./build/sigaction
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
#include <signal.h>

using namespace std;

typedef void (*callback)(int);

int main() {

    struct sigaction sa;
    int offset = 0;
    int size = 0;

    std::cout << "const sigaction = Struct.define(" << sizeof(sa) << ", [" << endl;

    size = sizeof(sa.sa_handler);
    std::cout << "    [" << offset << ", " << "uintXX" << ", " << "'handler'], // " << size << endl;

    offset += size;

    size = sizeof(sa.sa_mask);
    std::cout << "    [" << offset << ", " << "uintXX" << ", " << "'mask'], // " << size << endl;

    offset += size;

    size = sizeof(sa.sa_flags);
    std::cout << "    [" << offset << ", " << "uintXX" << ", " << "'flags'], // " << size << endl;

    std::cout << "]);" << endl << endl;
    std::cout << "export default sigaction;\n" << endl;

    return 0;
}
