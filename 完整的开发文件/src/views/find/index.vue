<template>
  <!--发现-->
  <div class="find">
    <!--顶部-->
    <div class="header">
      <mt-header fixed title="发现">
        <router-link to="/scan" slot="left">
          <mt-button class="icon-thumb_up"></mt-button>
        </router-link>

        <router-link to="/message" slot="right">
          <mt-button class="icon-thumb_up"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <!--选项卡-->
    <mt-navbar class="nav" v-model="selected">
      <mt-tab-item id="1">送礼流程</mt-tab-item>
      <mt-tab-item id="2">广告推广</mt-tab-item>
    </mt-navbar>

    <!--选项内容-->
    <mt-tab-container v-model="selected" class="container">
      <mt-tab-container-item id="1">
        <mt-cell v-for="(n, index) in 10" :title="'送礼流程 ' + n" :key="index" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="(n, index) in 4" :title="'广告推广 ' + n" :key="index" />
      </mt-tab-container-item>
    </mt-tab-container>

    <!--页卡栏-->
    <tabbar/>
  </div>
</template>

<script>
  import Tabbar from '@/components/Tabbar'

  export default {
    data() {
      return {
        selected: this.$route.query.nav
      };
    },
    components: {
      Tabbar
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .find {
    .nav {
      @include box-position;
      margin-bottom: 10px;
    }

    .container {
      @include box-position;
    }
  }
</style>
