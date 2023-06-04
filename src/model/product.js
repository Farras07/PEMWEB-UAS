import mongoose, { Schema,model,models } from "mongoose";

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required: true,
        unique:true
    },
    price: {
        type:Number,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    productType:{
        type: String,
        required:true
    },
    processingTime:{
        type: String,
        required:true
    },
    sizeAvailable:{
        type: [String],
        required:true
    }
})

const product = models.product || model('product',productSchema)

export default product