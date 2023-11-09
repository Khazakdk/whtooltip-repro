import Script from "next/script";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="lazyOnload" id="whtooltips">
        {`
          const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};
        `}
      </Script>
      <Script
        strategy="lazyOnload"
        src="https://wow.zamimg.com/js/tooltips.js"
      />
      <Component {...pageProps} />
    </>
  );
}
