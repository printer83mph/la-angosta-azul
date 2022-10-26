import type { NextPage } from 'next'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { NextSeo } from 'next-seo'

import lobster from 'resources/images/lobster.jpg'
import Head from 'next/head'

const Home: NextPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null!)
  const [clicked, setClicked] = useState(false)

  const onClick = useCallback(() => {
    audioRef.current.play()
    setClicked(true)
  }, [])

  return (
    <div className="relative w-screen h-screen">
      <NextSeo
        title="La Angosta Azul"
        description="La angosta... la angosta es azul..."
      />
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦞</text></svg>"
        />
      </Head>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio src="/audio/lobster.ogg" ref={audioRef} />
      <Image src={lobster} className="invisible" alt="Hidden Lobster" />
      {clicked || (
        <div className="absolute inset-0 overflow-hidden">
          <button
            type="button"
            className="absolute flex inset-0 justify-center items-center text-6xl font-black hover:drop-shadow-md hover:scale-[1.02] transition-all"
            onClick={onClick}
          >
            LA LANGOSTA
          </button>
        </div>
      )}
      {clicked && (
        <main className="absolute inset-0 bg-slate-700">
          <Image
            src={lobster}
            alt="Lobster"
            layout="fill"
            objectFit="cover"
            className="blur-2xl brightness-75"
          />
          <Image
            src={lobster}
            alt="Lobster"
            layout="fill"
            objectFit="contain"
          />
        </main>
      )}
    </div>
  )
}

export default Home
