const express = require("express");
const bodyParsar = require("body-parser");
const userControllers = require("../controllers/user");

const app = express.Router();
app.use(bodyParsar.urlencoded({ extended: true }));
app.use(bodyParsar.json());

app.post("/create",userControllers.createUser);
app.get("/list");
app.update("/update/:id");
app.delete("/delete/:id");
