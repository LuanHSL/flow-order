import { CategoryModel } from '../models/category.model.js';

export default async function populateCategory() {
    try {
        await CategoryModel.insertMany([
            { name: "Hambúrgueres", slug: "hamburger", image_url: "image.jpg" },
            { name: "Lanches", slug: "lanches", image_url: "image.jpg" },
            { name: "Bebidas", slug: "bebidas", image_url: "image.jpg" },
            { name: "Porções", slug: "porcoes", image_url: "image.jpg" },
            { name: "Sobremesas", slug: "sobremesas", image_url: "image.jpg" },
            { name: "Combos", slug: "combos", image_url: "image.jpg" },
            { name: "Adicionais", slug: "adicionais", image_url: "image.jpg" },
            { name: "Outros", slug: "outros", image_url: "image.jpg" },
        ]);
        console.log("Categories populated successfully");
    } catch (error) {
        console.error("Error populating categories:", error);
    }
}