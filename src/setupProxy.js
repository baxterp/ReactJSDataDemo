  
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

  app.use(
    ['/flickrapi'],
    createProxyMiddleware({
      target: 'https://api.flickr.com/services/rest',
      changeOrigin: true,
      pathRewrite: {
        '^/flickrapi': '',
      },
    })
  );

  app.use(
    ['/flickrapi2'],
    createProxyMiddleware({
      target: 'https://api.flickr.com/services/feeds/photos_public.gne',
      changeOrigin: true,
      pathRewrite: {
        '^/flickrapi2': '',
      },
    })
  );

  app.use(
    ['/qrcodeapi'],
    createProxyMiddleware({
      target: 'https://api.qrserver.com/v1/create-qr-code/',
      changeOrigin: true,
      pathRewrite: {
        '^/qrcodeapi': '',
      },
    })
  );

};