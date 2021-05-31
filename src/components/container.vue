<template>
    <div class="el-container">
        <el-header/>
        <slot></slot>
        <el-footer/>
    </div>
</template>

<script>
import Header from './header.vue';
import Footer from './footer.vue';
export default {
    components :{
        'el-header' : Header,
        'el-footer' : Footer
    }
}
</script>
