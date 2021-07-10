const mongoose = require('mongoose');

const SabritasSchema = new mongoose.Schema({
    codigo:{
        type: String,
        unique:true,
    },
    nombre:{
        type: String,
    },
    gramos:{
        type: Number,
    },
    precio:{
        type: Number,

    },
    fecha:{
        type: Date,
        default:Date.now
    }
})

const Sabritas = mongoose.model('Sabritas', SabritasSchema);

module.exports = Sabritas;