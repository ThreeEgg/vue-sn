<template>
    <div class="menu-item">
        <div class="imgbox">
            <img :src="getImages(imgSrc)" alt="">
        </div>
        <span>苏宁{{title}}</span>
    </div>
</template>

<script>
import getImages from "@/modules/util-getImages"
export default {
    props:["title","imgSrc"],
    methods:{
        getImages
    }
}
</script>

<style lang="scss">
    .menu-item{
        width:20%;
        height:80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .imgbox{
            width:40px;
            height:40px;
            overflow: hidden;
            border-radius: 50%;
            img{
                width:100%;
            }
        }
        span{
            color:rgb(51,51,51);
            font-size:14px;
        }
    }
</style>
