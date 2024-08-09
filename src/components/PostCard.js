import React from 'react';

function PostCard({ post }) {
    return (
        <div className="flex flex-col border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
            <img src={post.medium_image[0]?.url} alt={post.title} loading="lazy" className="w-full h-auto object-cover" />
            <p className="text-sm text-gray-600 m-2">
                {new Date(post.published_at).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})}
            </p>
            <h3 className="text-base font-semibold m-2 whitespace-nowrap overflow-hidden text-ellipsis max-h-12 leading-6">
                {post.title}
            </h3>
        </div>
    );
}

export default PostCard;
