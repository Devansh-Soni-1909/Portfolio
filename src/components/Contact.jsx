import React from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

import { styles } from "../styles";

const Contact = () => {
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      
      {/* Left Section: Buttons */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl flex flex-col justify-center items-center'
      >
        <p className={styles.sectionSubText}>Connect with me</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <div className='mt-10 flex flex-col gap-4 w-full max-w-xs'>
          <a
            href='https://www.linkedin.com/in/devansh-soni-545aa8219/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition'
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href='https://leetcode.com/u/user7403ay/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg transition'
          >
            <SiLeetcode /> LeetCode
          </a>

          <a
            href='https://auth.geeksforgeeks.org/user/devansh2335k4'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition'
          >
            <SiGeeksforgeeks /> GeeksforGeeks
          </a>

          <a
            href='/Devansh_Soni_Resume (2).pdf'
            download
            className='flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition'
          >
            <FaFileDownload /> Download Resume
          </a>
        </div>
      </motion.div>

      {/* Right Section: Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[400px] md:h-[400px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
