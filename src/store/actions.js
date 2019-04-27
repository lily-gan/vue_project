import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPLIST,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'
import {
  reqAddress,
  reqCategorys,
  reqShopList,
  reqUser,
  reqLogout
} from '../api/'

export default {
  async getAddress({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },
  async getCategorys({commit, state}) {
    const {categorys} = state
    const result = await reqCategorys();
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },
  async getShopList({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShopList({longitude, latitude})
    if (result.code === 0) {
      const shopList = result.data
      commit(RECEIVE_SHOPLIST, shopList)
    }
  },
  async getUser({commit,state}){
    const {user} = state
    const result = await reqUser()
    if(result.code===0){
      const user = result.data
      commit(RECEIVE_USER,user)
    }
  },
  async logout({commit}){
    const result = await reqLogout();
    if(result.code === 0){
      commit(RESET_USER)
    }
  }
}
