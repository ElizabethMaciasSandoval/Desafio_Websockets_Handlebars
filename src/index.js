import express from "express";
import handlebars from "express-handlebars";
import { dirname } from "path";
import { fileURLToPath } from 'url';
import { routes } from "./router/router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'))
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

routes(app)