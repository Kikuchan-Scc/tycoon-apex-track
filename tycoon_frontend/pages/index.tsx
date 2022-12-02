import Article from "../components/Article"
import fetch from "../utils/fetch"
import Card from "../components/Card"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

function Home({ news, post }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className="bg-[#151719]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12 py-7">
                <p className="text-4xl text-[#d9e3ea]">关注APEX最新消息</p>
                <Card news={news} />
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12 py-7">
                <p className="text-4xl text-[#d9e3ea]">大家在讨论</p>
                <div className="grid grid-cols-4 gap-5">
                    <Article post={post} />
                </div>
            </div>
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
    const getNews = await fetch(`/api/news`, {
        method: 'GET',
    })
    const news = await getNews.json()

    const getPosts = await fetch(`/api/posts/list`, {
        method: 'GET',
    })
    const post = await getPosts.json()

    return {
        props: {
            news: news,
            post: post
        }
    }
};