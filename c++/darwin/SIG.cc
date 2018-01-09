// g++ ./c++/darwin/SIG.cc -o ./build/SIG && ./build/SIG
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

    std::cout << "const SIG = {" << endl;
    std::cout << "    HUP: " << SIGHUP  << ", /* hangup */" << endl;
    std::cout << "    INT: " << SIGINT  << ", /* interrupt */" << endl;
    std::cout << "    ILL: " << SIGILL  << ", /* illegal instruction (not reset when caught) */" << endl;
    std::cout << "    TRAP: " << SIGTRAP  << ", /* trace trap (not reset when caught) */" << endl;
    std::cout << "    ABRT: " << SIGABRT  << ", /* abort() */" << endl;
    std::cout << "    IOT: " << SIGIOT  << ", /* compatibility */" << endl;
    std::cout << "    EMT: " << SIGEMT  << ", /* EMT instruction */" << endl;
    std::cout << "    FPE: " << SIGFPE  << ", /* floating point exception */" << endl;
    std::cout << "    KILL: " << SIGKILL  << ", /* kill (cannot be caught or ignored) */" << endl;
    std::cout << "    BUS: " << SIGBUS  << ", /* bus error */" << endl;
    std::cout << "    SEGV: " << SIGSEGV  << ", /* segmentation violation */" << endl;
    std::cout << "    SYS: " << SIGSYS  << ", /* bad argument to system call */" << endl;
    std::cout << "    PIPE: " << SIGPIPE  << ", /* write on a pipe with no one to read it */" << endl;
    std::cout << "    ALRM: " << SIGALRM  << ", /* alarm clock */" << endl;
    std::cout << "    TERM: " << SIGTERM  << ", /* software termination signal from kill */" << endl;
    std::cout << "    URG: " << SIGURG  << ", /* urgent condition on IO channel */" << endl;
    std::cout << "    STOP: " << SIGSTOP  << ", /* sendable stop signal not from tty */" << endl;
    std::cout << "    TSTP: " << SIGTSTP  << ", /* stop signal from tty */" << endl;
    std::cout << "    CONT: " << SIGCONT  << ", /* continue a stopped process */" << endl;
    std::cout << "    CHLD: " << SIGCHLD  << ", /* to parent on child stop or exit */" << endl;
    std::cout << "    TTIN: " << SIGTTIN  << ", /* to readers pgrp upon background tty read */" << endl;
    std::cout << "    TTOU: " << SIGTTOU  << ", /* like TTIN for output if (tp->t_local&LTOSTOP) */" << endl;
    std::cout << "    IO: " << SIGIO  << ", /* input/output possible signal */" << endl;
    std::cout << "    XCPU: " << SIGXCPU  << ", /* exceeded CPU time limit */" << endl;
    std::cout << "    XFSZ: " << SIGXFSZ  << ", /* exceeded file size limit */" << endl;
    std::cout << "    VTALRM: " << SIGVTALRM  << ", /* virtual time alarm */" << endl;
    std::cout << "    PROF: " << SIGPROF  << ", /* profiling time alarm */" << endl;
    std::cout << "    WINCH: " << SIGWINCH  << ", /* window size changes */" << endl;
    std::cout << "    INFO: " << SIGINFO  << ", /* information request */" << endl;
    std::cout << "    USR1: " << SIGUSR1  << ", /* user defined signal 1 */" << endl;
    std::cout << "    USR2: " << SIGUSR2  << ", /* user defined signal 2 */" << endl;

    std::cout << "    DFL: " << SIG_DFL  << "," << endl;
    std::cout << "    IGN: " << SIG_IGN  << "," << endl;
    std::cout << "    HOLD: " << SIG_HOLD  << "," << endl;
    std::cout << "    ERR: " << SIG_ERR  << "," << endl;

    std::cout << "};" << endl;
    std::cout << endl;
    std::cout << "export default SIG;" << endl;

    return 0;
}
