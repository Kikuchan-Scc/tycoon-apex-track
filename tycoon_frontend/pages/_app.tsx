import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter, withRouter } from 'next/router';
import NavBar from '../components/NavBar';
import { atom, useAtom } from 'jotai';
import cookie from 'react-cookies'
import { useEffect } from 'react';

const login = atom(false)

type Prop = {
  [key: string]: any;
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isLogin, setLogin] = useAtom(login);
  useEffect(() => {
    if (cookie.load('token')) {
      setLogin(true)
    } else {
      setLogin(false)
    }
  }, [])

  return (
    <div>
      {router.asPath === '/login' ?
        ''
        :
        <NavBar state={isLogin} />
      }
      <Component state={isLogin} {...pageProps} />
    </div>
  )
}
