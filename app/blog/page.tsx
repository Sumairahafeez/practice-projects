import React from 'react';
import Link from 'next/link';
import {posts} from '../../data/posts';
function BlogIndex() {
return(
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="text-lg">Here you will find my latest posts and updates.</p>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default BlogIndex;
