import mongoose from "mongoose"
const { Schema } = mongoose;
const ProjectSchema = new Schema({
    name: String,
    image: [{
        type: String,
    }],
    location: String,
    description: String,
    createdAt: { type: Date, default: Date.now }
});
export const ProjectModel = mongoose.model('project', ProjectSchema);
