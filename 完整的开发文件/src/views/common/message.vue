<template>
  <!--消息-->
  <div class="message">
    <!--顶部-->
    <div class="header">
      <mt-header fixed title="消息">
        <mt-button icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
      </mt-header>
    </div>

    <!--选项卡-->
    <mt-navbar class="nav" v-model="selected">
      <mt-tab-item id="1">通知</mt-tab-item>
      <mt-tab-item id="2">优惠</mt-tab-item>
      <mt-tab-item id="3">互动</mt-tab-item>
    </mt-navbar>

    <!--选项内容-->
    <mt-tab-container v-model="selected" class="container">
      <mt-tab-container-item id="1">
        <div class="cont" >
          <div class="time">
            <span>2017年1月1日</span>
          </div>

          <div class="box">
            <div>
              <p class="title">礼券使用通知</p>
              <p class="content">您的***礼券已被收礼人于**年**月**日 12:00:00成功接受！</p>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="(n, index) in 4" :title="'优惠 ' + n" :key="index" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(n, index) in 6" :title="'互动 ' + n" :key="index" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        selected: '1'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/scss/const.scss';
  @import '~@/assets/scss/mixin.scss';

  .message {
    .nav {
      @include box-position;
      margin-bottom: 10px;
    }

    .container {
      @include box-position;
      .cont {

        @include child-center;
        flex-direction: column;
        .time {
          padding-top: $outer-between;
          span {
            background-color: $color-l-font;
            color: #fff;
            border-radius: 5px;
            padding: $inner-between/2;
          }
        }

        .box {
          padding: $outer-between;
          div {
            background-color: $color-box-bgc;
            border-radius: 5px;
            padding: $inner-between;
            .title {
              @include onepx-y('bottom', $color-border);
              font-weight: bold;
            }

            .content {
              padding-top: $inner-between;
            }
          }
        }
      }
    }
  }

</style>
