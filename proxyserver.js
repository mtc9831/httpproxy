var http = require('http'),
    httpProxy = require('http-proxy');

httpProxy.createProxyServer({target:'http://54.214.57.240:81'}).listen(80);