import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Belovedthorlani</title>
        <meta name="description" content="This is a law past question app made by Thorlani" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9515848627350834" crossOrigin="anonymous"></script>
      </Head>
      <div className='w-full h-[65vh] text-center'>
        <h3 className='mt-[100px] font-semibold text-5xl'>Welcome</h3>
        <p className='mt-[30px] font-medium text-3xl'>to</p>
        <h1 className='mt-[30px] font-extrabold text-7xl'>Beloved Thorlani</h1>
        <p className='mt-[30px] font-medium text-3xl'>Home of Online</p>
        <h4 className='mt-[30px] font-bold text-4xl'>Law past questions</h4>
      </div>
    </>
  )
}
