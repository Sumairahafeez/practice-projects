import {authors} from '../../data/authors';
import Link from 'next/link';
export default function about() {
  return (
    <>
      <div className='flex flex-col items-center justify-center p-8 pb-8 sm:p-20'>
        <h1>About Us</h1>
        <p>This is the about page of our blog.</p>
        <p>Here you can find information about the authors and the purpose of this blog.</p>
        <p>We aim to share knowledge and insights on various topics through our posts.</p>
        <p>Feel free to explore our blog and learn more about us we can have a teams page too!</p>
      </div>
      <div className='flex flex-col items-center justify-center p-8 pb-8 sm:p-20'>
        <h2>Authors</h2>
        <ul className='list-disc flex flex-row gap-8'>
         {authors.map(author => (
            <Link href={`/about/${author.id}`} key={author.id}>
              <li className="mb-4 text-blue-500 underline">{author.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
