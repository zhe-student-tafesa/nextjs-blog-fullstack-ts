import { MockPostInterface, MockUserInterface } from "@/types";

const users: MockUserInterface[] = [
    { id: 1, username: 'John1', password: '1', email: "1.q@qq.com", isAdmin: false },
    { id: 2, username: 'John2', password: '2', email: "2.q@qq.com", isAdmin: true },
    { id: 3, username: 'John3', password: '3', email: "3.q@qq.com", isAdmin: false },
];

const posts: MockPostInterface[] = [
    {
        id: 1,
        title: 'Post 1',
        desc: "11",
        userId: 1,
        slug: "11",
        img: null
    },
    {
        id: 2,
        title: 'Post 2',
        desc: "2222",
        userId: 1,
        slug: "2222",
        img: null
    }, {
        id: 3,
        title: 'Post 3',
        desc: "33  333  333",
        userId: 2,
        slug: "333",
        img: 'https://images.pexels.com/photos/28772394/pexels-photo-28772394/free-photo-of-snowy-mountain-peaks-in-obergurgl-tirol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        id: 4,
        title: 'Post 4',
        desc: "444",
        userId: 2,
        slug: "4slug",
        img: 'https://images.pexels.com/photos/28772394/pexels-photo-28772394/free-photo-of-snowy-mountain-peaks-in-obergurgl-tirol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
];

export async function getUsers() {
    return users;
}

export async function getUser(id: number) {
    return users.find(user => user.id == id);
}

export async function getPosts() {
    return posts;
}

export async function getPost(id: number) {
    return posts.find(post => post.id == id);
}