import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-2 border-t bg-zinc-800 border-zinc-700">
      <div className="flex items-center gap-1">
        <Image src="/abba.jpg" alt="Abba Gold" width={36} height={36} />
        <div className="flex flex-col">
          <strong className="font-normal">Mama Mia</strong>
          <span className="text-xs text-zinc-400">Abba</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="flex items-center justify-center w-8 h-8 pl-1 ml-auto text-black bg-white rounded-full">
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
  )
}
