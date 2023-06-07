import React from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ReactSwipe from "react-swipe";
import slider1 from '../../assets/slider/slider1.jpg';
import slider2 from "../../assets/slider/slider2.jpg";
import slider3 from "../../assets/slider/slider3.jpg";
import slider4 from "../../assets/slider/slider4.jpg";
import slider5 from "../../assets/slider/slider5.jpg";
import slider6 from "../../assets/slider/slider6.jpg";
import './slider.css'

const Slider = () => {
    const carousel = (slider) => {
      const z = 300;
      function rotate() {
        const deg = 360 * slider.track.details.progress;
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
      }
      slider.on("created", () => {
        const deg = 360 / slider.slides.length;
        slider.slides.forEach((element, idx) => {
          element.style.transform = `rotateY(${
            deg * idx
          }deg) translateZ(${z}px)`;
        });
        rotate();
      });
      slider.on("detailsChanged", rotate);
    };

      const [sliderRef] = useKeenSlider(
        {
          loop: true,
          selector: ".carousel__cell",
          renderMode: "custom",
          mode: "free-snap",
        },
        [carousel]
      );

    return (
      <div className="wrapper">
        <div className="scene">
          <div className="carousel keen-slider" ref={sliderRef}>
            <div className="carousel__cell number-slide1 ">
              <img src={slider1} alt="" />
            </div>
            <div className="carousel__cell number-slide2">
              <img src={slider2} alt="" />
            </div>
            <div className="carousel__cell number-slide3">
              <img src={slider3} alt="" />
            </div>
            <div className="carousel__cell number-slide4"><img src={slider4} alt="" /></div>
            <div className="carousel__cell number-slide5"><img src={slider5} alt="" /></div>
            <div className="carousel__cell number-slide6"><img src={slider6} alt="" /></div>
          </div>
        </div>
      </div>
    );
};

export default Slider;