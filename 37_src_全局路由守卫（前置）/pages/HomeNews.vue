<template>
    <ul>
        <li :style="{opacity}">欢迎学习VUE</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name:'HomeNews',
    components: {},
    data() {
        return {
            opacity: 1
        }
    },
    methods: {
        
    },
    // mounted() {
    //     this.timer = setInterval(() => {
    //         this.opacity -= 0.01;
    //         if(this.opacity <= 0) {
    //             this.opacity = 1;
    //         }
    //     }, 16);
    // },
    // beforeDestroy() {
    //     console.log('news组件销毁了');
    //     clearInterval(this.timer);
    // },

    // activated和deactivated是专门为keep-alive组件设计的，
    // 当组件被keep-alive包裹时，activated和deactivated会被调用
    activated() {
        console.log('news组件被激活了')
        this.timer = setInterval(() => {
            this.opacity -= 0.01;
            if(this.opacity <= 0) {
                this.opacity = 1;
            }
        }, 16);
    },
    deactivated() {
        console.log('news组件被失活了')
        clearInterval(this.timer);
    },
}
</script>

<style>

</style>