<script setup lang="ts">
import Papa from 'papaparse'
import { onMounted, ref } from 'vue'
import { useNavStore } from '@/stores/nav.ts'

const navStore = useNavStore()

const InfoColumns = [
  {
    title: '时间戳',
    dataIndex: 'Date',
    sortable: {
      sortDirections: ['ascend', 'descend'],
    },
  },
  {
    title: '仓库',
    dataIndex: 'Stash',
    filterable: {
      filters: [
        {
          text: '副會',
          value: '副會',
        },
        {
          text: '大倉',
          value: '大倉',
        },
        {
          text: '技能',
          value: '技能',
        },
        {
          text: '暗金',
          value: '暗金',
        },
        {
          text: '雜貨3',
          value: '雜貨3',
        },
        {
          text: '雜貨2',
          value: '雜貨2',
        },
        {
          text: '雜貨1',
          value: '雜貨1',
        },
      ],
      filter: (value: string, record: CsvRow) => record.Stash == value,
    },
  },
  {
    title: '操作人',
    dataIndex: 'Account',
    filterable: {
      filters: [
        { text: 'gl792916391#3620', value: 'gl792916391#3620' },
        { text: '者别#7753', value: '者别#7753' },
        { text: 'lwlabc#7892', value: 'lwlabc#7892' },
        { text: 'TXTGGG#2641', value: 'TXTGGG#2641' },
        { text: 'chenaaa56#3313', value: 'chenaaa56#3313' },
        { text: 'kiliusqy#0120', value: 'kiliusqy#0120' },
        { text: 'flance#5652', value: 'flance#5652' },
        { text: 'askliong#1444', value: 'askliong#1444' },
        { text: 'bilyking#2115', value: 'bilyking#2115' },
        { text: '平凡世界#5195', value: '平凡世界#5195' },
        { text: 'bb650427#0217', value: 'bb650427#0217' },
        { text: 'timorDD#5601', value: 'timorDD#5601' },
        { text: 'jiuqianqi#5593', value: 'jiuqianqi#5593' },
        { text: 'henanlllez#0846', value: 'henanlllez#0846' },
        { text: 'luanxilong#4140', value: 'luanxilong#4140' },
        { text: 'quartzqaz1#2277', value: 'quartzqaz1#2277' },
        { text: 'chi03427#5718', value: 'chi03427#5718' },
        { text: 'Gyc012#1989', value: 'Gyc012#1989' },
        { text: 'PeteHarte37#5212', value: 'PeteHarte37#5212' },
        { text: 'xiao13714962252#2701', value: 'xiao13714962252#2701' },
        { text: '胖凸凸#3725', value: '胖凸凸#3725' },
        { text: 'LouiseKim#6115', value: 'LouiseKim#6115' },
        { text: 'wxp07061#5762', value: 'wxp07061#5762' },
        { text: '小虾米#0046', value: '小虾米#0046' },
        { text: 'scottiying#5021', value: 'scottiying#5021' },
        { text: '埃尔#4069', value: '埃尔#4069' },
        { text: '117130520#3724', value: '117130520#3724' },
        { text: 'istrih#1071', value: 'istrih#1071' },
        { text: 'gl954536496#1624', value: 'gl954536496#1624' },
        { text: 'LingboSama#7421', value: 'LingboSama#7421' },
        { text: '可乐不加冰#3187', value: '可乐不加冰#3187' },
        { text: 'Luckbiubiubiu_LaoWang#3969', value: 'Luckbiubiubiu_LaoWang#3969' },
        { text: '在华莱士喝到酩酊大醉#3710', value: '在华莱士喝到酩酊大醉#3710' },
        { text: 'liujt990731#2183', value: 'liujt990731#2183' },
      ],
      filter: (value: string, record: CsvRow) => record.Account == value,
    },
  },
  {
    title: '物品',
    dataIndex: 'Item',
  },
  {
    title: '操作',
    dataIndex: 'Action',
    filterable: {
      filters: [
        {
          text: '存入',
          value: 'added',
        },
        {
          text: '取出',
          value: 'removed',
        },
      ],
      filter: (value: string, record: CsvRow) => record.Action == value,
    },
  },
]
const InfoData = ref<CsvRow[]>([])

// 定义CSV文件中每行数据的结构
interface CsvRow {
  Date: number
  Id: number
  League: string
  Account: string
  Action: string
  Stash: string
  Item: string
}

// 将CSV文件的内容转换为对象数组
const parseCsvToObjects = (csvContent: string): CsvRow[] => {
  const results = Papa.parse(csvContent, {
    header: true,
    dynamicTyping: true,
  })
  // 检查是否有数据
  if (!results.data) {
    throw new Error('No data available')
  }
  // 将数据转换为TypeScript对象数组
  return results.data as CsvRow[]
}

onMounted(() => {
  navStore.setActiveNavbar(['3'])
  // 从assets文件夹中获取CSV文件内容
  fetch('https://poe.chaozj.com/static/origin1152921504606967084.csv')
    .then((response) => response.text())
    .then((csvContent) => {
      // 将CSV内容解析为对象数组
      const data = parseCsvToObjects(csvContent)
      InfoData.value = data
      // 在这里可以对数据进行进一步处理或显示
      console.log(data)
    })
    .catch((error) => {
      console.error('Error fetching CSV file:', error)
    })
})
</script>

<template>
  <a-table
    :columns="InfoColumns"
    :data="InfoData"
    style="height: 100%"
    :virtual-list-props="{ height: 800 }"
    :pagination="false"
    :scroll="{ x: 1000 }"
  />
</template>

<style scoped></style>
