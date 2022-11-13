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
                    <h5 className="text-[#cad3da] text-xl font-medium mb-2">Card title</h5>
                    <p className="text-[#8c99a2] text-base mb-4">
                        Some quick example text to build on the card title and make up the bulk of the card's
                        content.
                    </p>
                    <Chips />
                </div>
            </div>
        </div>
    )
}

export default Article