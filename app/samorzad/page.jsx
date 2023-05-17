import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/footer'
import Head from '../head'
import './samorzad.scss'

export default function Samorzad() {
  return (
    <>
      <Head title="Samorząd" />

      <main className="container">
        <div className="main-header">
          <h1>
            Samorząd szkolny <span>2022/2023</span>
          </h1>
          <h1>Skład samorządu</h1>
        </div>

        <div className="main-container">
          <Image
            src="/Placeholder.png"
            alt="image"
            width="300"
            height="500"
          ></Image>
          <Image
            src="/Placeholder.png"
            alt="image"
            width="300"
            height="500"
          ></Image>
          <Image
            src="/Placeholder.png"
            alt="image"
            width="300"
            height="500"
          ></Image>
          <Image
            src="/Placeholder.png"
            alt="image"
            width="300"
            height="500"
          ></Image>
          <Image
            src="/Placeholder.png"
            alt="image"
            width="300"
            height="500"
          ></Image>
        </div>
        <div className="main-footer"></div>
      </main>

      <Footer />
    </>
  )
}
