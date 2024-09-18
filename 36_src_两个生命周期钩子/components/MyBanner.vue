<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="gobackPages">后退</button>
            <button @click="forwardPages">前进</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyBanner",
    methods: {
        gobackPages(){
            // this.$router.back();
            this.$router.go(-1);
        },
        forwardPages(){
            // this.$router.forward();
            this.$router.go(1);
        }
    }
}
</script>

<style>

</style>