const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign(
            {
                userId: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.status(200).json({
            token,
            _id: user.id,
            username: user.username,
            email: user.email,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const registerUser = async (req, res) => {
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
            
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
            });

        } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
}

module.exports = {
    registerUser,
    loginUser
};