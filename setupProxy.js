const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  //add cookie
  app.all('/jf-platform-api/mng/*', function (req, res, next) {
    req.headers.cookie = 'JSESSIONID=' + '639FBA3647483411B5F24B83B9C35C98';
    next();
  });
  //proxy
  app.use(
    '/jf-platform-api/mng/*',
    createProxyMiddleware({
      target: 'http://test.jiajihua.163.com:7709',
      changeOrigin: true,
    })
  );
}
