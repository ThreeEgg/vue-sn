<template>
    <div class="enjoy-banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                v-for="banner in banners"
                :key="banner.id"
            >
                <img :src="getImages(banner.images)" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
import getImages from "@/modules/util-getImages"
export default {
    data(){
        return {
            banners: [
                {id:1,title:"啦啦",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:2,title:"啦啦",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:3,title:"啦啦",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:4,title:"啦啦",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"}
            ]
        }
    },
    methods:{
        getImages
    },
    created(){
        /* this.$http.get("/api/db/in_theaters",{
            params: {
                limit:6
            }
        }).then(res=>{
            //console.log(res.data);
            this.banners = res.data.object_list; */
            this.$nextTick(()=>{
                new Swiper(".enjoy-banner",{
                    loop: true,
                    pagination:{
                        el: ".swiper-pagination"
                    }
                })
            })
            
        //})
    }
}

</script>

<style lang="scss">
    img{
        width:100%;
        height:4rem;
    }
</style>
