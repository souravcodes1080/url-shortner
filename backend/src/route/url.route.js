import express from "express";
import { decodeUrl, shortenUrl } from "../controller/url.controller.js";

const urlRouter = express.Router();

urlRouter.post("/", shortenUrl);
urlRouter.get("/:id", decodeUrl);

export { urlRouter };
