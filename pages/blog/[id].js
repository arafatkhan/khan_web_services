import React from 'react';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'); // Fetch paths for 10 posts
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: true }; // Enable fallback for on-demand generation
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
        revalidate: 30, // Revalidate the page every 30 seconds
    };
}

export default function Post({ post }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div className="container mx-auto p-4 text-center">Loading...</div>; // Show loading state
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-4">{post.title}</h1>
            <p className="text-lg text-gray-700">{post.body}</p>
        </div>
    );
}
