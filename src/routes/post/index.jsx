import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './style.module.css'
import 'github-markdown-css/github-markdown.css'

const posts = import.meta.glob('../../posts/*.md')

const Post = () => {
  const { postname } = useParams()
  const [content, setContent] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const target = Object.keys(posts).find(path => {
      return path.includes(postname)
    })
    if (target) {
      posts[target]().then(res => setContent(res.html))
    } else {
      navigate('/not-found', { replace: true })
    }
  }, [postname])

  return (
    <article
      className={`${style.main} markdown-body`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default Post
