import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from "next/link";



export default function Account() {

 
  return (
    <div className="container">
      <Head>
        <title>Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my portfolio!" />
        <p className="description">
            this is Account redirection <code>pages/index.js</code>
        </p>
 
      </main>

      <Footer />
    </div>
  )
}
