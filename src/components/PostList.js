import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import Pagination from './Pagination';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [sort, setSort] = useState('-published_at');
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
                params: {
                    'page[number]': page,
                    'page[size]': pageSize,
                    append: ['small_image', 'medium_image'],
                    sort: sort
                }
            });
            setPosts(response.data.data);
            setTotalItems(response.data.meta.total);
        };
        fetchPosts();
    }, [page, pageSize, sort]);

    return (
        <div className="px-36 mt-[-7vw]">
            <div className="flex justify-between items-center mb-5">
                <label className="text-sm">
                    Show per page: 
                    <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} className="ml-2 border rounded-full w-[60px] drop-shadow-lg border-gray-300 rounded p-1">
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </label>
                <label className="text-sm">
                    Sort by: 
                    <select value={sort} onChange={(e) => setSort(e.target.value)} className="ml-2 border rounded-full w-[150px] drop-shadow-lg border-gray-300 rounded p-1">
                        <option value="-published_at">Newest</option>
                        <option value="published_at">Oldest</option>
                    </select>
                </label>
            </div>

            <div className="grid grid-cols-4 gap-10">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            <Pagination 
                totalItems={totalItems} 
                pageSize={pageSize} 
                currentPage={page} 
                onPageChange={setPage} 
            />
        </div>
    );
}

export default PostList;
