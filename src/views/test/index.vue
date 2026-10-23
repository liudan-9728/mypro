<template>
	<div class="test">
		<!--顶部 筛选项 和操作按钮 -->
		<div class="select-container">
			<el-select v-model="searchForm.priority" placeholder="请选择" style="width: 200px; margin-right: 16px">
				<el-option v-for="item in priorityList" :key="item.value" :label="item.label" :value="item.value"> </el-option>
			</el-select>
			<!-- 查询 重置 -->
			<!-- <el-button type="primary" @click="handleSearch">查询</el-button> -->
			<el-button @click="handleReset">重置</el-button>
		</div>
		<div class="select-container">
			<el-button type="primary" @click="handleClickAdd">新增{{ dialogFormVisible }}</el-button>
		</div>

		<div class="card-container">
			<div v-for="item in data" :key="item.id" class="card-item">
				{{ item.title }}
				<el-popconfirm title="确定要删除吗？" @confirm="handleDelete(item.id)">
					<template #reference>
						<el-icon :size="20">
							<Delete />
						</el-icon>
					</template>
				</el-popconfirm>
				<el-icon :size="20" @click="handleClickAdd(item)">
					<Edit />
				</el-icon>
			</div>
		</div>
	</div>
	<div>底部底部底部底部底部底部底部底部底部底部底部底部底部底部底部底部底部底部</div>
	<addAndEidtDialog v-model:visible="dialogFormVisible" :item="dialogItem" :sublLading="sublLading" :priorityList="priorityList" @submit="handleDialogSubmit" />
</template>
<script lang="ts" setup>
import testHooks from '../../components/hooks/testHooks'
import { Delete, Edit } from '@element-plus/icons-vue'
import addAndEidtDialog from '@/components/addAndEidtDialog/index.vue'

const {
	data,
	priorityList,
	sublLading,
	dialogFormVisible,
	handleClickAdd,
	searchForm,
	// confirmEvent,
	handleSearch,
	handleReset,
	handleDialogSubmit,
	handleDelete,
	dialogItem
} = testHooks()
</script>
<style scoped>
@import './index.css';
</style>
