import { Request, Response } from "express";
const registerController = (req: Request, res: Response) => {
  console.log("Request Body is ", req.body);
  console.log("Hello Register");
  res.send("Hello");
};

export { registerController };
