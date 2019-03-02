/**
 * 加载中loading
 */
<template lang="html">
    <transition name="toast">
        <div class="loading-wrap" v-show="show">
            <div class="loading-box"></div>
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
    }
}
</script>

<style lang="scss" scoped>
$circleWidth: .1rem;
$circleColor: rgba(255,255,255,.8);
$circleSpeed: .6s;
.loading-wrap{
    @include flex-center
    width: 1rem;
    height: 1rem;
    box-sizing: border-box;
    background-color: rgba(0,0,0,.3);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: .1rem;
    color: #fff;
}
.loading-box{
    border: $circleWidth solid $circleColor;
    border-right-color: transparent;
    border-radius: 50%;
    width: .5rem;
    height: .5rem;
    animation: rotate $circleSpeed ease infinite;
}
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.toast-enter-active{
    animation: fade-in .2s ease;
}
.toast-leave-active{
    animation: fade-in .2s ease reverse;
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
