export type Post = {
  userId: string;
  id: string;
  title: string | null;
  content: string | null;
  createdAt: Date;
  updatedAt: Date | null;
};

export type Comment = {
  id: string;
  content: string;
  postId: string;
  userId: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: Date;
  image: string;
};
