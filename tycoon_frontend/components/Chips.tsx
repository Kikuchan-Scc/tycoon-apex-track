import React from 'react'

const Chips = (e: any) => {
    console.log(e.username)
    return (
        <div className="flex flex-wrap justify-start space-x-2">
            <span
                className="rounded-full text-[#8c99a2] text-sm flex align-center w-max cursor-pointer active:bg-gray-300 active:text-[#1f1f1f] transition duration-300 ease">
                创建人：{e.author.username}
            </span>
        </div>
    )
}

export default Chips