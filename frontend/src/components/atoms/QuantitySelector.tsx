import { useState } from 'react';

interface QuantitySelectorProps {
  initialQuantity?: number;
  onChange?: (quantity: number) => void;
}

export default function QuantitySelector({ initialQuantity = 0, onChange }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const update = (newQty: number) => {
    setQuantity(newQty);
    onChange?.(newQty);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => update(Math.max(0, quantity - 1))}
        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 font-bold transition-colors cursor-pointer text-lg leading-none"
      >
        −
      </button>
      <span className="w-6 text-center font-semibold text-gray-800 text-sm tabular-nums">
        {quantity}
      </span>
      <button
        onClick={() => update(quantity + 1)}
        className="w-8 h-8 rounded-lg bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white font-bold transition-colors cursor-pointer text-lg leading-none"
      >
        +
      </button>
    </div>
  );
}
