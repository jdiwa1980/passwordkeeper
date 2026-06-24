import usermodel from "../models/usermodel"; // watch out later for folder spelling
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
        try {
            const { username, email, password} = req.body;

            const existingUser = await User.findOne({email});

            if (existingUser) {
                return res.status(400).json({
                    message: "user already exists"
                });
            }

            const hashedPassword =
                await bcrypt.hash(password, 10);
            
            const user = await User.create({
                username,
                email,
                password: hashedPassword,
            });
            
            res.status(201).json(user);

        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
}

module.exports = {
    registerUser,
};