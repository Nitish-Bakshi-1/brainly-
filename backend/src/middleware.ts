import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function auth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const decoded = jwt.verify(header as string, "JWT_SECRET");
  if (decoded) {
    // @ts-ignore
    req.userId = decoded.id;
    next();
  } else {
    res.status(500).json({
      msg: "you are not logged in",
    });
  }
}

export default auth;
