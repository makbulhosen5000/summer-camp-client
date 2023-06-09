import React from 'react';
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import yoga from "../../../../../public/yoga.json";
import SectionTitle from '../../../SectionTitle/SectionTitle';

const YogaGallery = () => {
     const defaultOptions = {
       loop: true,
       autoplay: true,
       animationData: yoga,
     };
    return (
      <div>
        <SectionTitle
          title="About Yoga"
          subTitle="All About Yoga and Meditation"
        />
        <div className="mt-[-280px]">
          <Lottie options={defaultOptions} />
        </div>
        <motion.h1
          animate={{ x: [150, 50, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          <div className=' mx-20 mb-20 text-justify font-bold text-emerald-900'>
            Meditation can help reduce stress levels by promoting relaxation and
            calming the mind. It allows individuals to detach from the daily
            pressures and cultivate a sense of inner peace Meditation has deep
            roots in spiritual traditions and can facilitate spiritual growth.
            It provides a means for individuals to connect with their inner
            selves, explore existential questions, and cultivate a sense of
            inner peace and interconnectedness. Meditation can offer a pathway
            to personal transformation and a deeper understanding of the self
            and the world.
          </div>
        </motion.h1>
      </div>
    );
};

export default YogaGallery;