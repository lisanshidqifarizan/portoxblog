import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

export const connectDB = async () => {
	if (mongoose.connections[0].readyState) return;
	if (mongoose.connection.readyState === 1) {
		console.log("DB already connected...");
		return;
	}

	if (!MONGO_URI) {
		throw new Error("MongoDB URI is not defined in environtment variables.");
	}

	try {
		await mongoose.connect(MONGO_URI);
		console.log("DB Connected!");
	} catch (err) {
		console.error(
			err instanceof Error ? `Error connecting to MongoDB: ${err.message}` : err
		);
		process.exit(1);
	}
	console.log("MongoDB URI: ", MONGO_URI);
};
