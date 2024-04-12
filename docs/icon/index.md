---
outline: deep
---

## 图标
点击选择图标按钮，弹出框显示所有的icon,点击图标可以复制icon代码
### 基本用法
<br>
<div style="padding: 1em;margin: 1em;border: 1px solid #eee">
  <m-choose-icon
    title="选择图标"
    v-model:visible="visible"
  >选择图标
  </m-choose-icon>
</div>


### 代码实例
<script lang="ts" setup>
  import { ref } from 'vue'
  const visible = ref<boolean>(false)
</script>

```js
<m-choose-icon
    title="选择图标"
    v-model:visible="visible"
>选择图标
</m-choose-icon>
<script lang="ts" setup>
  import { ref } from 'vue'
  const visible = ref<boolean>(false)
</script>
```