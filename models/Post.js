import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required: true,
        },
        image:{
            type: String,
            required: true,
        },
        content:{
            type: String,
            required: true,
        },
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        tags:{
            type: [String],
            required: true,
        },
        publishDate:{
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", postSchema);