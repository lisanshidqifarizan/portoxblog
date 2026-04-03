import mongoose, { Schema, Document, Types } from "mongoose";

interface IComments extends Document {
    postId: Types.ObjectId;
    userId: Types.ObjectId;
    content: string;
    likes: string[];
}

const CommentsSchema = new Schema({
    postId: { type: Schema.Types.ObjectId, ref: 'Posts', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    content: { type: String, required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
}, { timestamps: true });

const Comments = mongoose.models.Comments || mongoose.model<IComments>("Comments", CommentsSchema);
export default Comments;