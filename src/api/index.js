import ajax from './ajax.js'

const BASE = '/api'
//  根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`)
//  请求商品分类列表
export const reqCategorys = () => ajax(BASE + `/index_category`)
//  请求商家列表
export const reqShopList = ({longitude, latitude}) => ajax(BASE + '/shops', {longitude, latitude})
//  发送短信验证码
export const reqCode = (phone) => ajax(BASE + '/sendcode', {phone})
//  用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE + '/login_pwd', {name, pwd, captcha},'POST')
// 手机号验证码登录
export const resSmsLogin =({phone,code})=>ajax(BASE + '/login_sms',{phone,code},'POST')
//  根据会话获取用户信息
export const reqUser = ()=>ajax(BASE+'/userinfo')
//  退出登录
export const reqLogout= ()=>ajax(BASE+'/logout')
