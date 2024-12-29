import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface CwValue {
  [key: string]: boolean[] // 索引签名，允许使用字符串索引
  Act1: boolean[]
  Act2: boolean[]
  Act3: boolean[]
  CruelAct1: boolean[]
  CruelAct2: boolean[]
  CruelAct3: boolean[]
}

export const useChapterRewardsStore = defineStore(
  'cw',
  () => {
    const count = ref(0)

    const cw = ref<CwValue>({
      Act1: [false, false, false, false, false, false],
      Act2: [false, false, false, false],
      Act3: [false, false, false, false, false, false],
      CruelAct1: [false, false, false, false],
      CruelAct2: [false, false, false, false],
      CruelAct3: [false, false, false, false, false],
    })
    const doubleCount = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    const setCw = (act: string, index: number, value: boolean) => {
      cw.value[act][index] = value
    }
    const clearAll = () => {
      cw.value = {
        Act1: [false, false, false, false, false, false],
        Act2: [false, false, false, false],
        Act3: [false, false, false, false, false, false],
        CruelAct1: [false, false, false, false],
        CruelAct2: [false, false, false, false],
        CruelAct3: [false, false, false, false, false],
      }
    }
    return { cw, setCw, clearAll }
  },
  {
    persist: true, // 启用持久化
  },
)
