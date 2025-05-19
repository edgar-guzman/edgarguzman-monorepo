import cors from 'cors';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const apiProxyV1 = createProxyMiddleware({
  target: 'http://localhost:3008'
});

const app = express();

app.use(express.json());

app.use(cors());

app.use('/v1', apiProxyV1);

app.listen(process.env.PORT ?? 3002);
