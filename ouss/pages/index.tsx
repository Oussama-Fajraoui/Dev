import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title> Welcome </title>  
      </Head>
      {/* header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* skills */}
      {/* Proects */}
      {/* Contact Me */}
    </div>
  )
}

export default Home
