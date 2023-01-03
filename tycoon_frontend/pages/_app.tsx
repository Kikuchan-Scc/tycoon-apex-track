import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter, withRouter } from 'next/router';
import NavBar from '../components/NavBar';
import NextNProgress from 'nextjs-progressbar';
import { appWithTranslation } from 'next-i18next'
import Footer from '../components/Footer';

function MyApp ({ Component, pageProps }: AppProps) {
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

export default appWithTranslation(MyApp)

