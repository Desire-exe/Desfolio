import { useEffect, useState } from 'react'

type Props = {
  text: string
  speed?: number
  delay?: number
  className?: string
  onDone?: () => void
}

export function Typewriter({ text, speed = 40, delay = 0, className, onDone }: Props) {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let startTimer: ReturnType<typeof setTimeout>
    let tick: ReturnType<typeof setInterval>

    startTimer = setTimeout(() => {
      tick = setInterval(() => {
        i += 1
        setShown(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(tick)
          setDone(true)
          onDone?.()
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(startTimer)
      clearInterval(tick)
    }
  }, [text, speed, delay, onDone])

  return (
    <span className={className}>
      {shown}
      <span
        className={`inline-block w-[0.6ch] -mb-0.5 bg-accent transition-opacity duration-300 ${
          done ? 'opacity-0' : 'animate-pulse'
        }`}
      >
        &nbsp;
      </span>
    </span>
  )
}