import { useState, useEffect } from 'react';
import ProductCard from '../molecules/ProductCard';
import api from '../../lib/axios';
import type { Product } from '../../data/mock';

interface ProductGridProps {
  categoryId?: string;
}

export default function ProductGrid({ categoryId }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!categoryId) {
      setProducts([]);
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/products/${categoryId}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <section className="flex-1 overflow-y-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Produtos</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-3 gap-5">
          {products.map((product) => {
            const productId = product.id || (product as any)._id;
            return <ProductCard key={productId} product={product} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
          <span className="text-gray-400 text-lg font-medium">Nenhum produto encontrado para esta categoria.</span>
        </div>
      )}
    </section>
  );
}
