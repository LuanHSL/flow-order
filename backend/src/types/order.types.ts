export type OrderStatus = 'paid' | 'producing' | 'done' | 'delivered';

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  createdAt: string;
}
