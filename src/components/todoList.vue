<template>
    <div id="demo1">
        <h1>{{msg}}</h1>
        <input type="text" v-model="newItem" @keyup.enter="addNew">
        <ul>
            <li v-for="item in items" :class="{ finished: item.isFinished }" v-on:click="toggleFinished(item)">
                {{item.label}}
            </li>
        </ul>
    </div>
</template>

<script>
    import Store from '../store.js';
    console.log(Store)
    export default {
        name: 'demo1',
        data() {
            return {
                msg: 'this is demo1-- todolist',
                items: Store.fetch(),
                newItem: [
    
                ]
            }
        },
        watch: {
            items: {
                handler: function(items) {
                    Store.save(items);
                },
                deep: true
            }
        },
        methods: {
            toggleFinished: function(item) {
                item.isFinished = !item.isFinished;
            },
            addNew: function() {
                if (this.newItem) {
                    this.items.push({
                        'label': this.newItem,
                        isFinished: false
                    })
                }
    
                //Store.save();  
    
                this.newItem = ''
            }
        }
    }
</script> 

<style scoped lang="less">
    h1 {
        padding: 0;
        margin: 0;   
    }
    
    .finished {
        text-decoration: underline
    }
</style>