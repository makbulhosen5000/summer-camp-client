import React from 'react';
import Slider from '../../Shared/Slider';
import PopularClass from '../PopularClasses/PopularClass';
import PopularInstructor from './PopularInstructors/PopularInstructor';
import YogaGallery from './YogaGallery/YogaGallery';

const Home = () => {
    return (
        <div>
            <Slider/>
            <PopularClass/>
            <PopularInstructor/>
            <YogaGallery/>
        </div>
    );
};

export default Home;