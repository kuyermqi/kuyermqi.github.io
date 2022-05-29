import { Routes, Route } from 'react-router-dom'
import Home from 'routes/home'
import Post from 'routes/post'
import NotFound from './routes/404'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post/:postname' element={<Post />} />
      <Route path='/not-found' element={<NotFound />} />
    </Routes>
  )
}

export default App
