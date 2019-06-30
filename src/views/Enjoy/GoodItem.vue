<template>
    <div class="good-item">
        <div class="imgbox">
            <img :src="getImages(imgSrc)" alt="">
        </div>
        <p class="description">{{description}}</p>
        <p class="price">￥<span>{{price}}</span></p>
    </div>
</template>

<script>
import getImages from "@/modules/util-getImages"
export default {
    props: ["imgSrc","description","price"],
    methods: {
        getImages
    }
}
</script>

<style lang="scss">
    .good-item{
        width:46%;
        background: #fff;
        .imgbox{
            width:100%;
            height:2.4rem;
            overflow: hidden;
        }
        .description{
            color:rgb(171,171,171);
            font-size:14px;
        }
        .price{
            color:rgb(255,103,0);
            font-size: 18px;
            span{
                color:red;
                font-size: 20px;
            }
        }
    }
    .good-item:nth-of-type(2n){
        margin-left:10px;
    }
</style>
