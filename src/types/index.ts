// NOT String

import { ObjectId } from "mongoose"

// BE  string
export interface LinkInterface {
    title: string,
    path: string,
}

export interface UserInterface {
    _id: ObjectId,
    username: string,
    password: string,
    email: string,
    isAdmin: boolean,
    createdAt: Date
}

export interface PostInterface {
    _id: ObjectId,
    title: string,
    desc: string,
    userId: string,
    slug: string,
    img: string | null
    createdAt: Date
}

export interface MockUserInterface {
    id: number,
    username: string,
    password: string,
    email: string,
    isAdmin: boolean,
}

export interface MockPostInterface {
    id: number,
    title: string,
    desc: string,
    userId: number,
    slug: string,
    img: string | null
}