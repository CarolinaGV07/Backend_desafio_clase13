import mongoose from "mongoose";

const chatModel = mongoose.model('messages',new mongoose.Schema({
    user: String,
    message: String
}))

export default chatModel