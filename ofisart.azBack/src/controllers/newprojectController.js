import { CategoryModel } from "../models/categorySchema.js";
import { NewProductModel } from "../models/newproductSchema.js";
import { ProductModel } from "../models/productSchema.js";
import { ProjectModel } from "../models/projectSchema.js";

// export const getProjectsByCategory = async (req, res) => {
//     try {
//         const { categoryId } = req.params
//         console.log(categoryId);
//         const product = await ProductModel.find({ categoryId: categoryId })
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// }
export const getByIdNewProduct = async (req, res) => {
    try {
        const { newproductId } = req.params
        const newproduct = await NewProductModel.findById(newproductId);
        //console.log(project);
        res.status(200).send(newproduct)
    } catch (error) {
        res.send(error.message)
    }
}
export const getAllNewProducts = async (req, res) => {
    try {
        const newproduct = await NewProductModel.find();
        res.send(newproduct).status(200)
    } catch (error) {
        res.send(error.message)
    }
}
export const postNewProduct = async (req, res) => {
    try {
        const { name, image, location, description } = req.body;
        // console.log(name, image, description, country, delivery, categoryId);

        // let category = await CategoryModel.find({ _id: categoryId })
        // console.log("category", category[0].name);
        // category = category[0].name
        const newNewProduct = new ProjectModel({ name, image, location, description });
        await newNewProduct.save();
        res.send(newNewProduct);
    } catch (error) {
        res.send(error.message);
    }
}
// export const deleteProject = async (req, res) => {

//     try {
//         const { id } = req.params;
//         const product = await ProductModel.findByIdAndDelete(id)
//         res.send(product)

//     } catch (error) {
//         res.send(error.message)
//     }
// }