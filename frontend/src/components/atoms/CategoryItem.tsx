import type { Category } from '../../data/mock';

interface CategoryItemProps {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
}

export default function CategoryItem({ category, isSelected, onClick }: CategoryItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200
        cursor-pointer select-none shrink-0
        ${isSelected
          ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 scale-[1.02]'
          : 'bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
        }
      `}
    >
      <span className="text-2xl leading-none">{category.icon}</span>
      <span className="font-semibold text-sm truncate">{category.name}</span>
    </button>
  );
}
