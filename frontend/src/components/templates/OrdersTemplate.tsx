import { orders } from '../../data/mock';
import OrderColumn from '../organisms/OrderColumn';

export default function OrdersTemplate() {
  const producingOrders = orders.filter((o) => o.status === 'producing');
  const readyOrders = orders.filter((o) => o.status === 'ready');

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-6">
      {/* Page header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Pedidos</h1>
        <p className="text-sm text-gray-400 mt-1">Acompanhe o status dos pedidos em tempo real</p>
      </header>

      {/* Two-column layout */}
      <div className="flex-1 flex gap-6 min-h-0">
        <OrderColumn
          title="Em Produção"
          icon="🔥"
          orders={producingOrders}
        />
        <OrderColumn
          title="Prontos para Entrega"
          icon="✅"
          orders={readyOrders}
          highlight
        />
      </div>
    </div>
  );
}
