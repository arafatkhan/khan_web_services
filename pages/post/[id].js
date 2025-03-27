import React from 'react';

export async function getStaticPaths() {
    const res = await fetch('https://khanwebservices.com/wp-json/wp/v2/posts?_fields=id');
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }));

    return { paths, fallback: 'blocking' }; // Use blocking fallback for ISR
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://khanwebservices.com/wp-json/wp/v2/posts/${params.id}?_fields=id,title,content`);
    const post = await res.json();

    return {
        props: {
            post,
        },
        revalidate: 60, // Revalidate the page every 60 seconds
    };
}

export default function Post({ post }) {
    return (
        <div>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    );
}
