import { devDependencies } from '../../../package.json'
import logoSrc from '@assets/imgs/react.svg'
import { useEffect } from 'react'

export function Main() {
  useEffect(() => {
    const img = document.getElementById('logo') as HTMLImageElement
    img.src = logoSrc
  }, [])
  return (
    <div>
      <h1 className="bg-red-400">vite version: {devDependencies.vite}</h1>
      <img className="m-auto mt-4" src={logoSrc} alt="" />
      <img id="logo" className="m-auto mt-4" alt="" />
    </div>
  )
}
