const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer();
const servers = [
  { target: "http://localhost:3001" },
  { target: "http://localhost:3002" },
];
let currentServer = 0;

const server = http.createServer((req, res) => {
  currentServer = (currentServer + 1) % servers.length;
  proxy.web(req, res, servers[currentServer]);
});

server.listen(3000, () => {
  console.log("Load balancer is running on port 3000");
});
