/**
 * 黑色逐渐消失的文字提示层
 *
 */
<template lang="html">
    <transition name="toast">
        <div class="toast-wrap" v-show="show">
          <p>{{text}}</p>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Toast',
    data(){
        return {
            text: '',
            show: false
        }
    },
    computed:{

    },
    props:{

    },
    methods:{

    },
    mounted(){

    }
}
</script>

<style lang="scss" scoped>
    .toast-wrap{
        padding: .1rem .2rem;
        background-color: rgba(0,0,0,.3);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: .06rem;
        color: #fff;
    }
    .toast-enter-active{
        animation: fade-in .3s ease;
    }
    .toast-leave-active{
        animation: fade-in .3s ease reverse;
    }
    @keyframes fade-in{
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
