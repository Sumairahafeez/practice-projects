export type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
};
export const posts: Post[] = [
  {
    id: "1",
    title: "First Post",
    content: "This is the content of the first post.",
    author: "Author 1",
    date: "2023-01-01",
  },
  {
    id: "2",
    title: "Second Post",
    content: "This is the content of the second post.",
    author: "Author 2",
    date: "2023-01-02",
  },
  {
    id: "3",
    title: "Third Post",
    content: "This is the content of the third post.",
    author: "Author 3",
    date: "2023-01-03",
  },
];