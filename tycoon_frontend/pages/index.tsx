import { GetServerSideProps, InferGetStaticPropsType, GetStaticProps } from "next";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Article from "../components/Article"
import Card from "../components/Card"
import fetch from "../utils/fetch"
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url: any) => fetch(url, {
    method: 'GET',
}).then((res) => res.json());

export default function Home({ news }: any) {

    const router = useRouter()
    const { t } = useTranslation('common')

    const { data, error } = useSWR(
        "/api/map",
        fetcher,
        { refreshInterval: 2000 }
    );

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    const onToggleLanguageClick = (newLocale: string) => {
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }

    return (
        <div className="bg-[#151719]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12 pt-10">
                {/* <p className="text-3xl text-[#d9e3ea] md:text-left text-center hidden sm:block">{t('title.News')}</p> */}
                <Card news={news} />
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12 pt-10">
                <p className="text-3xl text-[#d9e3ea] md:text-left text-center">{t('title.Map Rotation')}</p>
                <Article maps={data} t={t} />
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    locale,
}) => {
    const getNews = await fetch(`/api/news`, {
        method: 'GET',
    })
    const news = await getNews.json()

    return {
        props: {
            news: news,
            ...(await serverSideTranslations(locale ?? 'en', [
                'common',
            ])),
        }
    }
};