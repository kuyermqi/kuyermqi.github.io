const fs = require('fs')
const { resolve } = require('path')
const inquirer = require('inquirer')
const list = require('../src/data/list.json')

inquirer.prompt([
  {
    type: 'input',
    name: 'id',
    message: '要删除的文章索引',
    prefix: ''
  }
]).then(async ({ id }) => {
  try {
    const index = list.findIndex(({ id: postId }) => id * 1 === postId)
    if (index !== -1) {
      const { postname } = list.splice(index, 1)[0]
      fs.writeFileSync(resolve(__dirname, '../src/data/list.json'), JSON.stringify(list, null, 2))
      fs.rmSync(resolve(__dirname, `../src/posts/${postname}.md`))
      console.log('done\n')
    } else {
      console.log('post not found')
    }
  } catch (err) {
    console.warn(err)
  }
})
