import express from "express";
import cors from "cors";

const server = express();
const port = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());

server.listen(port, () => {
  console.log(`App running on ${port} `);
});
