---
layout: post
title:  "小爱课程表开发者插件使用教程"
date:   2022-01-14 14:18:00 +0800
categories: 小爱课程表
---
首先非常感谢您能够参与本次的新版开发者平台的内测。

> 告知：本开发者插件非最终版本，请勿传播！

## 前置操作

1. 将原开发者插件中的所有需要保存的代码保存至本地，虽然新版做了数据迁移，但以防出现意外，务必本地备份一份
2. 浏览器中删除原先的开发者插件
3. 下载开发者插件，看版本号下载最新的。下载地址
4. 解压插件到你的某个文件夹
5. 浏览器开启开发者模式加载已解压的插件

### 简单上手

随便打开一个网页，加载完成后按下F12，即可在菜单中找到 `AiSchedule` 标签，点击即可

如果没找到就重开F12

右上角点击登录小米账号

> 这里的小米账号一定是和以前相同的小米账号，否则不会显示你旧版本的代码信息

如果你之前在旧版开发过项目并且是线上状态，那么即可在侧边栏看到之前的项目

> 如果发现有项目丢失，那么就到了之前说的本地备份发挥用途的时刻了
> 如果你没听话没备份，你当然也可以下回旧版的开发者工具重新来一遍

### 完善旧版信息

点击某个项目，在右边展开的项目信息中，尽可能完善项目信息，然后点击右上方的审核更新

> 你点击审核更新之后会变回原先的信息，这边审核通过之后就会显示你完善后的信息了，这里后续会优化的

### 创建新教务信息

点击左上角蓝色加号，根据提示完善信息，确认后即可创建成功

## 插件更新了什么

### scheduleTimer

代码层面，我们新增了 `scheduleTimer` 函数来替代原先 `parser` 中的 `sectionTimes`，提供了更加丰富的自定义内容

下边是个代码示例
```javascript
/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
async function scheduleTimer() {
  // 支持异步操作 推荐await写法
  const someAsyncFunc = () => new Promise(resolve => {
    setTimeout(() => resolve(), 100)
  })  
  await someAsyncFunc()
  // 返回时间配置JSON，所有项都为可选项，如果不进行时间配置，请返回空对象
  return {
    totalWeek: 20, // 总周数：[1, 30]之间的整数
    startSemester: '', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
    startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
    showWeekend: false, // 是否显示周末
    forenoon: 1, // 上午课程节数：[1, 10]之间的整数
    afternoon: 0, // 下午课程节数：[0, 10]之间的整数
    night: 0, // 晚间课程节数：[0, 10]之间的整数
    sections: [{
      section: 1, // 节次：[1, 30]之间的整数
      startTime: '08:00', // 开始时间：参照这个标准格式5位长度字符串
      endTime: '08:50', // 结束时间：同上
    }], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
  }
  // PS: 夏令时什么的还是让用户在夏令时的时候重新导入一遍吧，在这个函数里边适配吧！奥里给！————不愿意透露姓名的嘤某人
}
```

注意：

1. 这个函数返回时间配置JSON，所有项都为可选项，如果不进行时间配置，请返回空对象（后续会支持整个文件不填写
2. 入口函数务必不要使用箭头函数
3. 这个函数返回的配置为最高优先度，会覆盖掉所有的默认配置
4. 这个函数运行环境和provder是一样的，所以也可以进行dom的操作（譬如从教务系统读个总周数之类的

### Parser

鉴于原先的 `parser` 中的 `sectionTimes` 已经被抽离成独立的函数，所以 `parser` 的返回值可以直接返回课表信息为 `Array` 类型

> 当然你和以前一样对象里边放courseInfo也是可以的，我们做了兼容

### Provider

是异步！我们加了异步！现在provder里边可以尽情的使用异步了！Fetch YES！

我们发现一些设备对于 `alert` 和 `prompt` 的支持并不是很好，甚至会导致代码运行失败，所以我们在这些设备上停用了它们

作为替代，我们提供了一个“课表风格”的 `AIScheduleAlert` 和 `AISchedulePrompt`

下边是个代码示例

```javascript
// 别忘了加async
async function scheduleHtmlProvider() {
  // 此步为必须，用于加载这个工具，后续会增加更多方法
  await loadTool('AIScheduleTools')
  const { AIScheduleAlert, AISchedulePrompt } = AIScheduleTools()
  // 使用它们的时候务必带上await，否则没有系统alert的时停效果
  await AIScheduleAlert('这是一条提示信息')
  // Prompt的参数比较多，所以传了个对象，最后会返回用户输入的值
  const userInput = await AISchedulePrompt({
    titleText: '提示', // 标题内容，字体比较大，超过10个字不给显示的喔，也可以不传就不显示
    tipText: '这是一条提示信息', // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试，也可以不传就不显示
    defaultText: '默认内容', // 文字输入框的默认内容，不传会显示版本号，所以空内容要传个''
    validator: value => { // 校验函数，如果结果不符预期就返回字符串，会显示在屏幕上，符合就返回false
      console.log(value)
      if (value === '1') return '这里的结果不可以是1'
      return false
  }})
}
```

另外考虑到用户可能没有在你期望的页面点开始导入，导致你没有拿到必要的信息以至于没法正常进行导入，以前就直接返回到课程表显示导入错误了

现在如果 Provider 返回字符串 `do not continue`，**就可以停止下一步的操作**，等待用户再次按下 `开始导入`

下边是个代码示例

```javascript
// 别忘了加async
async function scheduleHtmlProvider() {
  // 此步为必须，用于加载这个工具，后续会增加更多方法
  await loadTool('AIScheduleTools')
  const { AIScheduleAlert } = AIScheduleTools()
  // 使用时务必带上await，否则没有系统alert的时停效果
  await AIScheduleAlert('未发现课程信息，请在课表页面点开始导入')
  return "do not continue"
}
```

### 开发流程

现在手机上的测试版有且仅有一个，未通过测试的开发版允许进行删除

> 解决了一大坨测试版在手机上的问题，通过测试的预览版后续也会支持删除

现在的好评率和使用量是跟着版本走的，更能体现当前用户使用的版本的优劣

后续可能会出一个开发者的个人主页

### UI

后续会请设计师做一个好看的页面的，现在还是内测版，勿催，谢谢

## 工具集
虽然现在只有一个工具，但是欢迎联系QQ：1144131090推荐自己写的或者好用的开发工具

### AIScheduleTools

为解决某些平台使用Alert会导致崩溃的问题开发的一份交互控件

> 仅可以在provider以及timer代码中使用

代码示例

```javascript
// 外层的函数别忘记加async设置为异步，具体异步等问题详见百度
// 所有的调用都要加await以达到阻塞的效果
// 这一步为必须，引入代码块
await loadTool('AIScheduleTools')
// 模拟Alert
await AIScheduleAlert('这是一条提示信息')
// 模拟Prompt，参数是个对象，具体内容看注释，返回值是String
const userInput = await AISchedulePrompt({
  titleText: '提示', // 标题内容，字体比较大，超过10个字不给显示的喔，也可以不传就不显示
  tipText: '这是一条提示信息', // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试，也可以不传就不显示
  defaultText: '默认内容', // 文字输入框的默认内容，不传会显示版本号，所以空内容要传个''
  validator: value => { // 校验函数，如果结果不符预期就返回字符串，会显示在屏幕上，符合就返回false
    console.log(value)
    if (value === '1') return '这里的结果不可以是1'
    return false
}})
// 确认模块，用于让用户选择是或者否，返回值为Boolean
const userConfrim = await AIScheduleConfirm({
  titleText: '提示', // 标题内容，字体比较大，超过10个字不给显示的喔，也可以不传就不显示
  contentText: '这是一条提示信息', // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试，为必传，不传显示版本号
  cancelText: '取消', // 取消按钮文字，可不传默认为取消
  confirmText: '确认', // 确认按钮文字，可不传默认为确认
})
// 选择模块，用户让用户多选一，暂不支持多选，返回值为选项列表中某一项
const userSelect = await AIScheduleSelect({
  titleText: '提示', // 标题内容，字体比较大，超过10个字不给显示的喔，也可以不传就不显示
  contentText: '这是一条提示信息', // 提示信息，字体稍小，支持使用``达到换行效果，具体使用效果建议真机测试，为必传，不传显示版本号
  selectList: [
    '选项一',
    '选项二',
    '选项三',
  ], // 选项列表，数组，为必传
})
```

## KingoImgReader

解决了旧版青果教务系统的图片识别问题

> 由于降噪逻辑十分繁杂且耗时，**不要上传非青果图片**，影响真正青果用户使用

以洛阳理工的青果教务为例，`provider` 和 `parser` 代码如下

### provider
```javascript
async function scheduleHtmlProvider() {
  await loadTool('AiScheduleTools')
  await loadTool('KingoImgReader')
  const image = document.getElementsByName("frmbody")[0]?.contentWindow?.document?.getElementsByName("frmMain")[0]?.contentWindow?.document?.getElementsByName("frmRpt")[0]?.contentWindow?.document?.getElementsByTagName('img')[0]
  if (!image) {
    await AiScheduleAlert('未检查到图片请重试')
    return 'do not continue'
  }
  const providerRes = await KingoImgReader(image)
  return providerRes
}
```

> 由于图片识别时间较长，6~10s 左右，所以后续会在AIScheduleTools中提供一个loading，在provider代码中存在await loadTool('AiScheduleTools')的情况下自动在KingoImgReader过程中调用loading

### parser
```javascript
function scheduleHtmlParser(providerRes) {
  return JSON.parse(providerRes)
}
```

## 更新
> 由于课表和开发者工具分开单独更新的，所以在课表里边更新不代表开发者工具也同步更新了，目前课表优先级高于开发者工具
> 
> 开发者工具即使本地测试不通过也可以在手机上测试，望知悉

### 未知日期（其实是忘了

#### 课表
`AIScheduleTools` 使用 `loadTool` 之后无需再解构 `const { AIScheduleAlert } = AIScheduleTools()`，可以直接调用工具

`AIScheduleTools` 新增了 `AIScheduleConfirm`, `AIScheduleSelect` 两个工具，具体使用方式在上边的 `AIScheduleTools` 代码示例里边

> 工具源码在 [链接](https://cnbj3-fusion.fds.api.xiaomi.com/miai-fe-aischedule-home-fe/tools/AIScheduleTools.js)，欢迎大牛提供新的工具，或者对我的代码有什么优化建议可以直接联系QQ:1144131090

### 20220106

#### 课表

将Timer的运行时机后置，这样就可以直接在 Timer 中使用 `providerRes`, `parserRes` 获取到两份代码的结果，方便解析时间

### 20220113

#### 课表

支持了旧版青果教务的有噪点的图片识别，使用方式见上边 `KingoImgReader` 代码示例里边

