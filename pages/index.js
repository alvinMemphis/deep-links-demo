import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useRouter } from 'next/router';



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
  
       router.push('/'+path);
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
      <button onClick={(e)=>redirecttoNativeApp(e,'account')}>Click to account</button>
    </div>
<div>
      <button onClick={(e)=>redirecttoNativeApp(e,
        'portfolio?mimbbossId=7b7fb73e-1c4c-4e74-b470-ff14f363ad90&pageId=a67dddd3b1fc445ab94554fcf05ef2b2')}>
          Click to portfolio</button>
    </div>
      </main>

      <Footer />
    </div>
  )
}
