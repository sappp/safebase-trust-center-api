import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from "dotenv";
import { connectToDatabase } from "./databaseConnection.js";
import { customerRoute } from "./routes/customer.route.js";

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(express.json());
app.use(cors())

app.use("/", customerRoute());

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Server running on port: ${PORT}`)
});

