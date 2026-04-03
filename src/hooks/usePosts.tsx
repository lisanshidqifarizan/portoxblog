"use client";
import { useContext } from "react";
import { PostsContext } from "@/context/Provider";

export const usePosts = () => {
	const context = useContext(PostsContext);
	if (!context) throw new Error("usePosts must be used within a Provider");
	return context;
};
