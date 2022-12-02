import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/zh-cn' // 导入本地化语言
import fetch from '../utils/fetch'
import { useRouter, withRouter } from 'next/router';
import Button from './Button'
import cookie from 'react-cookies'
import { atom, useAtom } from 'jotai';

const postText = atom<string>('')
dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

const Comments = ({ comments }: any) => {
  const [text, setText] = useAtom(postText)
  const router = useRouter()

  const postComments = () => {
    const postComment = fetch(`/api/comments/post/` + router.query.slug[0], {
      method: 'POST',
      body: JSON.stringify({
        comment: text,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.load('token')}`
      },
    })
      .then(() => {
        router.reload()
      })
  }


  //按最新排序
  const ascending = comments.sort(function (a: any, b: any) {
    return a.created < b.created ? 1 : -1
  })

  return (
    <div className='py-5 shadow-lg'>
      <p className='text-2xl text-[#8c99a2]'>🎫评论 {comments.length}</p>
      {ascending.length > 0 ?
        <div>
          {ascending.map((e: any) => {
            console.log(e)
            return (
              <div>
                <div className='flex pt-5 px-5 pb-5 space-x-5 items-center relative'>
                  <div>
                    <img className="rounded-full w-8 shadow-lg" src={e.author.avatar} />
                  </div>
                  <div>
                    <p className='text-red-600 text-[14px]'>{e.author.username}</p>
                    <p className='text-[#8c99a2] text-[12px]'>{e.comment}</p>
                  </div>
                  <div className='absolute right-0 top-0 pr-5 pt-5 flex space-x-2'>
                    <svg className="fill-[#8c99a2]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2703" width="20" height="20"><path d="M416 352V192L128 448l288 256V544h288v256h192V352H416z" fill="#494949" p-id="2704"></path></svg>
                    <p className='text-[#494949] text-[14px]'>回复</p>
                  </div>
                  <div className='absolute right-0 bottom-0 pr-5 pb-5 flex space-x-2'>
                    <p className='text-[#494949] text-[12px]'>{dayjs(e.created).format('YYYY/MM/DD')}   {dayjs(e.created).format('hh:mm dddd')}</p>
                  </div>
                </div>
                {e.reply.map((res) => (
                  <div className=' mx-9 my-5 px-8 flex space-x-5 border-l-[1px] border-[#494949] items-center relative'>
                    <div>
                      <img className='rounded-full w-8 shadow-lg' src={res.author.avatar} />
                    </div>
                    <div>
                      <p className='text-red-600 text-[14px]'>{res.author.username}</p>
                      <p className='text-[#8c99a2] text-[12px]'>{res.content}</p>
                    </div>
                    <div className='absolute right-0 bottom-0 pr-5 pb-5 flex space-x-2'>
                      <p className='text-[#494949] text-[12px]'>{dayjs(res.created).format('YYYY/MM/DD')}   {dayjs(res.created).format('hh:mm dddd')}</p>
                    </div>
                  </div>
                ))}
              </div>
            )
          })
          }
          <div className='px-5 pt-5 flex w-full space-x-2'>
            <label className="relative block w-[90%]">
              <span className="sr-only">Search</span>
              <textarea onChange={(e) => setText(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-[#26272b] focus:ring-[#26272b] focus:ring-1 sm:text-sm" placeholder="快来评评理........." name="search" />
            </label>
            <Button
              onClick={postComments}
              text='评论'
              style="
            w-[10%]   
            inline-block 
            px-6 
            py-2.5 
            bg-red-600 
            text-white 
            font-medium 
            text-xs 
            leading-tight 
            uppercase 
            rounded 
            shadow-md 
            hover:bg-red-700
            hover:shadow-lg 
            focus:bg-red-700 
            focus:shadow-lg 
            focus:outline-none 
            focus:ring-0 
            active:bg-red-800 
            active:shadow-lg 
            transition 
            duration-150 
            ease-in-out" />
          </div>
        </div>
        :
        <div>
          <div className='pt-5 px-5 h-[350px] flex justify-center items-center'>
            <p className='text-[#8c99a2] text-2xl'>暂时没有人评论</p>
          </div>
          <div className='px-5 pt-5 flex w-full space-x-2'>
            <label className="relative block w-[90%]">
              <span className="sr-only">Search</span>
              <textarea onChange={(e) => setText(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-[#26272b] focus:ring-[#26272b] focus:ring-1 sm:text-sm" placeholder="快来评评理........." name="search" />
            </label>
            <Button
              onClick={postComments}
              text='评论'
              style="
        w-[10%]   
        inline-block 
        px-6 
        py-2.5 
        bg-red-600 
        text-white 
        font-medium 
        text-xs 
        leading-tight 
        uppercase 
        rounded 
        shadow-md 
        hover:bg-red-700
        hover:shadow-lg 
        focus:bg-red-700 
        focus:shadow-lg 
        focus:outline-none 
        focus:ring-0 
        active:bg-red-800 
        active:shadow-lg 
        transition 
        duration-150 
        ease-in-out" />
          </div>
        </div>
      }
    </div>
  )
}

export default Comments