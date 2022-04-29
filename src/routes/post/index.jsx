import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const posts = import.meta.glob('../../posts/*.md')

const Post = () => {
  const { postname } = useParams()
  const [content, setContent] = useState()

  useEffect(() => {
    console.log(posts)
  }, [])

  return (
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  )
}

export default Post
