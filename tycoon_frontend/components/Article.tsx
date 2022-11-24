import Link from 'next/link'
import React from 'react'
import Chips from './Chips'

const Article = ({ post }: any) => {
    console.log(post)
    return (
        post.slice(0, 4).map((e: any) => {
            return (

                <div className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-[#151719] max-w-sm">
                        <Link href={'/posts/' + e.id}>
                            <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </Link>
                        <div className="p-6">
                            <p className="text-[#8c99a2] text-base mb-4">
                                {e.content}
                            </p>
                            <Chips author={e.author} />
                        </div>
                    </div>
                </div>

            )
        })
    )
}

export default Article