import type { Order } from '../../data/mock';
import OrderCard from '../molecules/OrderCard';

interface OrderColumnProps {
  title: string;
  icon: string;
  orders: Order[];
  highlight?: boolean;
}

export default function OrderColumn({ title, icon, orders, highlight = false }: OrderColumnProps) {
  return (
    <section className="flex-1 flex flex-col min-w-0">
      {/* Column header */}
      <div className={`
        flex items-center gap-3 mb-5 pb-3 border-b-2
        ${highlight ? 'border-emerald-400' : 'border-gray-200'}
      `}>
        <span className="text-2xl">{icon}</span>
        <h2 className={`text-lg font-bold ${highlight ? 'text-emerald-700' : 'text-gray-700'}`}>
          {title}
        </h2>
        <span className={`
          ml-auto text-sm font-bold px-2.5 py-0.5 rounded-full
          ${highlight ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}
        `}>
          {orders.length}
        </span>
      </div>

      {/* Cards list */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-hide">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-gray-300">
            <span className="text-4xl mb-2">📭</span>
            <p className="text-sm font-medium">Nenhum pedido</p>
          </div>
        ) : (
          orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))
        )}
      </div>
    </section>
  );
}
