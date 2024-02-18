import mongoose from 'mongoose';
const { Schema } = mongoose;
const adminSchema = new Schema({
  username: String,
  password:String,
  role:{ type: String, default: "ADMIN"},
  createdAt: { type: Date, default: Date.now }

});
export const AdminModel = mongoose.model('Admin', adminSchema);
