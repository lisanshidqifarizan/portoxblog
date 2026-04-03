export interface typesPosts {
    _id: string,
    author: string,
    title: string,
    content: string,
    slug: string,
    images: string[],
    category: string[],
    tags: string[],
    comment: string[],
    views: number,
    likes: number,
    createdAt: Date | string,
    updatedAt: Date | string,
}

export interface typesUser {
    _id: string,
    name: string,
    email: string,
    username: string,
    password: string,
    role: string,
    avatar: string,
}

export interface AuthContextType {
    user: typesUser | null;
    setUser: React.Dispatch<React.SetStateAction<typesUser | null>>;
}

export interface PostsContextType {
    posts: typesPosts[];
    setPosts: React.Dispatch<typesPosts[]>;
}

export interface SitemapEntry {
    loc: string;
    lastmod: string;
    priority: number;
}