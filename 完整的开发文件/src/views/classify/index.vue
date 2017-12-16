<template>
  <!--分类-->
  <div class="classify">
    <!--顶部-->
    <div class="header">
      <mt-header fixed title="分类">
        <router-link to="/scan" slot="left">
          <mt-button class="icon-thumb_up"></mt-button>
        </router-link>

        <router-link to="/message" slot="right">
          <mt-button class="icon-thumb_up"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <!--排序筛选-->
    <div class="filter">
      <mt-navbar v-model="sortBy">
        <!--<mt-tab-item id="synthesize">默认</mt-tab-item>-->
        <mt-tab-item id="synthesize">综合</mt-tab-item>
        <mt-tab-item id="sell">销售</mt-tab-item>
        <mt-tab-item id="price" @click.native="isPriceDesc = !isPriceDesc">
          <span slot>价格
            <i class="icon-thumb_down" v-show="isPriceDesc"></i>
            <i class="icon-thumb_up" v-show="!isPriceDesc"></i>
          </span>
        </mt-tab-item>
        <mt-tab-item id="filtrate" @click.native="popupVisible = true">
          <span slot>筛选 <i class="icon-thumb_up"></i></span>
        </mt-tab-item>
      </mt-navbar>
    </div>

    <!--分类列表 & 礼品列表-->
    <div class="list">
      <div class="type" ref="type" :style="{ height: typeHeight + 'px' }">
        <ul>
          <li v-for="(item, index) in typeList" :key="index">
            <a @click="typeIndex = index" :class="{ 'cur': typeIndex === index }" href="javascript:void(0);">
              {{item}}
            </a>
          </li>
        </ul>
      </div>

      <div class="goods" ref="goods" :style="{ height: goodsHeight + 'px' }">
        <goods-list :goods="goods" class="container"></goods-list>

        <p v-show="noMore" class="no-more">没有更多啦</p>
      </div>
    </div>

    <!--筛选覆盖层-->
    <mt-popup v-model="popupVisible" position="right" class="popup">
      <div class="filtrate" slot>
        <div class="title">
          <span class="text">更多筛选</span>
        </div>

        <div class="label">
          <ul>
            <li><mt-button plain type="primary" size="large">货到付款</mt-button></li>
            <li><mt-button plain type="primary" size="large">在线支付</mt-button></li>
            <li><mt-button plain type="primary" size="large">免邮递费</mt-button></li>
            <li><mt-button plain type="primary" size="large">3天必到</mt-button></li>
            <li><mt-button plain type="primary" size="large">更多选择</mt-button></li>
          </ul>
        </div>

        <div class="btn">
          <mt-button disabled type="primary">确定</mt-button>
          <mt-button type="danger" @click="popupVisible = false">取消</mt-button>
        </div>
      </div>
    </mt-popup>

    <!--页卡栏-->
    <tabbar/>
  </div>
</template>

<script>
  import Tabbar from '@/components/Tabbar'
  import GoodsList from '@/components/GoodsList'

  export default {
    data() {
      return {
        sortBy: 'synthesize',
        isPriceDesc: true,
        typeIndex: 0,
//        typeList: [ '推荐礼品', '食品', '购物礼券' ],
        typeList: [ '推荐礼品', '超市', '进口', '男装', '女装', '男鞋', '女鞋', '内衣配饰', '箱包手袋', '美妆个护', '钟表珠宝' ],
        isCurType: false,
        typeHeight: 0,
        goodsHeight: 0,
        popupVisible: false,
        goods: [
          {
            "_id": {
              "$oid": "58c284b13a1bb9aa7033801b"
            },
            "productId": "201710003",
            "productName": "平衡车",
            "salePrice": 1999,
            "productImage": "pingheng.jpg",
            "productNum": 99
          },
          {
            "_id": {
              "$oid": "58c284d7117a2e6599abef5e"
            },
            "productId": "201710004",
            "productName": "头戴式耳机-3",
            "salePrice": 80,
            "productImage": "2.jpg",
            "productNum": 99
          },
          {
            "_id": {
              "$oid": "58c284e6117a2e6599abef5f"
            },
            "productId": "201710005",
            "productName": "小米笔记本",
            "salePrice": 3549,
            "productImage": "note.jpg",
            "productNum": 99
          },
          {
            "_id": {
              "$oid": "58c284f4117a2e6599abef60"
            },
            "productId": "201710006",
            "productName": "小米6",
            "salePrice": 2499,
            "productImage": "mi6.jpg",
            "productNum": 95
          },
          {
            "_id": {
              "$oid": "58e704ef98dab115d336b3f1"
            },
            "productId": "201710002",
            "productName": "智能插线板",
            "salePrice": 59,
            "productImage": "6.jpg",
            "productNum": 96
          },
          {
            "_id": {
              "$oid": "58e7050398dab115d336b3f2"
            },
            "productId": "201710007",
            "productName": "自拍杆",
            "salePrice": 39,
            "productImage": "zipai.jpg",
            "productNum": 99
          },
          {
            "_id": {
              "$oid": "58e7050c98dab115d336b3f3"
            },
            "productId": "201710008",
            "productName": "小米净水器",
            "salePrice": 1999,
            "productImage": "8.jpg",
            "productNum": 98
          },
          {
            "_id": {
              "$oid": "58e7051698dab115d336b3f4"
            },
            "productId": "201710009",
            "productName": "IH 电饭煲",
            "salePrice": 999,
            "productImage": "9.jpg",
            "productNum": 99
          }
        ],
        noMore: true
      }
    },
    watch: {
      isPriceDesc(val) {
        this.getGoods();
      },
      sortBy(val) {
        if (val === 'price') {
          return;
        } else if (val === 'filtrate') {
          console.log('覆盖层显示！');
        } else {
          this.getGoods();
        }
      },
      typeIndex(val) {
        this.getGoods();
      }
    },
    created() {
      this.getGoods();
    },
    mounted() {
      this.typeHeight = document.documentElement.clientHeight - this.$refs.type.getBoundingClientRect().top;
      this.goodsHeight = document.documentElement.clientHeight - this.$refs.goods.getBoundingClientRect().top;
    },
    methods: {
      getGoods() {
        let params = {
          curTypeIndex: this.typeIndex,
          curSortBy: this.sortBy,
          curSort: this.sortBy==='price' ? (this.isPriceDesc?'-1':'1') : '-1'
        };

        if (this.sortBy === 'filtrate') params.curSortBy = 'synthesize';

        console.log('根据'+ this.typeList[params.curTypeIndex] + '类别，' +
                            params.curSortBy + '过滤器，' +
                            params.curSort + '规则排序，' + '获取礼品成功！');
      }
    },
    components: {
      Tabbar,
      GoodsList
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .classify {
    .filter {
      @include box-position;
      margin-bottom: $inner-between;
      position: fixed;
      z-index: 7;
    }

    .list {
      @include box-position(100px);
      display: flex;
      margin-bottom: 55px;
      .type {
        flex: 2.5;
        overflow: auto;
        ul {
          width: 100%;
          li {
            padding: 0 $inner-between/2 $inner-between/2;
            a {
              @include child-center;
              background-color: $color-box-bgc;
              color: $color-d-font;
              font-size: $font-14px;
              height: 50px;
            }

            .cur {
              background-color: $color-bgc;
              color: $color-price;
            }
          }

        }
      }

      .goods {
        flex: 7.5;
        overflow: auto;
        .goodsList {
          background-color: $color-box-bgc;
        }

        .no-more {
          padding: $inner-between;
          text-align: center;
        }
      }
    }

    .popup {
      width: 75%;
      height: 100%;
      height: 100vh;
      .filtrate {
        background-color: $color-box-bgc;
        .title {
          @include title-bar;
        }

        .label {
          ul {
            width: 100%;
            li {
              padding: $inner-between;
            }
          }
        }

        .btn {
          text-align: center;
        }
      }
    }
  }

</style>
