const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const userRoutes = require("./routes/v1/user.route");
const viewCount = require("./middleware/viewCount");

app.use(cors());
app.use(express.json());

// app.use(viewCount);

dbConnect();

app.use("/api/v1/user", userRoutes);

app.all("*", (req, res) => {
  res.send("No Route Found!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
