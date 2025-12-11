import BlogData from "./BlogData";
import { Link } from "react-router-dom";
import "./Blog.css";
import "./BlogDetail.css";
import BannerImages from "../../../assests/Images/Blogs/blog-banner.png";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="blog_page">
      <div
        className="service-banner"
        style={{
          backgroundImage: `url(${BannerImages})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="sb-intro"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <h1>Blogs</h1>
          <br />
          <p>
            Securing mobile apps and firewalls is vital to protect against data
            leaks, spyware, and unauthorized access.
          </p>
        </motion.div>
      </div>

      <div className="blog-header-l">
        <motion.h1
          className="blog-title-l"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          All The Tips In One Place
        </motion.h1>
      </div>

      <div className="blog-container">
        {BlogData.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h3>🌐{blog.title}</h3>
            <Link to={`/blogs/${blog.id}`}>
              <button className="read-more-btn">Read More</button>
            </Link>
            <div className="meta-info">
              <span className="category-pill">{blog.author}</span>
              <span className="blog-date">{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
