import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// The default export of _app.js is a top-level React component that wraps all the pages in your application
// important: You need to restart the development server when you add pages/_app.js. Press Ctrl + c to stop the server and run:
//you can import global style only here!
