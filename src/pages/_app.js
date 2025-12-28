import '../styles/globals.css'
import '../styles/App.css'
import Script from 'next/script'
import dynamic from 'next/dynamic'

const AccessibilityWidget = dynamic(() => import('../components/A11yWidget'), {
  ssr: false,
})
export default function App({ Component, pageProps }) {
  return (
    <>
      <AccessibilityWidget />

      <Script
        id='clarity-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r); t.async=1; t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "rnf7qn6idb");
    `,
        }}
      />

      <Component {...pageProps} />
    </>
  )
}
