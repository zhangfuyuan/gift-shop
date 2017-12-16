<template>
  <div class="tabbar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="/home">
        <img slot="icon" src="../assets/images/tabBar/home-on.png" v-if="/^\/home/.test(selected)">
        <img slot="icon" src="../assets/images/tabBar/home-off.png" v-else>
        首页
      </mt-tab-item>

      <mt-tab-item id="/classify">
        <img slot="icon" src="../assets/images/tabBar/list-on.png" v-if="/^\/classify/.test(selected)">
        <img slot="icon" src="../assets/images/tabBar/list-off.png" v-else>
        分类
      </mt-tab-item>

      <mt-tab-item id="/find?nav=1">
        <img slot="icon" src="../assets/images/tabBar/find-on.png" v-if="/^\/find/.test(selected)">
        <img slot="icon" src="../assets/images/tabBar/find-off.png" v-else>
        发现
      </mt-tab-item>

      <mt-tab-item id="/cart">
        <img slot="icon" src="../assets/images/tabBar/cart-on.png" v-if="/^\/cart/.test(selected)">
        <img slot="icon" src="../assets/images/tabBar/cart-off.png" v-else>
        购物车
      </mt-tab-item>

      <mt-tab-item id="/mine">
        <img slot="icon" src="../assets/images/tabBar/my-on.png" v-if="/^\/mine/.test(selected)">
        <img slot="icon" src="../assets/images/tabBar/my-off.png" v-else>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: this.$route.path
      }
    },
    watch: {
      selected(val) {
        this.$router.push({
          path: val
        })
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .mint-tabbar.is-fixed {
    z-index: 9;
  }
</style>
