<template>
  <div class="home">
    <!-- 头部红色区域（头部标题） -->
    <div class="header"></div>
    <!-- 头部tab频道选项卡 -->
    <div class="header-tabs-parent">
      <ul class="header-tabs">
        <li class="header-tabs-item" v-for="(item, index) in tabsData" :key="index" @click="toggleTabs(index, item.channelId)" :class="{ 'header-tabs-item-active' : index == currentIndex }">{{ item.channelName }}</li>
      </ul>
      <!-- 频道右边的加号 -->
      <div class="header-tabs-right">+</div>
    </div>
    <!-- 轮播图区域 -->
    <Swiper class="swiper">
      <Slide v-for="(item, index) in banners" :key="index">
        <img :src="item.bannerImg">
      </Slide>
    </Swiper>
  </div>
</template>

<script>
// 引入轮播图组件
import { Swiper, Slide } from 'vue-swiper-component'
export default {
  name: 'HomeView',
  components: {
    Swiper,
    Slide
  },
  data () {
    return {
      // 频道选项卡集合
      tabsData: [],
      // 频道选项卡当前选中的频道Id（用于查询数据）
      currentChannelId: 0,
      // 频道选项卡当前选中索引
      currentIndex: 0,
      // 轮播图集合，用于接收数据
      banners: []
    }
  },
  methods: {
    // 请求后端查询频道选项卡
    loadChannel () {
      // 使用axios的get请求后端
      this.$axios.get('/baseChannel/listChannels').then(res => {
        console.log(res)
        // 把查出来的数据赋值给this.tabsData
        this.tabsData = res.data.object
        // 判断查出来的数据是否大于0条
        if (this.tabsData && this.tabsData.length > 0) {
          // 令当前选项卡ID等于查出来数据的第一条频道ID
          this.currentChannelId = this.tabsData[0].channelId
        }
      })
    },
    toggleTabs (index, channelId) {
      // 把频道选项卡点击索引赋值给 this.currentIndex
      this.currentIndex = index
      // 把频道选项卡点击ID赋值给 this.currentChannelId
      this.currentChannelId = channelId
    },
    // 请求后端查询轮播图
    loadBanner () {
      this.$axios.get('/baseBanner/listBanners').then(res => {
        this.banners = res.data.object
      })
    }
  },
  // 组件加载完成时，触发钩子函数
  mounted () {
    // 执行请求后端查询频道选项卡方法
    this.loadChannel()
    // 执行请求后端查询轮播图方法
    this.loadBanner()
  }
}
</script>

<style scoped="scoped">
.header {
  height: 44px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  background-image: linear-gradient(-90deg, #ff4242 0%, #ff6451 100%);
}

.header-tabs-parent {
  display: flex;
  flex-direction: row;
}

.header-tabs {
 height: 40px;
 width: calc(100% - 10%);
 display: flex;
 flex-direction: row;
 overflow-x: auto;
 padding: 0;
 margin: 0;
}
.header-tabs-item {
  font-size: 14px;
  color: black;
  line-height: 40px;
  white-space: nowrap;
  padding: 0px 20px;
  display: inline-block;
}

.header-tabs-item-active {
  color: #ff5555;
  font-weight: bold;
}

.header-tabs-right {
  height: 40px;
  width: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.swiper img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
</style>
