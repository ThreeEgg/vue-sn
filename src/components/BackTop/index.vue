<template>
    <div class="back-top" v-if="isShow" @click="backTop">
        <i class="fa fa-arrow-up"></i>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    methods: {
        backTop(){
            window.scrollTo(0,0);
        },
        handleEvent(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop;
            //console.log(sTop)
            if(sTop > 1600 && !this.isShow){
                this.isShow = true;
            }else if(sTop <= 1600 && this.isShow){
                this.isShow = false;
            }
        }
    },
    created(){
        window.addEventListener("scroll",this.handleEvent);
    }

}
</script>

<style lang="scss">
    .back-top{
        width:50px;
        height:50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background:rgba(51,51,51,0.6);
        position: fixed;
        z-index: 11;
        right:20px;
        bottom: 70px;
        border-radius: 50%;
        i{
            color:#fff;
            font-size: 20px;
        }
    }
</style>
