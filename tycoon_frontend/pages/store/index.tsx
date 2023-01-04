import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import fetch from "../../utils/fetch"
import React from 'react'

const index = ({ store }: any) => {
    console.log(store)
    return (
        <div className="bg-[#151719]">
            <div className='w-[90%] mx-auto space-y-5 py-5'>
                <div>
                    <div className='py-10'>
                        <p className='text-center text-white text-[25px] text-opacity-80'>当前轮换商店</p>
                    </div>
                    <div className='h-[2px] bg-white lg:w-full bg-opacity-20'></div>
                </div>
                <div className=' grid 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                    {store.map((e: any) => (
                        <div key={e.id} className='h-[400px] rounded-lg shadow-lg bg-[#151719]'>
                            <div className='h-full'>
                                <div className='h-[80%] p-5'>
                                    <img className='h-full object-contain mx-auto' src={e.asset} />
                                </div>
                                <div className='h-[20%] px-3 space-y-1'>
                                    <p className='text-white text-[14px] text-opacity-80'>{e.title}</p>
                                    {e.pricing.map((shops: any) => (
                                        <div key={shops.id} className='flex space-x-2 items-center'>
                                            {
                                                shops.ref === 'Legend Tokens' ?
                                                    <img className='w-[20px] h-[20px]' src='./static/images/redbi.png' />
                                                    :
                                                    <img className='w-[20px] h-[20px]' src='./static/images/goldbi.png' />
                                            }
                                            <p className='text-white text-[13px] text-opacity-80'>{shops.quantity}</p>
                                        </div>
                                    ))}
                                    <p className='text-[#8c99a2] text-opacity-50 text-[12px]'>剩余时间：{e.expireTimestamp * 1000}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default index

export const getServerSideProps: GetServerSideProps = async ({
    locale,
}) => {
    const getStore = await fetch(`/api/store`, {
        method: 'GET',
    })
    const store = await getStore.json()

    return {
        props: {
            store: store,
            ...(await serverSideTranslations(locale ?? 'en', [
                'common',
            ])),
        }
    }
};