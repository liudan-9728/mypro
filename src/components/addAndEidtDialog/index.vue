<template>
	<el-dialog v-model="dialogFormVisible" :title="title" width="500">
		<el-form :model="form">
			<el-form-item label="名称" :label-width="formLabelWidth">
				<el-input v-model="form.title" autocomplete="off" />
			</el-form-item>
			<el-form-item label="描述" :label-width="formLabelWidth">
				<el-input v-model="form.description" autocomplete="off" />
			</el-form-item>
			<el-form-item label="负责人" :label-width="formLabelWidth">
				<el-input v-model="form.assignee" autocomplete="off" />
			</el-form-item>
			<el-form-item label="优先级" :label-width="formLabelWidth">
				<el-select v-model="form.priority" placeholder="请选择" style="width: 200px; margin-right: 16px">
					<el-option v-for="item in priorityList" :key="item.value" :label="item.label" :value="item.value"> </el-option>
				</el-select>
			</el-form-item>
		</el-form>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="handleCancel">取消</el-button>
				<el-button type="primary" @click="handleConfirm" :loading="sublLading"> 确认 </el-button>
			</div>
		</template>
	</el-dialog>
</template>
<script lang="ts" setup>
import { ref, defineProps, watch, defineEmits, computed } from 'vue';

const props = defineProps({
	visible: {
		type: Boolean,
		dsefault: false
	},
	priorityList: {
		type: Array,
		default: () => []
	},
	item: {
		type: null,
		default: () => ({})
	},
	sublLading: {
		type: Boolean,
		default: false
	}
});
const emit = defineEmits(['update:visible', 'submit']);
const dialogFormVisible = computed({
	get() {
		return props.visible;
	},
	set(value) {
		emit('update:visible', value);
	}
});
const title = computed(() => (props.item?.id ? '编辑' : '新增'));

const form = ref({
	title: '',
	description: '',
	assignee: '',
	priority: ''
});
const formLabelWidth = '120px';

const handleCancel = () => {
	dialogFormVisible.value = false;
};
const handleConfirm = () => {
	dialogFormVisible.value = false;
	emit('submit', form.value);
	resetForm();
};
// 清空表单数据
const resetForm = () => {
	form.value = {
		title: '',
		description: '',
		assignee: '',
		priority: ''
	};
};
watch(
	() => props.item,
	(newItem) => {
		if (newItem && newItem.id) {
			form.value = { ...newItem };
		} else {
			resetForm();
		}
	},
	{ immediate: true }
);
</script>
