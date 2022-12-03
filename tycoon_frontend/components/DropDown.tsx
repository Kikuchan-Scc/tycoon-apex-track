import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function DropDown({ props }: any) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="">
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-[#edf4fd]" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#333333] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <strong className='block px-4 py-2 text-sm text-[#b4bbc3]'>
                            {props.username}
                        </strong>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="profiles"
                                    className={classNames(
                                        active ? 'bg-[#292a29] text-white' : 'text-[#b4bbc3]',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Account settings
                                </Link>
                            )}
                        </Menu.Item>

                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active ? 'bg-[#292a29] text-white' : 'text-[#b4bbc3]',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
