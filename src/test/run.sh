set -e

echo "getpid";
ts-node src/test/getpid.test.ts

echo "open";
ts-node src/test/open.test.ts

echo "close";
ts-node src/test/close.test.ts

echo "write";
ts-node src/test/write.test.ts

echo "access";
ts-node src/test/access.test.ts

echo "stat":
ts-node src/test/access.test.ts
