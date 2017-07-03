<template>
    <div class="nav">
        <ul class="tab-nav">
            <router-link to="/" tag="li">首页</router-link>
            <router-link to="todoList" tag="li">todoList</router-link>
            <router-link to="exam1" tag="li">exam1</router-link>
        </ul>
    </div>
</template>
<style>
    .tab-nav li{display: inline-block; margin : 20px;}
</style>
<script>
export default {
    name: 'nav'
}
</script>