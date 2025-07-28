
import { authors } from "@/data/authors";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AuthorPage({ params }: PageProps) {
  const { id } = await params;
  const author = authors.find((author) => author.id === id);

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
