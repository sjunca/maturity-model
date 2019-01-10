<template>
    <div class="main-microsite-wrap" id="app">
        <h1 style="text-align:center;max-width:100%;margin:0 auto;padding:30px 10px 10px;font-weight:700;color:#1d1d1d;font-size: 24px;">Additional Product Stewardship Resources</h1>
        <div id="posts-section">
            <div id="view-holder" class="tile-view">
                <article :class="['postclass-' + post.categories[0]]" v-for="post in posts">
                    <div class="post-content">
                        <a target="_blank" class="standard-content" v-if="post.acf.upcoming_webinar_link" v-bind:href="post.acf.upcoming_webinar_link">
                            <div class="post-flex">
                                <div v-if="post.fi_medium" class="post-featured-background fi_medium" v-bind:style="{ 'background-image': 'url(' + post.fi_medium + ')' }">
                                </div>
                                <div v-if="post.acf.exclusive_image" class="post-featured-background exclusive-e-book-img" v-bind:style="{ 'background-image': 'url(' + post.acf.exclusive_image + ')' }">
                                </div>
                                <div class="right-content">
                                    <h2 v-if="post.acf.exclusive_image" class="list-category">E-Book:</h2>
                                    <h2 v-else class="list-category">Blog:</h2>
                                    <h3 v-html="post.title.rendered"></h3>
                                    <!--                                        <h6>{{ post.clean_date }} <span v-if="post.acf.blog_post_author"> ─ </span>{{ post.acf.blog_post_author }}</h6>-->
                                    <div v-html="post.excerpt.rendered" class="excerpt"></div>
                                </div>
                            </div>
                        </a>
                        <a target="_blank" class="standard-content" v-else v-bind:href="post.link">
                            <div class="post-flex">
                                <div v-if="post.fi_medium" class="post-featured-background fi_medium" v-bind:style="{ 'background-image': 'url(' + post.fi_medium + ')' }">
                                </div>
                                <div v-if="post.acf.exclusive_image" class="post-featured-background exclusive-e-book-img" v-bind:style="{ 'background-image': 'url(' + post.acf.exclusive_image + ')' }">
                                </div>
                                <div class="right-content">
                                    <h2 v-if="post.acf.exclusive_image" class="list-category">E-Book:</h2>
                                    <h2 v-else class="list-category">Blog:</h2>
                                    <h3 v-html="post.title.rendered"></h3>
                                    <!--                                        <h6>{{ post.clean_date }} <span v-if="post.acf.blog_post_author"> ─ </span>{{ post.acf.blog_post_author }}</h6>-->
                                    <div v-html="post.excerpt.rendered" class="excerpt"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "PSResources",
        data() {
            return {
                posts: []
            }
        },
        mounted() {
                return  axios.get('https://sphera.com/wp-json/wp/v2/posts?tags=4220&per_page=3')
                    .then(res => (this.posts = res.data))}
    }
</script>

<style scoped>

    /***************************************** RESOURCES FILTERING SECTION FOR NOW ***********************************/
    #posts-section {
        padding: 0 0 50px;
        margin: 0 auto;
        background: #fff;
        z-index: 1;
        flex-grow: 2;
        width: 1215px;
        max-width: 100%;
        text-align: center;
    }
    #posts-section .list-view .post-featured-background {
        display: none;
    }
    #posts-section a {
        padding: 20px;
        margin: 20px 0;
        border-radius: 5px;
        background: #fff;
        color: #1d1d1d;
        display: block;
        width: 100%;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
        position: relative;
        width: 350px;
        display: inline-block;
        vertical-align: top;
        height: 100%;
        min-height: 450px;
    }
    #posts-section a img {
        display: block;
    }
    #posts-section .post-flex {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
    }
    #posts-section .tile-view .post-flex {
        flex-direction: column;
        justify-content: center;
    }
    #posts-section a .post-flex img {
        height: inherit;
        width: 100%;
        margin: 0 auto;
        display: block;
        text-align: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    #posts-section a:hover {
        text-decoration: none;
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);
    }
    #posts-section .tile-view a.standard-content:hover {
        text-decoration: none;
        background: none;
    }
    #posts-section .tile-view .postclass-622 a.standard-content:hover .right-content, #posts-section .tile-view .postclass-2396 a.standard-content:hover .right-content {
        text-decoration: none;
        background: none;
    }
    #posts-section .tile-view .postclass-622 a:hover, #posts-section .tile-view .postclass-2396 a:hover, #posts-section .tile-view .postclass-3829 a:hover {
        text-decoration: none;
        background: rgba(52, 152, 219,0.15);
    }
    #posts-section .tile-view article {
        display: inline-block;
        margin: 5px;
        vertical-align: top;
        width: 377px;
        max-width: calc(100% - 10px);
    }
    #posts-section .tile-view article a:first-child {
        padding: 5px;
    }
    #posts-section .tile-view article a {
        padding: 0;
        text-decoration: none;
    }
    #posts-section .tile-view article div:first-child {
        min-height: 230px;
        margin-right: 0;
        position: relative;
        text-align: left;
    }
    #posts-section .tile-view article .standard-content div:first-child {
        justify-content: flex-start;
    }
    #posts-section .tile-view article:first-child .standard-content .post-flex div .exclusive-e-book-img {
        min-width: 311px;
        max-width: 100%;
    }
    #posts-section .tile-view article:first-child .standard-content .post-flex div .right-content {
        min-width: 311px;
        max-width: 100%;
    }
    #posts-section .tile-view article .webinar-content .post-flex img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 95%;
    }
    #posts-section .tile-view article .post-flex .right-content {
        padding: 10px 5px;
    }
    #posts-section .pagination-holder .results-views .active-view i, #posts-section .pagination-holder .results-views .active-view:hover i {
        color: #1d1d1d;
    }
    #posts-section .btn {
        cursor: pointer;
    }
    #posts-section .btn.disabled, #posts-section .btn:disabled {
        cursor: initial;
    }
    #posts-section .loading {
        color: #cfcfcf;
        text-align: left;
        font-size: 70px;
    }
    #posts-section .postclass-5 .webinar-content, #posts-section .postclass-7 .webinar-content, #posts-section .postclass-1751 .videos-content, #posts-section .postclass-1752 .videos-content, #posts-section .postclass-1753 .videos-content, #posts-section .postclass-1754 .videos-content {
        display: block !important;
    }
    .loader-spin {
        -webkit-animation: fa-spin 1.2s infinite ease-out;
        animation: fa-spin 1.2s infinite ease-in-out;
        -webkit-text-stroke: 3px #fff;
    }
    @media only screen and (max-width:435px) {
        .microsite-btn {
            padding: 10px 50px;
        }
    }
    @media only screen and (max-width:350px) {
        .microsite-btn {
            font-size: 0.9em;
        }
    }
    #posts-section .post-flex div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 100%;
        margin: 0 auto;
    }
    #posts-section .post-flex .right-content h3 {
        font-size: 1.2em;
    }
    #posts-section .post-flex .right-content h2 {
        font-size: 1.35em;
        color: #4a4a4a;
        font-weight: 700;
    }
    #posts-section .tile-view .post-flex .right-content h3 {
        line-height: 1.2em;
        min-height: 3.6em;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #posts-section .post-flex .right-content .excerpt {
        display: block;
        color: #848484;
        overflow: hidden;
        position: relative;
        line-height: 1.2em;
        max-height: 6.0em;
    }
    #posts-section .post-flex .right-content h6 {
        color: #005387;
        margin-bottom: 3.2px;
        line-height: 1em;
    }
    #posts-section .tile-view .post-flex .right-content .excerpt {
        overflow: hidden;
        position: relative;
        line-height: 1.2em;
        max-height: 6.0em;
    }
    #posts-section .webinar-content .post-flex .right-content .excerpt, #posts-section .tile-view .webinar-content .post-flex .right-content .excerpt {
        line-height: 1.2em;
        max-height: 6.0em;
    }
    #posts-section .list-view .post-flex .right-content .excerpt {
        display: none;
    }
    #posts-section .tile-view article .video-thumbnail {
        justify-content: flex-start;
    }
    /*#posts-section .tile-view .postclass-2 a:hover .post-flex div:first-child:before {*/
        /*content: '';*/
        /*background: rgba(52, 152, 219,0.15);*/
        /*top: 0;*/
        /*left: 0;*/
        /*height: 100%;*/
        /*width: 100%;*/
        /*position: absolute;*/
    /*}*/
    #posts-section .tile-view .video-content div:first-child {
        min-height: 0;
        margin-bottom: 24px;
    }
    #posts-section .list-category {
        display: none;
    }
    #posts-section .list-view .list-category {
        display: block;
    }
    .tag-label-inline-p p {
        display: inline;
    }
    .filter-pagination .btn {
        background: #f5f5f5;
        color: #848484;
    }
    #posts-section .post-flex .post-featured-background {
        margin-right: 20px;
        width: 250px;
        height: 200px;
        background-repeat: no-repeat;
    }
    #posts-section .tile-view .post-featured-background {
        background-size: contain;
        background-position: 50% 50%;
        min-height: 230px;
        width: 100%;
        background-repeat: no-repeat;
    }
    #posts-section .tile-view .post-flex .exclusive-e-book-img, #posts-section .tile-view .webinar-content .post-featured-background {
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
    }
    #posts-section .standard-view .post-flex .right-content {
        width: 70%;
    }
    #posts-section .standard-view .post-flex .post-featured-background {
        width: 30%;
        background-size: cover;
        background-position: 50% 50%;
        min-height: 230px;
        background-repeat: no-repeat;
    }
    #posts-section .standard-view .webinar-content .post-featured-background, #posts-section .standard-view .post-flex .exclusive-e-book-img {
        background-size: contain;
    }
    #posts-section .standard-view .post-flex .standard-video-fix {
        width: 30%;
        margin-right: 30px;
    }
    #posts-section .standard-view .post-flex .standard-video-fix .post-featured-background {
        width: 100%;
        margin-right: 0;
    }
    #webinar {
        display: none;
    }
    .postclass-5 a:after {
        content: 'Upcoming Webinar';
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 10px;
        color: #fff;
        background: #3498db;
        box-shadow: 0 2px 10px -5px #000;
    }
    #view-holder {
        margin-bottom: 20px;
    }
    @media only screen and (max-width:1345px) {
        #posts-section .tile-view article div:first-child {
            min-height: 150px;
        }
    }
    @media only screen and (max-width:835px) {
        #app {
            overflow-x: hidden;
            flex-direction: column;
        }
        #posts-section {
            width: 100%;
            max-width: inherit;
        }
        #posts-section .tile-view article:first-child .post-flex {
            flex-direction: column;
        }
        #posts-section .tile-view article:not(:first-child) {
            margin: 15px auto;
            width: 300px;
            max-width: 100%;
        }
    }
    @media only screen and (max-width:955px) {
        #posts-section .standard-view .post-flex {
            flex-direction: column;
        }
        #posts-section .standard-view .post-flex .exclusive-e-book-img, #posts-section .standard-view .webinar-content .post-featured-background {
            width: 100%;
            background-size: contain;
            background-repeat: no-repeat;
        }
        #posts-section .standard-view .post-flex .right-content {
            width: 100%;
            margin-top: 15px;
        }
        #posts-section .standard-view .post-flex .post-featured-background {
            width: 70%;
            margin: 0 auto;
        }
        #posts-section .post-flex img {
            margin: 0 auto 20px;
        }
    }
    @media only screen and (max-width:555px) {
        #posts-section .standard-view .post-flex .post-featured-background {
            width: 100%;
        }
    }
    @media only screen and (max-width:475px) {
        #posts-section .pagination-holder .results-views {
            width: 66.66px;
        }
        #posts-section .pagination-holder .results-views .view {
            flex-direction: column;
        }
        #posts-section .loading {
            font-size: 50px;
        }
    }

    /********************** RESOURCE PAGE STYLE CHANGES AFTER LAUNCH *************************/

    .filter-pagination .resources-page-nav .btn {
        margin: 0 10px;
        background: transparent;
        border-radius: 100%;
        padding: 5px 11px 4px 10px;
    }
    .filter-pagination .page-holder-middle .active {
        background: #3b4;
        color: #fff;
    }
    .page-holder-middle .btn {
        display: inline-block;
    }
    .page-holder-middle .hide-page-num {
        display: none;
    }
    .filter-pagination .resources-page-nav .page-holder-middle .dots-page-num {
        display: inline-block;
        width: 0;
        padding: 0;
        margin: 0 14px 0 2px;
        color: #fff;
        background: none !important;
    }
    .filter-pagination .resources-page-nav .page-holder-middle .dots-page-num:before {
        content: '...';
        color: #848484;
    }
    .filter-pagination .resources-page-nav .page-holder-middle .btn:first-child {
        display: inline-block;
        width: 33px;
        padding: 5px 11px 4px 10px;
        color: #848484;
    }
    .filter-pagination .resources-page-nav .page-holder-middle .btn:last-child {
        display: inline-block;
        padding: 5px 11px 4px 10px;
        color: #848484;
    }
    .filter-pagination .resources-page-nav .page-holder-middle .active:first-child, .filter-pagination .resources-page-nav .page-holder-middle .active:last-child {
        color: #fff;
    }
    .filter-pagination .resources-page-nav .page-holder-middle .btn:first-child:before, .filter-pagination .resources-page-nav .page-holder-middle .btn:last-child:before {
        display: none;
    }
    .page-holder-middle .show-page-num-start, .page-holder-middle .show-page-num-start2 {
        display: inline-block;
    }
    .page-holder-middle .btn:last-child {
        display: inline-block;
    }
    .filter-pagination .resources-page-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 20px 0;
        padding: 10px;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
    }
    .filter-pagination .bottom-resources-page-nav {
        width: 585px;
        max-width: 90%;
    }
    .filter-pagination .resources-page-nav .page-holder-middle {
        display: inline-block;
    }
    .filter-pagination .resources-page-nav .btn.next_page, .filter-pagination .resources-page-nav .btn.prev_page  {
        color: #3b4;
    }
    .filter-pagination .resources-page-nav .btn.next_page:disabled, .filter-pagination .resources-page-nav .btn.prev_page:disabled {
        color: #848484;
    }
    #posts-section .tile-view .postclass-3829 .post-featured-background {
        background-position: 100% 100%
    }










    /*#posts-section .tile-view a:first-child {*/
        /*padding: 20px;*/
        /*margin: 20px 0 0;*/
        /*border-radius: 5px;*/
        /*background: #fff;*/
        /*color: #1d1d1d;*/
        /*display: block;*/
        /*width: 100%;*/
        /*box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);*/
        /*position: relative;*/
    /*}*/
</style>