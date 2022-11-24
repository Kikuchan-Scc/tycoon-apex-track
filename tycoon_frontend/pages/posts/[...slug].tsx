import React from 'react'
import RichTextEditor from '../../components/RichTextEditor'
import fetch from '../../utils/fetch'

const Posts = (posts: any) => {
    console.log(posts)
    return (
        <div>
            <div className='px-96 py-5'>
                <p className='text-5xl'>{posts.posts.title}</p>
                <div className='flex items-center space-x-3 pt-5'>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                        className="rounded-full w-10 shadow-lg"
                        alt="Avatar"
                    />
                    <div>
                        <p>{posts.posts.author.username}</p>
                        <p>{posts.posts.create}</p>
                    </div>
                </div>
                <p className='pt-5'>
                    {posts.posts.content}
                </p>
            </div>
            <RichTextEditor />
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