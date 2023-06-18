import mongoose, { Schema,model,models } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true,
    }
})

const user = models.user || model('user',userSchema)

export default user