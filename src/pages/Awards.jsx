import "../css/Awards.css";
import HallofFames from "./HallofFames";

import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Awards() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const cards = [
    { title: "Nokia", image: "./assets/nokia.png", description: "Recognized for reporting critical security vulnerabilities.", category: "Team Awards", heading: "Acknowledgement for Excellence" },
    { title: "M-Files", image: "./assets/m-files.png", description: "Acknowledged for identifying and reporting security flaws.", category: "Innovation Awards", heading: "Security Recognition Award" },
    { title: "Zivame", image: "./assets/zivame_subpart.png", description: "Honored for contributions to enhancing security measures.", category: "Team Awards", heading: "Security Contribution Award" },
    { title: "Blackberry", image: "./assets/blackberry.png", description: "Recognized for proactive security vulnerability reporting.", category: "Individual Achievements", heading: "Security Excellence Award" },
    { title: "EU Institutions", image: "./assets/eu-institutions.png", description: "Acknowledged for significant security issue reporting.", category: "Individual Achievements", heading: "Security Recognition" },
    { title: "Scottish Government", image: "./assets/scottish-government.png", description: "Honored for outstanding security vulnerability reporting.", category: "Team Awards", heading: "Security Appreciation" },
    { title: "IOM", image: "./assets/iofm_subpart.png", description: "Recognized for exceptional security issue identification.", category: "Innovation Awards", heading: "Security Excellence Recognition" },
    { title: "Avans University", image: "./assets/avans-univ.png", description: "Acknowledged for significant contributions to security.", category: "Innovation Awards", heading: "Security Contribution Recognition" },
    { title: "Dutch Judiciary Department", image: "./assets/dutch.png", description: "Recognized for outstanding security vulnerability reporting.", category: "Individual Achievements", heading: "Security Excellence Award" }
  ];

  const categories = ["All", "Individual Achievements", "Team Awards", "Innovation Awards"];

  const filteredCards = selectedCategory === "All" ? cards : cards.filter((card) => card.category === selectedCategory);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
    document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
  };

  return (
    <>
      <Helmet>
        <title>Awards & Recognition | Celebrating Infoziant's Achievements</title>
        <meta
          name="description"
          content="Discover Infoziant's accolades in cybersecurity, including awards from Sony, Microsoft, and Apple Celebrating excellence in security and innovation"
        />
      </Helmet>




      <div className="awards_page">

        <motion.div
          className="service-banner"
          style={{
            backgroundImage: "url(./assets/awards-banner-img.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >



          <motion.div className="sb-intro " initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1>Awards & Appreciation</h1>
            <br />
            <p>Celebrating our achievements and milestones</p>
          </motion.div>
        </motion.div>
        <HallofFames/>

        <motion.div
          className="category-container-award"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-award ${selectedCategory === category ? "active-award" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="card-grid-award"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delayChildren: 0.3 }}
        >
          {filteredCards.map((card, index) => (
            <motion.div
              key={index}
              className="card-award"
              onClick={() => openModal(card.image)}
              style={{
                backgroundImage: "url(./assets/awards-bg.jfif)",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="card-title-award">{card.title}</h3>
              <img className="card-image-award" src={card.image} alt={card.title} />
              <h4 className="highlight" style={{ fontWeight: '700' }}>{card.heading}</h4>
              <p className="card-description-award">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for Image Popup */}
        {isModalOpen && (
          <motion.div
            className="modal-award"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="modal-content-award"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="close-award" onClick={closeModal}>&times;</span>
              <img src={modalImage} alt="Popup" className="modal-image-award" />
            </motion.div>
          </motion.div>
        )}

      </div>
    </>
  );
}
