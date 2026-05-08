import type { Order, OrderStatus } from '../../data/mock';
import StatusBadge from '../atoms/StatusBadge';
import ActionButton from '../atoms/ActionButton';

interface KitchenOrderCardProps {
  order: Order;
  onAdvance?: (orderId: number) => void;
}

const actionConfig: Partial<Record<OrderStatus, { label: string; icon: string; variant: OrderStatus }>> = {
  paid: { label: 'Iniciar Produção', icon: '🔥', variant: 'paid' },
  producing: { label: 'Finalizar', icon: '✅', variant: 'producing' },
  done: { label: 'Marcar Entregue', icon: '📦', variant: 'done' },
};

const cardStyles: Record<OrderStatus, string> = {
  paid: 'bg-blue-50/60 border border-blue-200',
  producing: 'bg-amber-50/60 border border-amber-200',
  done: 'bg-emerald-50/60 border-2 border-emerald-400 shadow-md shadow-emerald-500/10',
  delivered: 'bg-gray-50 border border-gray-200 opacity-75',
  ready: 'bg-emerald-50/60 border-2 border-emerald-400',
};

export default function KitchenOrderCard({ order, onAdvance }: KitchenOrderCardProps) {
  const action = actionConfig[order.status];

  return (
    <div className={`rounded-2xl p-4 transition-all duration-200 hover:shadow-md ${cardStyles[order.status]}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <span className="font-bold text-base text-gray-800">{order.orderNumber}</span>
          <StatusBadge status={order.status} />
        </div>
        <span className="text-xs text-gray-400 font-medium">{order.createdAt}</span>
      </div>

      {/* Customer */}
      <p className="text-sm text-gray-500 mb-2.5">{order.customerName}</p>

      {/* Items */}
      <ul className="space-y-1 mb-3">
        {order.items.map((item, i) => (
          <li key={i} className="flex items-center justify-between text-xs">
            <span className="text-gray-600">{item.name}</span>
            <span className="font-semibold text-gray-500 tabular-nums">x{item.quantity}</span>
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between mb-3">
        <span className="text-xs text-gray-400">Total</span>
        <span className="font-bold text-sm text-gray-800">
          R$ {order.total.toFixed(2).replace('.', ',')}
        </span>
      </div>

      {/* Action */}
      {action && (
        <ActionButton
          label={action.label}
          icon={action.icon}
          variant={action.variant}
          onClick={() => onAdvance?.(order.id)}
        />
      )}
    </div>
  );
}
