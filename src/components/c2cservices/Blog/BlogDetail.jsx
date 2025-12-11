import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "./BlogData";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = BlogData.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="blog-detail-container">
      <div className="blog-title">{blog.title}</div>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
