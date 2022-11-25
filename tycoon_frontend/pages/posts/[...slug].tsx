import { atom, useAtom } from 'jotai'
import React from 'react'
import Post from '../../components/Post'
import RichTextEditor from '../../components/RichTextEditor'
import { useRouter } from 'next/router'
import fetch from '../../utils/fetch'

const likeCountAtom = atom<number>(0)
const isLikeAtom = atom<boolean>(false)

const Posts = (posts: any) => {
    const [likeCounts, setLikeCount] = useAtom(likeCountAtom)
    const [isLike, setIsLike] = useAtom(isLikeAtom)
    const router = useRouter()
    const { slug } = router.query

    async function submitForm() {
        const likeRequest = await fetch(`/posts/list/` + slug[0], {
            method: 'PATCH',
            body: JSON.stringify({
                likeCounts: likeCounts,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
    }

    return (
        <div>
            <div className='px-64 py-5 bg-[#151719]'>
                <p className='text-3xl text-[#d9e3ea] px-5'>{posts.posts.title}</p>
                <Post posts={posts} likeCounts={likeCounts} setLikeCount={setLikeCount} isLike={isLike} setIsLike={setIsLike} submitForm={submitForm} />
                <RichTextEditor />
            </div>
        </div>
    )
}

export default Posts

export async function getServerSideProps(context: any) {
    const getPosts = await fetch(`/posts/list/` + context.query.slug[0], {
        method: 'GET',
    })
    const posts = await getPosts.json()

    return {
        props: {
            posts: posts,
        }
    }
}