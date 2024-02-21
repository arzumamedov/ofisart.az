import { AdminModel } from "../models/adminSchema.js";
import jwt from 'jsonwebtoken'

export const loginController = async (req, res) => {
    try {
        const { username, password } = req.body;

    
        const user = await AdminModel.findOne({ username });

        if (!user) {
            return res.status(401).json({ error: "user cannot be found" });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: "password are wrong" });
        }
        const token = jwt.sign({ username: user.username }, process.env.JWT_KEY, { expiresIn: '2h' });
        res.json({ token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const signupController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await AdminModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }
        const newUser = new AdminModel({
            username,
            password,
        });
        await newUser.save();
        res.status(201).json({ message: "Signup successful", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
