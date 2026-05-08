import type { Server } from 'socket.io';

export function registerOrderEvents(io: Server) {
  const namespace = io.of('/orders');

  namespace.on('connection', (socket) => {
    console.log(`[Orders] Client connected: ${socket.id}`);

    socket.on('order:list', () => {
      // TODO: return all orders
    });

    socket.on('order:getById', (_id: string) => {
      // TODO: return order by id
    });

    socket.on('order:create', (_data: unknown) => {
      // TODO: create order and emit to all
    });

    socket.on('order:updateStatus', (_data: { id: string; status: string }) => {
      // TODO: update order status and emit to all
    });

    socket.on('disconnect', () => {
      console.log(`[Orders] Client disconnected: ${socket.id}`);
    });
  });
}
