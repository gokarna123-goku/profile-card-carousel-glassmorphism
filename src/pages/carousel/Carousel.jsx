import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Card from '../../components/card/Card';
import SwiperNavBtn from '../../components/swiperbtn/SwiperNavBtn';


const Carousel = () => {
    const breakpointsResponsive = {

        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    }

    return (
        <div className='w-full h-screen flex items-center justify-center py-5 lg:px-28 md:px-16 sm:px-7 px-4 background-carousel'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={breakpointsResponsive}
                modules={[Pagination]}
                className="mySwiper py-16 [&_.swiper-wrapper]:!ease-linear relative"
            >
                <SwiperSlide>
                    <Card
                        img="https://cdn.pixabay.com/photo/2022/07/24/23/46/artificial-intelligence-7342613_640.jpg"
                        name="G-Tech Official"
                        username="gtech_official"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla harum neque facere error quibusdam pariatur tenetur nisi repellendus veritatis quasi?"
                        link="/profile"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        img="https://cdn.pixabay.com/photo/2023/06/27/03/15/ai-generated-8091289_1280.jpg"
                        name="Emily Johnson"
                        username="emilyjohnson"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla harum neque facere error quibusdam pariatur tenetur nisi repellendus veritatis quasi?"
                        link="/profile"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        img="https://cdn.pixabay.com/photo/2021/03/03/10/20/portrait-6064965_640.jpg"
                        name="Michael Brown"
                        username="michaelbrown"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla harum neque facere error quibusdam pariatur tenetur nisi repellendus veritatis quasi?"
                        link="/profile"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        img="https://cdn.pixabay.com/photo/2020/10/10/19/14/woman-5643994_640.jpg"
                        name="Sophia Davis"
                        username="sophiadavis"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla harum neque facere error quibusdam pariatur tenetur nisi repellendus veritatis quasi?"
                        link="/profile"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        img="https://cdn.pixabay.com/photo/2022/07/24/23/46/artificial-intelligence-7342613_640.jpg"
                        name="James Wilson"
                        username="jameswilson"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla harum neque facere error quibusdam pariatur tenetur nisi repellendus veritatis quasi?"
                        link="/profile"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        img="https://cdn.pixabay.com/photo/2024/01/15/16/57/avatar-8510529_640.jpg"
                        name="Olivia Martinez"
                        username="oliviamartinez"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla harum neque facere error quibusdam pariatur tenetur nisi repellendus veritatis quasi?"
                        link="/profile"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        img="https://cdn.pixabay.com/photo/2023/08/27/14/17/man-8217185_640.jpg"
                        name="Liam Garcia"
                        username="liamgarcia"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla harum neque facere error quibusdam pariatur tenetur nisi repellendus veritatis quasi?"
                        link="/profile"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        img="https://cdn.pixabay.com/photo/2021/03/03/08/56/woman-6064819_640.jpg"
                        name="Isabella Lee"
                        username="isabellee"
                        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla harum neque facere error quibusdam pariatur tenetur nisi repellendus veritatis quasi?"
                        link="/profile"
                    />
                </SwiperSlide>

                {/* Navigation */}
                <div className="w-full flex items-center justify-between flex-row-reverse h-auto py-5 absolute top-[45%] right-0 px-2 z-50">
                    <SwiperNavBtn />
                </div>
            </Swiper>
        </div>
    )
}

export default Carousel