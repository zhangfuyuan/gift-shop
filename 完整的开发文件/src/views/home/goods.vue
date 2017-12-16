<template>
  <!--搜索礼品列表-->
  <div class="goods">
    <!--顶部-->
    <div class="header">
      <mt-header fixed title="礼品列表">
        <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
      </mt-header>
    </div>

    <!--排序筛选-->
    <div class="filter">
      <mt-navbar v-model="selected">
        <!--<mt-tab-item id="综合">默认</mt-tab-item>-->
        <mt-tab-item id="综合">综合</mt-tab-item>
        <mt-tab-item id="销售">销售</mt-tab-item>
        <mt-tab-item id="价格" @click.native="isPriceDesc = !isPriceDesc">
          <span slot>价格
            <i class="icon-thumb_down" v-show="isPriceDesc"></i>
            <i class="icon-thumb_up" v-show="!isPriceDesc"></i>
          </span>
        </mt-tab-item>
        <mt-tab-item id="筛选">
          <span slot>筛选 <i class="icon-thumb_up"></i></span>
        </mt-tab-item>
      </mt-navbar>
    </div>

    <!--礼品列表-->
    <goods-list :goods="goods" class="container"></goods-list>
  </div>
</template>

<script>
  import GoodsList from '@/components/GoodsList'

  export default {
    data() {
      return {
        selected: '综合',
        isPriceDesc: true,
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
        ]
      }
    },
    computed: {

    },
    watch: {
      isPriceDesc(val) {
        console.log(val?'倒序':'顺序');
      },
      selected(val){
        if (val === '筛选' || val === '价格') {
          console.log(val);
        } else {
          console.log(val);
        }
      }
    },
    components: {
      GoodsList
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .goods {
    .filter {
      @include box-position;
      margin-bottom: $inner-between;
      position: fixed;
      z-index: 7;
  }

    .container {
      @include box-position(100px);
    }
  }
</style>
