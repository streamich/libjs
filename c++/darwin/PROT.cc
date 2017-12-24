// g++ ./c++/darwin/PROT.cc -o ./build/PROT && ./build/PROT
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


using namespace std;

int main() {
    std::cout << "const PROT = {" << endl;
    std::cout << "    NONE: " << PROT_NONE  << "," << endl;
    std::cout << "    READ: " << PROT_READ  << "," << endl;
    std::cout << "    WRITE: " << PROT_WRITE  << "," << endl;
    std::cout << "    EXEC: " << PROT_EXEC  << "," << endl;
    std::cout << "};" << endl;
    std::cout << endl;
    std::cout << "export default PROT;" << endl;

    return 0;
}

