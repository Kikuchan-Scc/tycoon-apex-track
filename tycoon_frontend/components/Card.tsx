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
    console.log(news)
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {news.map((e: any) => {
                    return (
                        <SwiperSlide>
                            <div className="">
                                <div className="flex flex-col md:flex-row bg-[#151719] shadow-lg">
                                    <div className=' md:w-[50%] relative'>
                                        <img className="absolute right-5 bottom-5 w-full h-96 object-cover" src={e.img} alt="" />
                                        <div className="bg-[#25282c] w-full h-96 object-cover"></div>
                                    </div>
                                    <div className="p-6 flex flex-col justify-start">
                                        <Link href={e.link}>
                                            <strong className="text-[#cad3da] text-3xl mb-2 hover:underline ">{e.title}</strong>
                                        </Link>
                                        <p className="text-[#8c99a2] text-base mb-4">
                                            {e.short_desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}
