<script setup lang="ts">
import { useChapterRewardsStore } from '@/stores/ChapterRewards.ts'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useNavStore } from '@/stores/nav.ts'

const use = useChapterRewardsStore();
const navStore = useNavStore();

const {cw} = storeToRefs(use);
const check =(act :string, index :number, value :boolean)=>{
  cw.value[act][index] = !value;
}

const close =()=>{
  closeAfterComplete.value = !closeAfterComplete.value;
}

const closeAfterComplete = ref(true)

const clearAll = () => {
  // bug修复: 修改了循环条件，确保循环变量 i 是数字类型
  use.clearAll();
  }

  onMounted(() => {
    navStore.setActiveNavbar(['1']);
  });
</script>

<template>
  <div class="maxSize" id="content" style="margin-left: 32px; margin-right: 32px">
    <h1>{{ $t('chapterRewards.chapterRewards') }}</h1>
    <a-row style="display: flex; align-items: center; justify-content: space-between">
      <a-button type="primary" @click="clearAll">{{ $t('chapterRewards.clearAll') }}</a-button>
      <div style="font-size: 18px;font-weight: bold">{{$t('chapterRewards.isHide')}}<a-checkbox :model-value="closeAfterComplete" @change="close"></a-checkbox></div>
    </a-row>
    <div v-for="(item, index) in cw" :key="index">
      <h2 id="t">{{ $t('Chapter.' + index) }}</h2>
      <a-list>
        <template #header>
          <div id="t">
            <a-row style="line-height: 20px" align="center" justify="center">
              <a-col style="margin-left: 8px;margin-right: 8px" flex="100px">
                <div >
                  {{ $t('chapterRewards.area') }}
                </div>
              </a-col>
              <a-col style="margin-left: 32px;margin-right: 8px" flex="420px">
                <div >
                  {{ $t('chapterRewards.objective') }}
                </div>
              </a-col>
              <a-col style="margin-left: 8px;margin-right: 8px" flex="420px">
                <div>{{ $t('chapterRewards.reward') }}</div>
              </a-col>
              <a-col style="margin-left: 8px;margin-right: 8px" flex="70px">
                <div>{{ $t('chapterRewards.isCompleted') }}</div>
              </a-col>
            </a-row>
          </div>
        </template>
        <a-list-item id="t" v-for="(_, i) in item.length" :key="i" v-show="closeAfterComplete===true?!item[i]:true">
          <a-row style="line-height: 20px" align="center" justify="center">
            <a-col style="margin-left: 8px;margin-right: 8px" flex="132px" >
              <div>{{ $t(index + '.' + i + '.area')}}</div>
            </a-col>
            <a-col style="margin-left: 8px;margin-right: 8px" flex="420px">
              <div >{{ $t(index + '.' + i + '.objective')}}</div>
            </a-col>
            <a-col style="margin-left: 8px;margin-right: 8px" flex="420px">
              <div>{{ $t(index + '.' + i + '.Reward')}}</div>
            </a-col>
            <a-col style="margin-left: 8px;margin-right: 8px" flex="70px">
              <div><a-checkbox :model-value="item[i]" @change="check(index.toString(),i, item[i])"></a-checkbox></div>
            </a-col>
          </a-row>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<style scoped>
#t {
  color: #ffe0b0;
}

.maxSize {
  max-height: calc(100vh - 72px);
}

#content {
  padding: 0;
  margin: 0;
  overflow-y: scroll;
}
</style>
