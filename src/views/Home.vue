<script setup lang="ts">
const deslist = [
  '1、本网站诞生之初就是为便利D-END公会成员使用的POE1、POE2便利工具，因此更新时会优先考虑公会内成员需要。',
  '2、本网站不会收集任何个人信息，也不会使用任何第三方服务。',
  '3、本网站仅供Poe使用，请勿用于其他用途。',
]
const updatelist = [
  {
    version: '0.2.1 (2024-12-29)',
    value: {
      bug: [],
      add: ['添加微信商店正則功能'],
      up: [],
      del: ['刪除微信讚賞碼'],
    },
  },
  {
    version: '0.1.3 (2024-12-17)',
    value: {
      bug: [],
      add: ['添加微信赞赏码'],
      up: [],
      del: [],
    },
  },
  {
    version: '0.1.2 (2024-12-16)',
    value: {
      bug: ['修复页眉Logo大小写', '修复标签页Logo大小写'],
      add: ['添加D-End公会仓库统计', '添加D-End公会仓库历史操作记录'],
      up: [],
      del: [],
    },
  },
  {
    version: '0.1.1 (2024-12-15)',
    value: {
      bug: [],
      add: ['新增完成后隐藏选项'],
      up: ['更新页脚'],
      del: [],
    },
  },
  {
    version: '0.1.0 (2024-12-15)',
    value: {
      bug: [],
      add: ['建站', '支线任务奖励检查'],
      up: [],
      del: [],
    },
  },
]
</script>

<template>
  <div class="mx-8" id="content" style="margin-left: 32px; margin-right: 32px">
    <div style="margin-bottom: 48px">
      <h1 class="text-3xl" style="padding-left: 12px">说明</h1>
      <h2 class="text-xl pl-3" v-for="i in deslist" :key="i">
        {{ i }}
      </h2>
    </div>
    <h1 class="text-3xl pl-3">更新日志</h1>
    <div class="pl-3" v-for="i in updatelist" :key="i.version">
      <h2 class="my-4 text-xl">
        {{ i.version }}
      </h2>
      <h3 v-for="(add, index) in i.value.add" :key="index" class="mb-1 text-l">
        <a-tag size="small" color="green">新增</a-tag>
        {{ index + 1 }}. {{ add }}
      </h3>
      <h3 class="mb-1 text-l" v-for="(bug, index) in i.value.bug" :key="index">
        <a-tag size="small" color="orangered">修复</a-tag>
        {{ i.value.add.length + index + 1 }}. {{ bug }}
      </h3>
      <h3 class="mb-1 text-l" v-for="(up, index) in i.value.up" :key="index">
        <a-tag size="small" color="blue">更新</a-tag>
        {{ i.value.add.length + i.value.bug.length + index + 1 }}. {{ up }}
      </h3>
      <h3 class="mb-1 text-l" v-for="(del, index) in i.value.del" :key="index">
        <a-tag size="small" color="red">刪除</a-tag>
        {{ i.value.add.length + i.value.bug.length + index + 1 }}. {{ del }}
      </h3>
    </div>
  </div>
</template>

<style scoped>
.maxSize {
}

#content {
  max-height: calc(100vh - 92px);
  padding: 0;
  margin: 0;
  overflow-y: scroll;
}
</style>
