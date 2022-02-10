import { Flex, FlexProps } from "@chakra-ui/react";
import React, { Children, useState } from "react";
import { Lazy, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

interface SlidesProps extends FlexProps {}

const Slides: React.FC<SlidesProps> = ({ children, ...props }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = () => (
    <>
      {Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </>
  );
  const isMultiSlides = Children.count(children) > 1;
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      sx={{
        ".mySwiper2 .swiper-slide": {
          h: "30rem",
        },
        ".mySwiper2 img": {
          objectFit: "contain !important",
        },
        ".mySwiper .swiper-slide": {
          h: "10rem",
        },
        ".swiper-button-prev,.swiper-button-next": {
          color: "purple.500",
          opacity: 0.5,
        },
      }}
      {...props}
    >
      <Swiper
        lazy
        loop={isMultiSlides}
        navigation
        slidesPerView="auto"
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Lazy, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images()}
      </Swiper>
      {!isMultiSlides ? null : (
        <Swiper
          // @ts-ignore
          onSwiper={setThumbsSwiper}
          lazy
          loop
          freeMode
          watchSlidesProgress
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className="mySwiper"
        >
          {images()}
        </Swiper>
      )}
    </Flex>
  );
};
export default Slides;
