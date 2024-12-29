import { createI18n } from 'vue-i18n' // 引入i18n创建多语言对象
import zh_cn from './zh_cn'; // 引入中文对应语言配置
import en from './en';
import zh_tw from '@/lang/zh_tw.ts'
const messages = {
  zh_cn: zh_cn,
  en: en,
  zh_tw: zh_tw
}

const localLang = navigator.language.split('-')[0]; // 获取浏览器语言环境
const storageLang = window.localStorage.getItem('locale')?.split('"')[1].split('"')[0].toLocaleLowerCase() || 'zh_tw'; // 获取localStorage本地语言环境
const c = (storageLang.toLocaleLowerCase() !== 'zh' && storageLang.toLocaleLowerCase() !== 'en') ? 'zh_tw' : storageLang; // 如果localStorage语言环境既不是中文也不是英文就取为英文

const i18n = createI18n({
  globalInjection: true, // 开启全局多语言渗透
  locale: c || localLang || 'zh_tw', // 语言环境
  messages, // 语言配置字段
  legacy: false, // // 使用 vue3 组合式API 时必须设置为 false
})

export default i18n

// import { useI18n } from 'vue-i18n' // 多语言
//
// const { t } = useI18n() // t方法取出，t('code')使用
// const menuList = [
//   { id: '1', icon: 'Connection', title: t('tenant.label1'), path: '/tenant' },
//   { id: '2', icon: 'Iphone', title: t('android.label1'), path: '/android' },
//   { id: '3', icon: 'Iphone', title: t('androidManage.label1'), path: '/androidManage' },
//   { id: '4', icon: 'Iphone', title: t('orderManage.label1'), path: '/orderManage' }
// ]
