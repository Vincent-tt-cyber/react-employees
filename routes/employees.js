const express = require("express");
const jwt = require("jsonwebtoken");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, () => console.log("get all employees"));
router.get("/:id", auth, () => console.log("get all employees"));
router.post("/add", auth, () => console.log("create employees"));
router.post("/remove/:id", auth, () => console.log("delete employees"));
router.put("/edit/:id", auth, () => console.log("edit employees"));

module.exports = router;
