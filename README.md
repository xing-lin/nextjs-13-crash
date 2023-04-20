### works

1. Compiling 编译成浏览器可直接运行的代码

2. Minifying 通过压缩文件的体积，来提高应用程序的性能

3. Bundling 打包应用程序之间的依赖，将多个模块文件合并来降低访问网页时请求资源的数量，达到提升性能的效果

4. Splitting 代码分割，加载最少的资源来提高首屏渲染速度
   - 模块之间相同的依赖不会重复下载
   - 首屏加载完成后，Next.js 可以预加载其他资源
   - 动态加载模块

### Rendering

1. 将 React 编写的代码转换为 UI 的 html 表示形式，这个过程称为渲染

2. 渲染可以在服务端或者客户端上进行，它可以在构建时提前发生，也可以在运行时针对每个请求发生

3. 对于 Next.js 有三种渲染方式

   - SSR 服务器端渲染（ getServerSideProps ）

     1. 使用服务器端呈现，页面的 HTML 是在服务器上为每个请求生成的。 然后将生成的 HTML、JSON 数据和使页面具有交互性的 JavaScript 指令发送到客户端。

     2. 在客户端，HTML 用于显示快速的非交互式页面，而 React 使用 JSON 数据和 JavaScript 指令使组件具有交互性（例如，将事件处理程序附加到按钮）。 这个过程称为水合作用。

   - SSG 静态站点生成（ getStaticProps ）

     1. 使用静态站点生成，HTML 是在服务器上生成的，但与服务器端呈现不同的是，在运行时没有服务器。 取而代之的是，在部署应用程序时，在构建时生成一次内容，HTML 存储在 CDN 中并为每个请求重新使用。

   - 客户端渲染

4. 服务器端渲染和静态站点生成也称为预渲染，因为外部数据的获取和 React 组件到 HTML 的转换发生在结果发送到客户端之前
5. Nextjs 默认预渲染每个页面，并且每个页面只会加载必要的资源

### Link

  客户端导航，使用 Link 代替 a 标签，可以自动在后台预先获取链接页面的代码，使跳转速度更快，并且浏览器没有加载整个页面，在页面中来回切换，html还是同一个，意味着资源可以不用重复加载

### Image
  1. Next.js 还默认支持图像优化。 这允许在浏览器支持时以 WebP 等现代格式调整大小、优化和提供图像。 这避免了将大图像传送到具有较小视口的设备。 它还允许 Next.js 自动采用未来的图像格式并将它们提供给支持这些格式的浏览器。
  2. Next.js 不是在构建时优化图像，而是在用户请求时按需优化图像。 与静态站点生成器和纯静态解决方案不同，您的构建时间不会增加，无论是运送 10 张图像还是 1000 万张图像。
  3. 默认情况下图像是延迟加载的。 这意味着您的页面速度不会因视口外的图像而受到影响。 图像在滚动到视口中时加载。

### Metadata
  可以直接用 Head 来修改title

### Script
   用于加载第三方脚本 sdk，防止第三方脚本阻塞页面加载, 在 Next.js中有四种策略
   1. beforeInteractive 只能在 _document.js 使用，除非要用在加载整个网页之前的脚本，否则不用。最先加载，会阻塞页面
   2. afterInteractive 默认值，可以用在任何一个组件中，会放在body标签结束前
   3. lazyOnload 跟 afterInteractive 类似，但是它只会在空闲中加载，适合广告、埋点、分析等无关网页功能的脚本
   
### CSS Modules
  1. 它自动生成唯一的类名。 只要使用 CSS Modules，就不必担心类名冲突。此外，Next.js 的代码拆分功能也适用于 CSS 模块。 它确保为每个页面加载最少数量的 CSS。 这导致更小的包大小。CSS 模块在构建时从 JavaScript 包中提取，并生成由 Next.js 自动加载的 .css 文件。
  2. global.css 只能在 _app.js 中导入，其他的使用 styleName.module.css 模块化

### SEO
  SEO 是提高品牌转化率和信心的关键。 更高的搜索排名位置等同于更多的自然访问者。 搜索引擎自然流量——通过点击搜索引擎中的结果来到你网站的访问者——是许多企业的关键，原因有以下三个：

  1. 定性——增加访问者变成客户的机会。
  2. 值得信赖——对您的品牌或使命更有信心。
  3. 低成本——除了花费的时间和精力之外，拥有良好的 SEO 实践以提高搜索引擎排名是免费的。 出现在顶级有机搜索结果位置没有直接成本。

  优化网站的过程可分为三个主要支柱：

    1. 技术 – 优化您的网站以进行抓取和网络性能。
    2. 创作——创建一个内容策略来定位特定的关键词。
    3. 人气 – 提升您网站的在线形象，让搜索引擎知道您是值得信赖的来源。 这是通过使用反向链接（链接回您的网站的第三方网站）来完成的。
   
### robots.txt
robots.txt文件告诉搜索引擎抓取工具抓取工具可以或不可以从您的站点请求哪些页面或文件。该文件是一个 Web 标准文件，大多数优秀的机器人在从特定域请求任何内容之前都会使用该文件。 robots.txt

您可能希望保护网站的某些区域不被抓取并因此被编入索引，例如您的 CMS 或管理员、电子商务中的用户帐户或某些 API 路由等。

这些文件必须在每个主机的根目录下提供，或者您可以将根/robots.txt路径重定向到目标 URL，大多数机器人将跟随。

### XML Sitemaps
站点地图是与 Google 沟通的最简单方式。它们指示属于您网站的 URL 以及它们更新的时间，以便 Google 可以轻松检测新内容并更有效地抓取您的网站。

尽管 XML 站点地图是最知名和最常用的站点地图，但它们也可以通过RSS或Atom创建，如果您更喜欢最简单，甚至可以通过文本文件创建。

站点地图是一个文件，您可以在其中提供有关站点上的页面、视频和其他文件以及它们之间关系的信息。Google 等搜索引擎会读取此文件以更智能地抓取您的网站。

如果出现以下情况，您可能需要站点地图：

你的网站真的很大。因此，Google 网络抓取工具更有可能忽略抓取您的一些新页面或最近更新的页面。
您的网站有大量内容页面存档，这些页面相互独立或链接不当。 如果您的站点页面不会自然地相互引用，您可以将它们列在站点地图中以确保 Google 不会忽略您的某些页面。
您的网站是新网站，几乎没有指向它的外部链接。 Googlebot 和其他网络爬虫通过跟踪从一个页面到另一个页面的链接来浏览网络。因此，如果没有其他网站链接到您的网页，Google 可能不会发现它们。
您的网站有很多富媒体内容（视频、图片）或显示在 Google 新闻中。 如果提供，Google 可以在适当的情况下将站点地图中的其他信息用于搜索。

### [Google SEO Document](https://developers.google.com/search/docs?hl=zh-cn)

### Incremental Static Regeneration (ISR)

### URL 结构
1. 语义化，例如 /learn/basics/create-nextjs-app 比 /learn/course-1/lesson-1 来的好
2. 符合逻辑且一致的模式。例如一个产品文件夹下有多个子产品，而不是将每个子产品设置成不同的路径
3. 以关键字为中心，希望 URL 中能用关键字来帮助理解页面的用途
4. 不基于参数。使用参数构建 URL 通常不是一个好主意。在大多数情况下，它们不是语义的，搜索引擎可能会混淆它们并降低它们在结果中的排名。

### title and meta
```html
<title>iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple</title>
<meta
  name="description"
  content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
/>
```

### [Open Graph](https://ogp.me/)

最初由 Facebook 开发的Open Graph 协议标准化了元数据在任何给定网页上的使用方式。您可以根据需要提供尽可能少或尽可能多的信息，但所有开放图块组合在一起以创建其所连接站点的表示。

其他社交媒体公司（如 Pinterest、Twitter、LinkedIn 等）也可能在共享 URL 时使用开放图来显示丰富的卡片。Twitter 也有其Twitter Cards的标签。

虽然这些 Open Graph 标签与 SEO 相关标签有很多相似之处，但它们对搜索引擎排名没有任何好处，但仍建议使用它们，因为人们可能会在社交媒体或私人消息工具（如 WhatsApp 或电报。

```html
 <head>
  <title>Cool Title</title>
  <meta name="description" content="Checkout our cool page" key="desc" />
  <meta property="og:title" content="Social Title for Cool Page" />
  <meta
    property="og:description"
    content="And a social description for our cool page"
  />
  <meta
    property="og:image"
    content="https://example.com/images/cool-page.jpg"
  />
</head>
```

### 结构化数据有助于搜索引擎了解您的页面。多年来，已经出现了几个词汇表，但目前主要的词汇表​​是[schema.org](https://schema.org/)

### On Page SEO
1. H1 should represent what the page is about and be similar to your title tag.
2. 内部链接, 
   1. 互联网通过链接连接。如果没有从一个网站到另一个网站的链接，互联网可能就不会存在。获得更多链接的网站往往代表更受用户信任的网站。
   2. Google 通过发明PageRank 算法开始了这一原则。
   3. 概括地说，PageRank 算法是一种算法，它遍历数据库中的每个链接，并根据它们收到的链接数量（数量）和来自哪些域的链接（质量）对域进行评分。来自垃圾邮件网站的大量链接很可能几乎没有价值。
   4. 然而，来自大型国家新闻网站的链接对于搜索引擎可能非常有价值。这就是链接很重要的原因，您应该始终在页面内部以及其他网站外部包含它们。链接总是需要使用 `href` 才能用于 PageRank 计算。
3. use next/Link，如果将 Link 封装成组件，必须使用 passHref 属性，否则会影响 SEO
```jsx
import Link from 'next/link';
import styled from 'styled-components';

// This creates a custom component that wraps an <a> tag
const RedLink = styled.a`
  color: red;
`;

function NavLink({ href, name }) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <RedLink>{name}</RedLink>
    </Link>
  );
}

export default NavLink;
```

### LCP Largest Contentful Paint
Largest Contentful Paint (LCP) 指标着眼于页面的加载性能。 LCP 测量在视口中显示页面上最大的元素所花费的时间。 这可以是占据页面主要空间的大文本块、视频或图像。

### FID First Input Delay
首次输入延迟 (FID) 指标是对最终用户在与网页交互时的体验的感知。 想象一下，在一个输入框内单击却什么也没有发生——这种对网站交互性和响应性的失望是由大的输入延迟引起的。

### CLS Cumulative Layout Shift
Cumulative Layout Shift (CLS) 指标衡量网站的整体布局稳定性。 在页面加载时意外改变布局的站点可能会导致意外的用户错误和分心。

累积布局偏移 (CLS) 发生在元素最初由 DOM 渲染后发生偏移时。 在这里，一个按钮在文本块之后呈现到屏幕上，导致该块向下移动。 计算 CLS 时会综合考虑影响和距离。

如果发生意外移动，每个元素的单独布局偏移分数仅计入 CLS。 如果将新元素添加到 DOM 或现有元素更改大小，如果加载的元素保持其位置，则不计入布局偏移。