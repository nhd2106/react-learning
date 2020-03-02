import React, { Component } from "react";

import carouStyle from "../Carousel/carousel.module.css";


class Carousel extends Component {
  
  render() {
    const carouselcolor = '#12CBD7'
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 550,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplayspeed: 50,
      draggable: false
    };
    return (
      <div className="">
        <div className={carouStyle.carouselBackground}>
          <div className={carouStyle.carouselContent}>
            <h3 className="text-white">Find Oneline Courses That Suits you</h3>
            <div className="container">
              <div className={carouStyle.searchArea}>
                <div className={carouStyle.searchBar}>
                  <div className='aaa'>
                    <input className='a' ></input>
                  </div>
                  <div>
                    <select className='a'>
                      <option value="">Category Course</option>
                      <option value="">Laravel</option>
                      <option value="">PHP</option>
                      <option value="">JavaScript</option>
                      <option value="">Python</option>
                    </select>
                  </div>
                  <div>
                    <select className='a'>
                      <option value="">Difficulty</option>
                      <option value="">Beginner</option>
                      <option value="">Intermediate</option>
                      <option value="">Advance</option>
                    </select>
                  </div>
                  <button style={{background:carouselcolor}} className="ml-5 btn text-white">Search</button>
                </div>
              </div>
            </div>
            <p className='text-white mt-2'>We have more than 500 courses to improve your skills</p>
            <button style={{background:carouselcolor}} className="btn text-white pr-4 pl-4 pt-2 pb-2">Register Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
