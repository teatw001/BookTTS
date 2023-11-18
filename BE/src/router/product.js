import express from "express";
import { create, del, edit, getAll, getOne } from "../controller/product";
import { checkPermission } from "../middleware/checkPermission";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getOne);

router.post("/", create);

router.put("/:id", edit);

router.delete("/:id", del);

export default router;
