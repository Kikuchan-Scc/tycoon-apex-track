import Link from 'next/link'
import React from 'react'
import Chips from './Chips'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/zh-cn' // 导入本地化语言
import Image from 'next/image'

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

const Article = ({ maps }: any) => {
    console.log(maps)
    return (
        <div className="sm:flex sm:space-x-4  justify-center pb-7">
            <div className="rounded-lg w-full shadow-lg bg-[#151719] sm:max-w-sm">
                <Image width={500} height={500} className="rounded-t-lg h-36 w-full object-cover" src={maps.battle_royale.current.asset} alt="" />
                <div className="p-6 space-y-5">
                    <div>
                        <p className="text-[#8c99a2] text-base">
                            当前匹配：{maps.battle_royale.current.map}
                        </p>
                        <p className="text-[#8c99a2] text-base">
                            剩余时间：{maps.battle_royale.current.remainingTimer}
                        </p>
                    </div>
                    <p className="text-[#8c99a2] text-opacity-50 text-[12px]">
                        下次轮换：{maps.battle_royale.next.map}
                    </p>
                </div>
            </div>
            <div className="rounded-lg w-full shadow-lg bg-[#151719] sm:max-w-sm">
                <Image width={500} height={500} className="rounded-t-lg h-36 w-full object-cover" src={maps.ranked.current.asset} alt="" />
                <div className="p-6 space-y-5">
                    <div>
                        <p className="text-[#8c99a2] text-base">
                            当前排位：{maps.ranked.current.map}
                        </p>
                        <p className="text-[#8c99a2] text-base">
                            剩余时间：{maps.ranked.current.remainingTimer}
                        </p>
                    </div>
                    <p className="text-[#8c99a2] text-opacity-50 text-[12px]">
                        下次轮换：{maps.ranked.next.map}
                    </p>
                </div>
            </div>
            <div className="rounded-lg w-full shadow-lg bg-[#151719] sm:max-w-sm">
                <Image width={500} height={500} className="rounded-t-lg h-36 w-full object-cover" src={maps.arenas.current.asset} alt="" />
                <div className="p-6 space-y-5">
                    <div>
                        <p className="text-[#8c99a2] text-base">
                            当前竞技场匹配：{maps.arenas.current.map}
                        </p>
                        <p className="text-[#8c99a2] text-base">
                            剩余时间：{maps.arenas.current.remainingTimer}
                        </p>
                    </div>
                    <p className="text-[#8c99a2] text-opacity-50 text-[12px]">
                        下次轮换：{maps.arenas.next.map}
                    </p>
                </div>
            </div>
            <div className="rounded-lg w-full shadow-lg bg-[#151719] sm:max-w-sm">
                <Image width={500} height={500} className="rounded-t-lg h-36 w-full object-cover" src={maps.arenasRanked.current.asset} alt="" />
                <div className="p-6 space-y-5">
                    <div>
                        <p className="text-[#8c99a2] text-base">
                            当前竞技场排位： {maps.arenasRanked.current.map}
                        </p>
                        <p className="text-[#8c99a2] text-base">
                            剩余时间：{maps.arenasRanked.current.remainingTimer}
                        </p>
                    </div>
                    <p className="text-[#8c99a2] text-opacity-50 text-[12px]">
                        下次轮换：{maps.arenasRanked.next.map}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default Article