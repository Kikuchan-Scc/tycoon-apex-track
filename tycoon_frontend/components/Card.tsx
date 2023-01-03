import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Link from "next/link";

export default function Card({ news }: any) {
    return (
        <>
            <div className="shadow-lg hidden sm:block">
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    navigation={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: true,
                    }}

                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {news.map((e: any) => {
                        return (
                            <SwiperSlide>
                                <div className="flex flex-col md:flex-row bg-[#151719]">
                                    <div className='md:w-[50%] md:h-full relative h-full'>
                                        <img className=" md:right-5 md:bottom-5 w-full h-96 object-cover" src={e.img} alt="" />
                                    </div>
                                    <div className="md:w-[50%] md:h-full h-[250px]  p-6">
                                        <Link href={e.link}>
                                            <strong className="text-[#cad3da] text-3xl hover:underline ">{e.title}</strong>
                                        </Link>
                                        <p className="text-[#8c99a2] text-base">
                                            {e.short_desc}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    );
}
