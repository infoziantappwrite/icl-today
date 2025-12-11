import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "./BlogData";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-detail-container">
      <Link to="/blogs">← Back to Blogs</Link>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
};

export default BlogDetail;
