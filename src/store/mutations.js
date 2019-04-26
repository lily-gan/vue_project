import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPLIST
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
  }
}
