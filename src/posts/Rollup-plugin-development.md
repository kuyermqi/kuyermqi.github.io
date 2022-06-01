# Rollup 插件指北

这几天遇到一个打包问题，需要写插件解决，记录一下 `Rollup` 插件开发的学习。

官方文档：[https://rollupjs.org/guide/en/#plugins-overview](https://rollupjs.org/guide/en/#plugins-overview)

## 概览

一个 Rollup 插件由 `properties`、`build hooks` 和 `output generation hooks` 组成，翻译一下就是由插件的属性、编译阶段的钩子、输出生成阶段的钩子组成。

其中，`properties` 目前只有 `name` 一个字段，用于表示插件的名称，插件的名称在约定上以 'rollup-plugin-' 开头。

构建阶段提供的钩子如下图所示：

![build hooks](/images/rollup-build-hooks.png)

输出生成阶段提供的钩子如下图所示：

![output generation hooks](/images/rollup-output-generation-hooks.png)

到这里大概就明白，Rollup 的插件是在不同阶段使用 Rollup 提供的钩子进行作用的。

## 插件的写法

插件定义为一个函数，函数的返回值是一个对象，该对象即是上文提到的，包含 `properties`、`build hooks`、`output generation hooks` 的对象。`properties` 中的 `name` 为必填字段。

根据插件的功能，选择不同阶段不同的 hook，在其中进行相应的操作，最后返回操作结果即可。不得不说这个插件的 API 设计很符合逻辑。一般来说，要实现目标插件，只要找到自己想要的 hooks 就可以了。

```javascript
// rollup-plugin-my-example.js
export default function myPlugin () {
  return {
    name: 'my-plugin',
    resolveId ( source ) {
      // 这里进行一些处理
      // return xxx 最后返回处理结果
    },
    load ( id ) {
      // 这里进行一些处理
      // return xxx 最后返回处理结果
    }
  }
}

// rollup.config.js
import example from './rollup-plugin-my-example.js'

export default ({
  input: 'main.js',
  plugins: [example()], // 在这里传入
  output: [{
    file: 'bundle.js',
    format: 'es',
  }]
})
```

## 构建阶段的钩子（Build Hooks）

这一节介绍所有 `build hooks` 的作用，基本上等于翻译一遍文档，英文比较 🐂 的可以去看官方文档。

官方文档对 `build hooks` 的描述为：

> Hooks can affect how a build is run, provide information about a build, or modify a build once complete.
> 
> 渣翻：这些钩子函数将会影响构建的运作方式，为构建提供相关信息，又或者在整个构建完成后对其进行追加修改。

官方对 `build hooks` 进行了分类，hook 可以有多个类别，以下为 hook 的具体类别和解释：

- **async**：hook 为异步；
- **sync**：hook 为同步；
- **first**：当多个插件依赖该 hook 时，它们会按照插件的传入顺序依次运行，如果其中某一个插件的 hook 返回了 null 或者 undefined，那么这个 hook 会立即结束，后面的不会再执行；
- **sequential**：当多个插件依赖该 hook 时，它们会按照插件的传入顺序依次运行，如果 hook 是异步的，会一直等待到当前插件调用的 hook 运行结束，再轮到到后面的插件运行；
- **parallel**：当多个插件依赖该 hook 时，它们会同时运行，不会互相等待。

### 📃 buildEnd

**Type:** `(error?: Error) => void`  
**Kind:** `async`, `parallel`  
**Previous Hook:** `moduleParsed`, `resolveId` or `resolveDynamicImport`  
**Next Hook:** 这是构建阶段的最后一个 hook，它的下一个 hook 在输出生成阶段。

当 Rollup 构建完毕时会调用这个 hook，这个时候还没有进入输出和生成阶段，这里可以返回 Promise（我不太明白返回 Promise 的作用🤔，可能某些场景需要吧）。如果构建阶段发生了错误，错误内容将会通过参数传递到这个 hook 里。

### 📃 buildStart

**Type:** `(options: InputOptions) => void`  
**Kind:** `async`, `parallel`  
**Previous Hook:** `options`  
**Next Hook:** `resolveId`

当 Rollup 开始构建的时候会调用这个 hook。在这个 hook 里可以清楚地知道传递给 Rollup 的所有选项。

### 📃 closeWatcher

**Type:** `() => void`  
**Kind:** `async`, `parallel`  
**Previous/Next Hook:** 这个 hook 在构建阶段和输出生成阶段随时可能触发，如果这个 hook 触发了，那么就不会再触发 `watchChange` 事件。

这个 hook 用于通知各个插件构建阶段或输出生成阶段的 watcher 进程和开放的资源（原文 open resources，具体是什么资源可能后边有）将会关闭，如果在这里返回了 Promise，Rollup 会等待这个 Promise 直到 resolve 再关闭进程。和输出相关的插件不能调用这个 hook。

### 📃 load

> 官方文档的风格跟我自己写有的一拼

**Type:** `(id: string) => string | null | {code: string, map?: string | SourceMap, ast? : ESTree.Program, moduleSideEffects?: boolean | "no-treeshake" | null, syntheticNamedExports?: boolean | string | null, meta?: {[plugin: string]: any} | null}`  
**Kind:** `async`, `first`  
**Previous Hook:** `resolveId` 或者 `resolveDynamicImport`，只要这两个 hook 其中一个完成了就会来到这个 hook，这里的完成了是指返回了模块的 id。这个 hook 也可以随时通过主动调用 `this.load` 方法触发，但是要手动传对应模块的 id。  
**Next Hook:** `transform`，如果加载的文件已经缓存了，则会调用 `shouldTransformCachedModule`。

通过这个 hook 来自定义加载器。如果返回 null，那么其他插件的 load 函数将会被推迟执行，最终会停止从文件系统加载该 id 对应的资源。出于某些原因，比如为了防止额外的解析开销，在这个 hook 里应使用 `this.parse` 方法去生成 AST 语法树。

> ~~看着像机翻，但确实是本人肉翻，自信.jpg~~

#### 🎈 code & ast & map

这个 hook 可以选择性地返回 `{ code, ast, map }` 对象。ast 必须为 ESTree 标准的 AST 语法树，每个节点都要有 start 和 end 属性。如果转换过程中没有移动代码，可以通过设置 map 为 null 来保留当前的 sourcemaps（源码映射关系）。如果修改了代码，则需要需要同步修改 map（**除非 Rollup 的 sourcemap 选项为 false**）。如果感觉不需要生成新的 sourcemap，那么将 map 设置为 `{ mappings: '' }` 即可。如下所示：

```javascript
return {
  code: transformedCode,
  map: '',
}
```

#### 🎈 moduleSideEffects

如果返回的 moduleSideEffects 字段值为 false 且没有其他模块引用该模块，那么即使这个模块可能有副作用也不会被引入 bundle 中；如果返回的 moduleSideEffects 字段值为 true，那么 Rollup 会通过算法判断这个模块是否有副作用；如果返回的 moduleSideEffects 字段值 "no-treeshake"，那么不会对该模块进行 treeshaking，即使这个模块是空的，最后也会被包含进生成的 chunk 中；如果返回的 moduleSideEffects 字段值 null 或不返回这个字段，moduleSideEffects 将依次由第一个 resolve 这个模块的 `resolveId` hook、Rollup 的 `treeshake.moduleSideEffects` 选项、或最终由默认值（true）决定，`transform` hook 可以覆盖这个结果。

#### 🎈 syntheticNamedExports

> resolveId、load 和 transfrom 都可以给模块设置这个属性

这个属性翻译过来就是合成命名导出的意思，是用于在丢失导出的情况下的 fallback 选项，官方举了个直白的栗子 🌰：

**dep.js ({ syntheticNamedExports: '__synthetic' }):**

```javascript
export const foo = 'explicit';
export const __synthetic = {
  foo: 'foo',
  bar: 'bar'
};
```

**main.js:**

```javascript
import { foo, bar, baz, __synthetic } from './dep.js';

// logs "explicit" as non-synthetic exports take precedence
console.log(foo);

// logs "bar", picking the property from __synthetic
console.log(bar);

// logs "undefined"
console.log(baz);

// logs "{foo:'foo',bar:'bar'}"
console.log(__synthetic);
```

可以看到，在 bar 没有导出的情况下，使用 __synthetic 里的 bar 替代了不存在的 bar。细节请参考 [官方文档](https://rollupjs.org/guide/en/#synthetic-named-exports)。

如果这个字段返回 null 或者不传，则会交由第一个 resolve 这个模块的 `resolveId` hook 判断，如果都没有处理这个字段，则默认设为 false。

#### 🎈 meta

用于给模块增加自定义的数据，可以跨插件访问。官方栗子 🌰 如下：

```javascript
function annotatingPlugin() {
  return {
    name: 'annotating',
    transform(code, id) {
      if (thisModuleIsSpecial(code, id)) {
        return { meta: { annotating: { special: true } } };
      }
    }
  };
}

function readingPlugin() {
  let parentApi;
  return {
    name: 'reading',
    buildEnd() {
      const specialModules = Array.from(this.getModuleIds()).filter(
        id => this.getModuleInfo(id).meta.annotating?.special
      );
      // do something with this list
    }
  };
}
```

meta 默认为空对象，在 `resolveId` hook 也返回了 meta 时会进行浅合并（merged shallowly），`transform` hook 在之后可以为 meta 对象进行属性的修改。

今天暂时写到这，明天继续。
