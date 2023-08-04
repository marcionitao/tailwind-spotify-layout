import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <aside className="p-6 w-72 bg-zinc-950">
          {/* adicionando as bolinhas do mac */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="mt-10 space-y-5">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="flex flex-col gap-3 pt-6 mt-6 border-t border-zinc-800">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot Hits Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              ABBA - Greatest Hits
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Michael Jackson - Greatest Hits
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Elvis - Greatest Hits
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Bony M - Greatest Hits
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              70s - Greatest Hits
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
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
              <button className="flex items-center justify-center invisible w-12 h-12 p-1 pl-1 ml-auto mr-6 text-black bg-green-400 rounded-full group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image src="/abba.jpg" alt="Abba Gold" width={100} height={100} />
              <strong>Abba Gold</strong>
              <button className="flex items-center justify-center invisible w-12 h-12 p-1 pl-1 ml-auto mr-6 text-black bg-green-400 rounded-full group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image src="/abba.jpg" alt="Abba Gold" width={100} height={100} />
              <strong>Abba Gold</strong>
              <button className="flex items-center justify-center invisible w-12 h-12 p-1 pl-1 ml-auto mr-6 text-black bg-green-400 rounded-full group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image src="/abba.jpg" alt="Abba Gold" width={100} height={100} />
              <strong>Abba Gold</strong>
              <button className="flex items-center justify-center invisible w-12 h-12 p-1 pl-1 ml-auto mr-6 text-black bg-green-400 rounded-full group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image src="/abba.jpg" alt="Abba Gold" width={100} height={100} />
              <strong>Abba Gold</strong>
              <button className="flex items-center justify-center invisible w-12 h-12 p-1 pl-1 ml-auto mr-6 text-black bg-green-400 rounded-full group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="flex items-center gap-4 overflow-hidden transition-colors rounded group bg-white/10 hover:bg-white/20"
            >
              <Image src="/abba.jpg" alt="Abba Gold" width={100} height={100} />
              <strong>Abba Gold</strong>
              <button className="flex items-center justify-center invisible w-12 h-12 p-1 pl-1 ml-auto mr-6 text-black bg-green-400 rounded-full group-hover:visible">
                <Play />
              </button>
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
      <footer className="flex items-center justify-between p-6 border-t bg-zinc-800 border-zinc-700">
        <div className="flex items-center gap-3">
          <Image src="/abba.jpg" alt="Abba Gold" width={56} height={56} />
          <div className="flex flex-col">
            <strong className="font-normal">Mama Mia</strong>
            <span className="text-xs text-zinc-400">Abba</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="flex items-center justify-center w-10 h-10 p-1 pl-1 ml-auto mr-6 text-black bg-white rounded-full">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="w-96 h-1 rounded-full bg-zinc-600">
              <div className="w-40 h-1 rounded-full bg-zinc-200"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={20} className="text-zinc-200" />
          <LayoutList size={20} className="text-zinc-200" />
          <Laptop2 size={20} className="text-zinc-200" />
          <div className="flex items-center gap-2">
            <Volume size={20} className="text-zinc-200" />
            <div className="w-24 h-1 rounded-full bg-zinc-600">
              <div className="w-10 h-1 rounded-full bg-zinc-200"></div>
            </div>
          </div>
          <Maximize2 size={20} className="text-zinc-200" />
        </div>
      </footer>
    </div>
  )
}
