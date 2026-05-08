import type { Order } from '../../data/mock';
import KitchenOrderCard from '../molecules/KitchenOrderCard';

interface KitchenColumnProps {
  title: string;
  icon: string;
  orders: Order[];
  accentColor: string;
  borderColor: string;
  badgeClasses: string;
  onAdvance?: (orderId: number) => void;
}

export default function KitchenColumn({
  title,
  icon,
  orders,
  accentColor,
  borderColor,
  badgeClasses,
  onAdvance,
}: KitchenColumnProps) {
  return (
    <section className="flex-1 flex flex-col min-w-0 bg-white/50 backdrop-blur-sm rounded-2xl p-4">
      {/* Column header */}
      <div className={`flex items-center gap-2.5 mb-4 pb-3 border-b-2 ${borderColor}`}>
        <span className="text-xl">{icon}</span>
        <h2 className={`text-sm font-bold uppercase tracking-wide ${accentColor}`}>
          {title}
        </h2>
        <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded-full ${badgeClasses}`}>
          {orders.length}
        </span>
      </div>

      {/* Cards */}
      <div className="flex-1 overflow-y-auto space-y-3 scrollbar-hide">
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-gray-300">
            <span className="text-3xl mb-1">📭</span>
            <p className="text-xs font-medium">Nenhum pedido</p>
          </div>
        ) : (
          orders.map((order) => (
            <KitchenOrderCard
              key={order.id}
              order={order}
              onAdvance={onAdvance}
            />
          ))
        )}
      </div>
    </section>
  );
}
