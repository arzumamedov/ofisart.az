import { CategoryModel } from "../models/categorySchema.js";
import { ProductModel } from "../models/productSchema.js"

export const getProductsByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params
        console.log(categoryId);
        const product = await ProductModel.find({ categoryId: categoryId })
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
}
export const getByIdProducts = async (req, res) => {
    try {
        const { productId } = req.params
        const product = await ProductModel.findById(productId);
        //console.log(product);
        res.status(200).send(product)
    } catch (error) {
        res.send(error.message)
    }
}
export const getAllProducts = async (req, res) => {
    try {
        const product = await ProductModel.find();
        res.send(product).status(200)
    } catch (error) {
        res.send(error.message)
    }
}
export const postProduct = async (req, res) => {
    try {
        const { name, image, description, country, delivery, categoryId } = req.body;
        console.log(name, image, description, country, delivery, categoryId);

        let category = await CategoryModel.find({ _id: categoryId })
        console.log("category", category[0].name);
        category = category[0].name
        const newProduct = new ProductModel({ name, image, description, country, delivery, category, categoryId });
        await newProduct.save();
        res.send(newProduct);
    } catch (error) {
        res.send(error.message);
    }
}
export const deleteProduct = async (req, res) => {
    // const { id } = req.params;

    // try {
    //     const product = await ProductModel.findByIdAndDelete(id);
    //     if (!product) {
    //         return res.status(404).json({ error: 'Product not found' });
    //     }
    //     await product.deleteOne();
    //     res.status(200).json({ message: 'Product deleted successfully' });
    // } catch (error) {
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }
    try {
        const { id } = req.params;
        const product = await ProductModel.findByIdAndDelete(id)
        res.send(product)

    } catch (error) {
        res.send(error.message)
    }
}

export const updateProductById = async (req, res) => {
    const { id } = req.params;
    const { image, name, description, counrty, delivery, category } =
        req.body;
    try {
        const product = await ProductModel.findByIdAndUpdate(id, {
            name,
            image,
            description,
            counrty,
            delivery,
            category,
        });
        res.send(product);
    } catch (error) {
        res.send(error.message);
    }
};