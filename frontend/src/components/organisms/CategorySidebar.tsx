import { useRef, useEffect, useCallback, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Category } from '../../data/mock';
import CategoryItem from '../atoms/CategoryItem';
import api from '../../lib/axios';

const SETS_COUNT = 15;
const middleSetIndex = Math.floor(SETS_COUNT / 2);

export default function CategorySidebar() {
  const navigate = useNavigate();
  const { categoryId: urlCategoryId } = useParams();
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  // Use URL categoryId if present, else undefined
  const [selectedId, setSelectedId] = useState<string | number | undefined>(urlCategoryId || undefined);
  const selectedIdRef = useRef(selectedId);
  const isAutoScrolling = useRef(false);
  const autoScrollTimeout = useRef<number | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    selectedIdRef.current = selectedId;
  }, [selectedId]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/categories');
        setCategories(response.data);
        if (response.data && response.data.length > 0) {
          const firstCat = response.data[0];
          const firstId = firstCat.id || (firstCat as any)._id;
          
          if (!urlCategoryId) {
             setSelectedId(firstId);
             navigate(`/products/${firstId}`, { replace: true });
          } else {
             // If there's an ID in URL, we want to scroll to that item initially.
             // We'll handle this in the initialized effect below.
          }
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const extendedCategories = useMemo(() => Array(SETS_COUNT).fill(categories).flat(), [categories]);
  const setSize = categories.length;

  const scrollToItem = useCallback((index: number, behavior: 'smooth' | 'instant' = 'smooth') => {
    const el = scrollRef.current;
    if (!el) return;

    const child = el.children[index] as HTMLElement;
    if (!child) return;

    const containerCenter = el.clientHeight / 2;
    const childCenter = child.offsetTop + child.offsetHeight / 2;
    const targetScroll = childCenter - containerCenter;

    if (behavior === 'smooth') {
      isAutoScrolling.current = true;
      el.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    } else {
      el.scrollTop = targetScroll;
    }
  }, []);

  useEffect(() => {
    if (setSize > 0 && !isInitialized.current) {
      isInitialized.current = true;
      
      let targetIndex = 0;
      if (urlCategoryId) {
        const catIndex = categories.findIndex(c => (c.id || (c as any)._id) == urlCategoryId);
        if (catIndex !== -1) {
          targetIndex = catIndex;
        }
      }

      const startIndex = setSize * middleSetIndex + targetIndex;
      setTimeout(() => {
        scrollToItem(startIndex, 'instant');
      }, 0);
    }
  }, [setSize, scrollToItem, categories, urlCategoryId]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || setSize === 0 || el.children.length < setSize * 2) return;

    const children = el.children;
    const containerCenter = el.scrollTop + el.clientHeight / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement;
      const childCenter = child.offsetTop + child.offsetHeight / 2;
      const distance = Math.abs(containerCenter - childCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }

    const centerCategory = extendedCategories[closestIndex];
    if (centerCategory) {
      const catId = centerCategory.id || (centerCategory as any)._id;
      if (catId !== selectedIdRef.current) {
        setSelectedId(catId);
        navigate(`/products/${catId}`, { replace: true });
      }
    }

    const singleSetHeight = (children[setSize] as HTMLElement).offsetTop - (children[0] as HTMLElement).offsetTop;
    const minScroll = singleSetHeight * (middleSetIndex - 1);
    const maxScroll = singleSetHeight * (middleSetIndex + 1);

    if (!isAutoScrolling.current) {
      if (el.scrollTop < minScroll) {
        el.scrollTop += singleSetHeight * 2;
      } else if (el.scrollTop > maxScroll) {
        el.scrollTop -= singleSetHeight * 2;
      }
    }

    if (autoScrollTimeout.current) window.clearTimeout(autoScrollTimeout.current);
    autoScrollTimeout.current = window.setTimeout(() => {
      isAutoScrolling.current = false;
      
      if (!scrollRef.current) return;
      const currentEl = scrollRef.current;
      
      if (currentEl.scrollTop < minScroll) {
        currentEl.scrollTop += singleSetHeight * 2;
      } else if (currentEl.scrollTop > maxScroll) {
        currentEl.scrollTop -= singleSetHeight * 2;
      }
    }, 150);

  }, [setSize, extendedCategories]);

  const handleItemClick = (index: number, catId: string | number) => {
    isAutoScrolling.current = true;
    setSelectedId(catId);
    scrollToItem(index, 'smooth');
  };

  if (categories.length === 0) {
    return (
      <aside className="w-56 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm flex flex-col h-full shrink-0">
        <h2 className="text-lg font-bold text-gray-800 mb-4 shrink-0">Categorias</h2>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-56 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm flex flex-col h-full shrink-0">
      <h2 className="text-lg font-bold text-gray-800 mb-4 shrink-0">Categorias</h2>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto scrollbar-hide flex flex-col gap-3 py-4 relative pointer-events-auto snap-y snap-mandatory"
      >
        {extendedCategories.map((cat, index) => {
          const catId = cat.id || (cat as any)._id;
          return (
            <CategoryItem
              key={`${catId}-${index}`}
              category={cat}
              isSelected={selectedId === catId}
              onClick={() => handleItemClick(index, catId)}
            />
          );
        })}
      </div>
    </aside>
  );
}
