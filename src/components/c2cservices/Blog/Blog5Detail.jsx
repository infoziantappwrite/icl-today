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


const Blog5Detail = () => {
  const posts = [
    {
      image: img2,
      title: 'Why Strong Passwords Matter and How to Create',
      views: 0,
      likes: 2,
      url:"/why-strong-passwords-matter-and-how-to-create",
    },
    {
      image: img4,
      title: 'Strengthening Your Digital Fortress',
      views: 0,
      likes: 2,
      url:"/strengthening-your-digital-fortress",
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
            Elevating Security with Firewalls 
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
 Elevating security with firewalls is vital for protecting sensitive data and preventing unauthorized access. 
 They serve as a barrier, monitoring network traffic to defend against potential threats.      </motion.p>

          {/* Blog Image */}
          <div className="blog-image-container">
            <img
              src={img5}
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
            Firewalls protect networks by blocking unauthorized access and malicious traffic. They serve as a critical defense layer, safeguarding sensitive information from cyber threats.
            Regular assessments ensure they remain effective against evolving security challenges.
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
   Firewall Security Essentials
  </motion.h2>

  {/* First paragraph animation */}
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
   Firewalls play a crucial role in elevating an organizations security framework by preventing unauthorized access to critical systems. Advanced firewalls, such as Next-Generation Firewalls (NGFW) and Unified Threat Management (UTM) devices, offer enhanced protection through features like Intrusion Prevention Systems (IPS). This multi-layered security approach ensures that malicious traffic is effectively blocked before it can cause damage. 
   Regular firewall assessments are essential for testing their efficiency and identifying configuration flaws.
  </motion.p>

  {/* Quoted text animation */}
  <motion.p
    className="text-with-border"
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, delay: 0.4 }}
  >
    Regular assessments of firewalls are not just beneficial; they are essential for robust security.
  </motion.p>

  {/* Second paragraph animation */}
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
     An effective firewall security assessment should include a thorough evaluation of network architecture, access points, and security configurations. 
                By identifying vulnerabilities within both external and internal networks, organizations can fortify their defenses against potential attacks. Additionally, these assessments provide recommendations for crucial software updates and configuration improvements. In an era where cyber threats are increasingly sophisticated, prioritizing firewall security assessments is key to maintaining a resilient cybersecurity strategy.
  </motion.p>

  {/* Second heading animation */}
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
  Fortifying Network Security with Firewalls
  </motion.h2>

  {/* Second quoted text animation */}
  <motion.p
    className="text-with-border"
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
   "Regular assessments of firewalls are essential for robust security."
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

export default Blog5Detail;