import { CategoryModel } from "../models/categorySchema.js";
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
export const getByIdProject = async (req, res) => {
    try {
        const { projectId } = req.params
        const project = await ProjectModel.findById(projectId);
        //console.log(project);
        res.status(200).send(project)
    } catch (error) {
        res.send(error.message)
    }
}
export const getAllProjects = async (req, res) => {
    try {
        const project = await ProjectModel.find();
        res.send(project).status(200)
    } catch (error) {
        res.send(error.message)
    }
}
export const postProject = async (req, res) => {
    try {
        const { name, image, location, description } = req.body;
        // console.log(name, image, description, country, delivery, categoryId);

        // let category = await CategoryModel.find({ _id: categoryId })
        // console.log("category", category[0].name);
        // category = category[0].name
        const newProject = new ProjectModel({ name, image, location, description });
        await newProject.save();
        res.send(newProject);
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