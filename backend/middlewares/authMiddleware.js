import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

async function authenticateToken(req, res, next) {
  //Extract token from Authorization header
  const token = req.headers.authorization?.split(" ")[1];
  // If no token is provided, return an unauthorized error
  if (!token) {
    res.status(401).send({ message: "Unauthorized: No token provided" });
  }
  // Verify the token
  jwt.verify(token, JWT_SECRET, (err, user) => {
    //If there is an error in the verifying process then return an error response
    if (err)
      return res.status(403).json({ message: "Forbidden: Invalid token" });

    // Attach user data to request object and proceed
    req.user = user;
    next();
  });
}

export { authenticateToken };
