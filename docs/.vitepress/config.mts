import { defineConfig } from 'vitepress'
import { defineTeekConfig} from "vitepress-theme-teek/config";

// https://vitepress.dev/reference/site-config

const teekConfig = defineTeekConfig({
  teekTheme : true,
  
  vpHome:false,
  windowTransition: true,
  backTop: {
    enabled: true, // 是否启动回到顶部功能
    content: "icon", // 回到顶部按钮的显示内容，可选配置 progress | icon
    done: TkMessage => TkMessage.success("已经到头了😮‍💨"), // 回到顶部后的回调
  },
    toComment: {
    enabled: true, // 是否启动滚动到评论区功能
    done: TkMessage => TkMessage.success("已经到底了😯"), // 滚动到评论区后的回调
  },
    codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: false, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "uppercase", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success("复制成功哦🙂！"), // 复制代码完成后的回调
  },
    banner: {
    enabled: true, // 是否启用 Banner
    name: "🍊橙三味", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "fullImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#28282d", // Banner 背景色，bgStyle 为 pure 时生效
    imgSrc: ["/img/bg4.png"], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 15000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: false, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(0, 0, 0, 0.1)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "rgba(255, 72, 0, 0.79)", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "switch", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: ["我们醒着，直到太阳蒙尘，月亮生锈"], // 描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
  },
    post: {
    postStyle: "list", // 文章列表风格
    excerptPosition: "top", // 文章摘要位置
    showMore: true, // 是否显示更多按钮
    moreLabel: "阅读全文 >", // 更多按钮文字
    emptyLabel: "暂无文章", // 文章列表为空时的标签
    coverImgMode: "default", // 文章封面图模式
    showCapture: true, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
    splitSeparator: true, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
    transition: true, // 是否开启过渡动画
    transitionName: "tk-slide-fade", // 自定义过渡动画名称
    listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
    cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
    defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
  },
   page: {
    disabled: false, // 是否禁用
    pageSize: 20, // 每页显示条目数
    pagerCount: 7, // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
    layout: "prev, pager, next, jumper, ->, total", // 组件布局，子组件名用逗号分隔
    size: "default", // 分页大小
    background: false, // 是否为分页按钮添加背景色
    hideOnSinglePage: false, // 只有一页时是否隐藏
    // ...
  },
    homeCardListPosition: "left",
    blogger: {
    name: "橙三味", // 博主昵称
    slogan: "我们被遗忘", // 博主签名
    avatar: "/img/avatar.png", // 博主头像
    shape: "circle-rotate", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转，circle-rotate-last 将会持续旋转 59s
    circleBgImg: "/img/bg3.png", // 背景图片
    circleBgMask: true, // 遮罩层是否显示，仅当 shape 为 circle 且 circleBgImg 配置时有效
    circleSize: 100, // 头像大小
    color: "#ff4800ff", // 字体颜色
    // 状态，仅当 shape 为 circle 相关值时有效
    status: {
      icon: "😢", // 状态图标
      size: 24, // 图标大小
      title: "难过", // 鼠标悬停图标的提示语
    },
  },

});

export default defineConfig({
  title: "橙三味笔记",
  description: "生也无涯，学也无涯",
  extends: teekConfig,
  head:[
    ['link',{rel:'icon' , href:'/img/Clogo.png'
    }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:"/img/Clogo.png",
    nav: [
      { text: '首页', link: '/' },
      { text: '学习', link: '/api-examples' },
      { text: '学习', link: '/api-examples' },
      { text: '学习', link: '/api-examples' },
      { text: '学习', link: '/api-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '首页', link: '/markdown-examples' },
          { text: '学习', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/settings/profile' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/246604314?spm_id_from=333.1007.0.0'},
      { icon: 'juejin', link:'https://juejin.cn/user/2900991440326403'}
    ],
    
  }
  
})
