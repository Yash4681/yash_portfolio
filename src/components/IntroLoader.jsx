import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

export function IntroLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 950)
    return () => window.clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="intro-loader" role="status" aria-label="Loading portfolio">
      <div className="loader-mark">YM</div>
      <span>{profile.role}</span>
    </div>
  )
}
