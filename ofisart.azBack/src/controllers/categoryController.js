import { CategoryModel } from "../models/categorySchema.js";


export const getCategory = async (req, res) => {
    try {
        const category = await CategoryModel.find();
        console.log(category);
        res.send(category).status(200);
    } catch (error) {
        console.log(error);
    }
}
export const postCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new CategoryModel({ name });
        await newCategory.save();
        res.send(newCategory);
    } catch (error) {
        console.log(error);
    }
}