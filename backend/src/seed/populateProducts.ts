import { ProductModel } from '../models/product.model.js';
import { CategoryModel } from '../models/category.model.js';

export default async function populateCategory() {
    try {
        const categories = await CategoryModel.find();
        const productList: any[] = [];

        categories.forEach((category) => {
            for (let i = 1; i < 4; i++) {
                productList.push({
                    name: `Product ${i}`,
                    price: 10 * i,
                    image: "image.jpg",
                    categoryId: category._id,
                });
            }
        });

        await ProductModel.insertMany(productList);
        console.log("Products populated successfully");
    } catch (error) {
        console.error("Error populating products:", error);
    }
}