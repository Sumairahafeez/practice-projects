import {posts} from '../../../data/posts';
import { notFound } from 'next/navigation';
import BlogCard from '../../../component/blogcard';
type props = {
    params : {
        id: string;
    }
};
export default function BlogPage({ params }: props) {
  const post = posts.find((p) => p.id === params.id);
  if (!post) notFound();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-lg">{post.content}</p>
      </main>
    </div>
  );
}