<template>
    <div class="page-header">
        <p>{{props.title}}</p>
        
        <div class="page_header-btn" >
            <slot name="button"></slot>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    title:{
        type:String,
        default:''
    },
    showBtn:{
        type:Boolean,
        default:false
    }
})
</script>
<style scoped lang="scss">
.page-header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.page_header-btn{
    display: flex;
    align-items: center;
}
</style>