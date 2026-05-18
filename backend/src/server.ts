import 'dotenv/config';
import express from 'express';
import http from 'node:http';
import { Server } from 'socket.io';
import routes from './routes/index.js';
import { registerSocketHandlers } from './socket/index.js';
import { connectDatabase } from './database/index.js';
import cors from 'cors';

const PORT = Number(process.env.PORT) || 3001;

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ['Authorization', 'Content-Type', 'Accept'],
  credentials: true
}));

app.use(express.json());
app.use(routes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
  },
});

registerSocketHandlers(io);

server.listen(PORT, async () => {
  await connectDatabase();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 Socket.IO ready`);
  console.log(`🌐 Express routes active`);
});
