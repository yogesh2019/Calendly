const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const eventSchema = new mongoose.Schema({
    menteeEamil: {
        type: String,
        required: true
    },
    mentorId: {
        type: ObjectId,
        ref: "User"
    },
    schedule: {
        type: ObjectId,
        ref: "Schedule"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    }
})