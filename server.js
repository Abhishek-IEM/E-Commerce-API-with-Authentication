import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import { config } from "dotenv";
import userRouter from "./Routes/user.js";
import productRouter from "./Routes/product.js";
import cartRouter from "./Routes/cart.js";

const app = express();

app.use(bodyParser.json());

config({ path: ".env" });

//user router
app.use("/api/user", userRouter);

//product router
app.use("/api/product", productRouter);

//cart router
app.use("/api/cart", cartRouter)

//home route
app.get("/", (req, res) => {
  res.json({ message: "This is home route working" });
});

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "E_Commerce_API",
  })
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

const port = process.env.PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));
