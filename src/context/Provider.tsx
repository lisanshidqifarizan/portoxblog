"use client";
import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";
import {
	typesUser,
	typesPosts,
	PostsContextType,
	AuthContextType,
} from "@/lib/types";
import { getProfile, getPosts } from "@/lib/api";

export const AuthContext = createContext<AuthContextType | null>(null);
export const PostsContext = createContext<PostsContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<typesUser | null>(null);

	useEffect(() => {
		const fetch = async () => {
			const res = await getProfile();
			setUser(res.user);
		};
		fetch();
	}, [setUser]);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export function PostsProvider({ children }: { children: ReactNode }) {
	const [posts, setPosts] = useState<typesPosts[]>([]);

	useEffect(() => {
		const fetch = async () => {
			const res = await getPosts();
			setPosts(res.posts);
		};
		fetch();
	}, [setPosts]);

	return (
		<PostsContext.Provider value={{ posts, setPosts }}>
			{children}
		</PostsContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext)!;
export const usePosts = () => useContext(PostsContext)!;
