import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import { AdminRouter } from './src/routes/adminRoutes.js';
import { CategoryRouter } from './src/routes/categoryRoutes.js';
import { ProductRouter } from './src/routes/productRoutes.js';
import { ProjectRouter } from './src/routes/projectRoutes.js';
import cors from 'cors';
const app = express();
const port = 3030;
const frontAddress = "http://0.0.0.0";

app.use(
    cors({
        credentials: true,
        origin: frontAddress,
    })
);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", frontAddress);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/category', CategoryRouter);
app.use('/api/product', ProductRouter);
app.use('/api/admin', AdminRouter);
app.use('/api/project', ProjectRouter);

mongoose.connect('mongodb+srv://arzu:arzu@cluster0.9p2kmwb.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
