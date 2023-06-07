import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import slider1 from '../../assets/slider/slider1.jpg'
import slider2 from '../../assets/slider/slider2.jpg'
import slider3 from '../../assets/slider/slider3.jpg'
import slider4 from '../../assets/slider/slider4.jpg'
import slider5 from '../../assets/slider/slider5.jpg'
import slider6 from '../../assets/slider/slider6.jpg'
import './styles.css'


const Slider = () => {

    function ThumbnailPlugin(mainRef) {
      return (slider) => {
        function removeActive() {
          slider.slides.forEach((slide) => {
            slide.classList.remove("active");
          });
        }
        function addActive(idx) {
          slider.slides[idx].classList.add("active");
        }

        function addClickEvents() {
          slider.slides.forEach((slide, idx) => {
            slide.addEventListener("click", () => {
              if (mainRef.current) mainRef.current.moveToIdx(idx);
            });
          });
        }

        slider.on("created", () => {
          if (!mainRef.current) return;
          addActive(slider.track.details.rel);
          addClickEvents();
          mainRef.current.on("animationStarted", (main) => {
            removeActive();
            const next = main.animator.targetIdx || 0;
            addActive(main.track.absToRel(next));
            slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
          });
        });
      };
    }

    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
    });
    const [thumbnailRef] = useKeenSlider(
      {
        initial: 0,
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      [ThumbnailPlugin(instanceRef)]
    );
    return (
      <>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src={slider1} alt="" className="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={slider2} alt="" className="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src={slider3} alt="" className="" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src={slider4} alt="" className="" />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src={slider5} alt="" className="" />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img src={slider6} alt="" className="" />
          </div>
        </div>

        <div ref={thumbnailRef} className="keen-slider thumbnail">
          <div className="keen-slider__slide number-slide1">
            <img src={slider1} alt="" className="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={slider2} alt="" className="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src={slider3} alt="" className="" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src={slider4} alt="" className="" />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src={slider5} alt="" className="" />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img src={slider6} alt="" className="" />
          </div>
        </div>
      </>
    );
};

export default Slider;