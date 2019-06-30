<template>
    <div class="enjoy">
        <SortHead></SortHead>
        <Banner></Banner>
        <Menu></Menu>
        <div class="love">
            <div>
                <i class="fa fa-heart"></i>
                <span>猜你喜欢</span>
                <i class="fa fa-heartbeat"></i>
            </div>
        </div>
        <GoodBox></GoodBox>
        <BackTop></BackTop>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from "@/components/Tabbar"
import SortHead from "./SortHead"
import Banner from "@/components/Banner"
import Menu from "./Menu"
import GoodBox from "./GoodBox"
import BackTop from "@/components/BackTop"
export default {
    components:{
        Tabbar,SortHead,Banner,Menu,GoodBox,BackTop

    }
}
</script>

<style lang="scss">
    .enjoy{
        .love{
            width:100%;
            height:50px;
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                display: flex;
                i{
                    line-height:20px;
                    margin:0 10px;
                }
            }
        }
    }
    
</style>
