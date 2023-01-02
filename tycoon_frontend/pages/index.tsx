import { GetServerSideProps } from "next";
import Article from "../components/Article"
import Card from "../components/Card"
import fetch from "../utils/fetch"
import useSWR from "swr";
import useTranslation from "next-translate/useTranslation";

const fetcher = (url: any) => fetch(url, {
    method: 'GET',
}).then((res) => res.json());

export default function Home({ news }: any) {
    const { data, error } = useSWR(
        "/api/map",
        fetcher,
        { refreshInterval: 2000 }
    );
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    let { t } = useTranslation()

    return (
        <div className="bg-[#151719]">
            <h1>{t("common:greeting")}</h1>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12 pt-10">
                <p className="text-3xl text-[#d9e3ea] md:text-left text-center">官方资讯</p>
                <Card news={news} />
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12 pt-10">
                <p className="text-3xl text-[#d9e3ea] md:text-left text-center">地图轮换</p>
                <Article maps={data} />
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const getNews = await fetch(`/api/news`, {
        method: 'GET',
    })
    const news = await getNews.json()

    return {
        props: {
            news: news,
        }
    }
};