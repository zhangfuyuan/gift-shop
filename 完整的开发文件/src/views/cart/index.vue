<template>
  <!--购物车-->
  <div class="cart">
    <!--顶部-->
    <div class="header">
      <mt-header fixed title="购物车">
        <div slot="left" v-if="isShowList">
          <mt-button v-show="!isEdit" @click="isEdit = !isEdit">编辑</mt-button>
          <mt-button v-show="isEdit" @click="isEdit = !isEdit">完成</mt-button>
        </div>

        <router-link to="/message" slot="right">
          <mt-button class="icon-thumb_up"></mt-button>
        </router-link>
      </mt-header>
    </div>

    <!--未登录-->
    <div class="showLogin" v-if="!isLogin">
      <div>
        <p class="tip">登录后就可以将礼品加入购物车咯！</p>

        <mt-button plain type="danger" size="small" @click="isLogin=true">请先登录</mt-button>
      </div>
    </div>

    <!--已登录-->
    <div class="showCart" v-if="isLogin">
      <!--购物车为空-->
      <div class="null" v-if="cartList.length===0">
        <div class="tip">
          <i class="icon-thumb_up"></i>
          目前购物车是空的！
        </div>

        <div class="btnBox">
          <mt-button plain size="small">我先看看</mt-button>
          <mt-button plain type="primary" size="small">立即逛逛</mt-button>
        </div>
      </div>

      <!--购物车不为空-->
      <div class="notNull" v-else>
        <ul>
          <li v-for="(item, index) in cartList" :key="index">
            <div class="check">
              <i class="icon-thumb_down" v-show="!item.isChecked"
                 @click="item.isChecked = !item.isChecked"></i>
              <i class="icon-thumb_up checked"
                 v-show="item.isChecked"
                @click="item.isChecked = !item.isChecked"></i>
            </div>

            <router-link :to="'/goodsDetails?goodsId=' + item.productId" class="wrapper">
              <div class="image">
                <div>
                  <img :src="'/static/images/goods/' + item.productImage" alt="礼品图" />
                </div>
              </div>

              <div class="info">
                <div class="name">{{item.productName}}</div>

                <div class="type">{{item.productId}}&nbsp;&nbsp;{{item.productNum}}</div>

                <div class="other">
                  <div class="price">￥{{item.salePrice}}</div>

                  <div class="numEdit">
                    <a href="javascript:void(0);"
                       @click.stop="editCart('minu', item)"
                       :class="{ 'disabled': item.cartNum === 1 }">-</a>
                    <span @click.stop.prevent>{{item.cartNum}}</span>
                    <a href="javascript:void(0);" @click.stop="editCart('add', item)">+</a>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!--推荐礼品-->
    <best/>

    <!--结算栏-->
    <mt-tabbar class="check-out" fixed v-if="isShowList">
      <div class="wrapper" slot>
        <div class="all" @click="toggleCheckAll">
          <i class="icon-thumb_down" v-show="!isAllChecked"></i>
          <i class="icon-thumb_up checked" v-show="isAllChecked"></i>
          &nbsp;&nbsp;全选
        </div>

        <div class="paying" v-show="!isEdit">
          <div class="total">合计：￥{{totalPrice}}</div>

          <router-link :to="'/checkOut?totalPrice=' + totalPrice" class="btn">
            去结算 <span class="num">({{totalNum}})</span>
          </router-link>
        </div>

        <div class="editing" v-show="isEdit">
          <mt-button plain size="small" class="btn">收藏</mt-button>
          <mt-button plain type="danger" size="small" class="btn">删除</mt-button>
        </div>
      </div>
    </mt-tabbar>

    <!--页卡栏-->
    <tabbar/>
  </div>
</template>

<script>
  import Tabbar from '@/components/Tabbar'
  import Best from '@/components/Best'

  export default {
    data() {
      return {
        isLogin: false,
        isEdit: false,
        cartList2: [],
        cartList: [
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
            "cartNum": this.$store.getters.num
          },
          {
            "_id": {
              "$oid": "58c284d7117a2e6599abef5e"
            },
            "productId": "201710004",
            "productName": "头戴式耳机-3",
            "salePrice": 80,
            "productImage": "2.jpg",
            "productNum": 98,
            "isChecked": false,
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
      isShowList() {
        return this.isLogin && this.cartList.length>0;
      },
      checkedCount() {
        let num = 0;

        this.cartList.forEach(item => { if (item.isChecked) num++; });
        return num;
      },
      isAllChecked() {
        return this.cartList.length === this.checkedCount;
      },
      totalPrice() {
        let money = 0;

        this.cartList.forEach(item => { if (item.isChecked) money+=item.salePrice*item.cartNum; });
        return money;
      },
      totalNum() {
        let num = 0;

        this.cartList.forEach(item => { if (item.isChecked) num+=item.cartNum; });
        return num;
      }
    },
    methods: {
      editCart(flag, item) {
        if (flag === 'minu' && item.cartNum>1) {
          item.cartNum--;
          item.productNum++;
          item.isChecked = true;
        } else if (flag === 'add' && item.productNum>0) {
          item.cartNum++;
          item.productNum--;
          item.isChecked = true;
        }
      },
      toggleCheckAll() {
        let isAllChecked = !this.isAllChecked;
        this.cartList.forEach(item=>{ item.isChecked = isAllChecked; });
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

  $check-out-height: 50px;

  .cart {
    .checked {
      color: $color-theme;
    }

    .showLogin {
      @include box-position;
      @include onepx-y('bottom', $color-border);
      background-color: $color-box-bgc;
      div {
        @include child-center;
        flex-direction: column;
        padding: $outer-between*2;
        .tip {
          color: $color-l-font;
          margin-bottom: $inner-between*2;
        }

      }
    }

    .showCart {
      @include box-position(40px);
      .null {
        @include child-center;
        @include onepx-y('bottom', $color-border);
        background-color: $color-box-bgc;
        flex-direction: column;
        padding: $outer-between*2;
        .tip {
          color: $color-l-font;
          margin-bottom: $inner-between*2;
        }

        .btnBox {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }
      }

      .notNull {
        ul {
          li {
            @include onepx-yy($color-border);
            width: 100%;
            display: flex;
            margin-top: $inner-between;
            padding: $outer-between/2;
            background-color: $color-box-bgc;
            box-sizing: border-box;
            .check {
              flex: 1;
              @include child-center;
            }

            .wrapper {
              flex: 9;
              display: flex;
              .image {
                flex: 3;
                padding: $inner-between/2;
                div {
                  @include square-img;
                  border: 1px solid $color-l-border;
                }
              }

              .info {
                flex: 7;
                display: flex;
                flex-direction: column;
                padding: $inner-between/2;
                .name {
                  @include ellipsis(2);
                  color: $color-md-font;
                  font-size: $font-14px;
                }

                .type {
                  @include ellipsis;
                  flex: 1;
                  color: $color-l-font;
                  font-size: $font-12px;
                  padding-top: $inner-between/2;
                }

                .other {
                  @include child-center('y');
                  .price {
                    flex: 1;
                    color: $color-price;
                    font-size: $font-16px;
                    font-weight: bold;
                  }

                  .numEdit {
                    display: flex;
                    border: 1px solid $color-border;
                    border-radius: 5px;

                    a, span {
                      color: $color-d-font;
                      width: 1.5rem;
                      height: 1.5rem;
                      text-align: center;
                      line-height: 1.5rem;
                    }

                    a:first-child {
                      border-right: 1px solid $color-border;
                    }

                    a:last-child {
                      border-left: 1px solid $color-border;
                    }

                    .disabled {
                      color: $color-ml-font;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .check-out {
      bottom: 55px;
      background-image: none;
      .wrapper {
        @include onepx-y('bottom', $color-border);
        width: 100%;
        height: $check-out-height;
        display: flex;
        .all {
          flex: 2;
          font-size: $font-14px;
          color: $color-n-font;
          @include child-center;
        }

        .paying {
          display: flex;
          flex: 8;

          .total {
            @include child-center;
            flex: 6;
            color: $color-d-font;
          }

          .btn {
            height: $check-out-height;
            line-height: $check-out-height;
            flex: 4;
            background-color: $color-theme;
            color: #fff;
            font-size: $font-18px;
            .num {
              font-size: $font-12px;
            }
          }
        }

        .editing {
          flex: 8;
          @include child-center('y');
          justify-content: flex-end;
          .btn {
            margin-right: $inner-between;
          }
        }
      }
    }

    .best {
      @include box-position(40px);
    }
  }
</style>
