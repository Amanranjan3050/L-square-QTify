import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Add the necessary Swiper CSS
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import AlbumCard from "../Card/AlbumCard";
import Styles from "./Carousel.module.css";
import LeftButton from "../../Components/Carousel/LeftButton/LeftButton";
import RightButton from "./RightButton/RightButton";

function Carousel({ data, type }) {
  return (
    <div className={Styles.wrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={'auto'}
        spaceBetween={2}
      >
        <LeftButton />
        <RightButton />
        {data.map((album) => {
          return (
            <SwiperSlide key={album.id} style={{ width: "auto", minWidth: "200px" }}>
              <AlbumCard album={album} type={type}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;