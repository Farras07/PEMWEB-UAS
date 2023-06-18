import mongoose, { Schema,model,models } from "mongoose";

const orderSchema = new mongoose.Schema({
    nameCustomer:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    address:{
        type:String,
        required: true,
    },
    zipCode:{
        type:String,
        required: true,
    },
    processStatus:{
        type: String,
        required:true
    },
    dateOrder:{
        type: Date,
        required: true
    },
    dateRequest :{
        type: String,
        required:true
    },
    items:[
        {
            productName:{
                type: String,
                require: true,
            },
            price : {
                type: Number,
                require: true
            },
            quantity:{
                type: Number,
                require: true
            },
            image:{
                type:String,
                require:true
            },
            size: {
                type: Object,
                require: true
            },
            status:{
                type: String,
                require: true
            }
            
        }
    ]

})

const order = models.order || model('order',orderSchema)

export default order