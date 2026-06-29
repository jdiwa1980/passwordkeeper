const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
    {
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
        
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Record", recordSchema);