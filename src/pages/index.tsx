import type { NextPage } from 'next'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

import lobster from 'resources/images/lobster.jpg'

const Home: NextPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null!)
  const [clicked, setClicked] = useState(false)

  const onClick = useCallback(() => {
    audioRef.current.play()
    setClicked(true)
  }, [])

  return (
    <div className="relative w-screen h-screen">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio src="/audio/lobster.ogg" ref={audioRef} />
      <Image src={lobster} className="invisible" alt="Hidden Lobster" />
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
      {clicked || (
        <button
          type="button"
          className="absolute flex inset-0 justify-center items-center text-6xl font-black hover:drop-shadow-md hover:scale-[1.02] transition-all"
          onClick={onClick}
        >
          LA ANGOSTA
        </button>
      )}
    </div>
  )
}

export default Home
