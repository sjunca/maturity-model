<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');
html
{
  font-family: Roboto, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.btn-holder {
    margin: 45px auto 30px;
    display: block;
}
.microsite-btn {
    width: 300px;
    font-size: 1em;
    color: #fff;
    border: 3px solid #3b4;
    background: #3b4;
    text-decoration: none;
    padding: 10px 50px;
    border-radius: 5px;
}
.microsite-btn:hover, .microsite-btn:focus {
    background: #fff;
    color: #3b4;
    text-decoration: none;
}
</style>
