import mongoose from "mongoose"
const {Schema} = mongoose;
const categorySchema = new Schema({
    name: String,
    createdAt : {type: Date, default: Date.now}
});
export const CategoryModel = mongoose.model('Category', categorySchema);
