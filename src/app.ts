import express from "express";
import cors from "cors";
import studentRouter from "./routes/student-routes";

const server = express();
const port = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());

server.use("/api/v1", studentRouter);

server.listen(port, () => {
  console.log(`App running on ${port} `);
});
