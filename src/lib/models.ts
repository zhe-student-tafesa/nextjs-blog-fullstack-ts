import mongoose, { Schema } from "mongoose";


// 1. Define the User and Post interfaces ！！！
export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    img?: string;
    isAdmin?: boolean;
}

export interface IPost extends Document {
    title: string;
    desc: string;
    img?: string;
    userId: string;
    slug: string;
}


const userSchema: Schema<IUser> = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        // required: true,
        // unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }
);

const postSchema: Schema<IPost> = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    userId: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true }
);

// if has， use the existing              if not， create new one  
export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
export const Post = mongoose.models.Post || mongoose.model<IPost>('Post', postSchema);