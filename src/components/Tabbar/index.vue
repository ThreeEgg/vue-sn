<template>
    <div class="tabbar">
        <Item
            v-for="tabbar in tabbars"
            :key="tabbar.id"
            :name="tabbar.name"
            :icon="tabbar.icon"
            :title="tabbar.title"
            :sel="selected"
        ></Item>
    </div>
</template>

<script>
import Item from "./Item"
export default {
    data(){
        return {
            tabbars:[
                {id:1,name:"enjoy",icon:"heart-o",title:"猜你喜欢"},
                {id:2,name:"category",icon:"calendar-minus-o",title:"分类"},
                {id:3,name:"list",icon:"list-alt",title:"必抢清单"},
                {id:4,name:"cart",icon:"cart-plus",title:"购物车"},
                {id:5,name:"mine",icon:"user-o",title:"我的易购"},
            ],
            selected: this.$route.name
        }
    },
    components:{
        Item
    }
}
</script>

<style lang="scss">
    .tabbar{
        width: 100%;
        height: 50px;
        background: #fff;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
