<template>
    <div class="header">
        <div class="frame">
            <img src="~assets/SpheraLogo2018_Gray.png">
            <a href="https://sphera.com">Back to Sphera.com</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
    .header {
        width: 100%;
        margin: 0 auto;
        padding: 15px 10px;
        background: #fff;
        position: relative;
    }
    .frame {
        width: 95%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .frame img {
        height: 55px;
    }
    .frame a {
        text-align: center;
        color: #1d1d1d;
        border: 2px solid rgba(0,0,0,0.6);
        border-radius: 5px;
        padding: 10px 15px;
        text-decoration: none;
    }
    .frame a:hover, .frame a:active, .frame a:focus {
        background: rgba(0,0,0,0.2);
    }
    .header::after {
        content: "";
        position: absolute;
        background: linear-gradient(to right, #3b4, #1a99d6);
        width: 100%;
        bottom: 0px;
        height: 5px;
        left: 0;
        z-index: 15;
    }
</style>