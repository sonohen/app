// nodeのコアモジュールのhttpを使う
var http = require("http");
var server = http.createServer();

server.on("request", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hi there this is a test");
  res.end();
});

// サーバを待ち受け状態にする
// 第1引数: ポート番号
// 第2引数: IPアドレス
server.listen(3000);

exports.calculate = function (num1, num2) {
  return num1 + num2;
}