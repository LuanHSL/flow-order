import { useCartStore } from '../../stores/useCartStore';

export default function CheckoutButton() {
  const totalItems = useCartStore((s) => s.getTotalItems());
  const totalPrice = useCartStore((s) => s.getTotalPrice());

  if (totalItems === 0) return null;

  return (
    <button
      id="checkout-button"
      className="
        fixed bottom-0 left-0 w-full z-50
        bg-gradient-to-r from-orange-500 to-orange-600
        hover:from-orange-600 hover:to-orange-700
        active:from-orange-700 active:to-orange-800
        text-white font-bold text-lg
        py-5 px-6
        shadow-[0_-4px_20px_rgba(249,115,22,0.3)]
        transition-all duration-300
        cursor-pointer
        flex items-center justify-center gap-3
        animate-[slideUp_0.3s_ease-out]
      "
    >
      <span className="bg-white/20 rounded-full px-3 py-0.5 text-sm font-semibold">
        {totalItems} {totalItems === 1 ? 'item' : 'itens'}
      </span>
      <span>Finalizar compra</span>
      <span className="ml-auto font-extrabold text-xl">
        R$ {totalPrice.toFixed(2).replace('.', ',')}
      </span>
    </button>
  );
}
