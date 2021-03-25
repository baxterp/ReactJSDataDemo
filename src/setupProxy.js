  
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/getproducts'],
    createProxyMiddleware({
      target: 'http://brpsoft.co.uk/services2/products',
      changeOrigin: true,
      pathRewrite: {
        '^/getproducts': '',
      },
    })
  );
};