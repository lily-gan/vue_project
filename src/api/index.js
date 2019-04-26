import ajax from './ajax.js'

const BASE = '/api'
//  根据经纬度获取位置详情
export const reqAddress = (longitude,latitude) =>ajax(BASE +`/position/${latitude},${longitude}`)
//  请求商品分类列表
export const reqCategorys = () => ajax(BASE + `/index_category`)
//  请求商家列表
export const reqShopList = ({longitude, latitude}) => ajax(BASE + '/shops', {longitude, latitude})
