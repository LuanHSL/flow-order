import type { OrderStatus } from '../../data/mock';

interface StatusBadgeProps {
  status: OrderStatus;
}

const config: Record<OrderStatus, { label: string; classes: string; dotClass: string }> = {
  paid: {
    label: 'Pago',
    classes: 'bg-blue-100 text-blue-700',
    dotClass: 'bg-blue-500',
  },
  producing: {
    label: 'Em produção',
    classes: 'bg-amber-100 text-amber-700',
    dotClass: 'bg-amber-500',
  },
  done: {
    label: 'Finalizado',
    classes: 'bg-emerald-100 text-emerald-700',
    dotClass: 'bg-emerald-500 animate-pulse',
  },
  ready: {
    label: 'Pronto',
    classes: 'bg-emerald-100 text-emerald-700',
    dotClass: 'bg-emerald-500 animate-pulse',
  },
  delivered: {
    label: 'Entregue',
    classes: 'bg-gray-100 text-gray-500',
    dotClass: 'bg-gray-400',
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { label, classes, dotClass } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${classes}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
      {label}
    </span>
  );
}
