import { create } from 'zustand';
import type { Product } from '../data/mock';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: Map<number, CartItem>;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  setQuantity: (product: Product, quantity: number) => void;
  getQuantity: (productId: number) => number;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: new Map(),

  addItem: (product) => {
    set((state) => {
      const newItems = new Map(state.items);
      const existing = newItems.get(product.id);
      if (existing) {
        newItems.set(product.id, { ...existing, quantity: existing.quantity + 1 });
      } else {
        newItems.set(product.id, { product, quantity: 1 });
      }
      return { items: newItems };
    });
  },

  removeItem: (productId) => {
    set((state) => {
      const newItems = new Map(state.items);
      const existing = newItems.get(productId);
      if (existing && existing.quantity > 1) {
        newItems.set(productId, { ...existing, quantity: existing.quantity - 1 });
      } else {
        newItems.delete(productId);
      }
      return { items: newItems };
    });
  },

  setQuantity: (product, quantity) => {
    set((state) => {
      const newItems = new Map(state.items);
      if (quantity <= 0) {
        newItems.delete(product.id);
      } else {
        newItems.set(product.id, { product, quantity });
      }
      return { items: newItems };
    });
  },

  getQuantity: (productId) => {
    return get().items.get(productId)?.quantity ?? 0;
  },

  getTotalItems: () => {
    let total = 0;
    get().items.forEach((item) => {
      total += item.quantity;
    });
    return total;
  },

  getTotalPrice: () => {
    let total = 0;
    get().items.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  },

  clearCart: () => {
    set({ items: new Map() });
  },
}));
