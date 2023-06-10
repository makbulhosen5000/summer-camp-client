import React, { useContext } from 'react';
import Slider from '../../Shared/Slider';
import PopularClass from '../PopularClasses/PopularClass';
import PopularInstructor from './PopularInstructors/PopularInstructor';
import YogaGallery from './YogaGallery/YogaGallery';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Home = () => {

    return (
      <div>
        <Helmet>
          <title>Summer Camp || Home</title>
        </Helmet>
        <Slider />
        <PopularClass />
        <PopularInstructor />
        <YogaGallery />
      </div>
    );
};

export default Home;