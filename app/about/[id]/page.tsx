// /app/about/[id]/page.tsx

import { authors } from "@/data/authors";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function AuthorPage({ params }: Props) {
  const author = authors.find((author) => author.id === params.id);

  if (!author) {
    return notFound();
  }

  return (
    <div>
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
    </div>
  );
}
