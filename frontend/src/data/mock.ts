export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Hambúrgueres', icon: '🍔' },
  { id: 2, name: 'Pizzas', icon: '🍕' },
  { id: 3, name: 'Bebidas', icon: '🥤' },
  { id: 4, name: 'Sobremesas', icon: '🍰' },
  { id: 5, name: 'Saladas', icon: '🥗' },
  { id: 6, name: 'Combos', icon: '🍱' },
  { id: 7, name: 'Massas', icon: '🍝' },
  { id: 8, name: 'Grelhados', icon: '🥩' },
  { id: 9, name: 'Petiscos', icon: '🍟' },
  { id: 10, name: 'Açaí', icon: '🫐' },
];

export const products: Product[] = [
  { id: 1, name: 'Classic Smash Burger', price: 29.90, image: '/images/products/burger.png' },
  { id: 2, name: 'Frango Grelhado', price: 32.90, image: '/images/products/pizza.png' },
  { id: 3, name: 'Pizza Pepperoni', price: 49.90, image: '/images/products/acai.png' },
  { id: 4, name: 'Caesar Salad', price: 24.90, image: '/images/products/burger.png' },
  { id: 5, name: 'Açaí Bowl', price: 19.90, image: '/images/products/acai.png' },
  { id: 6, name: 'Batata Frita', price: 14.90, image: '/images/products/pizza.png' },
  { id: 7, name: 'Coca-Cola 600ml', price: 9.90, image: '/images/products/burger.png' },
  { id: 8, name: 'Milkshake Oreo', price: 16.90, image: '/images/products/acai.png' },
  { id: 9, name: 'Brownie Especial', price: 12.90, image: '/images/products/pizza.png' },
];
