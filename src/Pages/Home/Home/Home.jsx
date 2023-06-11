import React, { useState } from 'react';
import Slider from '../../Shared/Slider';
import PopularClass from '../PopularClasses/PopularClass';
import PopularInstructor from './PopularInstructors/PopularInstructor';
import lightDarkMode from './../../../../public/light-dark-mode-animation.json';
import YogaGallery from './YogaGallery/YogaGallery';
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react-web';


const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleModeToggle = () => {
      setDarkMode(!darkMode);
    };
    return (
      <div
        className={` ${
          darkMode ? " bg-black text-red-600" : "bg-white text-black"
        }`}
      >
        <div className="relative">

          <button
            onClick={handleModeToggle}
            className="fixed top-0 left-30 right-0 z-0"
          >
            <Lottie
              style={{ height: "80px", width: "100px" }}
              options={{
                animationData: lightDarkMode,
                loop: true,
                autoplay: true,
              }}
            />
          </button>
        </div>
        <div>
          <Helmet>
            <title>Summer Camp || Home</title>
          </Helmet>
          <Slider />
          <PopularClass />
          <PopularInstructor />
          <YogaGallery />
        </div>
      </div>
    );
};

export default Home;