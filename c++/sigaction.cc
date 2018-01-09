// g++ ./c++/sigaction.cc -o ./build/sigaction && ./build/sigaction
#include <stdio.h>
#include <signal.h>
#include <unistd.h>
#include <sys/syscall.h>

void
termination_handler (int signum)
{
    printf("Hello");
}

int
main (void)
{
    struct sigaction new_action, old_action;

    /* Set up the structure to specify the new action. */
    new_action.sa_handler = termination_handler;
    // sigemptyset (&new_action.sa_mask);
    new_action.sa_mask = 0;
    new_action.sa_flags = 0;

    sigaction (SIGINT, &new_action, 0);
    // syscall(SYS_sigaction, SIGINT, &new_action, 0);

    sleep(5);

    printf(" world\n");

    return 0;

}
