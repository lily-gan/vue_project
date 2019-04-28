import data from './data.json'  //data是js对象,内部已经解析处理过了
import Mock from 'mockjs'

Mock.mock('/goods',{code: 0, data:data.goods})
Mock.mock('/ratings',{code: 0, data:data.ratngs})
Mock.mock('/info',{code: 0, data:data.info})


console.log('请求成功');
