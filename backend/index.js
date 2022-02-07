import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/usersRoutes";
import cors from "cors";
const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://meital:123456rt@tv-db.oss2b.mongodb.net/TV-DB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// bodyparser setup

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Cors setup
app.use(cors());

routes(app);

app.get("/", (req, res) => {
  res.send(`TV app is running on ${PORT}`);
});

app.listen(PORT, () => console.log(`TV server is running on ${PORT}`));
