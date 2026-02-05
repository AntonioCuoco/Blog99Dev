"use client"
import React, { useEffect } from 'react';
import Script from 'next/script';

const Iubenda = () => {
  useEffect(() => {
    // Configurazione di Iubenda solo lato client
    if (typeof window !== 'undefined') {
      window._iub = window._iub || [];
      window._iub.csConfiguration = {
        siteId: 3863974,
        cookiePolicyId: 86358183,
        lang: "it",
        storage: { useSiteId: true }
      };
    }
  }, []);

  return (
    <>
      <Script id="iubenda-config" strategy="beforeInteractive">
        {`
          if (typeof window !== 'undefined') {
            var _iub = _iub || [];
            _iub.csConfiguration = {
              siteId: 3863974,
              cookiePolicyId: 86358183,
              lang: "it",
              storage: { useSiteId: true }
            };
          }
        `}
      </Script>
      <Script src="https://cs.iubenda.com/autoblocking/3863974.js" strategy="afterInteractive" />
      <Script src="//cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" async />
    </>
  );
};

export default Iubenda; 