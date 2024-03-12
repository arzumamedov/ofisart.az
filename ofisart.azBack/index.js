import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import multer from "multer";
import bodyParser from 'body-parser'
import { AdminRouter } from './src/routes/adminRoutes.js';
import { CategoryRouter } from './src/routes/categoryRoutes.js';
import { ProductRouter } from './src/routes/productRoutes.js';
import { ProjectRouter } from './src/routes/projectRoutes.js';
// import { NewProductRouter } from './src/routes/newproductRoutes.js';
const upload = multer({ dest: 'public/' })
const app = express()
const port = 3030
const frontAdress = "https://www.ofisart.az";
const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(
  cors(corsConfig)
);
// app.options("",cors(corsConfig))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", frontAdress);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// app.use(express.json({
//   limit: '50mb',
//   verify: (req, res, buf) => {
//     if (buf && buf.length) {
//       req.rawBody = buf.toString();
//     }
//   }
// }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(express.static('public'))
app.use('/api/category', CategoryRouter)
app.use('/api/product', ProductRouter)
app.use('/api/admin', AdminRouter)
app.use('/api/project', ProjectRouter)
// app.use('/api/newproduct',NewProductRouter)


mongoose.connect('mongodb+srv://arzu:arzu@cluster0.9p2kmwb.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})