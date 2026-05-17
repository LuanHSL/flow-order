import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  image: string;
  categoryId: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  categoryId: { type: String, required: true }
}, {
  timestamps: true
});

export const ProductModel = mongoose.model<IProduct>('Product', ProductSchema);
