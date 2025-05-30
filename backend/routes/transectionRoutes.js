const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routers
//add
router.post("/add-transection", addTransection);
//edit
router.post("/edit-transection", editTransection);
//delet
router.post("/delete-transection", deleteTransection);

router.post("/get-transection", getAllTransection);

module.exports = router;
