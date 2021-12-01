import express from "express";
import Connection from "./connection/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import DefaultData from "./default.js";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbname = process.env.DB_NAME;

const app = express();

const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

Connection(username, password, dbname);

app.listen(PORT, () => console.log("server is running on", PORT));

DefaultData();
