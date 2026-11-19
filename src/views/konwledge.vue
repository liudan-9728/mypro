<template>
  <div>
    <PageHeader title="知识文章">
      <template #button>
        <el-button type="primary" @click="addKnowledge">新增</el-button>
        <el-button type="primary" @click="addKnowledge">查询</el-button>
      </template>
    </PageHeader>
    <div>
      <TableSearch :formItem="formItem" @submit="handleSearch" />
    </div>
  </div>
</template>
<script setup >
import PageHeader from '@/components/PageHeader.vue'
import TableSearch from '@/components/TableSearch.vue'

const formItem = [
  {
    label: '文章标题',
    type: 'input',
    prop: 'title',
    placeholder: '请输入文章标题'
  },
  // {
  //   label: '文章分类',
  //   type: 'select',
  //   prop: 'category',
  //   placeholder: '请选择',
  //   options: [
  //     { label: '心理健康', value: 'psychology' },
  //     { label: '情绪管理', value: 'emotion' },
  //     { label: '压力缓解', value: 'stress' }
  //   ]
  // },
  {
    label: '文章标题1',
    type: 'input',
    prop: 'title',
    placeholder: '请输入文章标题'
  },
  {
    label: '文章标题2',
    type: 'input',
    prop: 'title',
    placeholder: '请输入文章标题'
  }
]

const handleSearch = (formData) => {
  console.log('查询条件:', formData)
}

const addKnowledge = () => {
  console.log('新增知识')
}
</script>
