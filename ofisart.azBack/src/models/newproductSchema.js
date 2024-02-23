import mongoose from "mongoose"
const { Schema } = mongoose;
const NewProductSchema = new Schema({
    name: String,
    image: [{
        type: String,
    }],
    description: String,
    country: String,
    delivery: String,
    category: String,
});
export const NewProductModel = mongoose.model('newproduct', NewProductSchema);
