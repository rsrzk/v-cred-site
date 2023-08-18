import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

// Initialize the database connection
connect();

const handleDatabaseError = (error) => {
    console.error("Database Error:", error);
    return new NextResponse("Database Error!", { status: 500 });
};

export const GET = async (request) => {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");

    try {
        const posts = await Post.find(username && { username }).populate('author', 'name image');
        return new NextResponse(JSON.stringify(posts), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (err) {
        return handleDatabaseError(err);
    }
};

export const POST = async (request) => {
    const body = await request.json();
    const newPost = new Post(body);

    try {
        await newPost.save();
        return new NextResponse("Post has been created.", { status: 201 });
    } catch (err) {
        return handleDatabaseError(err);
    }
};