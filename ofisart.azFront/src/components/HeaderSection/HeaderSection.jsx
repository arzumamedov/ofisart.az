// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeaderSection.scss';

export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={0}
            slidesPerView={4}
            navigation={{
                prevEl: false,
                nextEl: false,
            }}
            loop={true}
            // autoplay={{ delay: 2000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='img-1'>
                    <div className='text'>
                        <h2>Designs and luxury like never before</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-1.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='img-2'>
                    <div className='text'>
                        <h2>Because it is the finest design crafted</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-2.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='img-3'>
                    <div className='text'>
                        <h2>The furniture you deserve so much</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-3.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='img-4'>
                    <div className='text'>
                        <h2>Luxury no one could afford before</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-4.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='img-1'>
                    <div className='text'>
                        <h2>Designs and luxury like never before</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-1.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='img-2'>
                    <div className='text'>
                        <h2>Because it is the finest design crafted</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-2.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='img-3'>
                    <div className='text'>
                        <h2>The furniture you deserve so much</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-3.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='img-4'>
                    <div className='text'>
                        <h2>Luxury no one could afford before</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-4.jpg" alt="" />
                </div>

            </SwiperSlide>

        </Swiper>
    );
};
