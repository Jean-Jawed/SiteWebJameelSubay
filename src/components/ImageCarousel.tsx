import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Image {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: Image[];
  height?: string;
  effect?: 'slide' | 'fade';
  autoplay?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  height = 'h-[70vh]', 
  effect = 'slide',
  autoplay = true 
}) => {
  return (
    <div className={`w-full ${height} relative`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect={effect}
        autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
        loop={true}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;