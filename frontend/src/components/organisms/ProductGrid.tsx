import { products } from '../../data/mock';
import ProductCard from '../molecules/ProductCard';

export default function ProductGrid() {
  return (
    <section className="flex-1 overflow-y-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Produtos</h1>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
