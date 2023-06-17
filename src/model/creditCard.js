import mongoose, { Schema,model,models } from "mongoose";

const creditSchema = new mongoose.Schema({
    creditID:{
        type:String,
        required:true,
        unique:true
    },
    nameOwner:{
        type:String,
        required: true,
    },
    saldo: {
        type:Number,
        required:true
    }
})

const credit = models.creditCard || model('creditCard',creditSchema)

export default credit