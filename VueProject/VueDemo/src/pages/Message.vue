<template>
    <div>
        <ul>
       <li v-for="item in message" :key="item.id">
           <router-link :to="`/home/message/detail/${item.id}`" >{{item.name}}</router-link>
           <button @click="push(item.id)">PUSH</button>
           <button @click="replace(item.id)">REPLACE</button>
       </li>
       <button @click="$router.back()">回退</button>
       <!-- <router-link to="/home/message/detail/1">hhh</router-link> -->
       <router-view></router-view>
    </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message:[
                {
                    id:1,
                    name:`123`,
                    age:17
                },
                {
                    id:2,
                    name:'sb2',
                    age:17
                }
            ]
        }
    },
    methods:{
        push(id){
            this.$router.push(`/home/message/detail/${id}`)
        },
        replace(id){
            this.$router.push(`/home/message/detail/${id}`)
        }
    }
}
</script>

<style>

</style>