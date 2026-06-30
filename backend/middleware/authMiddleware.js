const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    let token;

    const authHeader = req.headers.authorization;

    console.log("AUTH HEADER:", authHeader);

    if (
        authHeader &&
        authHeader.startsWith("Bearer ")
    ) {
        token = authHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            console.log("DECODED: ", decoded);

            req.user = decoded;

            next()
        } catch (err) {
            return res.status(401).json({
                message: "Invalid token",
            });
        }
    }

    if (!token) {
        return res.status(401).json({
            message: "No token provided",
        });
    }
};

module.exports = protect;