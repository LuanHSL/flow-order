import type { Product } from '../../data/mock';
import { useCartStore } from '../../stores/useCartStore';

interface QuantitySelectorProps {
  product: Product;
}

export default function QuantitySelector({ product }: QuantitySelectorProps) {
  const quantity = useCartStore((s) => s.items.get(product.id)?.quantity ?? 0);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => removeItem(product.id)}
        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 font-bold transition-colors cursor-pointer text-lg leading-none"
      >
        −
      </button>
      <span className="w-6 text-center font-semibold text-gray-800 text-sm tabular-nums">
        {quantity}
      </span>
      <button
        onClick={() => addItem(product)}
        className="w-8 h-8 rounded-lg bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white font-bold transition-colors cursor-pointer text-lg leading-none"
      >
        +
      </button>
    </div>
  );
}
