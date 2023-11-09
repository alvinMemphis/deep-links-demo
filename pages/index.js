import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useRouter } from 'next/router';
import { deeplinks } from 'api/testlinks';



export default function Home() {
 const router = useRouter();

const isAppInstalled = (customScheme) => {
    const iframe = document.createElement('iframe');
    // iframe.style.display = 'none';
    iframe.src = customScheme
    document.body.appendChild(iframe);
    console.log('my iframe :',iframe)
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 30000); // Adjust timeout as needed
  };

const redirecttoNativeApp =async (e,path='') => {
  
       router.push(`https://staging.d1vy3o255nmija.amplifyapp.com/${path}`);
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
