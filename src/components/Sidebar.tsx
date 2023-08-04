import { HomeIcon, Search, Library } from 'lucide-react'

export default function Sidebar() {
  return (
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
          Hot Hits Brazil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          ABBA - Gold
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
  )
}
