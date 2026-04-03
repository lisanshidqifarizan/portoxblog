import mongoose, { Schema, Document } from 'mongoose';

interface IUsers extends Document {
    name: string;
    username: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
    avatar: string;
}

const UserSchema = new Schema<IUsers>({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    avatar: { type: String, default: 'img/person.png' },
}, { timestamps: true });

const Users = mongoose.models.Users || mongoose.model<IUsers>('Users', UserSchema);
export default Users;