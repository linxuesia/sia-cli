<template lang="html">
    <div>
        <h1>home</h1>

        <p>
            <router-link :to="{ name: 'about', params: {} }" replace>去往下一页，再也回不来</router-link>
        </p>
        <p>
            <router-link :to="{ name: 'about', params: {} }">去往下一页，还可以回来</router-link>
        </p>

        <p>
            <router-link :to="{ name: 'about', params: {id: 1} }">带params参数</router-link>
        </p>
        <p>
            <router-link :to="{ path: '/about', query: {id: 1} }">带query参数</router-link>
        </p>

        <button @click="goto">去往下一页，再也回不来</button>

    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    components:{

    },
    methods:{
        goto(){
            this.$router.replace({
                name:'about'
            })
        }
    },
    computed:{

    },
    mounted(){
        // location.href = 'http://baidu.com'
    }
}
</script>

<style lang="scss">

</style>
