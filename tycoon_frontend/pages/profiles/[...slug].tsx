import React from 'react'
import fetch from '../../utils/fetch'
import { GetServerSideProps } from 'next'
import Image from 'next/image'


const Profiles = ({ uid, player }: any) => {
    const arr = Object.entries(player.legends.all)
    console.log(arr)
    console.log(uid)
    console.log(player)
    return (
        <div className='bg-[#151719] py-10'>
            <div className='mx-auto sm:max-w-7xl'>
                <div className='shadow-lg'>
                    <div className='relative'>
                        <img className='h-56 w-full object-cover' src={player.legends.selected.ImgAssets.banner} alt='' />
                        <div className='bg-black bg-opacity-60 w-full h-full absolute top-0 left-0'></div>
                    </div>
                    <div className='h-24 relative space-x-5'>
                        <div className='border-[3px] rounded-[50%] absolute w-[100px] h-[100px] top-[-50px] left-[50px]'>
                            <img className='rounded-[50%] bg-black' src={uid.avatar} />
                        </div>
                        <div className=' absolute top-[-40px] left-[150px]'>
                            <p className='text-center text-[25px] text-[#cad3da]'>{player.global.name}</p>
                        </div>
                        <div className=' absolute top-[10px] left-[150px] flex space-x-5'>
                            <p className='text-center text-[16px] text-[#cad3da]'>Lvl {player.global.level}</p>
                            <p className='text-center text-[16px] text-[#cad3da]'>当前状态： {player.realtime.currentState}</p>
                        </div>
                        <div className=' absolute top-[10px] right-[150px] flex space-x-5'>
                            <p className='text-center text-[16px] text-[#cad3da] text-opacity-40'>群隐私： {player.realtime.lobbyState}</p>
                        </div>
                    </div>
                </div>
                <div className='flex space-x-5 pt-5'>
                    <div className='h-full w-[30%] shadow-lg space-y-2'>
                        <div className='space-y-2 bg-[#141516] p-2'>
                            <div className='bg-[#17181a] w-full flex items-center p-2'>
                                <div className='w-[20%]'>
                                    <img className='w-[50px] h-[50px] object-contain mx-auto' src={player.global.rank.rankImg} />
                                </div>
                                <div className='w-[80%] flex'>
                                    <div className='w-[50%]'>
                                        <p className='text-[#cad3da] font-bold text-center'>{player.global.rank.rankName}</p>
                                        <p className='text-[#cad3da] font-bold text-center'>{player.global.rank.rankScore}</p>
                                    </div>
                                    <div className='w-[50%]'>
                                        <p className='text-[#cad3da] font-bold text-center'>{player.global.rank.rankedSeason}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#17181a] w-full flex items-center p-2'>
                                <div className='w-[20%]'>
                                    <img className='w-[50px] h-[50px] object-contain mx-auto' src={player.global.arena.rankImg} />
                                </div>
                                <div className='w-[80%] flex'>
                                    <div className='w-[50%]'>
                                        <p className='text-[#cad3da] font-bold text-center'>{player.global.arena.rankName}</p>
                                        <p className='text-[#cad3da] font-bold text-center'>{player.global.arena.rankScore}</p>
                                    </div>
                                    <div className='w-[50%]'>
                                        <p className='text-[#cad3da] font-bold text-center'>{player.global.arena.rankedSeason}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-2 bg-[#141516] p-2'>
                            <div className='bg-[#17181a] w-full flex items-center p-2'>
                                <div className='w-[20%]'>
                                    <img className='w-[50px] h-[50px] object-contain mx-auto' src={player.club.logo} />
                                </div>
                                <div className='w-[80%] flex'>
                                    <div className='w-[50%]'>
                                        <p className='text-[#cad3da] text-center'>{player.club.name}</p>
                                        <p className='text-[#cad3da] text-center'>{player.club.tag}</p>
                                    </div>
                                    <div className='w-[50%] flex'>
                                        <p className='text-[#cad3da] font-bold text-center leading-[42px] w-[50%]'>{player.club.maxGroupSize}/{player.club.groupSize}</p>
                                        <p className='text-[#cad3da] font-bold text-center leading-[42px] w-[50%]'>{player.club.maxGroupSize}/{player.club.groupSize}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full w-[70%] bg-[#141516] shadow-lg p-2'>
                        <p className='pb-2 text-[#cad3da]'>当前选择英雄</p>
                        <div className='bg-[#17181a] flex items-center p-2'>
                            <div className='w-full'>
                                <div className='space-y-5'>
                                    <div className='flex bg-[#1e1f22]'>
                                        <img className='w-[200px]' src={player.legends.selected.ImgAssets.icon} />
                                        <div className='p-5 space-y-5 w-full'>
                                            <p className='text-[#cad3da]'>{player.legends.selected.LegendName}</p>
                                            <div className='grid grid-cols-3 gap-10'>
                                                {player.legends.selected.data.map((e: any) => (
                                                    <p className='text-sm text-[#cad3da]'>{e.key}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='pb-2 pt-2 text-[#cad3da]'>当前选择英雄</p>
                        <div className='bg-[#17181a] w-full flex items-center p-2'>
                            <div>
                                <div className='space-y-5'>
                                    {arr.map((e: any) => (
                                        <div className='flex bg-[#1e1f22]'>
                                            <img className='w-[200px]' src={e[1].ImgAssets.icon} />
                                            <div className='p-5 space-y-5 w-full'>
                                                <p className='text-[#cad3da]'>{e[0]}</p>
                                                <div className='grid grid-cols-3 gap-10'>
                                                    {e[1].data?.map((s: any) => (
                                                        <p className='text-sm text-[#cad3da]'>{s.key}: {s.value}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const getUid = await fetch(`/api/uid/${context.query.slug[1]}/?plat=${context.query.slug[0]}`, {
        method: 'GET',
    })
    const uid = await getUid.json()

    const getPlayer = await fetch(`/api/player/${uid.uid}/?plat=${context.query.slug[0]}`, {
        method: 'GET',
    })
    const player = await getPlayer.json()


    return {
        props: {
            uid: uid,
            player: player
        }
    }
}