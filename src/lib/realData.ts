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

export async function getDBUser(id: number) {
    try {
        await connectToDb()
        const user = await User.findById({ id })
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

export async function getDBPost(id: number) {
    try {
        await connectToDb()
        const post = await Post.findById({ id })
        return post;
    } catch (error) {
        console.log('Failed to fetch post')
        throw new Error(error instanceof Error ? error.message : String(error))
    }
}