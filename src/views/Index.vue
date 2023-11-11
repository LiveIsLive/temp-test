<template>
  <div class="index">
    <!-- 中间区域 -->
    <div class="index-content">
      <router-view></router-view>
    </div>
    <!-- 底部菜单选项卡 -->
    <ul class="footer-tabs">
      <!-- 每个菜单选项 -->
      <li class="footer-tabs-item" v-for="(item, index) in tabsData" :key="index"
      :class="{ 'footer-tabs-item-active' : index == currentIndex }" @click="toggleTabs(index)">
      <!-- 当选中时使用item.activeIcon的图标，未选中时使用item.icon图标 -->
        <div class="footer-tabs-item-icon" :class="index == currentIndex ? 'iconfont' + item.activeIcon  + ' footer-tabs-item-icon' : 'iconfont' + item.icon"></div>
        <!-- 显示菜单文字 -->
        <div>{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexView',
  data () {
    return {
      // 定义底部菜单数据
      tabsData: [
        {
          // 定义未选中时的头条图标
          icon: 'icon-huaban',
          // 定义已选中时的头条图标
          activeIcon: 'icon-zixunguanli',
          // 定义头条文字
          name: '头条'
        },
        {
          // 定义未选中时的名师讲堂图标
          icon: 'icon-bofang1',
          // 定义已选中时的名师讲堂图标
          activeIcon: 'icon-icon',
          // 定义名师讲堂文字
          name: '名师讲堂'
        },
        {
          // 定义未选中时的校园直达图标
          icon: 'icon-quanzi2',
          // 定义已选中时的校园直达图标
          activeIcon: 'icon-quanzi4',
          // 定义校园直达文字
          name: '校园直达'
        },
        {
          icon: 'icon-wode6',
          activeIcon: 'icon-wode5',
          name: '光大之友'
        }
      ],
      // 当前选中菜单索引
      currentIndex: 0
    }
  },
  methods: {
    // 菜单选项卡点击事件
    toggleTabs (index) {
      // 把当前点击的菜单索引赋值给this.currentIndex
      this.currentIndex = index
    }
  }
}
</script>

<style scoped="scoped">
.index {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.index .index-content {
  height: calc(100vh - 60vh);
  overflow-y: auto;
}

.footer-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
}

.footer-tabs-item {
  display: inline;
  width: 25%;
  text-align: center;
  font-size: 14px;
}

.footer-tabs-item-icon {
  font-size: 24px;
}

.footer-tabs-item-active {
  color: #ff5555;
  font-weight: bold;

}
</style>
