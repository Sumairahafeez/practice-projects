
import { authors } from "@/data/authors";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default function AuthorPage({ params }: PageProps) {
  const author = authors.find((author) => author.id === params.id);

  if (!author) {
    notFound();
  }

  return (
    <div>
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
    </div>
  );
}
