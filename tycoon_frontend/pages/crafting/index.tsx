import React from 'react'
import fetch from "../../utils/fetch"
import { GetServerSideProps } from 'next'
import Image from 'next/image'

const crafting = ({ crafting }: any) => {
    console.log(crafting)
    return (
        <div className="bg-[#151719]">
            {crafting.map((e: any) => (
                <div>
                    <p>{e.bundleType}</p>
                    <div>
                        {e.bundleContent.map((item: any) => (
                            <Image src={item.itemType.asset} className="rounded-t-lg h-36 w-full object-cover" width={500} height={500} alt='' />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default crafting

export const getServerSideProps: GetServerSideProps = async () => {
    const getCrafting = await fetch(`/api/crafting`, {
        method: 'GET',
    })
    const crafting = await getCrafting.json()

    return {
        props: {
            crafting: crafting,
        }
    }
};