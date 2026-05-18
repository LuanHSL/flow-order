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
        snap-center
        w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300
        cursor-pointer select-none shrink-0 relative
        ${isSelected
          ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/40 scale-110 z-10 py-5'
          : 'bg-gray-50 text-gray-700 hover:bg-orange-50 hover:text-orange-600 opacity-60 scale-95'
        }
      `}
    >
      <span className={`text-3xl leading-none transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>{category.icon}</span>
      <span className={`text-sm truncate transition-all duration-300 ${isSelected ? 'font-bold text-base' : 'font-semibold'}`}>{category.name}</span>
    </button>
  );
}
