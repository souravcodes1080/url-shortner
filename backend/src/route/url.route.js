import express from "express";
import { redirectUrl, shortenUrl } from "../controller/url.controller.js";

const urlRouter = express.Router();

urlRouter.post("/api/shorten", shortenUrl);
urlRouter.get("/:code", redirectUrl);

export { urlRouter };
