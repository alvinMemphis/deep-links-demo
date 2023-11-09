import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useRouter } from 'next/router';
import { deeplinks } from 'api/testlinks';



export default function ProductionDomain() {
 const router = useRouter();

const redirecttoNativeApp =async (e,path='') => {
  
       router.push(`https://mimbboss.me/${path}`);
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
        Testing mimbboss.me universal links
        </p>

<div>
    </div>
    {deeplinks.map(l=>(
      <button style={{height:'30px',width:'120px',margin:'10px'}} onClick={(e)=>redirecttoNativeApp(e,
        l.url)}>
         {l.name}</button>
    ))}
      </main>

      <Footer />
    </div>
  )
}



