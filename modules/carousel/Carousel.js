"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import { motion } from "framer-motion";
import { carouselTexts } from "./texts";
import { slidesData } from "@/constants/SlideData/SlideData";
import SlideCard from "./swiperItem/SlideCard";

const Carousel = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="relative w-screen overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[250px] bg-gradient-to-b from-violet-800 to-violet-950 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center py-10">
        <h1 className="text-3xl font-bold text-white sm:text-2xl">
          {carouselTexts.title}
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          navigation
          centeredSlides
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 4, // desktop
            },
            768: {
              slidesPerView: 2, // tablet
            },
            0: {
              slidesPerView: 1, // mobile
            },
          }}
          className="rounded-lg shadow-lg p-4"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideCard
                icon={slide.icon}
                title={slide.title}
                text={slide.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Carousel;
