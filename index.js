const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Helloworld")
})
app.listen(port, () => console.log(`server is running on port ${port}`))

