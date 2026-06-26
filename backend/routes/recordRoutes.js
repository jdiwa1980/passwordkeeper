const express = require("express");
const protect = require("../middleware/authMiddleware");

const {
    getRecords,
    createRecord,
    updateRecord,
    deleteRecord
} = require("../controllers/recordController")

const router = express.Router();

router.route("/")
    .get(protect, getRecords)
    .post(protect, createRecord);

router
  .route("/:id")
  .put(protect, updateRecord)
  .delete(protect, deleteRecord);

module.exports = router;