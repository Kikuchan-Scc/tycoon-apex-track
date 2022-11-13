import React from 'react'

const Card = () => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row bg-[#151719] shadow-lg">
                <div className=' md:w-[50%] relative'>
                    <img className="absolute right-5 bottom-5 w-full h-96 object-cover md:w-[50%]" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                    <div className="bg-[#25282c] w-full h-96 object-cover md:w-[50%]"></div>
                </div>
                <div className="p-6 flex flex-col justify-start">
                    <strong className="text-[#cad3da] text-3xl mb-2 ">Card title</strong>
                    <p className="text-[#8c99a2] text-base mb-4">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    )
}

export default Card