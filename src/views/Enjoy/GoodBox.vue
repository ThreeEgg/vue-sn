<template>
    <div class="good-box"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <GoodItem
            v-for="good in goods"
            :key="good.id"
            :imgSrc="good.images"
            :description="good.title"
            :price="good.year"
        ></GoodItem>
        
    </div>
</template>

<script>
import GoodItem from "./GoodItem"
import { Toast } from 'mint-ui'
export default {
    data(){
        return{
            goods:[
                {id:1,title:"是",year:1231,images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:2,title:"一家",year:784,images:"https://images.weserv.nl/?url=/img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.webp"},
                {id:3,title:"是",year:1231,images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:4,title:"一家",year:784,images:"https://images.weserv.nl/?url=/img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.webp"},
                {id:5,title:"是",year:1231,images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:6,title:"一家",year:784,images:"https://images.weserv.nl/?url=/img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.webp"},
                {id:7,title:"是",year:1231,images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:8,title:"一家",year:784,images:"https://images.weserv.nl/?url=/img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.webp"},
                {id:9,title:"是",year:1231,images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:10,title:"一家",year:784,images:"https://images.weserv.nl/?url=/img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.webp"},
                {id:11,title:"是",year:1231,images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:12,title:"一家",year:784,images:"https://images.weserv.nl/?url=/img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.webp"}
            ],
            loading:false,
            limit:6,
            page:1,
            hasMore:true
        }
    },
    watch:{

    },
    components: {
        GoodItem
    },
    methods:{
        loadMore(){
            /* if(!this.hasMore){
                this.loading = true;
                Toast({
                    message: "我是有底线的...",
                    position: "bottom"
                },1500)
                return;
            }
            this.getGoods(); */
        },
        getGoods(){
            /* let {limit,page} = this;
            this.loading = true;
            let instance = Toast({
                message: '骚等..',
                iconClass: 'fa fa-spinner fa-pulse',
            },-1);
            this.$http.get("/api/db/in_theaters",{
                params: {
                    limit,
                    page
                }
            }).then(res=>{
                instance.close();
                this.loading = false;
                this.goods = this.goods.concat(res.data.object_list);
                if(this.limit * this.page >= res.data.total){
                    this.hasMore = false;
                    return;
                }
                this.page++;
            }) */
        } 
    },
    created(){
        
    }
}
</script>

<style lang="scss">
    .good-box{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom:60px;
    }
</style>
