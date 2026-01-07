import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/Db";
import { errorHandler } from "./middleware/Error";
import swaggerUi from 'swagger-ui-express'
import YAML from "yamljs";
import path from "path";
import jobRoutes from "./routes/JobRoutes"
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json())

const swaggerDocument = YAML.load(path.resolve(__dirname,'./docs/openapi.yaml'))
app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))

app.use("/api",jobRoutes);

app.use(errorHandler)

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server started running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB");
    process.exit(1);
  }
};

startServer();
