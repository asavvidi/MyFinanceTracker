import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

async function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).send({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ message: "Forbidden: Invalid token" });

    req.user = user;
    next();
  });
}

export { authenticateToken };
