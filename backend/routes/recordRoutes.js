const express = require("express");

const {
    getRecords,
    CreateRecord,
    updateRecord,
    deleteRecord
} = require("../controllers/recordController")

const router = express.Router();

router.route("/")
    .get(getRecords)
    .post(CreateRecord);

router
  .route("/:id")
  .put(updateRecord)
  .delete(deleteRecord);

module.exports = router;