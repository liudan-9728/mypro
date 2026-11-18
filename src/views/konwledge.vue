<template>
  <div>
    <PageHeader title="知识文章">
      <template #button>
        <el-button type="primary" @click="addKnowledge">新增</el-button>
        <el-button type="primary" @click="addKnowledge">查询</el-button>
      </template>
    </PageHeader>
    <div>neirong</div>
  </div>
</template>
<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'

const addKnowledge = () => {
  console.log('新增知识')
}
</script>
