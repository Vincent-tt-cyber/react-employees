const express = require("express");
const jwt = require("jsonwebtoken");
const { auth } = require("../middleware/auth");
const { all, add } = require("../controllers/employees");
const router = express.Router();

router.get("/", auth, () => all);
router.get("/:id", auth, add);
router.post("/add", auth, () => console.log("create employees"));
router.post("/remove/:id", auth, () => console.log("delete employees"));
router.put("/edit/:id", auth, () => console.log("edit employees"));

module.exports = router;
