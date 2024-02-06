import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()
const port = 3030

app.use(express.json())
app.use(cors());

const productSchema = new mongoose.Schema({
    name: String,
    image: String
});

const Product = mongoose.model('Kitten', productSchema);



app.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
})


app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/', async (req, res) => {
    try {
        const { name, image } = req.body;
        const newProduct = new Product({ name, image });
        await newProduct.save();
        res.send(newProduct);
    } catch (error) {
        res.send(error.message);
    }
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/user', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})



mongoose.connect('mongodb+srv://arzu:arzu@cluster0.9p2kmwb.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})