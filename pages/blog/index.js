import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
    const { page = 1 } = context.query; // Get the current page from query parameters
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
    const posts = await res.json();

    return {
        props: {
            posts,
            currentPage: parseInt(page, 10),
        },
    };
}

export default function Blog({ posts, currentPage }) {
    const router = useRouter();

    const handlePagination = (page) => {
        router.push(`/blog?page=${page}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-4">Blog</h1>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className="border p-4 rounded shadow">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p className="text-gray-700">{post.body.split(' ').slice(0, 50).join(' ')}...</p>
                        <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                            Learn More...
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center space-x-4 mt-8">
                {currentPage > 1 && (
                    <button
                        onClick={() => handlePagination(currentPage - 1)}
                        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                    >
                        Previous
                    </button>
                )}
                <button
                    onClick={() => handlePagination(currentPage + 1)}
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
