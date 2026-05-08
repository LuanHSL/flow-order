import type { OrderStatus } from '../../data/mock';

interface ActionButtonProps {
  label: string;
  icon: string;
  variant: OrderStatus;
  onClick?: () => void;
}

const variantClasses: Record<string, string> = {
  paid: 'bg-amber-500 hover:bg-amber-600 text-white',
  producing: 'bg-emerald-500 hover:bg-emerald-600 text-white',
  done: 'bg-indigo-500 hover:bg-indigo-600 text-white',
};

export default function ActionButton({ label, icon, variant, onClick }: ActionButtonProps) {
  const classes = variantClasses[variant] ?? 'bg-gray-200 hover:bg-gray-300 text-gray-700';

  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl
        text-xs font-semibold transition-all duration-200 cursor-pointer
        active:scale-[0.97] ${classes}
      `}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}
