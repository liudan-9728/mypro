import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStore = defineStore('store', () => {
  const isCollapse = ref(false)
  const count = ref(0)
  const handleCollapse = () => {
    isCollapse.value = !isCollapse.value
  }

  return {  isCollapse, handleCollapse }
})
