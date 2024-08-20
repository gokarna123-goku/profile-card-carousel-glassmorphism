import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { useSwiper } from 'swiper/react'

const SwiperNavBtn = () => {
    const swiper = useSwiper();

    return (
        <>
            <button onClick={() => swiper.slideNext()} className='swiper-button-next right-[var(--swiper-navigation-sides-offset, -2%)] left-auto w-[40px] h-[40px] p-3 bg-green-950/40 text-green-50 rounded-full after:hidden'>
                <FaArrowRightLong />
            </button>
            <button onClick={() => swiper.slidePrev()} className='swiper-button-prev left-[var(--swiper-navigation-sides-offset, -2%)] right-auto w-[40px] h-[40px] p-3 bg-green-950/40 text-green-50 rounded-full after:hidden'>
                <FaArrowLeftLong />
            </button>
        </>
    )
}

export default SwiperNavBtn