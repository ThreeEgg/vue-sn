<template>
    <div class="menu">

        <MenuItem
            v-for="menu in menus"
            :key="menu.id"
            :title="menu.title"
            :imgSrc="menu.images"
        ></MenuItem>
    </div>
</template>

<script>
import MenuItem from "./MenuItem"
export default {
    data(){
        return {
            menus: [
                {id:1,title:"啦啦",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:2,title:"啦啦",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:3,title:"啦啦",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:4,title:"哇啦",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:5,title:"三组",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:6,title:"二组",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:7,title:"是",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:8,title:"一家",images:"https://images.weserv.nl/?url=/img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.webp"},
                {id:9,title:"是",images:"https://images.weserv.nl/?url=/img3.doubanio.com/view/photo/s_ratio_poster/public/p2549523952.webp"},
                {id:10,title:"一家",images:"https://images.weserv.nl/?url=/img1.doubanio.com/view/photo/s_ratio_poster/public/p2551352209.webp"}
            ]
        }
    },
    components: {
        MenuItem
    },
    created(){
       /*  this.$http.get("/api/db/in_theaters",{
            params: {
                limit: 10
            }
        }).then(res=>{
            this.menus = res.data.object_list;
            //console.log(this.menus);
        }) */
    }
}
</script>

<style lang="scss">
    .menu{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
        background:#fff;
    }
</style>
