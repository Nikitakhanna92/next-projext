import Head from 'next/head'
import { useRouter } from 'next/router'
export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Success Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <p className="success-container"> Registered successfully!</p>

      </main>


      <style jsx>{`
        .success-container {
            text-align:center;
            color: blue;
            font-size: 24px;
        }
           `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
