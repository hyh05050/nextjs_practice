import NavBar from "../components/NavBar";
//Global Css는 _app.js에서만 등록 가능 나머지는 module css를 사용

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello</span>
      <style jsx global>{`
        button {
          color: red;
        }
      `}</style>
    </>
  );
}
