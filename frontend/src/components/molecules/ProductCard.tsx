import type { Product } from '../../data/mock';
import QuantitySelector from '../atoms/QuantitySelector';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group">
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-gray-800 text-sm mb-1 truncate" title={product.name}>
        {product.name}
      </h3>
      <p className="text-orange-500 font-bold text-lg mb-3">
        R$ {product.price.toFixed(2).replace('.', ',')}
      </p>
      <div className="mt-auto flex justify-center">
        <QuantitySelector />
      </div>
    </div>
  );
}
