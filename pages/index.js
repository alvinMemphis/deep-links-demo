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
      <button onClick={()=>redirecttoNativeApp('account')}>Click to account</button>
    </div>
<div>
      <button onClick={()=>redirecttoNativeApp(
        'portfolio?mimbbossId=7b7fb73e-1c4c-4e74-b470-ff14f363ad90&pageId=a67dddd3b1fc445ab94554fcf05ef2b2')}>
          Click to portfolio</button>
    </div>
      </main>

      <Footer />
    </div>
  )
}
