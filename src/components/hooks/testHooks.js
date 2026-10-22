import { ref, onMounted, watch } from 'vue';
import { testDate, priorityData } from '@/api/mock';

const testHooks = () => {
	const data = ref([]);
	const priorityList = ref([]);
	const dialogFormVisible = ref(false);
	const dialogItem = ref(null);
	const sublLading = ref(false);

	const searchForm = ref({
		priority: -1 // 默认选择全部
	});
	const dialogForm = ref({
		title: '',
		assignee: '',
		priority: -1
	});
	const handleClickAdd = (item) => {
		dialogItem.value = item.id ? { ...item } : null;
		dialogFormVisible.value = true;
	};
	const handleSearch = () => {
		// 过滤data中 searchForm.priority相等的数据
		// const filteredData = testDate.filter(item => item.priority === searchForm.value.priority) // 过滤条件
		// data.value = filteredData
	};
	const handleReset = () => {
		searchForm.value.priority = -1;
		data.value = testDate;
	};

	const handleDelete = (id) => {
		const index = data.value.findIndex((item) => item.id === id);
		if (index !== -1) {
			data.value.splice(index, 1);
			data.value = [...data.value]; // 触发视图更新
			console.log('Deleted item with id:', id);
		}
	};

	const getMockData = async () => {
		try {
			// 1秒后获取模拟数据 data
			setTimeout(() => {
				data.value = testDate;
				console.log('Mock data fetched:', data.value);
			}, 1000);
		} catch (error) {
			console.error('Error fetching mock data:', error);
		}
	};
	const getPriorityData = async () => {
		try {
			// 1秒后获取模拟数据 priorityData
			setTimeout(() => {
				priorityList.value = priorityData;
				console.log('Mock priority data fetched:', priorityList.value);
			}, 1000);
		} catch (error) {
			console.error('Error fetching mock priority data:', error);
		}
	};

	const handleDialogSubmit = async (formData) => {
		sublLading.value = true;
		// 模拟提交数据到后端

		// 根据dialogItem的值判断是新增还是编辑
		if (dialogItem.value !== null) {
			// 编辑操作
			const index = data.value.findIndex((item) => item.id === dialogItem.value.id);
			if (index !== -1) {
				// console.log('11', dialogItem.value)
				data.value[index] = { ...formData, id: dialogItem.value.id }; // 保留原来的id
				console.log('Updated item:', data.value[index]);
			}
		} else {
			testDate.push({ ...formData, id: Date.now() }); // 使用时间戳作为id
			console.log('Added new item:', formData);
		}

		setTimeout(() => {
			sublLading.value = false;
			dialogFormVisible.value = false;
			dialogItem.value = null;
		}, 2000);
	};

	watch(searchForm.value, (newVal) => {
		const filteredData = testDate.filter((item) => item.priority === newVal.priority || newVal.priority === -1); // 过滤条件
		data.value = filteredData;
	});

	onMounted(() => {
		getMockData();
		getPriorityData();
	});

	return {
		data,
		priorityList,
		sublLading,
		handleDelete,
		// confirmEvent,
		dialogFormVisible,
		handleClickAdd,
		searchForm,
		handleSearch,
		handleReset,
		handleDialogSubmit,
		dialogItem
	};
};
export default testHooks;
