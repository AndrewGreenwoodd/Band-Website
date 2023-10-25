import '../styles/global.css'
import Layout from '../components/Layout'
import { AppProps } from 'next/app';
import { LanguageProvider } from '@/store/language';
import Head from 'next/head';

//коли ми використовуємо Layout тут, він буде використаний на всіх сторінках нашого сайту, цей файл _app це по суті root всіх файлів
function MyApp({ Component, pageProps }: AppProps) {
  return<> <Head>
     <link rel="icon" href="/favicon-32x32-3.png"></link>
    </Head> 
   <LanguageProvider><Layout><Component {...pageProps} />  </Layout></LanguageProvider>
  </> 
 
}

export default MyApp
