import { Types } from "mongoose";
import { Post, User } from "./models";
import connectToDb from "./utils";

export async function getDBUsers() {
    try {
        await connectToDb()
        const users = await User.find()
        return users;
    } catch (error) {
        console.log('Failed to fetch users')
        throw new Error(error instanceof Error ? error.message : String(error))
    }
}

export async function getDBUser(id: string) {
    try {
        await connectToDb()
        // console.log("id:", id)
        // Pass the id string directly and make sure it is a valid ObjectId
        if (!Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ObjectId");
        }
        const user = await User.findById(id)
        return user;
    } catch (error) {
        console.log('Failed to fetch user')
        throw new Error(error instanceof Error ? error.message : String(error))
    }
}

export async function getDBPosts() {
    try {
        await connectToDb()
        const posts = await Post.find()
        return posts;
    } catch (error) {
        console.log('Failed to fetch posts')
        throw new Error(error instanceof Error ? error.message : String(error))
    }
}

export async function getDBPost(slug: string) {
    try {
        await connectToDb()
        const post = await Post.find({ slug: slug })
        return post[0];
    } catch (error) {
        console.log('Failed to fetch post')
        throw new Error(error instanceof Error ? error.message : String(error))
    }
}