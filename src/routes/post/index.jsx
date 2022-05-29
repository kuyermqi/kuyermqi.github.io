import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './style.module.css'
import 'github-markdown-css/github-markdown.css'

const posts = import.meta.glob('../../posts/*.md')

const Post = () => {
  const { postname } = useParams()

  const [content, setContent] = useState()
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const target = Object.keys(posts).find(path => {
      return path.includes(postname)
    })
    const jumpTo404 = () => {
      navigate('/not-found', { replace: true })
    }
    if (target) {
      posts[target]().then(res => {
        setContent(res.html)
        setLoading(false)
      }).catch(err => {
        console.warn(err)
        jumpTo404()
      })
    } else {
      jumpTo404()
    }
  }, [postname])

  return (
    <div className={style.main} data-loading={`${loading}`}>
      <article
        className='markdown-body'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default Post
