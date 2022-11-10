import React, { useState } from 'react'
import { useRouter, withRouter } from 'next/router';
import Button from '../../components/Button'
import Input from '../../components/Input'

const login = () => {
  const [userName, setUserName] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')
  const router = useRouter()

  async function submitForm(event: any) {
    event.preventDefault()
    const login = await fetch('http://localhost:3001/auth/local/signin', {
      method: 'POST',
      body: JSON.stringify({
        username: userName,
        password: passWord
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      return response.json()
    }).then((data) => {
      if (data.statusCode !== 401) {
        localStorage.setItem("Token", 'Bearer ' + data.token)
      } else {
        return
      }
    })

    const getUser = await fetch('http://localhost:3001/user', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("Token") as string
      },
    }).then((response) => {
      return response.json()
    }).then((data) => {
      if (data.statusCode !== 401) {
        router.push('/')
      } else {
        return
      }
    })
  }

  return (
    <div className='h-[100vh] flex overflow-hidden'>
      <div className="block px-6 py-24 shadow-lg bg-[#292a29] max-w-sm h-full w-full">
        <form>
          <Input
            value={userName}
            name='username'
            type="text"
            state={(e: any) => setUserName(e.target.value)}
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
            value={passWord}
            name='password'
            type="password"
            state={(e: any) => setPassWord(e.target.value)}
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
          <Button
            onClick={submitForm}
            text='登录'
            style="
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