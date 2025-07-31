require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const ConnectDB = require("./config/connectDB");
const UserRoutes = require("./Routes/UserRoutes");

ConnectDB();

app.use(express.json());

app.use("/user", UserRoutes);

app.use((req, res) => {
  return res.status(404).send("Not found");
});
console.log("Server running on ", PORT);
app.listen(PORT, () => console.log("server is running"));
