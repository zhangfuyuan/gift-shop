<template>
  <!--礼品详情-->
  <div class="goodsDetails">
    <!--顶部-->
    <div class="header">
      <mt-header fixed title="礼品详情">
        <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
      </mt-header>
    </div>

    <mt-navbar fixed v-model="selected" class="header">
      <mt-tab-item @click.native="$router.go(-1)"><i class="icon-thumb_up text" slot></i></mt-tab-item>
      <mt-tab-item id="礼品"><span class="text">礼品</span></mt-tab-item>
      <mt-tab-item id="详情"><span class="text">详情</span></mt-tab-item>
      <mt-tab-item id="评价"><span class="text">评价</span></mt-tab-item>
      <mt-tab-item id="分享" @click.native="popupVisible = true; selected = '礼品'">
        <i class="icon-thumb_up text" slot></i>
      </mt-tab-item>
    </mt-navbar>

    <!--内容-->
    <mt-tab-container v-model="selected" class="container">
      <mt-tab-container-item id="礼品" class="wrapper">
        <div class="info">
          <div class="image">
            <img :src="'/static/images/goods/' + goodsDetails.productImage" alt="礼品大图" />
          </div>

          <div class="details">
            <div class="name">
              <p class="title">{{goodsDetails.productName}}</p>
              <p class="sub">细则：*******************</p>
            </div>

            <div class="sale">
              <span class="price">￥{{goodsDetails.salePrice}}</span>
              <span class="num">库存：{{goodsDetails.productNum}}</span>
            </div>

            <!--<div class="other">-->
              <!--<span class="address">地址：**</span>-->
              <!--<span class="sales">销量：**</span>-->
            <!--</div>-->
          </div>

          <div class="other">
            <mt-cell class="cell">
              <div slot="title" class="way">
                <div class="left">白条</div>

                <div class="center">【白条支付】首单立减8元</div>
              </div>

              <i class="mintui mintui-more"></i>
            </mt-cell>

            <mt-cell class="cell">
              <div slot="title" class="way" style="padding: 5px 0;">
                <div class="left">白条</div>

                <div class="center">
                  <ul>
                    <li>满100.00另加9.90元，或满105.00另加...</li>
                    <li>满100.00另加9.90元，或满105.00另加...</li>
                    <li>订单完成后返50元4G云卡优惠券</li>
                  </ul>
                </div>
              </div>

              <i class="mintui mintui-more"></i>
            </mt-cell>
          </div>
        </div>

        <div class="type">
          <mt-cell is-link>
            <div slot="title" class="way">
              <div class="left">规格</div>

              <div class="center">红色特别版，128GB，非合约机，1件，增值业务</div>
            </div>
          </mt-cell>
        </div>

        <!--<div class="type">-->
          <!--<mt-cell>-->
            <!--<div slot="title" class="way">-->
              <!--<div class="left">购买数量</div>-->

              <!--<div class="center">-->
                <!--<mt-button plain type="primary" size="small">1</mt-button>-->
                <!--<mt-button plain type="primary" size="small">10</mt-button>-->
                <!--<mt-button plain type="primary" size="small">50</mt-button>-->
                <!--<mt-button plain type="primary" size="small">100</mt-button>-->
                <!--<mt-button plain type="primary" size="small">1000</mt-button>-->
              <!--</div>-->
            <!--</div>-->

            <!--<i class="mintui mintui-more"></i>-->
          <!--</mt-cell>-->
        <!--</div>-->

        <div class="details1">
          <mt-cell is-link>
            <div slot="title" class="way">
              <div class="left">方式2</div>

              <div class="center">{{goodsDetails.saleWay.way1}}</div>
            </div>
          </mt-cell>
        </div>

        <div class="details2">
          <mt-cell is-link>
            <div slot="title" class="way">
              <div class="left">方式2</div>

              <div class="center">{{goodsDetails.saleWay.way2}}</div>
            </div>
          </mt-cell>
        </div>

        <div class="details3">
          <mt-cell is-link>
            <div slot="title" class="way">
              <div class="left">方式3</div>

              <div class="center">{{goodsDetails.saleWay.way3}}</div>
            </div>
          </mt-cell>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="详情">
        <mt-cell v-for="(n, index) in 6" :title="'详情 ' + n" :key="index"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="评价">
        <mt-cell v-for="(n, index) in 4" :title="'评价 ' + n" :key="index"/>
      </mt-tab-container-item>
    </mt-tab-container>

    <best/>

    <!--底部按钮-->
    <mt-tabbar class="bottom" fixed>
      <mt-tab-item id="加入收藏" class="btnBox" @click.native="isAddCollect = !isAddCollect">
        <div class="btn collect" slot>
          <span v-if="!isAddCollect"><i class="icon-thumb_down"></i> 加入收藏</span>
          <span v-if="isAddCollect"><i class="icon-thumb_up"></i> 已收藏</span>
        </div>
      </mt-tab-item>
      <mt-tab-item id="加入购物车" class="btnBox" @click.native="popupVisible2 = true">
        <div class="btn cart" slot>
          <span>
            <i class="icon-thumb_down" v-show="!isAddCart"></i>
            <i class="icon-thumb_up" v-show="isAddCart"></i>
            加入购物车
            <span class="num">({{cartNum}})</span>
          </span>
        </div>
      </mt-tab-item>
    </mt-tabbar>

    <!--分享弹框-->
    <mt-popup v-model="popupVisible" position="bottom" class="popup">
      <div class="share" slot>
        <div class="title">
          <span class="text">分享到</span>
        </div>

        <div class="link">
          <ul>
            <li v-for="(item, index) in linkList" :key="index">
              <a :href="item.url">
                <div class="icon"><i class="icon-thumb_up"></i></div>
                <p class="txt">{{item.txt}}</p>
              </a>
            </li>
          </ul>
        </div>

        <div class="cancel">
          <p @click="popupVisible = false">取消</p>
        </div>
      </div>
    </mt-popup>

    <!--购买数量弹窗-->
    <mt-popup v-model="popupVisible2" position="bottom" class="popup">
      <div class="share" slot>
        <div class="title">
          <span class="text">选择购买数量</span>
        </div>

        <div class="link">
          <ul>
            <li v-for="(item, index) in typeList" :key="index" @click="addCart(item)">
              <mt-button plain type="primary" size="small">{{item}}</mt-button>
            </li>
          </ul>
        </div>

        <div class="cancel">
          <p @click="popupVisible2 = false">取消</p>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
  import Best from '@/components/Best'

  export default {
    data() {
      return {
        selected: '礼品',
        isAddCollect: '',
        isAddCart: '',
        popupVisible: false,
        popupVisible2: false,
        linkList: [
          {
            url: 'https://www.baidu.com',
            txt: '链接说明'
          },
          {
            url: 'https://www.baidu.com',
            txt: '链接说明'
          },
          {
            url: 'https://www.baidu.com',
            txt: '链接说明'
          },
          {
            url: 'https://www.baidu.com',
            txt: '链接说明'
          },
          {
            url: 'https://www.baidu.com',
            txt: '链接说明'
          },
          {
            url: 'https://www.baidu.com',
            txt: '链接说明'
          }
        ],
        goodsDetails: {
          "_id": {
            "$oid": "58c284b13a1bb9aa7033801b"
          },
          "productId": "201710003",
          "productName": "平衡车",
          "salePrice": 1999,
          "productImage": "pingheng.jpg",
          "productNum": 99,
          "saleWay": {
            "way1": 'discount1',
            "way2": 'discount2',
            "way3": 'discount3'
          },
          "details01": '*******************',
          "details02": '*******************',
          "details03": '*******************'
        },
        typeList: [ 1, 5, 10, 50, 100, 1000, 10000 ]
      }
    },
    computed: {
      cartNum: {
        get () {
          return this.$store.state.cartNum;
        },
        set (event) {

        }
      }
    },
    created(){
      this.isAddCollect = false;
      this.isAddCart = false;
      this.cartNum = 0;
      console.log(this.$route.query.goodsId);
    },
    methods: {
      addCart(num) {
        this.isAddCart = true;
        this.$store.dispatch('addCart', num);
        this.popupVisible2 = false;
      }
    },
    components: {
      Best
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  @mixin cell-leftCenter() {
    display: flex;
    font-size: $font-14px;
    line-height: 1.5;
    .left {
      flex: 1.5;
      color: $color-l-font;
    }

    .center {
      flex: 8.5;
      color: $color-md-font;
    }
  }

  .goodsDetails {
    .header {
    }

    .container {
      @include box-position(40px);
      .wrapper {
        &>div:not(:last-child) {
          margin-bottom: $inner-between;
        }

        .info {
          @include onepx-y('bottom', $color-border);
          .image {
            @include square-img;
            @include onepx-y('bottom');
          }

          .details {
            @include onepx-y('bottom');
            width: 100%;
            box-sizing: border-box;
            background-color: $color-box-bgc;
            padding: $inner-between;
            .name {
              .title {
                font-size: $font-16px;
                color: $color-md-font;
              }

              .sub {
                padding-top: $inner-between/2;
                color: $color-price;
                font-size: $font-12px;
              }
            }

            .sale {
              @include child-center('y');
              .price {
                color: $color-price;
                font-size: $font-22px;
                font-weight: bold;
                flex: 1;
              }

              .num {

              }
            }
          }

          .other {
            display: flex;
            flex-direction: column;
            /*@include child-center('y');
            .address {
              flex: 1;
            }

            .sales {

            }*/

            .cell {

              .way {
                @include cell-leftCenter;

              }
            }

          }
        }

        .type, .details1, .details2, .details3 {
          @include onepx-yy($color-border);
          .way {
            @include cell-leftCenter;
          }
        }

        .type {

        }

        .details1, .details2, .details3 {

        }
      }
    }

    .best {
      @include box-position(40px);
    }

    .bottom {
      .btnBox {
        padding: 0;
        .btn {
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: $font-18px;
        }

        .collect {
          color: $color-theme;
        }

        .cart {
          color: #fff;
          background-color: $color-price;
          .num {
            font-size: $font-12px;
          }
        }
      }
    }

    .popup {
      width: 100%;
      .title {
        @include title-bar;
      }

      .link {
        width: 80%;
        margin: 0 auto;
        ul {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          li {
            width: 25%;
            text-align: center;
            padding: 1rem 0;
            a {
              .icon {
                text-align: center;
                font-size: 36px;
              }

              .txt {
                color: $color-d-font;
                font-size: $font-14px;
              }
            }
          }
        }
      }

      .cancel {
        @include onepx-y('top', $color-border);
        width: 80%;
        margin: .5rem auto;
        p {
          height: 50px;
          line-height: 50px;
          text-align: center;
        }
      }
    }

    .text {
      font-size: $font-16px;
    }
  }


</style>
