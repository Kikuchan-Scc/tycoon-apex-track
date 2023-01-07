import React from 'react'
import fetch from "../../utils/fetch"
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const crafting = ({ crafting }: any) => {
    const { t } = useTranslation('common')
    console.log(crafting)
    return (
        <div className="bg-[#151719]">
            {crafting.map((e: any) => (
                <div className=' space-y-5 pt-5'>
                    <div className='py-10 '>
                        <p className='text-center text-white text-[25px] text-opacity-80'>{t(`crafting.title.${e.bundleType}`)}</p>
                    </div>
                    <div className='flex flex-col items-center space-y-3'>
                        {e.bundleContent.map((item: any) => (
                            <div className='flex justify-center w-[80%] xl:w-[30%] md:w-[50%] shadow-lg'>
                                <Image src={item.itemType.asset} className="rounded-l-lg w-[30%] h-[30%] object-cover" width={500} height={500} alt='' />
                                <div className='w-[70%] p-2 space-y-2'>
                                    <p className='md:text-[16px] text-[14px] text-[#8c99a2]'>{t(`crafting.rotation.${item.itemType.name}`)}</p>
                                    <p className='md:text-[14px] text-[12px] text-[#8c99a2]'>{t(`crafting.rarity.${item.itemType.rarity}`)}</p>
                                    <p className='md:text-[14px] text-[12px] text-[#8c99a2] text-opacity-50'>{t(`crafting.title.cost`)}：{item.cost}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default crafting

export const getServerSideProps: GetServerSideProps = async ({
    locale,
}) => {
    const getCrafting = await fetch(`/api/crafting`, {
        method: 'GET',
    })
    const crafting = await getCrafting.json()

    return {
        props: {
            crafting: crafting,
            ...(await serverSideTranslations(locale ?? 'en', [
                'common',
            ])),
        }
    }
};