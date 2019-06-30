<template>
    <div :class="['sort-head',{bg:isBg}]">
        <div class="left">
            <i class="fa fa-calendar-minus-o"></i>
            <span>分类</span>
        </div>
        <div class="center">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="这里是三组的搜索框">
        </div>
        <div class="right">
            <span>登录</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isBg:false
        }
    },
    methods: {
        scrollBg(){
            var sTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(sTop > 0 && !this.isBg){
                this.isBg = true;
            }else if(sTop == 0 && this.isBg){
                this.isBg = false;
            }
        }
    },
    created(){
        window.addEventListener("scroll",this.scrollBg);
    }
}
</script>

<style lang="scss">
    .sort-head{
        width:100%;
        height:40px;
        position: fixed;
        top:0;
        z-index:10;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .left{
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i{
                font-size: 18px;
                color:#fff;
            }
            span{
                font-size: 12px;
                color:#fff;
            }
        }
        .center{
            width:2.6rem;
            height:28px;
            position: relative;
            input{
                width:2.6rem;
                height:28px;
                border:0;
                border-radius: 15px;
                outline: none;
                text-indent: 24px;
                color:rgb(117,117,117);
            }
            i{
                position: absolute;
                top:6px;
                left:5px;
                color:rgb(213,213,213);
            }
        }
        .right{
            span{
                color:#fff;
                font-size: 14px;
            }
        }
    }
    .bg{
        background: rgb(255,189,0);
    }
</style>
