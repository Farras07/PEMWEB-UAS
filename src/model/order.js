import mongoose, { Schema,model,models } from "mongoose";

const orderSchema = new mongoose.Schema({
    productId:{
        type:String,
        required: true,
    },
    productName:{
        type:String,
        required: true,
    },
    price: {
        type:Number,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    size:{
        type: Object,
        required:true
    },
    processStatus:{
        type: String,
        required:true
    },
})

const order = models.order || model('order',orderSchema)

export default order