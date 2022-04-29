import { Routes, Route } from 'react-router-dom'
import Home from './routes/home'
import Post from './routes/post'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/post/:postname" element={Post} />
      </Routes>
    </div>
  )
}

export default App
