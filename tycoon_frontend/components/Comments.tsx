import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/zh-cn' // 导入本地化语言
import fetch from '../utils/fetch'
import { useRouter, withRouter } from 'next/router';
import Button from './Button'
import cookie from 'react-cookies'
import { atom, useAtom } from 'jotai';
import Alert from './Alert'

const postText = atom<string>('')
dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

const Comments = ({ comments }: any) => {
  const [text, setText] = useAtom(postText)
  const router = useRouter()

  const postComments = () => {
    const postComment = fetch(`/api/comments/post/` + router.query.slug?.toString(), {
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
            return (
              <div>
                <div className='flex pt-5 px-5 pb-5 space-x-5 items-start relative'>
                  <div>
                    <img className="rounded-full w-8 shadow-lg" src={e.author.avatar} />
                  </div>
                  <div>
                    <p className='text-red-600 text-[14px]'>{e.author.username}</p>
                    <p className='text-[#8c99a2] text-[12px] whitespace-pre-line' dangerouslySetInnerHTML={{ __html: String(e.comment).replace(/[\r\n]/g, '<br/>') }}></p>
                  </div>
                  <Alert e={e} />
                  <div className='absolute right-0 bottom-0 pr-5 pb-5 flex space-x-2'>
                    <p className='text-[#494949] text-[12px]'>{dayjs(e.created).format('YYYY/MM/DD')}   {dayjs(e.created).format('hh:mm dddd')}</p>
                  </div>
                </div>
                {e.reply.sort(function (a: any, b: any) {
                  return a.created < b.created ? 1 : -1
                }).map((res: any) => (
                  <div className=' mx-9 my-5 px-8 flex space-x-5 border-l-[1px] border-[#494949] items-start relative'>
                    <div>
                      <img className='rounded-full w-8 shadow-lg' src={res.author.avatar} />
                    </div>
                    <div>
                      <div className='space-x-3'>
                        <span className='text-red-600 text-[14px]'>{res.author.username}</span>
                        <span className='text-[#494949] text-[14px]'>回复</span>
                        <span className='text-[#494949] text-[14px]'>@{e.author.username}</span>
                      </div>
                      <p className='text-[#8c99a2] text-[12px]' dangerouslySetInnerHTML={{ __html: String(res.content).replace(/[\r\n]/g, '<br/>') }}></p>
                    </div>
                    <div className='absolute right-0 bottom-0 flex space-x-2'>
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