const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// MongoDB
const dbURI = process.env.MONGODB_URI || require("./config/mongodb-config").url;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) =>
    console.error.bind(console, "MongoDB connection error:", err)
  );

app.use(express.json());
app.use(cors());

const router = express.Router();

router.use("/issue", require("./routes/issue"));

// Register the 'root' router
app.use("/api", router);

const port = process.env.PORT || 12080;
const httpServer = app.listen(port, () => {
  console.log("Server is up and running on port:", port);
});
