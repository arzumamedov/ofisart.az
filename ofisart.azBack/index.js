import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import multer from "multer";
import { AdminRouter } from './src/routes/adminRoutes.js';
import { CategoryRouter } from './src/routes/categoryRoutes.js';
import { ProductRouter } from './src/routes/productRoutes.js';
import { ProjectRouter } from './src/routes/projectRoutes.js';
const upload = multer({ dest: 'public/' })
const app = express()
const port = 3030
app.use(express.json())
app.use(cors());
app.use(express.static('public'))
app.use('/api/category', CategoryRouter)
app.use('/api/product', ProductRouter)
app.use('/api/admin', AdminRouter)
app.use('/api/project', ProjectRouter)
// const productSchema = new mongoose.Schema({
//     name: String,
//     image: String,
//     categoryİd: { type: Schema.Types.ObjectId, ref: 'Category' }
// });
// const ProductModel = mongoose.model('Product', productSchema);


// const categorySchema = new mongoose.Schema({
//     name: String,
// });
// const CategoryModel = mongoose.model('Category', categorySchema);

// app.get('/bestseller', async (req, res) => {
//     try {
//         const products = await Product.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/category:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await ProductModel.find({categoryİd:id})
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/bestseller', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new Product({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/bestseller', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/bestseller:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Product.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })


// app.get('/bestseller', async (req, res) => {
//     try {
//         const products = await Product.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/bestseller:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Product.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/bestseller', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new Product({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/bestseller', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/bestseller:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Product.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

//++

// const newproductSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const NewProduct = mongoose.model('Newproduct', newproductSchema);


// //++
// const managerDeskSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const ManagerDesk = mongoose.model('ManagerDesk', managerDeskSchema);



// //+
// const staffTablesSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const StaffTables = mongoose.model('StaffTables', staffTablesSchema);



// const meetingTablesSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const MeetingTables = mongoose.model('MeetingTables', meetingTablesSchema);




// const homeDeskSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const HomeDesk = mongoose.model('HomeDesk', homeDeskSchema);





// const executiveChairsSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const ExecutiveChairs = mongoose.model('ExecutiveChairs', executiveChairsSchema);




// const staffChairsSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const StaffChairs = mongoose.model('StaffChairs', staffChairsSchema);





// const SofasSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const Sofas = mongoose.model('Sofas', SofasSchema);







// const WardrobesSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const Wardrobes = mongoose.model('Wardrobes', WardrobesSchema);





// const FilingCabinetsSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const FilingCabinets = mongoose.model('FilingCabinets', FilingCabinetsSchema);





// const TumbaSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const Tumba = mongoose.model('Tumba', TumbaSchema);






// const DresserSchema = new mongoose.Schema({
//     name: String,
//     image: String
// });
// const Dresser = mongoose.model('Dresser', DresserSchema);








// app.post('/sofa', upload.single('avatar'), async (req, res) => {
//     try {
//         const { name, image } = req.body;
//     } catch (error) {
//         res.send(error.message);
//     }
// })







// app.get('/project', async (req, res) => {
//     try {
//         const products = await Productt.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/project:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Productt.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/project', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new Productt({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/project', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/project', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Productt.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })






// app.get('/newproduct', async (req, res) => {
//     try {
//         const products = await NewProduct.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/newproduct:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await NewProduct.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/newproduct', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new NewProduct({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/newproduct', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/newproduct:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await NewProduct.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })





// app.get('/menagerdesk', async (req, res) => {
//     try {
//         const products = await ManagerDesk.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/menagerdesk:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await ManagerDesk.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/menagerdesk', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new ManagerDesk({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/menagerdesk', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/menagerdesk:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await ManagerDesk.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })




// app.get('/stafftable', async (req, res) => {
//     try {
//         const products = await StaffTables.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/stafftable:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await StaffTables.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/stafftable', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new StaffTables({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/stafftable', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/stafftable:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await StaffTables.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })






// app.get('/meetingtable', async (req, res) => {
//     try {
//         const products = await MeetingTables.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/meetingtable:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await MeetingTables.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/meetingtable', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new MeetingTables({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/meetingtable', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/meetingtable:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await MeetingTables.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })




// app.get('/homedesk', async (req, res) => {
//     try {
//         const products = await HomeDesk.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/homedesk:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await HomeDesk.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/homedesk', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new HomeDesk({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/homedesk', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/homedesk:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await HomeDesk.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })





// app.get('/executivechair', async (req, res) => {
//     try {
//         const products = await ExecutiveChairs.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/executivechair:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await ExecutiveChairs.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/executivechair', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new ExecutiveChairs({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/executivechair', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/executivechair:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await ExecutiveChairs.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })






// app.get('/staffchair', async (req, res) => {
//     try {
//         const products = await StaffChairs.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/staffchair:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await StaffChairs.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/staffchair', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new StaffChairs({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/staffchair', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/staffchair:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await StaffChairs.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })








// app.get('/sofa',  async (req, res) => {
//     try {
//         const products = await Sofas.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/sofa:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Sofas.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/sofa', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new Sofas({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/sofa', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/sofa:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Sofas.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })







// app.get('/wardrobe', async (req, res) => {
//     try {
//         const products = await Wardrobes.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/wardrobe:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Wardrobes.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/wardrobe', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new Wardrobes({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/wardrobe', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/wardrobe:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Wardrobes.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })








// app.get('/filingcabinet', async (req, res) => {
//     try {
//         const products = await FilingCabinets.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/filingcabinet:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await FilingCabinets.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/filingcabinet', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new FilingCabinets({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/filingcabinet', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/filingcabinet:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await FilingCabinets.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })







// app.get('/tumba', async (req, res) => {
//     try {
//         const products = await Tumba.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/tumba:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Tumba.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/tumba', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new Tumba({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/tumba', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/tumba:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Tumba.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })






// app.get('/dresser', async (req, res) => {
//     try {
//         const products = await Dresser.find({})
//         res.send(products)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/dresser:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Dresser.findById(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/dresser', async (req, res) => {
//     try {
//         const { name, image } = req.body;
//         const newProduct = new Dresser({ name, image });
//         await newProduct.save();
//         res.send(newProduct);
//     } catch (error) {
//         res.send(error.message);
//     }
// })

// app.put('/dresser', (req, res) => {
//     res.send('Got a PUT request at /user')
// })

// app.delete('/dresser:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Dresser.findByIdAndDelete(id)
//         res.send(product)
//     } catch (error) {
//         res.send(error.message)
//     }
// })









mongoose.connect('mongodb+srv://arzu:arzu@cluster0.9p2kmwb.mongodb.net/')
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})