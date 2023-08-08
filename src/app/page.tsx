import { ButtonPlay } from '@/components/ButtonPlay'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>
          <h1 className="text-2xl">Good Afternoom</h1>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image src="/abba.jpg" alt="Abba Gold" width={100} height={100} />
              <strong>Abba Gold</strong>
              <ButtonPlay />
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image src="/elvis.jpg" alt="Elvis" width={100} height={100} />
              <strong>Elvis</strong>
              <ButtonPlay />
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image src="/70s.jpg" alt="70s Songs" width={100} height={100} />
              <strong>70s Songs</strong>
              <ButtonPlay />
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image
                src="/Boney-M.jpg"
                alt="Boney M"
                width={100}
                height={100}
              />
              <strong>Boney M</strong>
              <ButtonPlay />
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image
                src="/brazil.jpg"
                alt="Brazil Hits"
                width={100}
                height={100}
              />
              <strong>Brazil Hits</strong>
              <ButtonPlay />
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image
                src="/michael.jpg"
                alt="Michael Jackson"
                width={100}
                height={100}
              />
              <strong>Michael Jackson</strong>
              <ButtonPlay />
            </a>
          </div>
          <h2 className="mt-3 text-xl">Made for Marcio</h2>
          <div className="grid grid-cols-8 gap-4 mt-2">
            <a
              href="#"
              className="flex flex-col gap-2 p-3 rounded bg-white/5 hover:bg-white/10"
            >
              <Image
                src="/abba.jpg"
                alt="Abba Gold"
                width={120}
                height={120}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallcows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 p-3 rounded bg-white/5 hover:bg-white/10"
            >
              <Image
                src="/abba.jpg"
                alt="Abba Gold"
                width={120}
                height={120}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallcows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 p-3 rounded bg-white/5 hover:bg-white/10"
            >
              <Image
                src="/abba.jpg"
                alt="Abba Gold"
                width={120}
                height={120}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallcows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 p-3 rounded bg-white/5 hover:bg-white/10"
            >
              <Image
                src="/abba.jpg"
                alt="Abba Gold"
                width={120}
                height={120}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallcows, COIN, girl in red and more
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 p-3 rounded bg-white/5 hover:bg-white/10"
            >
              <Image
                src="/abba.jpg"
                alt="Abba Gold"
                width={120}
                height={120}
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Wallcows, COIN, girl in red and more
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
