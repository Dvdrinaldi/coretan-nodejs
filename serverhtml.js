

var http = require('http');
//mengimport library http dari node_modeuls, lib http untuk menangani protokol http

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //Fungsi dari res.writeHead(200, {'Content-Type': 'text/html'}); adalah untuk menentukan response header.
    res.write('Hello <b>World</b>!');
    // fungsinya untuk menulis response body atau konten yang akan dikirim ke client.
    res.end();
    //Terakhir mengakhiri respon dengan res.end().
}).listen(8000);

console.log("server runing on http://localhost:8000");
//yang akan tampil d terminal