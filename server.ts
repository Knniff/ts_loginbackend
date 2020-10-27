import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
//import errorHandler from "./_helpers/error-handler";

process.env.PORT = "9000"

const app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Worlds!')
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });

module.exports = server;