// g++ ./c++/http.cc -o ./build/http && ./build/http
#include <iostream>
#include <sys/types.h>
#include <sys/socket.h>

int main () {
    int fd = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in addr;

	addr.sin_port = htons(80);
    addr.sin_family = AF_INET;

    std::cout << fd << std::endl;
}
