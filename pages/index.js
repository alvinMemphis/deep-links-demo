import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useRouter } from 'next/router';
import { deeplinks } from 'api/testlinks';
import Link from 'next/link';



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
        <title>Testing staging universal links </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome  to test links at mimbbos.me" />
        <p className={'description'}>
 <button style={{height:'30px',width:'120px',margin:'10px'}} onClick={(e)=>router.push('/account')}>
      click for  production links
         </button>
</p>
  <a>
      </a>
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
