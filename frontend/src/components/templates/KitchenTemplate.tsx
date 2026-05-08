import { useState, useCallback } from 'react';
import type { Order, OrderStatus } from '../../data/mock';
import { kitchenOrders as initialOrders } from '../../data/mock';
import KitchenColumn from '../organisms/KitchenColumn';

const nextStatus: Partial<Record<OrderStatus, OrderStatus>> = {
  paid: 'producing',
  producing: 'done',
  done: 'delivered',
};

const columns = [
  {
    status: 'paid' as OrderStatus,
    title: 'Pagos',
    icon: '💳',
    accentColor: 'text-blue-600',
    borderColor: 'border-blue-400',
    badgeClasses: 'bg-blue-100 text-blue-700',
  },
  {
    status: 'producing' as OrderStatus,
    title: 'Em Produção',
    icon: '🔥',
    accentColor: 'text-amber-600',
    borderColor: 'border-amber-400',
    badgeClasses: 'bg-amber-100 text-amber-700',
  },
  {
    status: 'done' as OrderStatus,
    title: 'Finalizados',
    icon: '✅',
    accentColor: 'text-emerald-600',
    borderColor: 'border-emerald-400',
    badgeClasses: 'bg-emerald-100 text-emerald-700',
  },
  {
    status: 'delivered' as OrderStatus,
    title: 'Entregues',
    icon: '📦',
    accentColor: 'text-gray-500',
    borderColor: 'border-gray-300',
    badgeClasses: 'bg-gray-100 text-gray-500',
  },
];

export default function KitchenTemplate() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleAdvance = useCallback((orderId: number) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (order.id !== orderId) return order;
        const next = nextStatus[order.status];
        return next ? { ...order, status: next } : order;
      })
    );
  }, []);

  const grouped = columns.map((col) => ({
    ...col,
    orders: orders.filter((o) => o.status === col.status),
  }));

  const totalOrders = orders.length;

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-5">
      {/* Page header */}
      <header className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Cozinha</h1>
          <p className="text-sm text-gray-400 mt-0.5">Gerenciamento de pedidos em tempo real</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-sm">
            <span className="text-xs text-gray-400 font-medium">Total de pedidos</span>
            <span className="text-lg font-bold text-gray-800">{totalOrders}</span>
          </div>
        </div>
      </header>

      {/* 4-column pipeline */}
      <div className="flex-1 flex gap-4 min-h-0">
        {grouped.map((col) => (
          <KitchenColumn
            key={col.status}
            title={col.title}
            icon={col.icon}
            orders={col.orders}
            accentColor={col.accentColor}
            borderColor={col.borderColor}
            badgeClasses={col.badgeClasses}
            onAdvance={handleAdvance}
          />
        ))}
      </div>
    </div>
  );
}
