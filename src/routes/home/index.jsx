import { useEffect, useState } from 'react'
import menu from '../../menu.json'
import style from './style.module.css'

const Home = () => {
  const onClickPost = ({ name, path }) => {
    console.log(name, path)
  }

  return (
    <div className={style.main}>
      <h1>kuyermqi's blog</h1>
      <ul className={style.list}>
        {menu.map(item => {
          return (
            <li key={item.path} onClick={() => onClickPost(item)}>
              <span>{item.date}</span>
              <span>{item.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
