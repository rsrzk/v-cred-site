type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  desc: string;
  content: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
