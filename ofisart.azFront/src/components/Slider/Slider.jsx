import React from 'react';
import './Slider.scss';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Keyboard } from 'swiper/modules';

function Slider({ image }) {




    // const { t, i18n } = useTranslation();

    return (
        <Swiper
            className='slider'
            // install Swiper modules
            modules={[Keyboard]}
            // pagination={true}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
                prevEl: false,
                nextEl: false,
            }}
            keyboard={{
                enabled: true
            }}
            // loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            {
                   image?.map((data,key)=>(
                    <SwiperSlide key={key}>
                    <div className='detailImg-4'>
                        <img src={data} alt="" />
                    </div>
                </SwiperSlide>
                   ))
            }


            {/* <SwiperSlide>
                <div className='img-1'>
                    <div className='text'>
                        <h2>{t('design')}</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-1.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='img-2'>
                    <div className='text'>
                        <h2>{t('crafted')}</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-2.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='img-3'>
                    <div className='text'>
                        <h2>{t('furniture')}</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-3.jpg" alt="" />
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className='img-4'>
                    <div className='text'>
                        <h2>{t('luxury')}</h2>
                    </div>
                    <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-s-4.jpg" alt="" />
                </div>

            </SwiperSlide> */}

        </Swiper>
    )
}

export default Slider