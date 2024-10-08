import Script from 'next/script';

class GoogleAnalytics{
  build() {
    const gID = 'GTM-TF68VS5H';
    const scriptStrategy = 'afterInteractive';

    return (
      <>
        <Script strategy={scriptStrategy}>
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', '${gID}');

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          `}
        </Script>
      </>
    );
  }
}

export default GoogleAnalytics;
