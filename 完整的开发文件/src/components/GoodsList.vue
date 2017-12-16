<template>
  <div class="goodsList">
    <ul>
      <li v-for="(item, index) in goods" :key="index">
        <router-link :to="'/goodsDetails?goodsId=' + item.productId" class="wrapper">
          <div class="image">
            <div><img :src="'/static/images/goods/' + item.productImage" alt="礼品图" /></div>
          </div>

          <mt-cell class="cell">
            <div class="info" slot="title">
              <p class="name">{{item.productName}}</p>
              <p class="spec">细则：**</p>
              <p class="label">库存：**</p>
            </div>

            <div class="price">￥{{item.salePrice}}</div>
          </mt-cell>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return {

      }
    },
    props: [ 'goods' ]
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .goodsList {
    .wrapper {
      width: 100%;
      display: flex;
      .image {
        flex: 3;
        &>div {
          @include square-img;
        }
      }
      .cell {
        flex: 7;
        background-image: none;
        .info {
          display: flex;
          flex-direction: column;
          height: 100%;
          &>p {
            padding: $outer-between/2 0;
          }

          .name {
            @include ellipsis(2);
            color: $color-md-font;
            font-size: $font-14px;
            font-weight: bold;
          }

          .spec {
            flex: 1;
            color: $color-d-font;
            font-size: $font-12px;
          }

          .label {
            color: $color-l-font;
            font-size: $font-12px;
          }
        }

        .price {
          color: $color-price;
        }
      }
    }
  }
</style>
