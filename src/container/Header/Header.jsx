import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const [jobTitle, setJobTitle] = useState('');
  const jobTitles = ["Web Developer", "Front End Developer","React developer","Next.js developer"];
  let index = 0;
  let letterIndex = 0;

  useEffect(() => {
    const type = () => {
      if (letterIndex < jobTitles[index].length) {
        setJobTitle((prev) => prev + jobTitles[index][letterIndex]);
        letterIndex++;
        setTimeout(type, 50); // Adjust the timeout for typing speed
      } else {
        setTimeout(erase, 1500); // Delay before starting to erase
      }
    };

    const erase = () => {
      if (letterIndex > 0) {
        setJobTitle((prev) => prev.slice(0, -1));
        letterIndex--;
        setTimeout(erase, 50); // Adjust the timeout for erasing speed
      } else {
        index = (index + 1) % jobTitles.length;
        setTimeout(type, 500); // Delay before starting to type the next job title
      }
    };

    // Start the typing animation
    type();

    // Cleanup function
    return () => clearTimeout();
  }, [index, letterIndex]);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Abhi</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">{jobTitle}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.developer_male} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.typescript].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt={`circle-${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
