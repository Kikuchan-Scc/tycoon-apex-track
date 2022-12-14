import { GetServerSideProps } from 'next'
import React from 'react'
import Comments from '../../components/Comments'
import Post from '../../components/Post'
import fetch from '../../utils/fetch'

const Posts = ({ posts, comments }: any) => {
    return (
        <div>
            <div className='px-64 py-5 bg-[#151719]'>
                <p className='text-3xl text-[#d9e3ea] px-5'>{posts.title}</p>
                <p></p>
                <Post posts={posts} />
                {/* <RichTextEditor /> */}
                <Comments comments={comments} />
            </div>
        </div>
    )
}

export default Posts

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const getPosts = await fetch(`/api/posts/list/` + context.query.slug[0], {
        method: 'GET',
    })
    const posts = await getPosts.json()

    const getComments = await fetch(`/api/comments/post/` + context.query.slug[0], {
        method: 'GET',
    })
    const comments = await getComments.json()

    return {
        props: {
            posts: posts,
            comments: comments
        }
    }
}