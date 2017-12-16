<template>
  <!--推荐商品-->
  <div class="best">
    <div class="title">
      <i class="icon-thumb_up"></i> <span class="text">推荐商品</span>
    </div>

    <div class="main">
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <li v-for="(item, index) in bestList" :key="index">
          <router-link :to="'/goodsDetails?goodsId=' + item.productId">
            <div class="image">
              <img  class="img" v-lazy="'/static/images/goods/' + item.productImage" alt="" />
            </div>
            <div class="name"><p>{{item.productName}}</p></div>
            <div class="introduce"><p>{{item.productId}}</p></div>
            <div class="price"><p>￥{{item.salePrice}}</p></div>
          </router-link>
        </li>
      </ul>

      <p v-show="!noMore" class="loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        加载中...
      </p>

      <p v-show="noMore" class="no-more">没有更多啦</p>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui'
  import axios from 'axios'

  export default {
    data() {
      return {
        loading: false,
        page: 0,
        pageSize: 6,
        noMore: false,
        bestList: []
      }
    },
    created() {
      this.getGoodsList();
    },
    methods: {
      loadMore() {
        let self = this;
        this.loading = true;

        setTimeout(() => self.getGoodsList(), 500);
      },
      getGoodsList() {
        this.page++;
        let self = this;

        axios.get('/mock/5a2967fc70188c51fc72ed39/shop/goods/list').then(res=>{
          if (res.status === 200) {
            let newList = [];

            if (self.page*self.pageSize <= res.data.data.length){
              for(let i=(self.page-1)*self.pageSize; i<self.page*self.pageSize; i++){
                newList.push(res.data.data[i]);
              }
              self.loading = false;
            } else {
              for(let i=(self.page-1)*self.pageSize; i<res.data.data.length; i++){
                newList.push(res.data.data[i]);
              }
              self.noMore = true;
            }

            self.bestList = self.bestList.concat(newList);
          } else {
            MessageBox({ title: '警告', message: res.statusText });
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .best {
    .title {
      @include child-center;
      width: 100%;
      margin: $outer-between 0 $outer-between/2;
      color: $color-theme;
      font-weight: 600;
      letter-spacing: .5rem;
    }

    .main {
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li {
          @include onepx-x('right', $color-bgc);
          width: 50%;
          height: 270px;
          background-color: $color-box-bgc;
          border-bottom: 2px solid $color-bgc;
          padding-top: $outer-between;
          a {
            &>div {
              width: 100%;
              @include child-center;
            }

            .image {
              @include square-img;
              .img[lazy=loading] {
                width: 40px;
                left: 50%;
                margin-left: -20px;
              }
            }

            .name {
              padding-top: .5rem;
              p {
                @include ellipsis;
                font-size: $font-14px;
                font-weight: bold;
                color: $color-md-font;
              }
            }

            .introduce {
              padding-top: .25rem;
              p {
                @include ellipsis;
                font-size: $font-12px;
                color: $color-l-font;
              }
            }

            .price {
              padding-top: .5rem;
              p {
                font-size: $font-16px;
                color: $color-price;
              }
            }
          }
        }
      }

      .loading, .no-more {
        text-align: center;
        height: 100px;
        line-height: 50px;
        color: $color-n-font;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .best {
      .main {
        ul {
          li {
            width: 25%;
            height: 350px;
          }
        }
      }
    }
  }
</style>
