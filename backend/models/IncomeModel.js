const mongoose = require('mongoose');


const IncomeSchema = new mongoose.Schema({
    // userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: {
        type: String,
        required: true,
        trim: true,
        
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true
    },
    type: {
        type: String,
        default:"income"
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        
        trim: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Income', IncomeSchema)