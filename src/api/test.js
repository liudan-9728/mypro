import axios from './axios'
import Mock from 'mockjs'

// 模拟一个用户数据的API
// Mock.mock('/api/user', {
//     'id|1-100': 1, // 生成1-100之间的随机数
//     'title': '@cname', // 名称 生成随机中文名
//     'description': '@cparagraph', //描述 生成随机中文段落
//     'assignee': '@cname', //负责人 生成随机中文名
//     'priority|0-2': 1, //优先级 生成0-2之间的随机数
// });

// 模拟一个用户数据的API
Mock.mock('/api/user', {
	'userId|1-100': 1, // 生成1-100之间的随机数
	userName: '@cname', // 生成随机中文名
	'age|18-30': 1, // 生成18-30之间的随机数
	email: '@email' // 生成随机邮箱
})

const fetchGetUser = (data) => {
	return axios.post('api/getUser', data)
}

export {  fetchGetUser }
