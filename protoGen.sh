echo "Generating proto files!!!"
protoc -I=packages/grpc a.proto --js_out=import_style=commonjs:apps/web/src/grpc --grpc-web_out=import_style=typescript,mode=grpcwebtext:apps/web/src/grpc
echo "Generating types!!!"
./node_modules/@grpc/proto-loader/build/bin/proto-loader-gen-types.js  --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=./apps/server/src/generated ./packages/grpc/a.proto