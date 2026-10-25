import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  // Proxy API requests to bypass CORS
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://botbridge.co.in/backend/api',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
      secure: true,
    })
  );

  app.listen(3000, '0.0.0.0', () => console.log('Server running on port 3000'));
}

startServer();
