import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter, withRouter } from 'next/router';
import NavBar from '../components/NavBar';
import { atom, useAtom } from 'jotai';
import cookie from 'react-cookies'
import fetch from '../utils/fetch'
import { useEffect } from 'react';
import NextNProgress from 'nextjs-progressbar';

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

  // const userRequest = fetch(`/user`, {
  //   method: 'GET',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${cookie.load('token')}`
  //   },
  // })
  //   .then((response) => {
  //     response.json()
  //       .then((data) => {
  //         console.log(data)
  //       })
  //   })

  return (
    <div>
      <NextNProgress color='red' />
      {router.asPath === '/login' ?
        ''
        :
        <NavBar state={isLogin} />
      }
      <Component state={isLogin} {...pageProps} />
    </div>
  )
}
