import { html } from './posts/index.md'

function App() {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}

export default App
