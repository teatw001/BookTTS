import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

import productRouter from "./router/product";
import categoryRouter from "./router/category";
import orderRouter from "./router/order";
import commentRouter from "./router/comment";
import authRouter from "./router/auth";
import forgotRouter from "./router/forgot";
import payment from "./router/paymentvnpay";
import cors from "cors";
import paymentRouter from "./router/paymentvnpay";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);
app.use("/comment", commentRouter);
app.use("/", forgotRouter);
app.use("/", authRouter);
app.use("/", payment);
mongoose.connect(process.env.URI);

export const viteNodeApp = app;
