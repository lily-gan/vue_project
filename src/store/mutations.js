import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPLIST,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, address){
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPLIST] (state, shopList) {
    state.ShopList = shopList
  },
  [RECEIVE_USER] (state, user) {
    state.user = user
  },
  [RESET_USER](state){
    state.user={}
  }
}
