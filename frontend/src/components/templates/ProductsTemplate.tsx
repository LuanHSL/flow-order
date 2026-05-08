import CategorySidebar from '../organisms/CategorySidebar';
import ProductGrid from '../organisms/ProductGrid';

export default function ProductsTemplate() {
  return (
    <div className="flex h-screen bg-gray-100 p-4 gap-4">
      <CategorySidebar />
      <ProductGrid />
    </div>
  );
}
