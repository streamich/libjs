// g++ ./c++/darwin/MAP.cc -o ./build/MAP && ./build/MAP
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
    std::cout << "const MAP = {" << endl;
    std::cout << "    FILE: " << MAP_FILE  << "," << endl;
    std::cout << "    SHARED: " << MAP_SHARED  << "," << endl;
    std::cout << "    PRIVATE: " << MAP_PRIVATE  << "," << endl;
    std::cout << "    ANON: " << MAP_ANON  << "," << endl;
    std::cout << "    ANONYMOUS: " << MAP_ANONYMOUS  << "," << endl;
    std::cout << "    FIXED: " << MAP_FIXED  << "," << endl;
    std::cout << "    NORESERVE: " << MAP_NORESERVE  << "," << endl;
    std::cout << "    HASSEMAPHORE: " << MAP_HASSEMAPHORE  << "," << endl;
    std::cout << "    NOCACHE: " << MAP_NOCACHE  << "," << endl;
    std::cout << "    FAILED: " << MAP_FAILED  << "," << endl;
    std::cout << "};" << endl;
    std::cout << endl;
    std::cout << "export default MAP;" << endl;

    return 0;
}

