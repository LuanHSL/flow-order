import type { OrderStatus } from '../../data/mock';

interface StatusBadgeProps {
  status: OrderStatus;
}

const config: Record<OrderStatus, { label: string; classes: string }> = {
  producing: {
    label: 'Em produção',
    classes: 'bg-amber-100 text-amber-700',
  },
  ready: {
    label: 'Pronto',
    classes: 'bg-emerald-100 text-emerald-700',
  },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { label, classes } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${classes}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === 'ready' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
        }`}
      />
      {label}
    </span>
  );
}
