import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from "next/link";



export default function Portfolio() {

 
  return (
    <div className="container">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my portfolio!" />
        <p className="description">
            this is portfolio redirection <code>pages/index.js</code>
        </p>
 
      </main>

      <Footer />
    </div>
  )
}
