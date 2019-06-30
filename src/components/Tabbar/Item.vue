<template>
    <div class="item" @click="change">
        <i :class="['fa', 'fa-' + icon,{active:flag}]"></i>
        <span :class="{active:flag}">{{title}}</span>
    </div>
</template>

<script>
export default {
    props:["name","icon","title","sel"],
    methods: {
        change(){
            this.$router.push("/"+ this.name)
        }
    },
    computed: {
        flag(){
            if(this.name === this.sel){
                return true;
            }
            return false;
        }
    }
}
</script>

<style lang="scss">
    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .active{
            color:rgb(255,170,0);
        }
        i{
            color:rgb(51,51,51);
            font-size:24px;
        }
        span{
            color:rgb(51,51,51);
            font-size: 12px;
            display:block;
            margin-top:8px;
        }
    }
</style>
