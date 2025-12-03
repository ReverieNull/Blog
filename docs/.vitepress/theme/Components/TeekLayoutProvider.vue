<script setup lang="ts" name="TeekLayoutProvider">
import { useRibbon } from "../hooks/useRibbon"; //导入彩带背景
import GlobalGreet from "./GlobalGreet.vue"; //导入全局问候组件
import ContextMenu from "../ContextMenu/ContextMenu.vue";
import MusicPlayer from "./MusicPlayer.vue";
import Teek from 'vitepress-theme-teek'
import Coze from "./Coze.vue";
import TitleChange from "./TitleChange.vue";


// 彩带背景
const { start: startRibbon, stop: stopRibbon } = useRibbon({
  immediate: true,
  clickReRender: true,
}); // 点击页面重新渲染彩带
</script>



    <template>
    <GlobalGreet />
    <ContextMenu/>
    <TitleChange />
    </template>

