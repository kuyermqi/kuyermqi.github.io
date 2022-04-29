import { useEffect, useState } from 'react'
import menu from './menu.json'

const posts = import.meta.glob('./posts/*.md')

function App() {
  const [html, setHtml] = useState(null)
  const [path, setPath] = useState(null)

  useEffect(() => {
    if (path !== null) {
      import(path).then(res => console.log(res))
    }
  }, [path])

  return (
    <div>
      <h1>kuyermqi's blog</h1>
      <ul>
        {menu.map(item => {
          return (
            <li key={item.path} onClick={() => setPath(item.path)}>
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
