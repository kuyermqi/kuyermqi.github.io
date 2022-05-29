const fs = require('fs')
const { resolve } = require('path')
const translate = require('google-translate-cn-api')
const dayjs = require('dayjs')
const inquirer = require('inquirer')
const list = require('../src/data/list.json')

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: '输入文章标题',
    prefix: ''
  }
]).then(async ({ name }) => {
  try {
    const { text: enName } = await translate(name, { to: 'en' })
    const nameExist = list.some(({ name: n, postname: p }) => {
      return name === n || enName === p
    })
    if (nameExist) {
      throw new Error('标题重复')
    }
    const postname = enName.split(' ').join('-')
    list.splice(0, 0, {
      date: dayjs().format('YYYY-MM-DD'),
      id: dayjs().toDate().getTime(),
      name,
      postname,
    })
    fs.writeFileSync(resolve(__dirname, '../src/data/list.json'), JSON.stringify(list, null, 2))
    fs.writeFileSync(resolve(__dirname, `../src/posts/${postname}.md`), `# ${name}\n`)
    console.log('done\n')
  } catch (err) {
    console.warn(err)
  }
})
