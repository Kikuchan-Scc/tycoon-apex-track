import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter, withRouter } from 'next/router';
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <div>
      {router.asPath === '/login' ?
        ''
        :
        <NavBar />
      }
      <Component {...pageProps} />
    </div>
  )
}
