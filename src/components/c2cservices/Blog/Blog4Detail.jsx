import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import '../../css/BlogDetail.css';
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; 
import img1 from "../../../assests/Images/Blogs/blog-1-image.png";
import img2 from "../../../assests/Images/Blogs/blog-2-image.png";
import img3 from "../../../assests/Images/Blogs/blog-3-image.png";
import img4 from "../../../assests/Images/Blogs/blog-4-image.png";
import img5 from "../../../assests/Images/Blogs/blog-5-image.png";  
import img6 from "../../../assests/Images/Blogs/blog-6-image.png";
import Profile from "../../../assests/Images/Blogs/blog-profile.png";


const Blog4Detail = () => {
  const posts = [
    {
      image: img2,
      title: 'Why Strong Passwords Matter and How to Create',
      views: 0,
      likes: 2,
      url:"/why-strong-passwords-matter-and-how-to-create",
    },
    
    {
      image: img5,
      title: 'Elevating Security with Firewalls',
      views: 0,
      likes: 2,
      url:"/elevating-security-with-firewalls",
    },
    {
      image:img6,
      title: 'Top 5 Effective Website Security Tips for 2024',
      views: 0,
      likes: 2,
      url:"/top-5-effective-website-security-tips-for-2024",
    },
    {
      image: img3,
      title: 'Phishing: Beware of Fake Emails and Messages',
      views: 0,
      likes: 2,
      url:"/phishing-beware-of-fake-emails-and-messages",
    },
    {
      image: img1,
      title: 'Fortifying Mobile App Security',
      views: 0,
      likes: 2,
      url:"/fortifying-mobile-app-security",
    },
  ];


  
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <div className="blog-details-container">
        <div className="blog-container">
          {/* Author and Date Info */}
          <motion.div
      className="blog-info"
      whileInView={{ opacity: 1, y: 0 }} // Animates when in view
      initial={{ opacity: 0, y: 50 }} // Initial state before animation
      transition={{ duration: 0.6 }} // Adjust the timing
    >
      <motion.img
        src={Profile}
        alt="Author Avatar"
        className="author-avatar"
        whileInView={{ scale: 1.1 }} // Slight zoom on view
        initial={{ scale: 1 }} // Default scale
        transition={{ duration: 0.4 }}
      />
      <motion.span
        className="author-name"
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        Admin
      </motion.span>
      <motion.span
        className="blog-date"
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
          . Oct 16, 2024 .
      </motion.span>
      
      <motion.span
        className="share-icon"
        whileInView={{ rotate: 360 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <i className="fas fa-share-alt"></i>
      </motion.span>
    </motion.div>

          {/* Blog Title with Animation */}
          <motion.h1
            className="blog-title"
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5 }} // Animation timing
          >
              Strengthening Your Digital Fortress
          </motion.h1>

          {/* Blog Subtitle with Animation */}
          <motion.p
        className="blog-subtitle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
      >
  Strengthening your digital fortress is vital for protecting sensitive information and
  ensuring user trust in an increasingly threatening cyber landscape.   </motion.p>

          {/* Blog Image */}
          <div className="blog-image-container">
            <img
              src={img4}
              alt="Blog Post"
              className="blog-image"
            />
          </div>

          <motion.p
        className="blog-subtitle"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
      >
           A firewall is the first line of defense for your organization's IT infrastructure, filtering traffic to block potential threats.
           It protects sensitive data by monitoring and controlling incoming and outgoing connections.
            </motion.p>

          {/* Blog Content with Animation */}
          <motion.div
  className="blog-content"
  initial="hidden"
  whileInView="visible"
  variants={variants}
  transition={{ duration: 1 }} // Animation timing
>
  {/* Heading animation */}
  <motion.h2
    initial={{ opacity: 0, y: -20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
  >
  Building a Resilient Cybersecurity Culture
  </motion.h2>

  {/* First paragraph animation */}
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
   To maintain a strong digital fortress, organization must adopt a proactive approach to cybersecurity. This involves regularly training employees to recognize phishing attempts and social engineering attacks that can bypass even the strongest defenses. Employee awareness is key, as human error often leads to security breaches. Additionally, proper password management and using multi-factor authentication can further enhance protection. 
   Building a culture of vigilance is essential for safeguarding sensitive information and maintaining organizational security.
  </motion.p>

  {/* Quoted text animation */}
  <motion.p
    className="text-with-border"
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, delay: 0.4 }}
  >

"Strengthen your digital fortress with awareness, vigilance, and proactive security measures."  </motion.p>

  {/* Second paragraph animation */}
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
   Continuous monitoring and analysis of network traffic are crucial for identifying potential threats in real-time. By implementing advanced security tools and strategies, organizations can quickly detect and respond to unusual activity before it escalates. Regular security assessments and updates ensure that systems remain protected against evolving cyber threats. It's not just about having security tools in place but about constantly evaluating and refining them. Ultimately, 
   fostering a culture of security awareness strengthens the organization's ability to defend against persistent and emerging cyber risks.
  </motion.p>

  {/* Second heading animation */}
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
  Phishing Awareness
  </motion.h2>

  {/* Second quoted text animation */}
  <motion.p
    className="text-with-border"
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
"Stay alert: not every message is what it seems."
  </motion.p>
</motion.div>

        </div>

        {/* Recent Posts Section */}
        <div className="recent-posts-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Recent Posts
      </motion.h2>

      <motion.div
        className="posts-container"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.5, staggerChildren: 0.3 }}
      >
        {posts.map((post, index) => (
          <motion.div
            className="post-card"
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={post.image} alt={post.title} />
            <Link to={post.url}>  <h3 className="h3">{post.title}</h3></Link>
            <div className="post-stats">
  <span><AiOutlineEye /> {post.views}</span>
  <span><AiFillHeart style={{ color: 'red' }} /> {post.likes}</span> {/* Added marginLeft */}
</div>
          </motion.div>
        ))}
      </motion.div>

      <Link to="/blogs"> <motion.h4
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Show All
      </motion.h4>  </Link>
    </div>
      </div>
    </>
  );
};

export default Blog4Detail;