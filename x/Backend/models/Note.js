import mongoose from "mongoose";

const NoteSchema= new mongoose.Schema({
    text: String,
    userId: mongoose.Schema.Types.ObjectId,
    createdAt:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Note",NoteSchema);
