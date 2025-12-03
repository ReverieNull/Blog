<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // 创建外部脚本
  const externalScript = document.createElement("script");
  externalScript.src =
    "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.0.0-beta.2/libs/cn/index.js";
  externalScript.type = "text/javascript";

  externalScript.onload = function () {
    // 创建初始化脚本
    const initScript = document.createElement("script");
    initScript.type = "text/javascript";
    initScript.textContent = `
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: '你的机器人ID',
        },
        componentProps: {
          title: '聊天窗口显示的标题',
        },
      });
    `;
    document.body.appendChild(initScript);
  };

  document.body.appendChild(externalScript);
});
</script>