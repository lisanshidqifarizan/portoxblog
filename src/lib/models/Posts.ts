import mongoose, { Schema, Document } from "mongoose";

export interface IPosts extends Document {
	author: Schema.Types.ObjectId;
	title: string;
	content: string;
	slug: string;
	images: string[];
	category: string[];
	tags: string[];
	comments: Schema.Types.ObjectId[];
	views: number;
	likes: number;
}

const PostSchema = new Schema<IPosts>(
	{
		author: { type: Schema.Types.ObjectId, ref: "Users", required: true },
		title: { type: String, required: true, unique: true },
		content: { type: String, required: true },
		slug: { type: String, required: true, unique: true },
		images: { type: [String] },
		category: { type: [String], required: true },
		tags: { type: [String], required: true },
		comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
		views: { type: Number, default: 0 },
		likes: { type: Number, default: 0 },
	},
	{ timestamps: true }
);

const Posts =
	mongoose.models.Posts || mongoose.model<IPosts>("Posts", PostSchema);
export default Posts;
