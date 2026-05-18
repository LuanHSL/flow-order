import { useParams } from 'react-router-dom';
import CategorySidebar from '../organisms/CategorySidebar';
import ProductGrid from '../organisms/ProductGrid';
import CheckoutButton from '../molecules/CheckoutButton';

export default function ProductsTemplate() {
  const { categoryId } = useParams();

  return (
    <div className="flex h-screen bg-gray-100 p-4 gap-4">
      <CategorySidebar />
      <ProductGrid categoryId={categoryId} />
      <CheckoutButton />
    </div>
  );
}
