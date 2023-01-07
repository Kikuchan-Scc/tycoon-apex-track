import { GetServerSideProps } from 'next'
import fetch from '../../utils/fetch'
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const news = ({ news }: any) => {
    const router = useRouter()

    console.log(news)
    return (
        <div className='bg-[#151719] '>
            <div className='w-[90%] mx-auto'>
                <div className='py-10 '>
                    <p className='text-center text-white text-[25px] text-opacity-80'>官方资讯</p>
                </div>
                <div className='h-[2px] bg-white lg:w-full bg-opacity-20'></div>
            </div>
            {news.map((e: any) => (
                <div className="px-64 py-5">
                    <div className="w-full">
                        <div className="flex rounded-lg shadow-lg bg-[#151719]">
                            <Link href={e.link}>
                                <Image width={500} height={500} className="rounded-l-lg h-[250px] object-cover" src={e.img} alt="" />
                            </Link>
                            <div className="p-6 w-full">
                                <p className="text-[#8c99a2] text-base mb-4">
                                    {e.title}
                                </p>
                                <p className='md:text-[14px] text-[12px] text-[#8c99a2]'>{e.short_desc}</p>
                                <p className='md:text-[14px] text-[12px] text-[#8c99a2] text-opacity-50'></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default news

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const getNews = await fetch(`/api/news`, {
        method: 'GET',
    })
    const news = await getNews.json()

    return {
        props: {
            news: news,
        }
    }
}