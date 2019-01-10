<template>
  <section class="container">
      <div class="left-background"></div>
      <div class="right-home-section">
          <div class="svg-bg">
              <img src="~/assets/PS.svg">
              <img src="/tools/ps-maturity-model/assets/PS.svg">
          </div>
          <div class="text-content">
            <h1>Product Stewardship</h1>
            <h2>Maturity Model Self-Assessment Tool</h2>
            <p>Sphera helps businesses improve decision-making and performance with an integrated view of their unique risk portfolio.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus porttitor arcu non fringilla. Sed dictum sit amet arcu eget lacinia. Nullam commodo gravida ex, a placerat dolor efficitur tincidunt. Suspendisse viverra quis tortor non mollis. Donec ac ante quis turpis pharetra tristique. </p>
            <div class="btn-holder">
                <nuxt-link to="maturity-self-assessment/" class="microsite-btn">Start Your Self-Assessment</nuxt-link>
            </div>
          </div>
      </div>
  </section>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>
    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .container p {
        font-size: 16px;
        line-height: 1.5;
        color: #4a4a4a;
        margin: 15px 0;
        font-weight: 500;
    }
    .left-background {
        width: 500px;
        max-width: 30%;
        height: 100vh;
        background: url('~/assets/Ps-Hero.jpg') 50% 50% no-repeat;
        background: url('~/tools/ps-maturity-model/assets/Ps-Hero.jpg') 50% 50% no-repeat;
        background-size: cover;
    }
    .right-home-section {
        width: calc(100% - 500px);
        max-width: 75%;
        padding: 100px 20px;
        background: #f5f5f5;
    }
    .right-home-section .svg-bg {
        padding: 8px;
        background: #4697c8;
        margin: -15px 20px 20px;
        display: inline-block;
        border-radius: 100%;
        vertical-align: top;
    }
    .right-home-section .text-content {
        display: inline-block;
        max-width: 90%;
        width: 550px;
    }
    .right-home-section .text-content h1 {
        line-height: 1.26;
        color: #4697c8;
        font-weight: 700;
        font-size: 2.25em;
    }
    .right-home-section .text-content h2 {
        line-height: 1.26;
        color: #4a4a4a;
        font-weight: 300;
        font-size: 1.85em;
    }
    .right-home-section img {
        display: block;
        height: 55px;
        width: 55px;
    }
</style>
