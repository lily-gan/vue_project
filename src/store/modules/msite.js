import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPLIST} from "../mutation-types";
import {reqAddress, reqCategorys,reqShopList} from "../../api";

const state = {
  latitude: 28.10038, // 纬度
  longitude: 114.36867, // 经度
  address: {}, // 当前地址对象,
  categorys: [],//食品分类
  shopList: [],  //商家列表
}

const mutations = {
  [RECEIVE_ADDRESS](state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPLIST](state, shopList) {
    state.shopList = shopList
  },
}

const actions = {
  async getAddress({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },
  async getCategorys({commit}) {
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
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
