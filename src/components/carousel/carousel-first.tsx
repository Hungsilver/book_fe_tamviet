import Image from "next/image";
import React from "react";
import "./carousel-home.css";
import Slider from "react-slick";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
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

function CarouselHomepage() {
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
    <div className="m-0 ">
      <Slider {...settings} className="carousel-first bg-white">
        <div className="relative w-full h-0 pt-[50%]">
          <Image
            className="absolute top-0 left-0 h-full w-full object-cover "
            src={"/image/banner1.png"}
            width={1500}
            height={100}
            alt="banner"
          />
          <h3 className="hidden sm:block lg:text-[40px] font-saira absolute bottom-8 left-[26%] text-white mb-0 z-10">
            THƯ VIỆN ĐIỆN TỬ TỈNH VĨNH PHÚC
          </h3>
        </div>
        <div className="relative w-full h-0 pt-[50%]">
          <Image
            priority
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={"/image/banner2.png"}
            width={1500}
            height={100}
            alt="banner"
          />
        </div>
        <div className="relative w-full h-0 pt-[50%]">
          <Image
            priority
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={"/image/banner3.png"}
            width={1500}
            height={100}
            alt="banner"
          />
        </div>
        <div className="relative w-full h-0 pt-[50%]">
          <Image
            priority
            className="absolute top-0 left-0 h-full w-full object-cover"
            src={"/image/banner4.png"}
            width={1500}
            height={100}
            alt="banner"
          />
        </div>
      </Slider>
    </div>
  );
  /* <Carousel>
        <Carousel.Item className="max-h-[550px]">
          <Image
            priority
            className="object-cover w-full h-auto"
            src={"/image/banner1.png"}
            width={1500}
            height={200}
            alt="banner"
          />
          <Carousel.Caption className="hidden lg:block">
            <h3 className="lg:text-[40px] font-saira">
              THƯ VIỆN ĐIỆN TỬ TỈNH VĨNH PHÚC
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="max-h-[550px]">
          <Image
            priority
            className="object-cover w-full"
            src={"/image/banner2.png"}
            width={1500}
            height={200}
            alt="banner"
          />
        </Carousel.Item>
        <Carousel.Item className="max-h-[550px] ">
          <Image
            priority
            className="object-cover w-full"
            src={"/image/banner3.png"}
            width={1500}
            height={400}
            alt="banner"
          />
        </Carousel.Item>
        <Carousel.Item className="max-h-[550px] ">
          <Image
            priority
            className="object-cover w-full"
            src={"/image/banner4.png"}
            width={1500}
            height={400}
            alt="banner"
          />
        </Carousel.Item>
      </Carousel> */
}

export default CarouselHomepage;
