import type { Server } from 'socket.io';
import { registerOrderEvents } from './order.socket.js';

export function registerSocketHandlers(io: Server) {
  registerOrderEvents(io);

  io.on('connection', (socket) => {
    console.log(`[Socket] Client connected: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`[Socket] Client disconnected: ${socket.id}`);
    });
  });
}
