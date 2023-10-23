import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useRouter } from 'next/router';



export default function Home() {
 const router = useRouter();
const redirecttoNativeApp = (path='') => {
function DeepLinker(options) {
  if (!options) {
    throw new Error('no options')
  }

  var hasFocus = true;
  var didHide = false;

  // window is blurred when dialogs are shown
  function onBlur() {
    hasFocus = false;
  };

  // document is hidden when native app is shown or browser is backgrounded
  function onVisibilityChange(e) {
    if (e.target.visibilityState === 'hidden') {
      didHide = true;
    }
  };

  // window is focused when dialogs are hidden, or browser comes into view
  function onFocus() {
    if (didHide) {
      if (options.onReturn) {
        options.onReturn();
      }

      didHide = false; // reset
    } else {
      // ignore duplicate focus event when returning from native app on
      // iOS Safari 13.3+
      if (!hasFocus && options.onFallback) {
        // wait for app switch transition to fully complete - only then is
        // 'visibilitychange' fired
        setTimeout(function() {
          // if browser was not hidden, the deep link failed
          if (!didHide) {
            options.onFallback();
          }
        }, 1000);
      }
    }

    hasFocus = true;
  };

  // add/remove event listeners
  // `mode` can be "add" or "remove"
  function bindEvents(mode) {
    [
      [window, 'blur', onBlur],
      [document, 'visibilitychange', onVisibilityChange],
      [window, 'focus', onFocus],
    ].forEach(function(conf) {
      conf[0][mode + 'EventListener'](conf[1], conf[2]);
    });
  }

  // add event listeners
  bindEvents('add');

  // expose public API
  this.destroy = bindEvents.bind(null, 'remove');
  this.openURL = function(url) {
    // it can take a while for the dialog to appear
    var dialogTimeout = 500;

    setTimeout(function() {
      if (hasFocus && options.onIgnored) {
        options.onIgnored();
      }
    }, dialogTimeout);

    window.location = url;
  };
}

/* usage */

var url = "mimbbo-staging://"+path;
var badURL = path;

var linker = new DeepLinker({
  onIgnored: function() {
      router.push('/portfolio');
    console.log('browser failed to respond to the deep link');
  },
  onFallback: function() {
    console.log('dialog hidden or user returned to tab');
  },
  onReturn: function() {
    console.log('user returned to the page from the native app');
  },
});

linker.openURL(url);
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
