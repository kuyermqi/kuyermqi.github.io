const n={},s=`<h1>Rollup \u63D2\u4EF6\u6307\u5317</h1>
<p>\u8FD9\u51E0\u5929\u9047\u5230\u4E00\u4E2A\u6253\u5305\u95EE\u9898\uFF0C\u9700\u8981\u5199\u63D2\u4EF6\u89E3\u51B3\uFF0C\u8BB0\u5F55\u4E00\u4E0B <code>Rollup</code> \u63D2\u4EF6\u5F00\u53D1\u7684\u5B66\u4E60\u3002</p>
<p>\u5B98\u65B9\u6587\u6863\uFF1A<a href="https://rollupjs.org/guide/en/#plugins-overview">https://rollupjs.org/guide/en/#plugins-overview</a></p>
<h2>\u6982\u89C8</h2>
<p>\u4E00\u4E2A Rollup \u63D2\u4EF6\u7531 <code>properties</code>\u3001<code>build hooks</code> \u548C <code>output generation hooks</code> \u7EC4\u6210\uFF0C\u7FFB\u8BD1\u4E00\u4E0B\u5C31\u662F\u7531\u63D2\u4EF6\u7684\u5C5E\u6027\u3001\u7F16\u8BD1\u9636\u6BB5\u7684\u94A9\u5B50\u3001\u8F93\u51FA\u751F\u6210\u9636\u6BB5\u7684\u94A9\u5B50\u7EC4\u6210\u3002</p>
<p>\u5176\u4E2D\uFF0C<code>properties</code> \u76EE\u524D\u53EA\u6709 <code>name</code> \u4E00\u4E2A\u5B57\u6BB5\uFF0C\u7528\u4E8E\u8868\u793A\u63D2\u4EF6\u7684\u540D\u79F0\uFF0C\u63D2\u4EF6\u7684\u540D\u79F0\u5728\u7EA6\u5B9A\u4E0A\u4EE5 'rollup-plugin-' \u5F00\u5934\u3002</p>
<p>\u6784\u5EFA\u9636\u6BB5\u63D0\u4F9B\u7684\u94A9\u5B50\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p>
<p><img src="/images/rollup-build-hooks.png" alt="build hooks"></p>
<p>\u8F93\u51FA\u751F\u6210\u9636\u6BB5\u63D0\u4F9B\u7684\u94A9\u5B50\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p>
<p><img src="/images/rollup-output-generation-hooks.png" alt="output generation hooks"></p>
<p>\u5230\u8FD9\u91CC\u5927\u6982\u5C31\u660E\u767D\uFF0CRollup \u7684\u63D2\u4EF6\u662F\u5728\u4E0D\u540C\u9636\u6BB5\u4F7F\u7528 Rollup \u63D0\u4F9B\u7684\u94A9\u5B50\u8FDB\u884C\u4F5C\u7528\u7684\u3002</p>
<h2>\u63D2\u4EF6\u7684\u5199\u6CD5</h2>
<p>\u63D2\u4EF6\u5B9A\u4E49\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u5373\u662F\u4E0A\u6587\u63D0\u5230\u7684\uFF0C\u5305\u542B <code>properties</code>\u3001<code>build hooks</code>\u3001<code>output generation hooks</code> \u7684\u5BF9\u8C61\u3002<code>properties</code> \u4E2D\u7684 <code>name</code> \u4E3A\u5FC5\u586B\u5B57\u6BB5\u3002</p>
<p>\u6839\u636E\u63D2\u4EF6\u7684\u529F\u80FD\uFF0C\u9009\u62E9\u4E0D\u540C\u9636\u6BB5\u4E0D\u540C\u7684 hook\uFF0C\u5728\u5176\u4E2D\u8FDB\u884C\u76F8\u5E94\u7684\u64CD\u4F5C\uFF0C\u6700\u540E\u8FD4\u56DE\u64CD\u4F5C\u7ED3\u679C\u5373\u53EF\u3002\u4E0D\u5F97\u4E0D\u8BF4\u8FD9\u4E2A\u63D2\u4EF6\u7684 API \u8BBE\u8BA1\u5F88\u7B26\u5408\u903B\u8F91\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u8981\u5B9E\u73B0\u76EE\u6807\u63D2\u4EF6\uFF0C\u53EA\u8981\u627E\u5230\u81EA\u5DF1\u60F3\u8981\u7684 hooks \u5C31\u53EF\u4EE5\u4E86\u3002</p>
<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// rollup-plugin-my-example.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">myPlugin</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'my-plugin'</span><span class="token punctuation">,</span>
    <span class="token function">resolveId</span> <span class="token punctuation">(</span> <span class="token parameter">source</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8FD9\u91CC\u8FDB\u884C\u4E00\u4E9B\u5904\u7406</span>
      <span class="token comment">// return xxx \u6700\u540E\u8FD4\u56DE\u5904\u7406\u7ED3\u679C</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">load</span> <span class="token punctuation">(</span> <span class="token parameter">id</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8FD9\u91CC\u8FDB\u884C\u4E00\u4E9B\u5904\u7406</span>
      <span class="token comment">// return xxx \u6700\u540E\u8FD4\u56DE\u5904\u7406\u7ED3\u679C</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// rollup.config.js</span>
<span class="token keyword">import</span> example <span class="token keyword">from</span> <span class="token string">'./rollup-plugin-my-example.js'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">'main.js'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5728\u8FD9\u91CC\u4F20\u5165</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'es'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<h2>\u6784\u5EFA\u9636\u6BB5\u7684\u94A9\u5B50\uFF08Build Hooks\uFF09</h2>
<p>\u8FD9\u4E00\u8282\u4ECB\u7ECD\u6240\u6709 <code>build hooks</code> \u7684\u4F5C\u7528\uFF0C\u57FA\u672C\u4E0A\u7B49\u4E8E\u7FFB\u8BD1\u4E00\u904D\u6587\u6863\uFF0C\u82F1\u6587\u6BD4\u8F83 \u{1F402} \u7684\u53EF\u4EE5\u53BB\u770B\u5B98\u65B9\u6587\u6863\u3002</p>
<p>\u5B98\u65B9\u6587\u6863\u5BF9 <code>build hooks</code> \u7684\u63CF\u8FF0\u4E3A\uFF1A</p>
<blockquote>
<p>Hooks can affect how a build is run, provide information about a build, or modify a build once complete.</p>
<p>\u6E23\u7FFB\uFF1A\u8FD9\u4E9B\u94A9\u5B50\u51FD\u6570\u5C06\u4F1A\u5F71\u54CD\u6784\u5EFA\u7684\u8FD0\u4F5C\u65B9\u5F0F\uFF0C\u4E3A\u6784\u5EFA\u63D0\u4F9B\u76F8\u5173\u4FE1\u606F\uFF0C\u53C8\u6216\u8005\u5728\u6574\u4E2A\u6784\u5EFA\u5B8C\u6210\u540E\u5BF9\u5176\u8FDB\u884C\u8FFD\u52A0\u4FEE\u6539\u3002</p>
</blockquote>
<p>\u5B98\u65B9\u5BF9 <code>build hooks</code> \u8FDB\u884C\u4E86\u5206\u7C7B\uFF0Chook \u53EF\u4EE5\u6709\u591A\u4E2A\u7C7B\u522B\uFF0C\u4EE5\u4E0B\u4E3A hook \u7684\u5177\u4F53\u7C7B\u522B\u548C\u89E3\u91CA\uFF1A</p>
<ul>
<li><strong>async</strong>\uFF1Ahook \u4E3A\u5F02\u6B65\uFF1B</li>
<li><strong>sync</strong>\uFF1Ahook \u4E3A\u540C\u6B65\uFF1B</li>
<li><strong>first</strong>\uFF1A\u5F53\u591A\u4E2A\u63D2\u4EF6\u4F9D\u8D56\u8BE5 hook \u65F6\uFF0C\u5B83\u4EEC\u4F1A\u6309\u7167\u63D2\u4EF6\u7684\u4F20\u5165\u987A\u5E8F\u4F9D\u6B21\u8FD0\u884C\uFF0C\u5982\u679C\u5176\u4E2D\u67D0\u4E00\u4E2A\u63D2\u4EF6\u7684 hook \u8FD4\u56DE\u4E86 null \u6216\u8005 undefined\uFF0C\u90A3\u4E48\u8FD9\u4E2A hook \u4F1A\u7ACB\u5373\u7ED3\u675F\uFF0C\u540E\u9762\u7684\u4E0D\u4F1A\u518D\u6267\u884C\uFF1B</li>
<li><strong>sequential</strong>\uFF1A\u5F53\u591A\u4E2A\u63D2\u4EF6\u4F9D\u8D56\u8BE5 hook \u65F6\uFF0C\u5B83\u4EEC\u4F1A\u6309\u7167\u63D2\u4EF6\u7684\u4F20\u5165\u987A\u5E8F\u4F9D\u6B21\u8FD0\u884C\uFF0C\u5982\u679C hook \u662F\u5F02\u6B65\u7684\uFF0C\u4F1A\u4E00\u76F4\u7B49\u5F85\u5230\u5F53\u524D\u63D2\u4EF6\u8C03\u7528\u7684 hook \u8FD0\u884C\u7ED3\u675F\uFF0C\u518D\u8F6E\u5230\u5230\u540E\u9762\u7684\u63D2\u4EF6\u8FD0\u884C\uFF1B</li>
<li><strong>parallel</strong>\uFF1A\u5F53\u591A\u4E2A\u63D2\u4EF6\u4F9D\u8D56\u8BE5 hook \u65F6\uFF0C\u5B83\u4EEC\u4F1A\u540C\u65F6\u8FD0\u884C\uFF0C\u4E0D\u4F1A\u4E92\u76F8\u7B49\u5F85\u3002</li>
</ul>
<h3>\u{1F4C3} buildEnd</h3>
<p><strong>Type:</strong> <code>(error?: Error) =&gt; void</code><br>
<strong>Kind:</strong> <code>async</code>, <code>parallel</code><br>
<strong>Previous Hook:</strong> <code>moduleParsed</code>, <code>resolveId</code> or <code>resolveDynamicImport</code><br>
<strong>Next Hook:</strong> \u8FD9\u662F\u6784\u5EFA\u9636\u6BB5\u7684\u6700\u540E\u4E00\u4E2A hook\uFF0C\u5B83\u7684\u4E0B\u4E00\u4E2A hook \u5728\u8F93\u51FA\u751F\u6210\u9636\u6BB5\u3002</p>
<p>\u5F53 Rollup \u6784\u5EFA\u5B8C\u6BD5\u65F6\u4F1A\u8C03\u7528\u8FD9\u4E2A hook\uFF0C\u8FD9\u4E2A\u65F6\u5019\u8FD8\u6CA1\u6709\u8FDB\u5165\u8F93\u51FA\u548C\u751F\u6210\u9636\u6BB5\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u8FD4\u56DE Promise\uFF08\u6211\u4E0D\u592A\u660E\u767D\u8FD4\u56DE Promise \u7684\u4F5C\u7528\u{1F914}\uFF0C\u53EF\u80FD\u67D0\u4E9B\u573A\u666F\u9700\u8981\u5427\uFF09\u3002\u5982\u679C\u6784\u5EFA\u9636\u6BB5\u53D1\u751F\u4E86\u9519\u8BEF\uFF0C\u9519\u8BEF\u5185\u5BB9\u5C06\u4F1A\u901A\u8FC7\u53C2\u6570\u4F20\u9012\u5230\u8FD9\u4E2A hook \u91CC\u3002</p>
<h3>\u{1F4C3} buildStart</h3>
<p><strong>Type:</strong> <code>(options: InputOptions) =&gt; void</code><br>
<strong>Kind:</strong> <code>async</code>, <code>parallel</code><br>
<strong>Previous Hook:</strong> <code>options</code><br>
<strong>Next Hook:</strong> <code>resolveId</code></p>
<p>\u5F53 Rollup \u5F00\u59CB\u6784\u5EFA\u7684\u65F6\u5019\u4F1A\u8C03\u7528\u8FD9\u4E2A hook\u3002\u5728\u8FD9\u4E2A hook \u91CC\u53EF\u4EE5\u6E05\u695A\u5730\u77E5\u9053\u4F20\u9012\u7ED9 Rollup \u7684\u6240\u6709\u9009\u9879\u3002</p>
<h3>\u{1F4C3} closeWatcher</h3>
<p><strong>Type:</strong> <code>() =&gt; void</code><br>
<strong>Kind:</strong> <code>async</code>, <code>parallel</code><br>
<strong>Previous/Next Hook:</strong> \u8FD9\u4E2A hook \u5728\u6784\u5EFA\u9636\u6BB5\u548C\u8F93\u51FA\u751F\u6210\u9636\u6BB5\u968F\u65F6\u53EF\u80FD\u89E6\u53D1\uFF0C\u5982\u679C\u8FD9\u4E2A hook \u89E6\u53D1\u4E86\uFF0C\u90A3\u4E48\u5C31\u4E0D\u4F1A\u518D\u89E6\u53D1 <code>watchChange</code> \u4E8B\u4EF6\u3002</p>
<p>\u8FD9\u4E2A hook \u7528\u4E8E\u901A\u77E5\u5404\u4E2A\u63D2\u4EF6\u6784\u5EFA\u9636\u6BB5\u6216\u8F93\u51FA\u751F\u6210\u9636\u6BB5\u7684 watcher \u8FDB\u7A0B\u548C\u5F00\u653E\u7684\u8D44\u6E90\uFF08\u539F\u6587 open resources\uFF0C\u5177\u4F53\u662F\u4EC0\u4E48\u8D44\u6E90\u53EF\u80FD\u540E\u8FB9\u6709\uFF09\u5C06\u4F1A\u5173\u95ED\uFF0C\u5982\u679C\u5728\u8FD9\u91CC\u8FD4\u56DE\u4E86 Promise\uFF0CRollup \u4F1A\u7B49\u5F85\u8FD9\u4E2A Promise \u76F4\u5230 resolve \u518D\u5173\u95ED\u8FDB\u7A0B\u3002\u548C\u8F93\u51FA\u76F8\u5173\u7684\u63D2\u4EF6\u4E0D\u80FD\u8C03\u7528\u8FD9\u4E2A hook\u3002</p>
<h3>\u{1F4C3} load</h3>
<blockquote>
<p>\u5B98\u65B9\u6587\u6863\u7684\u98CE\u683C\u8DDF\u6211\u81EA\u5DF1\u5199\u6709\u7684\u4E00\u62FC</p>
</blockquote>
<p><strong>Type:</strong> <code>(id: string) =&gt; string | null | {code: string, map?: string | SourceMap, ast? : ESTree.Program, moduleSideEffects?: boolean | &quot;no-treeshake&quot; | null, syntheticNamedExports?: boolean | string | null, meta?: {[plugin: string]: any} | null}</code><br>
<strong>Kind:</strong> <code>async</code>, <code>first</code><br>
<strong>Previous Hook:</strong> <code>resolveId</code> \u6216\u8005 <code>resolveDynamicImport</code>\uFF0C\u53EA\u8981\u8FD9\u4E24\u4E2A hook \u5176\u4E2D\u4E00\u4E2A\u5B8C\u6210\u4E86\u5C31\u4F1A\u6765\u5230\u8FD9\u4E2A hook\uFF0C\u8FD9\u91CC\u7684\u5B8C\u6210\u4E86\u662F\u6307\u8FD4\u56DE\u4E86\u6A21\u5757\u7684 id\u3002\u8FD9\u4E2A hook \u4E5F\u53EF\u4EE5\u968F\u65F6\u901A\u8FC7\u4E3B\u52A8\u8C03\u7528 <code>this.load</code> \u65B9\u6CD5\u89E6\u53D1\uFF0C\u4F46\u662F\u8981\u624B\u52A8\u4F20\u5BF9\u5E94\u6A21\u5757\u7684 id\u3002<br>
<strong>Next Hook:</strong> <code>transform</code>\uFF0C\u5982\u679C\u52A0\u8F7D\u7684\u6587\u4EF6\u5DF2\u7ECF\u7F13\u5B58\u4E86\uFF0C\u5219\u4F1A\u8C03\u7528 <code>shouldTransformCachedModule</code>\u3002</p>
<p>\u901A\u8FC7\u8FD9\u4E2A hook \u6765\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5668\u3002\u5982\u679C\u8FD4\u56DE null\uFF0C\u90A3\u4E48\u5176\u4ED6\u63D2\u4EF6\u7684 load \u51FD\u6570\u5C06\u4F1A\u88AB\u63A8\u8FDF\u6267\u884C\uFF0C\u6700\u7EC8\u4F1A\u505C\u6B62\u4ECE\u6587\u4EF6\u7CFB\u7EDF\u52A0\u8F7D\u8BE5 id \u5BF9\u5E94\u7684\u8D44\u6E90\u3002\u51FA\u4E8E\u67D0\u4E9B\u539F\u56E0\uFF0C\u6BD4\u5982\u4E3A\u4E86\u9632\u6B62\u989D\u5916\u7684\u89E3\u6790\u5F00\u9500\uFF0C\u5728\u8FD9\u4E2A hook \u91CC\u5E94\u4F7F\u7528 <code>this.parse</code> \u65B9\u6CD5\u53BB\u751F\u6210 AST \u8BED\u6CD5\u6811\u3002</p>
<blockquote>
<p><s>\u770B\u7740\u50CF\u673A\u7FFB\uFF0C\u4F46\u786E\u5B9E\u662F\u672C\u4EBA\u8089\u7FFB\uFF0C\u81EA\u4FE1.jpg</s></p>
</blockquote>
<h4>\u{1F388} code &amp; ast &amp; map</h4>
<p>\u8FD9\u4E2A hook \u53EF\u4EE5\u9009\u62E9\u6027\u5730\u8FD4\u56DE <code>{ code, ast, map }</code> \u5BF9\u8C61\u3002ast \u5FC5\u987B\u4E3A ESTree \u6807\u51C6\u7684 AST \u8BED\u6CD5\u6811\uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u8981\u6709 start \u548C end \u5C5E\u6027\u3002\u5982\u679C\u8F6C\u6362\u8FC7\u7A0B\u4E2D\u6CA1\u6709\u79FB\u52A8\u4EE3\u7801\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E map \u4E3A null \u6765\u4FDD\u7559\u5F53\u524D\u7684 sourcemaps\uFF08\u6E90\u7801\u6620\u5C04\u5173\u7CFB\uFF09\u3002\u5982\u679C\u4FEE\u6539\u4E86\u4EE3\u7801\uFF0C\u5219\u9700\u8981\u9700\u8981\u540C\u6B65\u4FEE\u6539 map\uFF08<strong>\u9664\u975E Rollup \u7684 sourcemap \u9009\u9879\u4E3A false</strong>\uFF09\u3002\u5982\u679C\u611F\u89C9\u4E0D\u9700\u8981\u751F\u6210\u65B0\u7684 sourcemap\uFF0C\u90A3\u4E48\u5C06 map \u8BBE\u7F6E\u4E3A <code>{ mappings: '' }</code> \u5373\u53EF\u3002\u5982\u4E0B\u6240\u793A\uFF1A</p>
<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> transformedCode<span class="token punctuation">,</span>
  <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
<h4>\u{1F388} moduleSideEffects</h4>
<p>\u5982\u679C\u8FD4\u56DE\u7684 moduleSideEffects \u5B57\u6BB5\u503C\u4E3A false \u4E14\u6CA1\u6709\u5176\u4ED6\u6A21\u5757\u5F15\u7528\u8BE5\u6A21\u5757\uFF0C\u90A3\u4E48\u5373\u4F7F\u8FD9\u4E2A\u6A21\u5757\u53EF\u80FD\u6709\u526F\u4F5C\u7528\u4E5F\u4E0D\u4F1A\u88AB\u5F15\u5165 bundle \u4E2D\uFF1B\u5982\u679C\u8FD4\u56DE\u7684 moduleSideEffects \u5B57\u6BB5\u503C\u4E3A true\uFF0C\u90A3\u4E48 Rollup \u4F1A\u901A\u8FC7\u7B97\u6CD5\u5224\u65AD\u8FD9\u4E2A\u6A21\u5757\u662F\u5426\u6709\u526F\u4F5C\u7528\uFF1B\u5982\u679C\u8FD4\u56DE\u7684 moduleSideEffects \u5B57\u6BB5\u503C &quot;no-treeshake&quot;\uFF0C\u90A3\u4E48\u4E0D\u4F1A\u5BF9\u8BE5\u6A21\u5757\u8FDB\u884C treeshaking\uFF0C\u5373\u4F7F\u8FD9\u4E2A\u6A21\u5757\u662F\u7A7A\u7684\uFF0C\u6700\u540E\u4E5F\u4F1A\u88AB\u5305\u542B\u8FDB\u751F\u6210\u7684 chunk \u4E2D\uFF1B\u5982\u679C\u8FD4\u56DE\u7684 moduleSideEffects \u5B57\u6BB5\u503C null \u6216\u4E0D\u8FD4\u56DE\u8FD9\u4E2A\u5B57\u6BB5\uFF0CmoduleSideEffects \u5C06\u4F9D\u6B21\u7531\u7B2C\u4E00\u4E2A resolve \u8FD9\u4E2A\u6A21\u5757\u7684 <code>resolveId</code> hook\u3001Rollup \u7684 <code>treeshake.moduleSideEffects</code> \u9009\u9879\u3001\u6216\u6700\u7EC8\u7531\u9ED8\u8BA4\u503C\uFF08true\uFF09\u51B3\u5B9A\uFF0C<code>transform</code> hook \u53EF\u4EE5\u8986\u76D6\u8FD9\u4E2A\u7ED3\u679C\u3002</p>
<h4>\u{1F388} syntheticNamedExports</h4>
<blockquote>
<p>resolveId\u3001load \u548C transfrom \u90FD\u53EF\u4EE5\u7ED9\u6A21\u5757\u8BBE\u7F6E\u8FD9\u4E2A\u5C5E\u6027</p>
</blockquote>
<p>\u8FD9\u4E2A\u5C5E\u6027\u7FFB\u8BD1\u8FC7\u6765\u5C31\u662F\u5408\u6210\u547D\u540D\u5BFC\u51FA\u7684\u610F\u601D\uFF0C\u662F\u7528\u4E8E\u5728\u4E22\u5931\u5BFC\u51FA\u7684\u60C5\u51B5\u4E0B\u7684 fallback \u9009\u9879\uFF0C\u5B98\u65B9\u4E3E\u4E86\u4E2A\u76F4\u767D\u7684\u6817\u5B50 \u{1F330}\uFF1A</p>
<p><strong>dep.js ({ syntheticNamedExports: '__synthetic' }):</strong></p>
<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'explicit'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> __synthetic <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'foo'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">'bar'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
<p><strong>main.js:</strong></p>
<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar<span class="token punctuation">,</span> baz<span class="token punctuation">,</span> __synthetic <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./dep.js'</span><span class="token punctuation">;</span>

<span class="token comment">// logs "explicit" as non-synthetic exports take precedence</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// logs "bar", picking the property from __synthetic</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// logs "undefined"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>baz<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// logs "{foo:'foo',bar:'bar'}"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__synthetic<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728 bar \u6CA1\u6709\u5BFC\u51FA\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528 __synthetic \u91CC\u7684 bar \u66FF\u4EE3\u4E86\u4E0D\u5B58\u5728\u7684 bar\u3002\u7EC6\u8282\u8BF7\u53C2\u8003 <a href="https://rollupjs.org/guide/en/#synthetic-named-exports">\u5B98\u65B9\u6587\u6863</a>\u3002</p>
<p>\u5982\u679C\u8FD9\u4E2A\u5B57\u6BB5\u8FD4\u56DE null \u6216\u8005\u4E0D\u4F20\uFF0C\u5219\u4F1A\u4EA4\u7531\u7B2C\u4E00\u4E2A resolve \u8FD9\u4E2A\u6A21\u5757\u7684 <code>resolveId</code> hook \u5224\u65AD\uFF0C\u5982\u679C\u90FD\u6CA1\u6709\u5904\u7406\u8FD9\u4E2A\u5B57\u6BB5\uFF0C\u5219\u9ED8\u8BA4\u8BBE\u4E3A false\u3002</p>
<h4>\u{1F388} meta</h4>
<p>\u7528\u4E8E\u7ED9\u6A21\u5757\u589E\u52A0\u81EA\u5B9A\u4E49\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u8DE8\u63D2\u4EF6\u8BBF\u95EE\u3002\u5B98\u65B9\u6817\u5B50 \u{1F330} \u5982\u4E0B\uFF1A</p>
<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">annotatingPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'annotating'</span><span class="token punctuation">,</span>
    <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">thisModuleIsSpecial</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">annotating</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">special</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">readingPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> parentApi<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'reading'</span><span class="token punctuation">,</span>
    <span class="token function">buildEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> specialModules <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getModuleIds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
        <span class="token parameter">id</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getModuleInfo</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>annotating<span class="token operator">?.</span>special
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// do something with this list</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
<p>meta \u9ED8\u8BA4\u4E3A\u7A7A\u5BF9\u8C61\uFF0C\u5728 <code>resolveId</code> hook \u4E5F\u8FD4\u56DE\u4E86 meta \u65F6\u4F1A\u8FDB\u884C\u6D45\u5408\u5E76\uFF08merged shallowly\uFF09\uFF0C<code>transform</code> hook \u5728\u4E4B\u540E\u53EF\u4EE5\u4E3A meta \u5BF9\u8C61\u8FDB\u884C\u5C5E\u6027\u7684\u4FEE\u6539\u3002</p>
<p>\u4ECA\u5929\u6682\u65F6\u5199\u5230\u8FD9\uFF0C\u660E\u5929\u7EE7\u7EED\u3002</p>
`;export{n as attributes,s as html};
