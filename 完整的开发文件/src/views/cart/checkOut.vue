<template>
  <div class="checkOut">
    <!--顶部-->
    <div class="header">
      <mt-header fixed title="确认订单">
        <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
      </mt-header>
    </div>

    <!--订单内容-->
    <div class="container">
      <div class="gooods">
        <p class="title">礼品清单</p>

        <ul>
          <li v-for="(item, index) in goodsList" :key="index">
            <router-link to="/goodsDetails" class="link">
              <div class="image">
                <div>
                  <img :src="'/static/images/goods/' + item.productImage" alt="礼品图" />
                </div>
              </div>

              <div class="info">
                <div class="name">1</div>

                <div class="details">1</div>

                <div class="other">
                  <span class="price">1</span>
                  <span class="num">1</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="payment-delivery"></div>

      <div class="bill"></div>

      <div class="discount"></div>

      <div class="leave"></div>

      <div class="amount"></div>
    </div>

    <!--下单栏-->
    <mt-tabbar class="place-order" fixed>
      <div class="wrapper" slot>
        <span class="pay">实付款：￥{{totalPrice}}</span>

        <router-link to="/checkOut" class="btn">
          立即下单
        </router-link>
      </div>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        totalPrice: this.$route.query.totalPrice,
        goodsList: [
          {
            "_id": {
              "$oid": "58c284b13a1bb9aa7033801b"
            },
            "productId": "201710003",
            "productName": "平衡车",
            "salePrice": 1999,
            "productImage": "pingheng.jpg",
            "productNum": 98,
            "isChecked": true,
            "cartNum": 1
          },
          {
            "_id": {
              "$oid": "58c284e6117a2e6599abef5f"
            },
            "productId": "201710005",
            "productName": "小米笔记本",
            "salePrice": 3549,
            "productImage": "note.jpg",
            "productNum": 98,
            "isChecked": true,
            "cartNum": 1
          }
        ]
      }
    },
    computed: {
      actualPayment() {
        return this.totalPrice;
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  $place-order-height: 50px;

  .checkOut {
    .container {
      @include box-position;
      &>div {
        @include onepx-yy($color-border);
        width: 100%;
        display: flex;
        background-color: $color-box-bgc;
        margin-top: $inner-between;
        color: $color-d-font;
      }

      .gooods {
        flex-direction: column;
        .title {
          padding: $inner-between;

        }

        ul {
          width: 100%;
          li {
            padding: $inner-between/2 $inner-between;
            .link {
              background-color: $color-bgc;
              display: flex;
              .image {
                flex: 3;
                padding: $inner-between 0 $inner-between $inner-between;
                div {
                  @include square-img;
                  border: 1px solid $color-l-border;
                }
              }

              .info {
                flex: 7;
                padding: $inner-between;
                display: flex;
                flex-direction: column;
                .name {
                  @include ellipsis(2);
                }

                .details {
                  flex: 1;
                }

                .other {
                  display: flex;
                  .price {
                    flex: 1;
                    color: $color-price;

                  }

                  .num {

                  }
                }
              }
            }
          }
        }
      }

      .payment-delivery {

      }

      .bill {

      }

      .discount {

      }

      .leave {

      }

      .amount {

      }

    }

    .place-order {
      background-image: none;
      .wrapper {
        width: 100%;
        height: $place-order-height;
        display: flex;
        .pay {
          @include child-center('y');
          flex: 6;
          justify-content: flex-end;
          padding-right: $inner-between;
          color: $color-price;
        }

        .btn {
          @include child-center;
          flex: 4;
          background-color: $color-theme;
          color: #fff;
          font-size: $font-18px;
        }
      }
    }
  }
</style>
