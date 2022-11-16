import Layout from "../components/Layout";
//Global Css는 _app.js에서만 등록 가능 나머지는 module css를 사용

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <style jsx global>{`
          button {
            color: red;
          }
        `}</style>
      </Layout>
    </>
  );
}
