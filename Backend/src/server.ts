import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/Db";
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000
app.use(express)


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
