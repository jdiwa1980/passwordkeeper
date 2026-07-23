const Record = require("../models/Record");
const mongoose = require("mongoose");

const getRecords = async (req, res) => {
    const records = await Record.find({
        owner: req.user.userId
    });

    res.json(records);
}

const createRecord = async (req, res) => {

    const { account, iconKey, password, description} = req.body

    const record = await  Record.create({
        account,
        iconKey,
        password,
        description,
        owner: req.user.userId,
    });

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
        {
            _id: req.params.id,
            owner: req.user.userId,

        },
        req.body,
        { new: true}
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
    createRecord,
    updateRecord,
    deleteRecord,
};