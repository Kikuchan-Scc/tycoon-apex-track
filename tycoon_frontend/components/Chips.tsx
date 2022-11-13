import React from 'react'

const Chips = () => {
    return (
        <div className="flex flex-wrap justify-start space-x-2">
            <span
                className="px-4 py-2 rounded-full text-[#cad3da] bg-[#1f1f1f] font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 active:text-[#1f1f1f] transition duration-300 ease">
                标签
            </span>
        </div>
    )
}

export default Chips