import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config.js";
import morgan from "morgan";

import v1 from "./routes/v1/index.js";

const app = express();
const port = process.env.API_PORT || 4000;

app.use(morgan("combined"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/v1", cors(), v1);

app.listen(port, () => {
  console.log(`Api is running at port ${port}...`);
})