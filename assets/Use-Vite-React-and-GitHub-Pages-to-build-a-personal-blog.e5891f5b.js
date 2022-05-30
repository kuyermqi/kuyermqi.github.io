const n={},s=`<h1>\u4F7F\u7528 Vite\u3001React \u548C Github Pages \u642D\u5EFA\u4E2A\u4EBA\u535A\u5BA2</h1>
<p>\u8FD9\u4E0D\u662F\u6211\u7B2C\u4E00\u6B21\u642D\u535A\u5BA2\u4E86\u3002\u4E4B\u524D\u7531\u4E8E\u79CD\u79CD\u539F\u56E0\uFF0C\u6CA1\u80FD\u575A\u6301\u4E0B\u53BB\uFF08\u5C31\u662F\u61D2\uFF01\uFF09\u3002</p>
<p>\u73B0\u5728\u6211\u51B3\u5B9A\u518D\u6B21\u5BF9\u5199\u535A\u5BA2\u8FD9\u4EF6\u4E8B\u53D1\u8D77\u6311\u6218\uFF0C\u8FD9\u6B21\u6211\u51B3\u5B9A\u4F7F\u7528 Github Pages\uFF0C\u6211\u4E0D\u60F3\u518D\u79DF\u4E91\u670D\u52A1\u5668\u4E86\uFF0C\u56E0\u4E3A\u8D35\u800C\u4E14\u6211\u5E76\u4E0D\u662F\u5F88\u9700\u8981\u3002Github Pages \u5F88\u597D\uFF0C\u867D\u7136\u56FD\u5185\u5F88\u96BE\u8BBF\u95EE\uFF0C\u4F46\u5199\u535A\u5BA2\u4E0D\u5C31\u662F\u81EA\u55E8\u4E48\u{1F921}\u3002</p>
<p>\u6280\u672F\u6808\u4E0A\u6211\u9009\u62E9 <a href="https://cn.vitejs.dev/">Vite</a> \u548C <a href="https://zh-hans.reactjs.org/">React</a>\uFF0C\u8FD9\u4E24\u4E2A\u90FD\u662F\u6211\u76EE\u524D\u6700\u719F\u6089\u7684\u4E1C\u897F\uFF0C\u7528\u8D77\u6765\u5F88\u987A\u624B\u3002</p>
<h2>\u5B89\u88C5</h2>
<p>\u4F7F\u7528 Vite \u63D0\u4F9B React \u7684\u6A21\u677F\u521B\u5EFA\u9879\u76EE\uFF1A</p>
<pre class="language-shell"><code class="language-shell"><span class="token comment"># npm 6.x</span>
<span class="token function">npm</span> create vite@latest blog --template react

<span class="token comment"># npm 7+, extra double-dash is needed:</span>
<span class="token function">npm</span> create vite@latest blog -- --template react
</code></pre>
<h2>\u914D\u7F6E</h2>
<p>Github Pages \u4F1A\u5728\u9879\u76EE\u6839\u76EE\u5F55\u641C\u7D22 <code>index.html</code> \u6587\u4EF6\u4F5C\u4E3A\u9875\u9762\u5165\u53E3\uFF0C\u6240\u4EE5\u5728 <code>vite.config.js</code> \u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5C06 <code>build.outDir</code> \u914D\u7F6E\u4E3A\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u8FD9\u6837\u8FD0\u884C <code>npm run build</code> \u5C31\u4F1A\u5C06 <code>index.html</code> \u8F93\u51FA\u81F3\u6839\u76EE\u5F55\u4E86\u3002</p>
<p>\u6253\u5305\u540E\u7684 <code>js</code> \u6587\u4EF6\u548C <code>css</code> \u6587\u4EF6\u4F1A\u8F93\u51FA\u81F3 <code>/assets</code> \u76EE\u5F55\u3002</p>
<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// vite.config.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre>
<h2>\u9875\u9762</h2>
<p>\u4E24\u4E2A\u9875\u9762\u5C31\u5DEE\u4E0D\u591A\u4E86\uFF0C\u9996\u9875 + \u6587\u7AE0\u9875\uFF0C\u8DEF\u7531\u8FD8\u662F\u7528 <code>react-router-dom</code>\u3002</p>
<pre class="language-jsx"><code class="language-jsx"><span class="token comment">// app.jsx</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Routes<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'routes/home'</span>
<span class="token keyword">import</span> Post <span class="token keyword">from</span> <span class="token string">'routes/post'</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Routes</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>/<span class="token punctuation">'</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Route</span></span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>/post/:postname<span class="token punctuation">'</span></span> <span class="token attr-name">element</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Post</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Routes</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre>
<h3>\u9996\u9875</h3>
<p>\u6211\u53EA\u60F3\u505A\u7B80\u5355\u70B9\uFF0C\u62D2\u7EDD\u82B1\u91CC\u80E1\u54E8\u7684 UI\uFF0C\u9996\u9875\u4E00\u4E2A\u5927\u6807\u9898\u52A0\u4E2A\u6027\u7B7E\u540D\u52A0\u8054\u7CFB\u65B9\u5F0F\uFF0C\u518D\u52A0\u4E2A\u6587\u7AE0\u5217\u8868\u641E\u5B9A\u3002</p>
<pre class="language-jsx"><code class="language-jsx"><span class="token comment">// routes/home/index.jsx</span>

<span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">'./style.module.css'</span>

<span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">.</span>main<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token comment">/* \u6807\u9898 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token comment">/* \u6587\u7AE0\u5217\u8868\uFF0C\u70B9\u51FB\u8DF3\u8F6C\u5230\u6587\u7AE0\u9875 */</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre>
<h3>\u6587\u7AE0\u9875</h3>
<p>\u6839\u636E\u8DEF\u7531\u53C2\u6570\uFF0C\u52A8\u6001\u5BFC\u5165\u6587\u7AE0\u5185\u5BB9\u5373\u53EF\u3002</p>
<p>\u6211\u628A\u6240\u6709\u7684\u6587\u7AE0\u90FD\u653E\u5728\u4E86 <code>/src/posts</code> \u76EE\u5F55\u4E0B\uFF0C\u901A\u8FC7 <code>import.meta.glob()</code> \u65B9\u6CD5\u53EF\u4EE5\u52A8\u6001\u5730\u5BFC\u5165\u6587\u7AE0\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u662F Vite \u72EC\u6709\u7684\uFF0C\u8BE6\u89C1 <a href="https://cn.vitejs.dev/guide/features.html#glob-import">Glob \u5BFC\u5165</a>\u3002</p>
<p>\u8FD9\u91CC\u6211\u4F7F\u7528 <code>*.md</code> \u5339\u914D\u8BE5\u76EE\u5F55\u4E0B\u6240\u6709\u7684 md \u6587\u4EF6\uFF0C\u5728\u5BFC\u5165\u65F6\uFF0C\u8FD9\u4E9B md \u6587\u4EF6\u4F1A\u81EA\u52A8\u6E32\u67D3\u4E3A html\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6211\u4F7F\u7528\u4E86\u4E00\u4E2A Vite \u7684\u63D2\u4EF6\uFF0C\u4E0B\u9762\u4E00\u8282\u4E2D\u6211\u4F1A\u8BB2\u5230\u3002</p>
<pre class="language-jsx"><code class="language-jsx"><span class="token comment">// routes/post/index.jsx</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span>
<span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">'./style.module.css'</span>

<span class="token comment">// \u6240\u6709\u6587\u7AE0\u7684\u5F15\u7528</span>
<span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'../../posts/*.md'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">Post</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6\u8DEF\u7531\u53C2\u6570</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> postname <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// \u6587\u7AE0\u5185\u5BB9</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>content<span class="token punctuation">,</span> setContent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6839\u636E postname \u67E5\u627E\u5BF9\u5E94\u7684\u6587\u7AE0</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">path</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>postname<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u627E\u5230\u4E86\uFF0C\u901A\u8FC7\u51FD\u6570\u7684\u65B9\u5F0F\u76F4\u63A5\u8C03\u7528\u5373\u53EF\u83B7\u5F97\u5185\u5BB9</span>
      posts<span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token function">setContent</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>html<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>postname<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment">// \u4F7F\u7528 dangerouslySetInnerHTML \u5C5E\u6027\u4F5C\u4E3A html \u5185\u5BB9\u63D2\u5165</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">__html</span><span class="token operator">:</span> content <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Post
</code></pre>
<h2>Markdown \u652F\u6301</h2>
<p>\u6211\u9009\u62E9\u4F7F\u7528 <a href="https://github.com/hmsk/vite-plugin-markdown">vite-plugin-markdown</a> \u63D2\u4EF6\u5C06 markdown \u6E32\u67D3\u4E3A html\uFF0C\u4EE3\u7801\u9AD8\u4EAE\u80FD\u529B\u7531 <a href="https://github.com/jGleitz/markdown-it-prism">markdown-it-prism</a> \u63D0\u4F9B\uFF0C\u53EA\u9700\u8981\u50CF\u4E0B\u9762\u8FD9\u6837\u914D\u7F6E\u5373\u53EF\uFF1A</p>
<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// vite.config.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'path'</span>
<span class="token keyword">import</span> markdown<span class="token punctuation">,</span> <span class="token punctuation">{</span> Mode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-markdown'</span>
<span class="token keyword">import</span> markdownIt <span class="token keyword">from</span> <span class="token string">'markdown-it'</span>
<span class="token keyword">import</span> markdownItPrism <span class="token keyword">from</span> <span class="token string">'markdown-it-prism'</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./src'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'./'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">markdown</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">mode</span><span class="token operator">:</span> Mode<span class="token punctuation">.</span><span class="token constant">HTML</span><span class="token punctuation">,</span>  <span class="token comment">// \u6E32\u67D3\u4E3A HTML</span>
      <span class="token literal-property property">markdownIt</span><span class="token operator">:</span> <span class="token function">markdownIt</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>markdownItPrism<span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// \u4F7F\u7528 prism \u9AD8\u4EAE\u4EE3\u7801\u5757</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre>
<p>\u4EE3\u7801\u9AD8\u4EAE\u8FD8\u9700\u8981\u5F15\u5165\u4E00\u4E2A css \u6587\u4EF6\uFF0C\u9AD8\u4EAE\u7684\u989C\u8272\u662F\u7531 css \u6587\u4EF6\u51B3\u5B9A\u7684\u3002</p>
<pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- index.html --></span>

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- \u5F15\u5165 Prism.js \u7684 css\uFF0C\u5728 https://prismjs.com/download.html \u4E0B\u8F7D --></span>
    <span class="token comment">&lt;!-- \u4E5F\u53EF\u4EE5\u5728 https://github.com/PrismJS/prism-themes \u8FD9\u91CC\u627E\u5176\u4ED6\u4E3B\u9898 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/style/prism.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre>
<p>Markdown \u7684\u6837\u5F0F\u6211\u9009\u4E86 Github \u540C\u6B3E \u{1F449} <a href="https://github.com/sindresorhus/github-markdown-css">github-markdown-css</a>\uFF0C\u5B89\u88C5\u5F15\u5165\u5C31\u53EF\u4EE5\u4E86\uFF1A</p>
<pre class="language-shell"><code class="language-shell"><span class="token function">npm</span> i github-markdown-css
</code></pre>
<p>\u5728 <code>/routes/post/index.jsx</code> \u6587\u4EF6\u5F15\u5165\uFF1A</p>
<pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> <span class="token string">'github-markdown-css/github-markdown.css'</span>
</code></pre>
<h2>\u5173\u4E8E\u66F4\u65B0</h2>
<p>\u66F4\u65B0\u535A\u5BA2\u7684\u8BDD\uFF0C\u672C\u5730\u5199\u597D\u540E\u8FD0\u884C\u4E00\u4E0B <code>npm run build</code> \u540E\u63D0\u4EA4\uFF0C\u63A8\u9001\u5230 Github \u5C31\u53EF\u4EE5\u4E86\uFF0C\u5ACC\u9EBB\u70E6\u53EF\u4EE5\u518D\u88C5\u4E2A husky\uFF0C\u63D0\u4EA4\u524D\u81EA\u52A8 build\u3002</p>
<h2>\u603B\u7ED3</h2>
<p>\u6700\u540E\u6548\u679C\u633A\u6EE1\u610F\u7684\uFF0C\u7EC6\u8282\u6211\u5C31\u4E0D\u5199\u4E86\uFF0C\u4EE3\u7801\u5728\u6211\u7684 <a href="https://github.com/kuyermqi/kuyermqi.github.io">Github \u4ED3\u5E93</a> \u91CC\u90FD\u6709\u3002</p>
<p>\u5E0C\u671B\u8FD9\u6B21\u80FD\u575A\u6301\u5199\u4E0B\u53BB\uFF0C\u6211\u89C9\u5F97\u80FD\u575A\u6301\u5199\u535A\u5BA2\u7684\u4EBA\u90FD\u633A\u9177\u7684\u3002</p>
`;export{n as attributes,s as html};
