import { GetServerSideProps } from 'next'
import fetch from '../../utils/fetch'
import React from 'react'
import Button from '../../components/Button'
import { useRouter } from 'next/router'
import Chips from '../../components/Chips'
import Link from 'next/link'

const forum = ({ posts }: any) => {
    const router = useRouter()

    console.log(posts)
    return (
        posts.map((e: any) => (
            <div className="px-64 py-5 bg-[#151719]">
                <div className="w-full">
                    <div className="flex rounded-lg shadow-lg bg-[#151719]">
                        <Link href={'/posts/' + e.id}>
                            <img className="rounded-l-lg h-[250px]" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                        </Link>
                        <div className="p-6 w-full">
                            <p className="text-[#8c99a2] text-base mb-4">
                                {e.title}
                            </p>
                            <Chips author={e.author} />
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default forum

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const getPosts = await fetch(`/api/posts/list/`, {
        method: 'GET',
    })
    const posts = await getPosts.json()

    return {
        props: {
            posts: posts,
        }
    }
}