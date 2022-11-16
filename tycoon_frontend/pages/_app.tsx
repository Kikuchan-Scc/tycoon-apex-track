import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter, withRouter } from 'next/router';
import { atom, useAtom } from 'jotai';
import cookie from 'react-cookies'
import NavBar from '../components/NavBar';
import fetch from '../utils/fetch'
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

    const showHeader = router.pathname === '/login' ? false : true;
    return (
        <div>
            <NextNProgress color='red' />
            {showHeader && <NavBar />}
            <Component />
        </div>
    )
}

// async function getServerSideProps(context:any) {
//     // Fetch data from external API
//     const res = await fetch(`https://www.muanana7mi.top/api/shop`)
//     const data = await res.json()
//     console.log(context.req.cookies.token)
  
//     // Pass data to the page via props
//     return { props: { data } }
//   }

