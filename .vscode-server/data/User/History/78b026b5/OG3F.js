const mongoose = require('mongoose');

const poiSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    address: {
        type: String,
        required: true
    },
    
})