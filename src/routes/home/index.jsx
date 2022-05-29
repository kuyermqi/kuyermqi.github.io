import { Link } from 'react-router-dom'
import list from 'data/list.json'
import style from './style.module.css'

const Home = () => {
  return (
    <div className={style.main}>
      <header>
        <h1>Kuyermqi's blog</h1>
        <p>May the force be with you, always.</p>
        <p>📧 <a href='mailto:kuyermqi@outlook.com'>kuyermqi@outlook.com</a></p>
        <p>👨‍💻 <a href='https://github.com/kuyermqi'>https://github.com/kuyermqi</a></p>
      </header>
      <div>
        <div className={style.tag}>
          文章列表 👇
        </div>
        <ul className={style.list}>
          {list.map(item => {
            return (
              <li className={style.item} key={item.postname}>
                <Link to={`/post/${item.postname}`}>
                  {`${item.date}\u00A0\u00A0${item.name}`}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Home
