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
import Search from './Search'
import cookie from 'react-cookies'
import { atom, useAtom } from 'jotai'

const login = atom(false)

const Online = ({ props }: any) => {
  return (
    <Popover className="relative bg-[#292a29]">
      <div className="mx-auto max-w-[110rem] px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only"></span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#333333] p-2 text-gray-400 hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a href="#" className="text-base font-medium text-white hover:text-gray-200">
              首页
            </a>
            <a href="#" className="text-base font-medium text-white hover:text-gray-200">
              Docs
            </a>
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Search />
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              className="rounded-full w-8 shadow-lg"
              alt="Avatar"
            />
            <DropDown props={props} />
            {/* <button type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">注销</button> */}
          </div>
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
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href='#'
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-[#333333]"
                  >
                    <div className="h-6 w-6 flex-shrink-0 text-white-600" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900"></span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#292a29] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#333333]"
                >
                  注销
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

const Offline = () => {
  return (
    <Popover className="relative bg-[#292a29]">
      <div className="mx-auto max-w-[110rem] px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#333333] p-2 text-gray-400 hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a href="#" className="text-base font-medium text-white hover:text-gray-200">
              首页
            </a>
            <a href="#" className="text-base font-medium text-white hover:text-gray-200">
              Docs
            </a>

          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link href={'/login'}>
              <button type="button" className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">登录</button>
            </Link>
          </div>
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
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href='#'
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-[#333333]"
                  >
                    <div className="h-6 w-6 flex-shrink-0 text-white-600" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-900"></span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#292a29] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#333333]"
                >
                  登录
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

const Data = atom([])

export default function NavBar({ props }: any) {
  const [isLogin, setLogin] = useAtom(login);
  const [userData, setUser] = useAtom(Data);
  const router = useRouter()

  useEffect(() => {
    if (cookie.load('token')) {
      setLogin(true)
        if(cookie.load('token')){
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
                      console.log(data)
                    })
                })
        } else {
            return
        }
    } else {
      setLogin(false)
    }
  }, [])

  if (isLogin === true) {
    return (
      <Online props={userData} />
    )
  } else {
    return (
      <Offline />
    )
  }
}


