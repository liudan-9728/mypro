import Mock from 'mockjs'



const data1 =
    Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'data|1-10': [
            {
                'id|1-100': 1, // 生成1-100之间的随机数
                'title': '@cname', // 名称 生成随机中文名
                'description': '@cparagraph', //描述 生成随机中文段落
                'assignee': '@cname', //负责人 生成随机中文名
                'priority|0-2': 1, //优先级 生成0-2之间的随机数
            }
        ]
    });
 // 造一个mock数据 priority （全部/ 低 0/ 中 1/ 高2)
const priorityData =
    Mock.mock([
        { 'value': -1, 'label': '全部' },
        { 'value': 0, 'label': '低' },
        { 'value': 1, 'label': '中' },
        { 'value': 2, 'label': '高' }
    ])
      

// testDate反序列化后返回

const testDate = JSON.parse(JSON.stringify(data1.data))


export { testDate, priorityData };