# 使用 Vite、React 和 Github Pages 搭建个人博客

这不是我第一次搭博客了。

但由于种种原因，我没能坚持下去。

现在，我决定再次对写博客这件事发起挑战，这次我决定使用 Github Pages，我不想再租云服务器了，因为贵而且我并不是很需要。Github Pages 很好，虽然国内很难访问，但写博客不就是自嗨么🤡。

技术栈上我选择 [Vite](https://cn.vitejs.dev/) 和 [React](https://zh-hans.reactjs.org/)，这两个都是我目前最熟悉的东西，用起来很顺手。

## 安装

使用 Vite 提供 React 的模板创建项目：

```shell
# npm 6.x
npm create vite@latest blog --template react

# npm 7+, extra double-dash is needed:
npm create vite@latest blog -- --template react
```

## 配置

Github Pages 会在项目根目录搜索 `index.html` 文件作为页面入口，所以在 `vite.config.js` 配置文件中，将 `build.outDir` 配置为项目根目录，这样运行 `npm run build` 就会将 `index.html` 输出至根目录了。

打包后的 `js` 文件和 `css` 文件会输出至 `/assets` 目录。

```javascript
// vite.config.js

import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: resolve(__dirname, './src'),
  build: {
    outDir: resolve(__dirname, './'),
  },
  plugins: [react()]
})

```

## 页面

两个页面就差不多了，首页 + 文章页，路由还是用 `react-router-dom`。

```jsx
// app.jsx

import { Routes, Route } from 'react-router-dom'
import Home from 'routes/home'
import Post from 'routes/post'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/post/:postname' element={<Post />} />
    </Routes>
  )
}

export default App
```

### 首页

我只想做简单点，拒绝花里胡哨的 UI，首页一个大标题加个性签名加联系方式，再加个文章列表搞定。

```jsx
// routes/home/index.jsx

import style from './style.module.css'

const Home = () => {
  return (
    <div className={style.main}>
      <header>
        {/* 标题 */}
      </header>
      <div>
        {/* 文章列表，点击跳转到文章页 */}
      </div>
    </div>
  )
}

export default Home
```

### 文章页

根据路由参数，动态导入文章内容即可。

我把所有的文章都放在了 `/src/posts` 目录下，通过 `import.meta.glob()` 方法可以动态地导入文章内容，这个方法是 Vite 独有的，详见 [Glob 导入](https://cn.vitejs.dev/guide/features.html#glob-import)。

这里我使用 `*.md` 匹配该目录下所有的 md 文件，在导入时，这些 md 文件会自动渲染为 html，这是因为我使用了一个 Vite 的插件，下面一节中我会讲到。

```jsx
// routes/post/index.jsx

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import style from './style.module.css'

// 所有文章的引用
const posts = import.meta.glob('../../posts/*.md')

const Post = () => {
  // 获取路由参数
  const { postname } = useParams()
  const [content, setContent] = useState()

  useEffect(() => {
    // 根据 postname 查找对应的文章
    const target = Object.keys(posts).find(path => {
      return path.includes(postname)
    })
    if (target) {
      // 如果找到了，通过函数的方式直接调用即可获得内容
      posts[target]().then(res => {
        setContent(res.html)
        setLoading(false)
      })
    }
  }, [postname])

  // 使用 dangerouslySetInnerHTML 属性作为 html 内容插入
  return <article dangerouslySetInnerHTML={{ __html: content }} />
}

export default Post
```

## Markdown 支持

我选择使用 [vite-plugin-markdown](https://github.com/hmsk/vite-plugin-markdown) 插件将 markdown 渲染为 html，代码高亮能力由 [markdown-it-prism](https://github.com/jGleitz/markdown-it-prism) 提供，只需要像下面这样配置即可：

```javascript
// vite.config.js

import { defineConfig } from 'vite'
import { resolve } from 'path'
import markdown, { Mode } from 'vite-plugin-markdown'
import markdownIt from 'markdown-it'
import markdownItPrism from 'markdown-it-prism'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: resolve(__dirname, './src'),
  build: {
    outDir: resolve(__dirname, './'),
  },
  plugins: [
    react(),
    markdown({
      mode: Mode.HTML,  // 渲染为 HTML
      markdownIt: markdownIt({ html: true }).use(markdownItPrism),  // 使用 prism 高亮代码块
    }),
  ]
})

```

代码高亮还需要引入一个 css 文件：

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- 引入 Prism.js 的 css，在 https://prismjs.com/download.html 下载 -->
    <link href="/style/prism.css" rel="stylesheet" />
  </head>
</html>
```

Markdown 的样式我选了 Github 同款 👉 [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)，安装引入就可以了：

```shell
npm i github-markdown-css
```

在 `/routes/post/index.jsx` 文件引入：

```jsx
import 'github-markdown-css/github-markdown.css'
```

## 关于更新

更新博客的话，本地写好后运行一下 `npm run build` 后提交，推送到 Github 就可以了，嫌麻烦可以再装个 husky，提交前自动 build。

## 总结

最后效果挺满意的，细节我就不写了，代码在我的 Github 仓库里都有。

希望这次能坚持写下去，我觉得能坚持写博客的人都挺酷的。
