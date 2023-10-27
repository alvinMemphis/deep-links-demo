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
//         window.alert('app  is not installed')
//  e.preventDefault();
//     const customScheme = 'mimbbo-staging://'+path; // Replace with your actual custom path
//   const appOpened = () => {
//       window.location.href = customScheme;
//     };
//   try {
//       const response = await fetch('/api/openApp'); // Call the server-side route
//       if (response.ok) {
//         // The app will be opened if installed, or redirected otherwise
//         window.alert('app installed')
//        appOpened() 
//       } else {
//         console.log('app dindrt install ')
//         window.alert('app  is not installed')
// router.push('/'+path)
//         // Handle unexpected response
//       }
//     } catch (error) {
//       // Handle fetch error
//     }


  
//     const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//  if (/android/i.test(userAgent)) {
//       appOpened();
//     } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//       appOpened();
//     } else {
//       isAppInstalled()
//       // If the app is not installed, redirect to another page on your site
//       router.push('/'+path); // Replace with the actual path of your fallback page
//     }
   
// function DeepLinker(options) {
//   if (!options) {
//     throw new Error('no options')
//   }

//   var hasFocus = true;
//   var didHide = false;

//   // window is blurred when dialogs are shown
//   function onBlur() {
//     hasFocus = false;
//   };

//   // document is hidden when native app is shown or browser is backgrounded
//   function onVisibilityChange(e) {
//     if (e.target.visibilityState === 'hidden') {
//       didHide = true;
//     }
//   };

//   // window is focused when dialogs are hidden, or browser comes into view
//   function onFocus() {
//     if (didHide) {
//       if (options.onReturn) {
//         options.onReturn();
//       }

//       didHide = false; // reset
//     } else {
//       // ignore duplicate focus event when returning from native app on
//       // iOS Safari 13.3+
//       if (!hasFocus && options.onFallback) {
//         // wait for app switch transition to fully complete - only then is
//         // 'visibilitychange' fired
//         setTimeout(function() {
//           // if browser was not hidden, the deep link failed
//           if (!didHide) {
//             options.onFallback();
//           }
//         }, 1000);
//       }
//     }

//     hasFocus = true;
//   };

//   // add/remove event listeners
//   // `mode` can be "add" or "remove"
//   function bindEvents(mode) {
//     [
//       [window, 'blur', onBlur],
//       [document, 'visibilitychange', onVisibilityChange],
//       [window, 'focus', onFocus],
//     ].forEach(function(conf) {
//       conf[0][mode + 'EventListener'](conf[1], conf[2]);
//     });
//   }
// window.option
//   // add event listeners
//   bindEvents('add');

//   // expose public API
//   this.destroy = bindEvents.bind(null, 'remove');
//   this.openURL = function(url) {
//     // it can take a while for the dialog to appear
//     var dialogTimeout = 500;

//     setTimeout(function() {
//       if (hasFocus && (options.onIgnored||options.onFallback)) {
//        window. 
//         options.onIgnored();
//       }
//     }, dialogTimeout);

//     window.location = url;
//   };
// }

// /* usage */

// var url = "mimbbo-staging://"+path;
// var badURL = path;

// var linker = new DeepLinker({
//   onIgnored: function() {
//       router.push('/'+path);
//    isAppInstalled() 
//     console.log('browser failed to respond to the deep link');
//   },
//   onFallback: function() {
//    isAppInstalled() 
//  router.push('/'+path);
//     console.log('dialog hidden or user returned to tab');
//   },
//   onReturn: function() {
//     console.log('user returned to the page from the native app');
//   },
// });

// linker.openURL(url);
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
