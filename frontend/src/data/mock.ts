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

export type OrderStatus = 'paid' | 'producing' | 'done' | 'delivered' | 'ready';

export interface OrderItem {
  name: string;
  quantity: number;
}

export interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  items: OrderItem[];
  status: OrderStatus;
  createdAt: string;
  total: number;
}

export const orders: Order[] = [
  {
    id: 1,
    orderNumber: '#001',
    customerName: 'João Silva',
    items: [
      { name: 'Classic Smash Burger', quantity: 2 },
      { name: 'Coca-Cola 600ml', quantity: 2 },
    ],
    status: 'producing',
    createdAt: '14:02',
    total: 79.60,
  },
  {
    id: 2,
    orderNumber: '#002',
    customerName: 'Maria Souza',
    items: [
      { name: 'Pizza Pepperoni', quantity: 1 },
      { name: 'Açaí Bowl', quantity: 1 },
    ],
    status: 'producing',
    createdAt: '14:08',
    total: 69.80,
  },
  {
    id: 3,
    orderNumber: '#003',
    customerName: 'Carlos Mendes',
    items: [
      { name: 'Caesar Salad', quantity: 1 },
      { name: 'Milkshake Oreo', quantity: 1 },
      { name: 'Brownie Especial', quantity: 2 },
    ],
    status: 'producing',
    createdAt: '14:12',
    total: 67.60,
  },
  {
    id: 4,
    orderNumber: '#004',
    customerName: 'Ana Costa',
    items: [
      { name: 'Frango Grelhado', quantity: 1 },
      { name: 'Batata Frita', quantity: 1 },
    ],
    status: 'ready',
    createdAt: '13:45',
    total: 47.80,
  },
  {
    id: 5,
    orderNumber: '#005',
    customerName: 'Pedro Lima',
    items: [
      { name: 'Classic Smash Burger', quantity: 3 },
      { name: 'Coca-Cola 600ml', quantity: 3 },
    ],
    status: 'ready',
    createdAt: '13:50',
    total: 119.40,
  },
  {
    id: 6,
    orderNumber: '#006',
    customerName: 'Fernanda Rocha',
    items: [
      { name: 'Pizza Pepperoni', quantity: 2 },
    ],
    status: 'ready',
    createdAt: '13:55',
    total: 99.80,
  },
];

export const kitchenOrders: Order[] = [
  {
    id: 101,
    orderNumber: '#101',
    customerName: 'Lucas Ferreira',
    items: [
      { name: 'Classic Smash Burger', quantity: 2 },
      { name: 'Batata Frita', quantity: 1 },
    ],
    status: 'paid',
    createdAt: '14:20',
    total: 74.70,
  },
  {
    id: 102,
    orderNumber: '#102',
    customerName: 'Juliana Alves',
    items: [
      { name: 'Pizza Pepperoni', quantity: 1 },
      { name: 'Coca-Cola 600ml', quantity: 2 },
    ],
    status: 'paid',
    createdAt: '14:22',
    total: 69.70,
  },
  {
    id: 103,
    orderNumber: '#103',
    customerName: 'Rafael Santos',
    items: [
      { name: 'Açaí Bowl', quantity: 2 },
      { name: 'Brownie Especial', quantity: 1 },
    ],
    status: 'paid',
    createdAt: '14:25',
    total: 52.70,
  },
  {
    id: 104,
    orderNumber: '#104',
    customerName: 'João Silva',
    items: [
      { name: 'Classic Smash Burger', quantity: 2 },
      { name: 'Coca-Cola 600ml', quantity: 2 },
    ],
    status: 'producing',
    createdAt: '14:02',
    total: 79.60,
  },
  {
    id: 105,
    orderNumber: '#105',
    customerName: 'Maria Souza',
    items: [
      { name: 'Pizza Pepperoni', quantity: 1 },
      { name: 'Açaí Bowl', quantity: 1 },
    ],
    status: 'producing',
    createdAt: '14:08',
    total: 69.80,
  },
  {
    id: 106,
    orderNumber: '#106',
    customerName: 'Ana Costa',
    items: [
      { name: 'Frango Grelhado', quantity: 1 },
      { name: 'Batata Frita', quantity: 1 },
    ],
    status: 'done',
    createdAt: '13:45',
    total: 47.80,
  },
  {
    id: 107,
    orderNumber: '#107',
    customerName: 'Pedro Lima',
    items: [
      { name: 'Classic Smash Burger', quantity: 3 },
      { name: 'Coca-Cola 600ml', quantity: 3 },
    ],
    status: 'done',
    createdAt: '13:50',
    total: 119.40,
  },
  {
    id: 108,
    orderNumber: '#108',
    customerName: 'Fernanda Rocha',
    items: [
      { name: 'Pizza Pepperoni', quantity: 2 },
    ],
    status: 'delivered',
    createdAt: '13:20',
    total: 99.80,
  },
  {
    id: 109,
    orderNumber: '#109',
    customerName: 'Bruno Oliveira',
    items: [
      { name: 'Caesar Salad', quantity: 1 },
      { name: 'Milkshake Oreo', quantity: 1 },
    ],
    status: 'delivered',
    createdAt: '13:10',
    total: 41.80,
  },
];
