import React from 'react'
import Chips from './Chips'

const Article = () => {
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-[#151719] max-w-sm">
                <a href="#!">
                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                </a>
                <div className="p-6">
                    <p className="text-[#8c99a2] text-base mb-4">
                        整天看消愁贴，受不了了，给你们打把教学局整天看消愁贴，受不了了，给你们打把教学局
                    </p>
                    <Chips />
                </div>
            </div>
        </div>
    )
}

export default Article