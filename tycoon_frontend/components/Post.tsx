import React from 'react'

const Post = ({ posts }: any) => {
    return (
        <div className='rounded-md shadow-lg py-5 px-5'>
            <div className='flex items-center space-x-3 pt-5'>
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                    className="rounded-full w-10 shadow-lg"
                    alt="Avatar"
                />
                <div>
                    <p className='text-[#8c99a2]'>{posts.author.username}</p>
                    <p className='text-[#8c99a2]'>{posts.create}</p>
                </div>
            </div>
            <p className='pt-5 text-[#d9e3ea]'>
                {posts.content}
            </p>
        </div>
    )
}

export default Post