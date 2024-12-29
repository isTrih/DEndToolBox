<script setup lang="ts">
import Papa from 'papaparse'
import { onMounted, ref } from 'vue'
import { useNavStore } from '@/stores/nav.ts'
const navStore = useNavStore();

const InfoColumns = [
  {
    title: '序号',
    dataIndex: 'id',
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
      filter: (value: string, record :CsvRow) => record.Stash == value,
    },
  },
  {
    title: '物品',
    dataIndex: 'Item_Translated',
  },
  {
    title: '数量',
    dataIndex: 'Num',
    sortable: {
      sortDirections: ['ascend', 'descend'],
    },
  },
]
const InfoData = ref<CsvRow[]>([])

// 定义CSV文件中每行数据的结构
interface CsvRow {
  Id: number
  Stash: string
  Item_Translated: string
  Num: number
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
  navStore.setActiveNavbar(['2']);
  // 从assets文件夹中获取CSV文件内容
  fetch('https://poe.chaozj.com/static/origin1152921504606967084f.csv')
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
