<template>
  <!--首页-->
  <div class="home">
    <!--顶部-->
    <div class="header">
      <mt-header fixed title="网站名称">
        <router-link to="/scan" slot="left">
          <mt-button class="icon-thumb_up"></mt-button>
        </router-link>

        <router-link to="/message" slot="right">
          <mt-button class="icon-thumb_up"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <!--搜索框-->
    <div class="search">
      <mt-search v-model="searchValue" cancel-text="取消" placeholder="搜索">
        <mt-cell v-for="(item, index) in filterResult"
                 :key="index"
                 :title="item.title"
                 :value="item.value"
                 @click.native="$router.push({ path: '/goods', query: { search: item.title } })">
        </mt-cell>
      </mt-search>
    </div>

    <!--轮播图-->
    <div class="swiper">
      <mt-swipe :auto="3000" @change="handleChange">
        <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
          <router-link to="/find?nav=2">
            <img :src="'/static/images/banners/' + item.picUrl" :alt="item.alt" />
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!--推荐商品-->
    <best/>

    <!--页卡栏-->
    <tabbar/>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  import axios from 'axios'
  import Tabbar from '@/components/Tabbar'
  import Best from '@/components/Best'

  export default {
    data () {
      return {
        searchValue: '',
        searchResult: [
          { title: 'Apple', value: 'apple' },
          { title: 'Banana', value: 'banana' },
          { title: 'Orange', value: 'orange' },
          { title: 'Durian', value: 'durian' },
          { title: 'Lemon', value: 'lemon' },
          { title: 'Peach', value: 'peach' },
          { title: 'Cherry', value: 'cherry' },
          { title: 'Berry', value: 'berry' },
          { title: 'Core', value: 'core' },
          { title: 'Fig', value: 'fig' },
          { title: 'Haw', value: 'haw' },
          { title: 'Melon', value: 'melon' },
          { title: 'Plum', value: 'plum' },
          { title: 'Pear', value: 'pear' },
          { title: 'Peanut', value: 'peanut' },
          { title: 'Other', value: 'other' }
        ],
        bannerList: []
      }
    },
    computed: {
      filterResult() {
        return this.searchResult.filter((value, index) =>
          new RegExp(this.searchValue.title, 'i').test(value) && index < 10);
      }
    },
    created () {
      let self = this;

      axios.get('/mock/5a2967fc70188c51fc72ed39/shop/banner/list').then(res=>{
        if (res.status === 200) {
          self.bannerList = res.data.data;
        } else {
          MessageBox({ title: '警告', message: res.statusText });
        }
      });
    },
    mounted() {

    },
    methods: {
      handleChange(index) {
//        console.log(index);
      }
    },
    components: {
      Tabbar,
      Best
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  $swiperHeight: 150px;

  .home {
    .header {
      .mint-header {
        z-index: 9;
      }
    }

    .search {
      @include box-position;
      z-index: 7;
      .mint-search {
        height: auto;
      }
    }

    .swiper {
      @include box-position;
      height: $swiperHeight;
      img {
        width: 100%;
        height: $swiperHeight;
      }
    }

    .best {
      @include box-position;
    }
  }

  @media screen and (min-width: 992px) {
    .home {
      .search, .swiper, .best {
        width: 80%;
        margin: 0 auto;
      }

      .swiper {
        height: 250px;
        img {
          height: 250px;
        }
      }
    }
  }
</style>
