<template>
    <div>
  <section class="container">
    <div class="left-background"></div>
    <div class="right-home-section">
      <div class="svg-bg">
        <img src="~/assets/PS.svg">
      </div>
      <div class="text-content">
        <h1>Product Stewardship</h1>
        <h2>Maturity Model Self-Assessment Tool</h2>
        <p class="subtitle"><strong>Sphera helps businesses improve decision-making and performance with an integrated view of their unique risk portfolio.</strong></p>
        <p>Over the past decade, product stewardship information management has become increasingly complex with the introduction of a slew of new and evolving regulations and a far higher profile awarded to socio-environmental concerns raised by customers and consumers. Today, the management of product stewardship requires coordination of various functions ranging from supply chain and procurement to product design and engineering as well as fit-for-purpose systems for the management of data, workflows and processes.</p>
        <p>This online self-assessment provides directors of product stewardship, product compliance and materials traceability with an overview of the five stages of maturity for product stewardship information management. As organizations learn to better manage their product stewardship efforts, they must adopt stronger management discipline across eight distinct dimensions which will be diagnosed. For firms looking to strengthen their product stewardship activities, this tool will provide a framework to help you self-assess your maturity phase, identify opportunities for further performance improvement and highlight several examples that illustrate best practices for product stewardship.</p>
        <div class="btn-holder">
          <nuxt-link to="self-assessment/" class="microsite-btn">Start Your Self-Assessment</nuxt-link>
        </div>
      </div>
    </div>
  </section>
      <PSResources></PSResources>
      <Footer />
    </div>
</template>

<script>
    import axios from 'axios'
    import PSResources from '~/components/PSResources'

    export default {
        components: {
            PSResources
        },
        data() {
            return {
            }
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
    justify-content: flex-start;
    align-content: center;
    background: #f5f5f5;
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
    min-height: 85vh;
    background: url('~/assets/Ps-Hero.jpg') 50% 50% no-repeat;
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
    width: 800px;
  }
  .right-home-section .text-content .subtitle {
    width: 500px;
    max-width: 90%;
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
