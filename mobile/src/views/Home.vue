<template lang="html">
    <div>
        <h1></h1>
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
        this.$ajax.get('orders/list',)
        .then(res=>{
            console.log(res)
        })
    }
}
</script>

<style lang="scss">

</style>
