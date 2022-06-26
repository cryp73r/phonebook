const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true,
        default: ""
    },
    contactNumber: {
        type: Number,
        min: [7000000000, "invalid mobile number"],
        max: [9999999999, "invalid mobile number"],
        unique: true,
        required: true
    }
})

const Contact=mongoose.model('Contact', contactSchema)

module.exports=Contact