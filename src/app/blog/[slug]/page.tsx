import React from "react";

interface BlogPostPageProps {
  params: { [key: string]: string };
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ params }) => {
  return (
    <div>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </div>
  );
};

export default BlogPostPage;
