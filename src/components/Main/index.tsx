import { devDependencies } from '../../../package.json'

export function Main() {
  return (
    <div className="flex-c" border="2 rounded blue-200">
      <h1 className="font-bold text-2xl mb-2">vite version: {devDependencies.vite}</h1>
    </div>
  )
}
