import jwt from "jsonwebtoken";

const authenticateUser = (req, res, next) => {
    console.log("Token received:", req.header("Authorization"));

  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {
    // Verify the token and decode the payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user information to `req.user`
    next(); // Proceed to the next middleware/controller
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid token.",
    });
  }
};

export default authenticateUser;
