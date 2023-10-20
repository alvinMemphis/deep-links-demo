import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from "next/link";



export default function Home() {
const redirecttoNativeApp = (path='') => {
    document.location = "mimbbo-staging://"+path;
  };
 
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
 <div>
      <button onClick={()=>redirecttoNativeApp('account')}>Click to go to mimbbo</button>
    </div>
      </main>

      <Footer />
    </div>
  )
}
