<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { ElMessage } from "element-plus";
import PauseMusicController from "./PauseMusicController.vue";
import PlayingMusicController from "./PlayingMusicController.vue";

// 音乐列表
const musics = [
  "记·念.mp3",
  "鹊桥仙.mp3",
  "夜记梦.mp3",
  "最好的朋友在身边.mp3"
];

// 响应式变量
const currentMusic = ref("http://localhost:5173/music/记·念.mp3");
const audio = ref<HTMLAudioElement | null>(null);
const isPlayed = ref(false);
let random = ref(0);
let music_palyer_timer = ref<ReturnType<typeof setInterval> | null>(null);

// 错误处理
const handleLoadError = () => {
  ElMessage.error("音乐加载失败，请检查文件路径！");
};

// 播放/暂停逻辑
const playMusic = () => {
  if (!audio.value) {
    ElMessage.error("音频播放器未初始化！");
    return;
  }

  isPlayed.value = !isPlayed.value;
  const musicName = currentMusic.value.split("/").pop()?.replace(/\.mp3$/, "") ?? "未知歌曲";
  
  ElMessage({
    message: isPlayed.value ? `正在播放: ${musicName}` : `已暂停: ${musicName}`,
    type: isPlayed.value ? "success" : "warning",
    duration: 2000,
  });
  console.log("播放状态: ", isPlayed.value ? "播放" : "暂停");

  try {
    audio.value.src = currentMusic.value;
    audio.value.load();

    if (isPlayed.value) {
      audio.value.play().catch(err => {
        ElMessage.warning("浏览器需要手动触发播放，再点一次试试~");
        isPlayed.value = false;
        console.error("播放失败详情:", err);
      });
    } else {
      audio.value.pause();
    }
  } catch (err) {
    ElMessage.error(`操作失败: ${(err as Error).message}`);
    isPlayed.value = false;
  }
};

// 生成随机数（单首音乐兼容）
const generateRandom = () => {
  if (musics.length === 1) return 0;
  let tmp: number = Math.floor(Math.random() * musics.length);
  while (tmp === random.value) {
    tmp = Math.floor(Math.random() * musics.length);
  }
  return tmp;
};

onMounted(() => {
  random.value = generateRandom();
  console.log(`%c第${random.value + 1}首音乐.`, "color: green; font-weight: bolder;");
  currentMusic.value = `/music/${musics[random.value]}`;

  if (audio.value) {
    audio.value.addEventListener("error", handleLoadError);
  }

  music_palyer_timer.value = setInterval(() => {
    if (audio.value?.ended) {
      console.log("%c音乐结束, 重新播放~", "color: orange; font-weight: bold;");
      random.value = generateRandom();
      currentMusic.value = `/music/${musics[random.value]}`;
      if (isPlayed.value) {
        audio.value.src = currentMusic.value;
        audio.value.load();
        audio.value.play().catch(() => isPlayed.value = false);
      }
    }
  }, 1000);
});

onUnmounted(() => {
  if (music_palyer_timer.value) clearInterval(music_palyer_timer.value);
  if (audio.value) {
    audio.value.removeEventListener("error", handleLoadError);
    audio.value.pause();
  }
});
</script>

<template>
  <div class="playMusic-wrapper">
    <button class="playMusic" @click="playMusic">
      <PlayingMusicController v-if="isPlayed" />
      <PauseMusicController v-else />
    </button>
    <audio
      ref="audio"
      preload="auto"
      :src="currentMusic"
      :key="currentMusic"
      style="display: inline-block; width: 120px; height: 30px; margin-left: 8px;"
      controls
    >
      <source :src="currentMusic" type="audio/mpeg">
      你的浏览器不支持MP3播放，请更换浏览器！
    </audio>
  </div>
</template>

<style scoped lang="scss">
$PlayControler-width: 20px;

.playMusic-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 36px;
  margin: 0 5px;

  .playMusic {
    width: $PlayControler-width;
    height: $PlayControler-width;
    border-radius: 20%;
    font-size: 1.3rem;
    line-height: 1.3rem;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    outline: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>