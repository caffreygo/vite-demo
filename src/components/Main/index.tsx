import { devDependencies } from '../../../package.json'

export function Main() {
  return (
    <div>
      <h1 className="bg-red-400">vite version: {devDependencies.vite}</h1>
    </div>
  )
}
