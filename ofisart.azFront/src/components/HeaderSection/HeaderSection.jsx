// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';

import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HeaderSection.scss';

export default () => {
  const { t, i18n } = useTranslation();

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

            </SwiperSlide>
            <SwiperSlide>
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

            </SwiperSlide>

        </Swiper>
    );
};
