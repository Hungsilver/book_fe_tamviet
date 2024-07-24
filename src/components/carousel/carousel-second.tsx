import React from "react";
import "./carousel-home.css";
import Slider from "react-slick";
import Image from "next/image";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} `}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function CarouselHomepageSecond() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="my-2 sm:my-4">
      <Slider
        {...settings}
        className="carousel-second text-center  sm:text-[15px] text-[10px] text-black"
      >
        <div className="flex justify-center items-center flex-col">
          <h4>Đọc sách hôm nay thành công mai sau</h4>
          <p>Marganet Fuller</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h4>Đọc sách hôm nay thành công mai sau</h4>
          <p>Marganet Fuller</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h4>Đọc sách hôm nay thành công mai sau</h4>
          <p>Marganet Fuller</p>
        </div>
      </Slider>
    </div>
  );
  // return (
  //   <div className="rounded-[4px] p-3 bg-yellow-100 mb-2 text-black">
  //     <Carousel indicators={false}>
  //       <Carousel.Item>
  //         <div className="flex justify-center items-center flex-col">
  //           <h4>Đọc sách hôm nay thành công mai sau</h4>
  //           <p>Marganet Fuller</p>
  //         </div>
  //       </Carousel.Item>
  //       <Carousel.Item>
  //         <div className="flex justify-center items-center flex-col">
  //           <h4>Nơi kiến ​​thức bắt đầu</h4>
  //           <p>...</p>
  //         </div>
  //       </Carousel.Item>
  //       <Carousel.Item>
  //         <div className="flex justify-center items-center flex-col">
  //           <h4>Thư viện với kiến ​​thức đích thực và chân thực</h4>
  //           <p>...</p>
  //         </div>
  //       </Carousel.Item>
  //     </Carousel>
  //   </div>
  // );
}

export default CarouselHomepageSecond;
