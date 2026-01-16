import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BF from '../components/BF';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { banners } from '../assets/data/data';

const Banner = () => {
    return (
        <div className="relative">
            
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-120"
            >
                {banners.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={img}
                            alt={`banner-${i}`}
                            className="w-full h-full object-cover select-none"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-0 left-0 w-full z-10">
                <BF />
            </div>

        </div>
    );
}

export default Banner;
