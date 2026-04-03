"use client"
import { useContext } from "react";
import { PostsContext } from "@/context/PostsProvider";

export const usePosts = () => {
    const context = useContext(PostsContext);
    if (!context) throw new Error("usePosts must be used within a PostsProvider");
    return context;
};