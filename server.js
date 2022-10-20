

var http = require('http');
//mengimport library http dari node_modeuls, lib http untuk menangani protokol http

var server = http.createServer(function(req, res){
    res.end("Hi, selamat datang di node js");
});
//Server yang kita buat, akan merespon dengan "Hi, selamat datang di nodejs" saat diakses oleh client.

server.listen(8000);
//kita menentukan nomer port yang akan digunakan oleh server:

console.log("server runing on http://localhost:8000");
//yang akan tampil d terminal