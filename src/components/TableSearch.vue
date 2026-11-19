<template>
  <!-- 封装form响应式表单 -->
  <!-- <div> -->
  <el-form :model="formData" label-width="80px" label-position="right">
    <el-row :gutter="20">
      <template v-for="item in props.formItem" :key="item.prop">
        <el-form-item :label="item.label" :prop="item.prop">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <component
              v-model="formData[item.prop]"
              :is="componentType(item.type)"
              :placeholder="item.placeholder"
            >
              <template v-if="item.type === 'select'" >
                <el-option label="全部" value="" />
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </template>
            </component>
          </el-col>
        </el-form-item>
      </template>
    </el-row>
    <el-button type="primary" @click="handleSearch">查询</el-button>
    <el-button type="primary" @click="handleReset">重置</el-button>
  </el-form>
  <!-- </div> -->
</template>
<script setup>
import { defineProps, ref, defineEmits } from 'vue'
// defineModel 用于定义响应式的表单数据对象
const props = defineProps({
  formItem: {
    type: Array,
    default: () => []
  }
})
const emits = defineEmits(['submit'])

const componentType = (comp) => {
  return {
    input: 'el-input',
    select: 'el-select'
  }[comp]
}
const formData = ref({})

const handleSearch = () => {
  console.log('提交表单数据:', formData.value)
}
const handleReset = () => {
  formData.value = {}
  console.log('重置表单数据:', formData.value)
}
</script>
