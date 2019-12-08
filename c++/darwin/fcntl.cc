// g++ ./c++/darwin/fcntl.cc -o ./build/fcntl && ./build/fcntl
#include <stdio.h>
#include <sys/fcntl.h>

int main(int argc, const char * argv[]) {
    fcntl(1, 1);
    printf("Hello, World!\n");
    return 0;
}
