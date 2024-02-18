import mongoose from 'mongoose';
const { Schema } = mongoose;
const productSchema = new Schema({
  name: String,
  image: [{
    type: String,
  }],
  description: String,
  country: String,
  delivery: String,
  category: String,//
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
  createdAt: { type: Date, default: Date.now }//

});
export const ProductModel = mongoose.model('Product', productSchema);
