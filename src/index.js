import express from "express";
import { routes } from "./router/router.js";

export const app = express();

app.use(express.json());
// app.use(express.static(__dirname + '/public'))

routes(app)