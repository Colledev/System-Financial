const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const usersRoutes = require("./routes/usersRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
