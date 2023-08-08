import { ComponentProps } from 'react'
import { Play } from 'lucide-react'

export type ButtonProps = ComponentProps<'button'>

export function ButtonPlay(props: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center invisible w-12 h-12 pl-1 ml-auto mr-6 text-black bg-green-400 rounded-full group-hover:visible"
      {...props}
    >
      <Play />
    </button>
  )
}
