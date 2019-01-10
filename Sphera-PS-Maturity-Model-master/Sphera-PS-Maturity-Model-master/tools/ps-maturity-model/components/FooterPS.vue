<template>
    <div class="inspire-footer">
        <div class="inspire-bottom-footer inspire-subnav">
            <div class="inspire-footer-divider"></div>
            <div class="footer-social">
                <ul>
                    <li><a target="_blank" href="https://www.linkedin.com/company/sphera" class="fa fa-linkedin"></a></li>
                    <li><a target="_blank" href="https://twitter.com/SpheraSolutions" class="fa fa-twitter"></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/SpheraSolutions/" class="fa fa-facebook"></a></li>
                    <li><a target="_blank" href="https://plus.google.com/112498098458005463037" class="fa fa-google-plus"></a></li>
                </ul>
                <p>Copyright &copy; 2018 <a href="https://sphera.com">Sphera. </a> <span id="copyright-mobile-hide">All rights reserved. / <a href="https://sphera.com/cookies-policy/">Cookies Policy</a> / <a href="https://sphera.com/data-processing-policy/">Data Processing Policy</a></span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
    .inspire-footer {
        width: 100%;
        background: #fff;
        padding: 0;
        margin: 0 auto;
        position: relative;
        z-index: 5;
    }
    .inspire-footer .inspire-footer-divider {
        width: 1400px;
        max-width: 90%;
        height: 2px;
        background: #9b9b9b;
        margin: 10px auto;
        opacity: 0.45;
    }
    .inspire-footer .inspire-bottom-footer {
        padding: 20px 10px;
        width: 100%;
        margin: 0 auto;
        background: #f5f5f5;
    }
    .inspire-footer .inspire-bottom-footer .inspire-subnav-holder h4 {
        color: #4a4a4a;
    }
    .inspire-footer .inspire-bottom-footer .inspire-subnav-holder ul a {
        background: none;
        border: none;
        color: #4a4a4a;
    }
    .inspire-footer .inspire-bottom-footer .inspire-subnav-holder ul a:hover {
        background: none;
        border: none;
        color: #4a4a4a;
        opacity: 0.7;
    }
    .inspire-footer .inspire-footer-form-holder p {
        width: 575px;
        max-width: 100%;
        text-align: center;
        margin: 15px auto 25px;
    }
    .inspire-footer .inspire-footer-form-holder form {
        width: 287px;
        margin: 0 auto;
    }
    .inspire-footer .inspire-footer-form-holder form input {
        width: 240px;
        display: inline-block;
        margin: 0;
        border: none;
        font-size: 16px;
        height: 40px;
        vertical-align: top;
        padding-left: 10px;
        border-radius: 3px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: 1px solid #969495;
        border-right: 0;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);
    }
    .inspire-footer .inspire-footer-form-holder form input::placeholder {
        color: #848484;
        font-weight: bold;
        opacity: 0.55;
        letter-spacing: 0.4px;
    }
    .inspire-footer .inspire-footer-form-holder form button {
        display: inline-block;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin: 0;
        margin-left: -5px;
        height: 40px;
        vertical-align: top;
        border: 1px solid #969495;
        border-left: 0;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);
    }
    .inspire-footer .inspire-footer-form-holder img {
        width: 224px;
        margin: 35px auto 50px;
        display: block;
    }


    .inspire-footer .footer-social {
        width: 1400px;
        max-width: 100%;
        margin: 0 auto;
        padding: 10px 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .inspire-footer .footer-social ul {
        flex-grow: 2;
        min-width: 210px;
    }
    .inspire-footer .footer-social ul li {
        display: inline-block;
        margin: 0 10px;
    }
    .inspire-footer .footer-social p {
        color: #4a4a4a;
        line-height: 35px;
    }
    .inspire-footer .footer-social a {
        color: #4a4a4a;
        text-decoration: none;
    }
    .inspire-footer .footer-social a:hover {
        opacity: 0.6;
        text-decoration: none;
    }
    .inspire-footer .footer-social ul li .fa {
        color: #f5f5f5;
        text-decoration: none;
        font-size: 1.4em;
        height: 35px;
        width: 35px;
        line-height: 35px;
        background: #4a4a4a;
        border-radius: 100%;
        text-align: center;
    }
    .inspire-footer .footer-social ul li .fa:hover {
        color: #3b4;
        text-decoration: none;
        opacity: 1;
    }
    @media only screen and (max-width:969px) {
        .inspire-footer .footer-social {
            flex-direction: column;
        }
        .inspire-footer .footer-social ul {
            display: block;
            margin: 0 auto 20px;
        }
        .inspire-footer .footer-social p {
            text-align: center;
        }
    }
    @media only screen and (max-width:485px) {
        #copyright-mobile-hide {
            display: none;
        }
        .inspire-footer .footer-social {
            background: #053044;
            border: 0;
            padding-top: 5px;
        }
        .inspire-footer ul li .fa {
            color: #053044;
        }
        .inspire-footer .footer-social ul {
            margin: 20px auto
        }
    }

</style>