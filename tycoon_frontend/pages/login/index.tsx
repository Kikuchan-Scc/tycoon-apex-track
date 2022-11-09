import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

const login = () => {
  return (
    <div className='h-[100vh] flex overflow-hidden'>
      <div className="block px-6 py-24 shadow-lg bg-[#292a29] max-w-sm h-full w-full">
        <form>
          <Input
            placeholder="Username"
            text="账号"
            style_input="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-[#2d2d2d] bg-clip-padding
          border border-solid border-[#585958]
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:outline-none"
            style_label="form-label inline-block mb-2 text-white"
          />
          <Input
            placeholder="Password"
            text="密码"
            style_input="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-[#2d2d2d] bg-clip-padding
          border border-solid border-[#585958]
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:outline-none"
            style_label="form-label inline-block mb-2 text-white"
          />
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2" />
              <label className="form-check-label inline-block text-zinc-500" >Remember me</label>
            </div>
            <a href="#!"
              className="text-zinc-500 hover:text-red-700 transition duration-200 ease-in-out">Forgot
              password?</a>
          </div>
          <Button text='登录' style="
          w-full
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
          hover:bg-red-700 hover:shadow-lg
          focus:shadow-lg focus:outline-none focus:ring-0
          active:shadow-lg
          transition
          duration-150
          ease-in-out" />
          <p className="text-zinc-600 mt-6 text-center">没有账号？ <a href="#!"
            className="text-zinc-600 hover:text-red-700 transition duration-200 ease-in-out">注册一个！</a>
          </p>
        </form>
      </div>
      <div className='w-full h-full'>
        <img className='w-full h-full object-cover' src='https://images2.alphacoders.com/989/989919.png' />
      </div>
    </div>
  )
}

export default login