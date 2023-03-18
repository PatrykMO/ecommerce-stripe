import Head from 'next/head';
import { Footer, NavBar } from '../../components';
import './globals.css';
       

export const metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce with Sanity',
}

export default function RootLayout({ children }) {
  return (
    <div className='layout'>
      <Head>
        <title>MoMo Store</title>
      </Head>

      <header>
        <NavBar/>
      </header>

      <main className='main-container'>
        {children}
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
)
}
