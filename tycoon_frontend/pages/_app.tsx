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
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    const showHeader = router.pathname === '/login' ? false : true;
    return (
        <div>
            <NextNProgress color='red' />
            {showHeader && <NavBar />}
            <Component {...pageProps} />
            {showHeader && <Footer />}
        </div>
    )
}

