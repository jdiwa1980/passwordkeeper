const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        account: {
            type: String,
            required: true,
        },

        password: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Record", recordSchema);