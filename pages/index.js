import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="facebook UI implemented with NextJS" />
        <link rel="icon" href="/images/facebook-logo.png" />
      </Head>

     <Header />

     <main>
       {/* sidebar */}
       {/* feed */}
       {/* widgets */}
     </main>
    </div>
  )
}
