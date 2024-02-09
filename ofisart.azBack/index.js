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



const producttSchema = new mongoose.Schema({
    name: String,
    image: String
});
const Productt = mongoose.model('Productt', producttSchema);



const newproductSchema = new mongoose.Schema({
    name: String,
    image: String
});
const NewProduct = mongoose.model('Newproduct', newproductSchema);



app.get('/bestseller', async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/bestseller:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/bestseller', async (req, res) => {
    try {
        const { name, image } = req.body;
        const newProduct = new Product({ name, image });
        await newProduct.save();
        res.send(newProduct);
    } catch (error) {
        res.send(error.message);
    }
})

app.put('/bestseller', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/bestseller:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})





app.get('/project', async (req, res) => {
    try {
        const products = await Productt.find({})
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/project:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Productt.findById(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/project', async (req, res) => {
    try {
        const { name, image } = req.body;
        const newProduct = new Productt({ name, image });
        await newProduct.save();
        res.send(newProduct);
    } catch (error) {
        res.send(error.message);
    }
})

app.put('/project', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/project', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Productt.findByIdAndDelete(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})






app.get('/newproduct', async (req, res) => {
    try {
        const products = await NewProduct.find({})
        res.send(products)
    } catch (error) {
        res.send(error.message)
    }
})

app.get('/newproduct:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await NewProduct.findById(id)
        res.send(product)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/newproduct', async (req, res) => {
    try {
        const { name, image } = req.body;
        const newProduct = new NewProduct({ name, image });
        await newProduct.save();
        res.send(newProduct);
    } catch (error) {
        res.send(error.message);
    }
})

app.put('/newproduct', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/newproduct:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await NewProduct.findByIdAndDelete(id)
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