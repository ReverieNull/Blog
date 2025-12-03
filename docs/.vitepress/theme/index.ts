// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css";
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";
import "vitepress-theme-teek/theme-chalk/tk-aside.css";
import "vitepress-theme-teek/theme-chalk/tk-nav.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css";
import "vitepress-theme-teek/theme-chalk/tk-banner-desc-gradient.css";
import "vitepress-theme-teek/theme-chalk/tk-banner-full-img-scale.css";
import "vitepress-theme-teek/theme-chalk/tk-fade-up-animation.css";
import "vitepress-theme-teek/theme-chalk/tk-home-card-hover.css";
import "vitepress-theme-Teek/vp-plus/nav-blur.scss"; //导航栏毛玻璃
import "./style/index.scss";  // 引入Demo\docs-base\.vitepress\theme\style\index.scss全局样式
import "vitepress-theme-teek/vp-plus/container-flow.scss"; // Markdown 容器流体样式
import CalendarCard from "./Components/CalendarCard.vue";
import Clock from "./Components/Clock.vue";
import  TeekLayoutProvider from  "./Components/TeekLayoutProvider.vue"
import { h ,createApp} from "vue";
import MusicPlayer from "./Components/MusicPlayer.vue";
import Coze from "./Components/Coze.vue";
import  ElementPlus  from "element-plus";
import "element-plus/dist/index.css"; // 核心样式
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // 图标（可选）



export default {
  extends: Teek,
   enhanceApp({ app }:any) {
    // 注册组件

     app.component('Clock', Clock);
    // 新增：注册右键菜单组件
    app.component('MusicPlayer',MusicPlayer)
    app.use(ElementPlus)

  },
   Layout: () =>
    h(Teek.Layout, null, {
      "teek-home-card-my-after": () => h(CalendarCard),
      'layout-top': () => h(TeekLayoutProvider),
      'nav-bar-content-after': ()=> [h(MusicPlayer),h(Clock)],
      
      

  

    }),
};