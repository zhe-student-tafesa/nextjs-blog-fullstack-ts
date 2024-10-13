// NOT String

import { ObjectId } from "mongoose"

// BE  string
export interface LinkInterface {
    title: string,
    path: string,
}



export interface MockUserInterface {
    id: number,
    username: string,
    password: string,
    email: string,
    isAdmin: boolean,
    img: string | null
}

export interface MockPostInterface {
    id: number,
    title: string,
    desc: string,
    userId: number,
    slug: string,
    img: string | null
}