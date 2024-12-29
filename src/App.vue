<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from '@/router/index' //路由管理
import { ref } from 'vue'
//全局导航栏管理
//全局导航栏管理
import { useNavStore } from '@/stores/nav'

const navStore = useNavStore()

const Mobile = ref(false)

//判断移动端
function isMobile() {
  return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
}
if (isMobile()) {
  Mobile.value = true
}


function navClick(key: string) {
  navStore.setActiveNavbar([key])
  if (key === '0') {
    router.push({ path: '/' })
  } else if (key === '1') {
    router.push({ path: '/chaptersrewards' })
  }else if (key === '2') {
    router.push({ path: '/stash' })
  }
  else if (key === '3') {
    router.push({ path: '/stashhistory' })
  }
  else if (key === '4') {
    router.push({ path: '/vendorRegex' })
  }
}
</script>

<template>
  <div id="building">
    <a-layout>
      <a-layout-header style="background: black; width: 100%; height: 48px">
        <div>
          <a-row style="display: flex; align-items: center; justify-content: space-between">
            <img alt="logo" style="padding-left: 24px" width="200" src="./assets/logo.png" />

            <div class="locale-changer" style="padding-right: 8px">
              <a-row style="display: flex; align-items: center; justify-content: space-between">
                <p id="normaltext" style="float: right; padding-right: 8px">
                  <icon-language />
                </p>
                <select v-model="$i18n.locale" >
                  <option
                    v-for="locale in $i18n.availableLocales"
                    :key="`locale-${locale}`"
                    :value="locale"
                  >
                    {{ locale }}
                  </option>
                </select>
                <a-popover style="margin-left: 12px !important;" trigger="click">
                  <a-button style="margin-left: 12px"><icon-menu /></a-button>
                  <template #content>
                    <div style="height: 100%">
                      <a-menu
                        :style="{ height: '100%' }"
                        :selected-keys="navStore.activeNavbar"
                        @menuItemClick="navClick"
                      >
                        <a-menu-item key="0">
                          <div id="menu-t">{{ $t('menu.Home') }}</div>
                        </a-menu-item>
                        <a-menu-item key="1">
                          <div id="menu-t">{{ $t('menu.ChapterRewards2') }}</div>
                        </a-menu-item>
                        <a-menu-item key="2">
                          <div id="menu-t">{{ $t('menu.Stash') }}</div>
                        </a-menu-item>
                        <a-menu-item key="3">
                          <div id="menu-t">{{ $t('menu.StashHistory') }}</div>
                        </a-menu-item>
                        <a-menu-item key="4">
                          <div id="menu-t">{{ $t('menu.VendorRegex') }}</div>
                        </a-menu-item>
                      </a-menu>
                    </div>
                  </template>
                </a-popover>

              </a-row>

            </div>
          </a-row>
        </div>
      </a-layout-header>
      <a-layout style="height: 100%; background: rgba(0, 0, 0, 0.7)">
        <a-layout-sider v-show="!Mobile" :width="180" style="height: calc(100vh - 48px - 20px)" theme="dark">
          <div style="height: 100%">
            <a-menu
              :style="{ height: '100%', color: '#f4d33f' }"
              :selected-keys="navStore.activeNavbar"
              @menuItemClick="navClick"
            >
              <a-menu-item key="0">
                <div id="menu-t">{{ $t('menu.Home') }}</div>
              </a-menu-item>
              <a-menu-item key="1">
                <div id="menu-t">{{ $t('menu.ChapterRewards2') }}</div>
              </a-menu-item>
              <a-menu-item key="2">
                <div id="menu-t">{{ $t('menu.Stash') }}</div>
              </a-menu-item>
              <a-menu-item key="3">
                <div id="menu-t">{{ $t('menu.StashHistory') }}</div>
              </a-menu-item>
              <a-menu-item key="4">
                <div id="menu-t">{{ $t('menu.VendorRegex') }}</div>
              </a-menu-item>
            </a-menu>
          </div>
        </a-layout-sider>
        <a-layout-content style="height: 100%">
          <RouterView :key="$route.fullPath" />
        </a-layout-content>
      </a-layout>
      <a-layout-footer style="background: black; width: 100%; height: 20px">
        <a-row style="display: flex; align-items: center; justify-content: center">
          D-end Tool ⓒ Copyright SupraRectus X D-end 2024

          <a-link href="https://beian.miit.gov.cn/#/Integrated/index">
            <div id="normaltext" style="font-size: 12px">皖ICP备2024039162号-1</div>
          </a-link>
          <a-link href="https://beian.mps.gov.cn/#/query/webSearch">
            <template #icon>
              <a-avatar
                :size="12"
                image-url="https://beian.mps.gov.cn/img/logo01.dd7ff50e.png"
              ></a-avatar>
            </template>
            <div id="normaltext" style="font-size: 12px">皖ICP备2024039162号-1</div>
          </a-link>
        </a-row>

      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#building {
  background: url('https://www.helloimg.com/i/2024/12/17/67616cc423f83.jpeg') rgba(0, 0, 0, 0.6) no-repeat center center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  background-blend-mode: multiply;
}

#normaltext {
  color: #a38d6d;
}

#menu-t {
  font-weight: bold;
}

.arco-menu-selected {
  color: #ffffff;
  background-color: black;
}
</style>
