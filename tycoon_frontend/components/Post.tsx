import React from 'react'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/zh-cn' // 导入本地化语言

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

const Post = ({ posts }: any) => {
    return (
        <div className='rounded-md shadow-lg py-5 px-5'>
            <div className='flex items-center space-x-3 pt-5'>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                    className="rounded-full w-10 shadow-lg"
                    alt="Avatar"
                />
                <div>
                    <p className='text-[#8c99a2]'>{posts.author.username}</p>
                    <p className='text-[#8c99a2] text-[12px]'>{dayjs(posts.create).format('YYYY/MM/DD')}     {dayjs(posts.create).format('hh:mm dddd')}</p>
                </div>
            </div>
            <p className='pt-5 text-[#d9e3ea]' dangerouslySetInnerHTML={{ __html: String(posts.content).replace(/[\r\n]/g, '<br/>') }}>
            </p>
        </div>
    )
}

export default Post