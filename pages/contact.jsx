import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

const Contact = () => {
  return (
    <>
      <Head>
        <title>Belovedthorlani</title>
        <meta name="description" content="This is a law past question app made by Thorlani" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9515848627350834" crossOrigin="anonymous"></script>
      </Head>
      <div className='w-[100%] px-[8%] h-fit flex justify-center items-center'>
        <div className="my-[50px] p-[2%] shadow-md">
            <h1 className='font-extrabold text-2xl mb-[50px]'>Contact Us</h1>
            <p className="mb-2">You can contact us via our E-mail address: <strong>davidthorlani@gmail.com</strong></p>
            <div className="mb-[50px]">
                <div className="mb-3">Or Socials</div>
                <div className='flex justify-between place-items-center w-[100px]'>
                    <Link href={'https://wa.me/+2348096551572?text=Hello%2C%20I%20am%20messaging%20from%20Belovedthorlani.'}>
                    <Image src="/assets/whatsapp.svg" width={30} height={30} alt="WhatsApp" className='cursor-pointer' />
                    </Link>
                    <Link href={'https://twitter.com/Thorlanii'}>
                    <Image src="/assets/twitter.svg" width={30} height={30} alt="Twitter" className='cursor-pointer' />
                    </Link>
                </div>
            </div>
            <p className="mb-[50px]">You can contact us via the email address but due to time constraints we might not reply as quickly as you expect. It might sometimes take up to 48hrs to get feedback from us but we promise to reply every of your messages. We really appreciate your support for this site. Continue reading and consider subscribing to get latest updates.</p>
            <p>Note: If you don’t hear back from us within a week, your question may have gotten lost in cyberspace, so feel free to resubmit the email.</p>
        </div>
      </div>
    </>
  )
}

export default Contact