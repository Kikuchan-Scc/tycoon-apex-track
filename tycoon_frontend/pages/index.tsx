import Article from "../components/Article"
import fetch from "../utils/fetch"
import Card from "../components/Card"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

function Home({ news }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    // console.log(news)
    return (
        <div className="bg-[#151719]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12 py-7">
                <p className="text-4xl text-[#d9e3ea]">关注APEX最新消息</p>
                    <Card news={news} />
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12 py-7">
                <p className="text-4xl text-[#d9e3ea]">大家在讨论</p>
                <div className="grid grid-cols-4 gap-5">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>
            </div>
        </div>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`/api/news`, {
        method: 'GET',
    })
    const news = await res.json()

    return {
        props: {
            news: news
        }
    }
};