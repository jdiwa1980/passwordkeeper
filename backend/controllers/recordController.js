const Record = require("../models/Record");
const mongoose = require("mongoose");

const getRecords = async (rerq, res) => {
    const records = await Record.find();

    res.json(records);
}

const CreateRecord = async (req, res) => {
    const record = await  Record.create(req.body);

    res.status(201).json(record);
}

const updateRecord = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: "Invalid record ID"
        })
    }

    const record = await Record.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
        new: true,
        }
    );

    if (!record) {
        return res.status(400).json({
            message: "Record not found",
        })
    }

    res.status(200).json(record);
};

const deleteRecord = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: "Invalid record ID"
        })
    }

    const record = await Record.findByIdAndDelete(id);

    if (!record) {
        return res.status(400).json({
            message: "Record not found",
        })
    }

    res.status(200).json({
        message: "Record deleted",
    })
}

module.exports = {
    getRecords,
    CreateRecord,
    updateRecord,
    deleteRecord,
};