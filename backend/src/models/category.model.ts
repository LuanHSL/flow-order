import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  slug: string;
  image_url: string;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image_url: { type: String, required: true }
}, {
  timestamps: true
});

export const CategoryModel = mongoose.model<ICategory>('Category', CategorySchema);
