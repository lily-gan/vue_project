<template>
  <div>
    <ShopHeader/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
  import {reqGoods,reqRatings,reqInfo} from '../../api/'
  import {RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO} from '../../store/mutation-types'

  export default {
    components:{
      ShopHeader
    },
  async mounted(){
      const result = await Promise.all([reqGoods(),reqRatings(),reqInfo()])
      const goods = result[0].data
      const ratings = result[1].data
      const info = result[2].data;
      this.$store.commit(RECEIVE_GOODS,{goods})
      this.$store.commit(RECEIVE_RATINGS,{ratings})
      this.$store.commit(RECEIVE_INFO,{info})
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
