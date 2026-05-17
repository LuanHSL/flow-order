import { connectDatabase, disconnectDatabase } from "../database/index.js";
// import populateCategory from "./populateCategory.js";
import populateProducts from "./populateProducts.js";

async function runSeed() {
    console.log("------------------- runSeed -------------------");
    await connectDatabase();

    // await populateCategory();
    await populateProducts();

    await disconnectDatabase();
}

runSeed();