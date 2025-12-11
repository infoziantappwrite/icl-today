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

const Blog2Detail = () => {
  const posts = [
   
    {
      image: img4,
      title: 'Strengthening Your Digital Fortress',
      views: 0,
      likes: 2,
      url: "/strengthening-your-digital-fortress",
    },
    {
      image:img5,
      title: 'Elevating Security with Firewalls',
      views: 0,
      likes: 2,
      url: "/elevating-security-with-firewalls",
    },
    {
      image: img6,
      title: 'Top 5 Effective Website Security Tips for 2024',
      views: 0,
      likes: 2,
      url: "/top-5-effective-website-security-tips-for-2024",
    },
    {
      image: img3,
      title: 'Phishing: Beware of Fake Emails and Messages',
      views: 0,
      likes: 2,
      url: "/phishing-beware-of-fake-emails-and-messages",
    },
    {
      image: img1,
      title: 'Fortifying Mobile App Security',
      views: 0,
      likes: 2,
      url: "/fortifying-mobile-app-security",
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
            Why Strong Passwords Matter and How to Create
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
            In today's digital world, strong passwords are vital for safeguarding personal information and
            preventing unauthorized access.  </motion.p>

          {/* Blog Image */}
          <div className="blog-image-container">
            <img
              src={img2}
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
            In today's digital age, strong passwords are crucial for protecting our online lives. They serve as the primary defense against cybercriminals targeting sensitive accounts.
            However, many still use easily guessable passwords, risking their personal information.
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
              Strong Passwords Matter
            </motion.h2>

            {/* First paragraph animation */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >

              Strong passwords are essential for safeguarding your personal information and online accounts from cybercriminals. Weak passwords are easily cracked, allowing hackers unauthorized access to sensitive data, including financial details. By using strong, unique passwords for each account, you can limit the damage in case of a data breach. Complex passwords also thwart automated hacking tools, making it significantly harder for cyberattacks to succeed.
              Ultimately, having robust passwords gives you peace of mind, knowing your accounts are well-protected against potential threats.
            </motion.p>

            {/* Quoted text animation */}
            <motion.p
              className="text-with-border"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              "Strong passwords are the foundation of digital security;
              they safeguard your identity, protect your data, and empower you to navigate the online world with confidence."
            </motion.p>

            {/* Second paragraph animation */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              To create strong passwords, aim for a minimum of 12 characters that combine uppercase and lowercase letters, numbers, and special symbols. Avoid using easily guessable information, such as birthdays or common words, and consider using a passphrase made up of random words. Utilizing a password manager can help you generate and store complex passwords securely. Regularly updating your passwords further enhances security, especially for sensitive accounts.
              By following these guidelines, you can significantly improve your online safety and protect your valuable information.

            </motion.p>

            {/* Second heading animation */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              The Importance of Strong Passwords
            </motion.h2>

            {/* Second quoted text animation */}
            <motion.p
              className="text-with-border"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              "Strong passwords are the foundation of digital security."
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

export default Blog2Detail;