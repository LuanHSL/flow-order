import { useRef, useEffect, useCallback, useState } from 'react';
import { categories } from '../../data/mock';
import CategoryItem from '../atoms/CategoryItem';

export default function CategorySidebar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState(categories[0].id);
  const isResetting = useRef(false);

  // Triple the list for infinite casino-style scrolling
  const tripleCategories = [...categories, ...categories, ...categories];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Measure actual height of one full set of items
    const children = el.children;
    const setSize = categories.length;
    let singleSetHeight = 0;
    for (let i = 0; i < setSize && i < children.length; i++) {
      singleSetHeight += (children[i] as HTMLElement).offsetHeight;
    }
    // Account for gap (8px = gap-2)
    singleSetHeight += (setSize - 1) * 8;

    // Start at the middle copy
    el.scrollTop = singleSetHeight + 8;
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isResetting.current) return;

    const children = el.children;
    const setSize = categories.length;
    let singleSetHeight = 0;
    for (let i = 0; i < setSize && i < children.length; i++) {
      singleSetHeight += (children[i] as HTMLElement).offsetHeight;
    }
    singleSetHeight += (setSize - 1) * 8;

    const scrollTop = el.scrollTop;
    const threshold = singleSetHeight * 0.3;

    if (scrollTop < threshold) {
      isResetting.current = true;
      el.scrollTop = scrollTop + singleSetHeight;
      requestAnimationFrame(() => { isResetting.current = false; });
    } else if (scrollTop > singleSetHeight * 2 + threshold) {
      isResetting.current = true;
      el.scrollTop = scrollTop - singleSetHeight;
      requestAnimationFrame(() => { isResetting.current = false; });
    }
  }, []);

  return (
    <aside className="w-56 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm flex flex-col h-full">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Categorias</h2>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-2"
      >
        {tripleCategories.map((cat, index) => (
          <CategoryItem
            key={`${cat.id}-${index}`}
            category={cat}
            isSelected={selectedId === cat.id}
            onClick={() => setSelectedId(cat.id)}
          />
        ))}
      </div>
    </aside>
  );
}
