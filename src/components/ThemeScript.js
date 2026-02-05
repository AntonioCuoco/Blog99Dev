'use client'
import Script from 'next/script'

const ThemeScript = () => {
    return (
        <Script id="theme-switcher" strategy="beforeInteractive">
            {`
        try {
          const theme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
          
          if (theme === 'dark') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        } catch (e) {
          // Fallback per SSR
          document.documentElement.classList.remove('dark')
        }
      `}
        </Script>
    )
}

export default ThemeScript 