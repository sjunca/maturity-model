<template>
    <div>
        <h1>This link is no longer available.</h1>
    </div>
</template>

<script>
    export default {
        name: "index",
        mounted: function() {
            // else previous page params url var oldURL = document.referrer;
            // var oldURL = document.referrer;
            // console.log(this.$router.go(-1));
            // if route query id is not empty or undefined
            if (this.$route.query.id !== undefined) {
                this.$router.push(this.$route.query.id);
            } else if (this.$route.query.id == undefined) {
                console.log('help')
            }
        }
    }
</script>

<style scoped>
    h1 {
        padding: 50px;
        text-align: center;
    }
</style>