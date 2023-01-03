import { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useRouter, withRouter } from 'next/router';
import fetch from '../utils/fetch';
import Link from 'next/link'
import DropDown from './DropDown'
import cookie from 'react-cookies'
import { atom, useAtom } from 'jotai'

const login = atom(false)

const Data = atom([])

export default function NavBar({ props }: any) {
  const [isLogin, setLogin] = useAtom(login);
  const [userData, setUser] = useAtom(Data);
  const router = useRouter()

  useEffect(() => {
    if (cookie.load('token')) {
      setLogin(true)
      if (cookie.load('token')) {
        const userRequest = fetch(`/user`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.load('token')}`
          },
        })
          .then((response) => {
            response.json()
              .then((data) => {
                setUser(data)
              })
          })
      } else {
        return
      }
    } else {
      setLogin(false)
    }
  }, [])

  return (
    <Popover className="relative bg-[#181818] shadow-lg">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 sm:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#333333] p-2 text-gray-400 hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="sm:block hidden space-x-10 md:flex">
            <a href="/" className="text-base font-medium text-white hover:text-gray-200">
              首页
            </a>
            <a href="/" className="text-base font-medium text-white hover:text-gray-200">
              官方资讯
            </a>
            <a href="/" className="text-base font-medium text-white hover:text-gray-200">
              本期商店
            </a>
            <a href="/" className="text-base font-medium text-white hover:text-gray-200">
              制造器轮换
            </a>
            <a href="/" className="text-base font-medium text-white hover:text-gray-200">
              服务器状态
            </a>
          </Popover.Group>

        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-zinc-800 rounded-lg bg-[#181818] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#181818] p-2 text-gray-400 hover:bg-[#333333] focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 relative z-[999]">
                <nav className="grid gap-y-8 relative z-50">
                  <a
                    href='#'
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-[#333333] text-base font-medium text-white hover:text-gray-200"
                  >
                    首页
                  </a>
                  <a
                    href='#'
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-[#333333] text-base font-medium text-white hover:text-gray-200"
                  >
                    官方资讯
                  </a>
                  <a
                    href='#'
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-[#333333] text-base font-medium text-white hover:text-gray-200"
                  >
                    本期商店
                  </a>
                  <a
                    href='#'
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-[#333333] text-base font-medium text-white hover:text-gray-200"
                  >
                    制造器轮换
                  </a>
                  <a
                    href='#'
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-[#333333] text-base font-medium text-white hover:text-gray-200"
                  >
                    服务器状态
                  </a>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">


            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}


