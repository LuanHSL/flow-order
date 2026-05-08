import type { Order } from '../../data/mock';
import StatusBadge from '../atoms/StatusBadge';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const isReady = order.status === 'ready';

  return (
    <div
      className={`
        rounded-2xl p-5 transition-all duration-200
        ${isReady
          ? 'bg-emerald-50 border-2 border-emerald-400 shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/15'
          : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`font-bold text-lg ${isReady ? 'text-emerald-700' : 'text-gray-800'}`}>
            {order.orderNumber}
          </span>
          <StatusBadge status={order.status} />
        </div>
        <span className="text-xs text-gray-400 font-medium">{order.createdAt}</span>
      </div>

      {/* Customer */}
      <p className="text-sm text-gray-500 mb-3">{order.customerName}</p>

      {/* Items */}
      <ul className="space-y-1.5 mb-4">
        {order.items.map((item, i) => (
          <li key={i} className="flex items-center justify-between text-sm">
            <span className="text-gray-700">{item.name}</span>
            <span className={`font-semibold tabular-nums ${isReady ? 'text-emerald-600' : 'text-gray-500'}`}>
              x{item.quantity}
            </span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className={`
        pt-3 border-t flex items-center justify-between
        ${isReady ? 'border-emerald-200' : 'border-gray-100'}
      `}>
        <span className="text-xs text-gray-400 font-medium">Total</span>
        <span className={`font-bold text-base ${isReady ? 'text-emerald-600' : 'text-gray-800'}`}>
          R$ {order.total.toFixed(2).replace('.', ',')}
        </span>
      </div>
    </div>
  );
}
