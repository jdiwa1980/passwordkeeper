const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema(
    {
        account: {
            type: String,
            required: true,
        },
        iconKey: {
            type: String,
            default: "",
        },

        password: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        favorite: {
            type: Boolean,
            default:false,
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