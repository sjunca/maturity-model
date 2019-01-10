<template>
    <div>
        <div v-if="this.$route.fullPath.id == '/self-assessment/result'">
            <h1>ID is incorrect</h1>
        </div>
    <div v-if="this.$route.fullPath.id !== '/self-assessment/result'" class="ps-maturity-wrap">
        <div class="ps-maturity-title">
            <div class="holder">
                <div class="svg-bg">
                    <img src="~/assets/PS.svg">
                </div>
                <div class="text-content">
                    <h1>Product Stewardship</h1>
                    <h2>Maturity Model Calculation Engine<br>For: {{ post.pardotinfo.firstname }} {{ post.pardotinfo.lastname }} - {{ post.pardotinfo.company }} - {{ post.pstool.dateSubmitted | moment("M/D/YYYY") }}</h2>
                </div>
            </div>
        </div>
        <div class="results-wrap">
            <div class="legend">
                <h3>Self-Assessment Output</h3>
                <p>Product Stewardship Maturity Model Results</p>
                <p><strong>Need help from an expert?</strong></p>
                <img src="~/assets/JeanAouad.jpg">
                <p>Jean Aouad<br>
                    Director, Product Stewardship<br>
                    Phone: +1 438 824 2752<br>
                    Email: <a href="mailto:jaouad@sphera.com">jaouad@sphera.com</a></p>
                <div class="results-download-holder">
                    <a href="javascript:void(0)" v-on:click="downloadPDF" class="download-pdf-btn">Download results</a>
                </div>
            </div>
            <div class="polygon-wrap">
                <div class="holder">
                    <p style="text-align: center;"><strong>Hover over a category label to see Sphera's recommendations</strong></p>
                    <div class="labels-wrap">
                        <h4 v-on:mouseover="mouseOverOrg" v-on:mouseleave="mouseOverOrg" id="label-org-culture">Organizational Culture</h4>
                        <h4 v-on:mouseover="mouseOverGov" v-on:mouseleave="mouseOverGov" id="label-governance">Governance</h4>
                        <h4 v-on:mouseover="mouseOverWorkflows" v-on:mouseleave="mouseOverWorkflows" id="label-workflows">Workflows and Processes</h4>
                        <h4 v-on:mouseover="mouseOverDigitization" v-on:mouseleave="mouseOverDigitization" id="label-digitization">Digitization</h4>
                        <h4 v-on:mouseover="mouseOverCoverage" v-on:mouseleave="mouseOverCoverage" id="label-coverage">Breadth of Coverage</h4>
                        <h4 v-on:mouseover="mouseOverAnalysis" v-on:mouseleave="mouseOverAnalysis" id="label-analysis">Analysis and Reporting</h4>
                        <h4 v-on:mouseover="mouseOverSupply" v-on:mouseleave="mouseOverSupply" id="label-supply">Supply Chain Management</h4>
                        <h4 v-on:mouseover="mouseOverEdu" v-on:mouseleave="mouseOverEdu" id="label-edu">Education and Awareness</h4>
                    </div>
                    <svg viewBox="0 0 350 350">
                        <polygon fill="#fff" stroke="#ccc" points="313.58192987669304,232.40251485476347 232.40251485476347,313.58192987669304 117.59748514523653,313.58192987669304 36.41807012330699,232.40251485476347 36.41807012330696,117.59748514523655 117.59748514523645,36.41807012330702 232.4025148547635,36.41807012330702 313.581929876693,117.59748514523645" />
                        <polygon fill="#fff" stroke="#ccc" points="290.48494156391087,222.83542904563623 222.83542904563623,290.48494156391087 127.16457095436378,290.48494156391087 59.51505843608916,222.83542904563623 59.51505843608915,127.1645709543638 127.16457095436371,59.51505843608919 222.83542904563626,59.51505843608918 290.4849415639108,127.16457095436371" />
                        <polygon fill="#fff" stroke="#ccc" points="267.3879532511287,213.26834323650897 213.268343236509,267.3879532511287 136.73165676349103,267.3879532511287 82.61204674887132,213.268343236509 82.61204674887132,136.73165676349103 136.73165676349097,82.61204674887135 213.268343236509,82.61204674887134 267.38795325112864,136.73165676349095" />
                        <polygon fill="#fff" stroke="#ccc" points="244.29096493834652,203.70125742738173 203.70125742738173,244.29096493834652 146.29874257261827,244.29096493834652 105.7090350616535,203.70125742738173 105.70903506165348,146.29874257261827 146.2987425726182,105.70903506165351 203.70125742738176,105.70903506165351 244.2909649383465,146.2987425726182" />
                        <polygon fill="#fff" stroke="#ccc" points="221.19397662556435,194.1341716182545 194.1341716182545,221.19397662556435 155.8658283817455,221.19397662556435 128.80602337443565,194.1341716182545 128.80602337443565,155.86582838174553 155.86582838174547,128.80602337443568 194.1341716182545,128.80602337443565 221.19397662556432,155.86582838174547" />
                        <polygon fill="#fff" stroke="#ccc" points="198.09698831278217,184.56708580912724 184.56708580912724,198.09698831278217 165.43291419087276,198.09698831278217 151.90301168721783,184.56708580912724 151.90301168721783,165.43291419087276 165.43291419087274,151.90301168721783 184.56708580912726,151.90301168721783 198.09698831278217,165.43291419087274" />
                        <line x1="232.4" y1="36.42" x2="117.597" y2="313.58" style="stroke:#ccc;stroke-width:1" />
                        <line x1="117.597" y1="36.42" x2="232.4" y2="313.58" style="stroke:#ccc;stroke-width:1" />
                        <line x1="36.42" y1="117.57" x2="313.58" y2="232.4" style="stroke:#ccc;stroke-width:1" />
                        <line x1="36.42" y1="232.4" x2="313.58" y2="117.57" style="stroke:#ccc;stroke-width:1" />
                        <polygon style="stroke-width:3;stroke:rgb(70, 151, 200);" fill="rgba(107,142,163,0.45)" :points="points" />
                    </svg>
                    <div :style="adviceWrapTopCss" v-if="adviceWrap" class="advice-wrap">
                        <div class="advice-content">
                            <div v-if="organizationalCultureHover">
                                <p><strong>Organizational Culture</strong></p>
                                <div v-if="post.pstool.organizationalCulture < 4">Ensuring compliance is a minimum prerequisite of all successful product stewardship programmes. To remain ahead of shifting market environments, consider engaging executives on impending regulatory risks and operational costs due to inefficient processes, workflows and technologies.
                                </div>
                                <div v-if="post.pstool.organizationalCulture == 4">Keep it up! Most firms have begun to tackle product stewardship through a risk-centric and improvement-oriented lens. To strengthen market presence, consider working with customers, suppliers and community members to identify new opportunities for 'greener' chemistry and eco-products.
                                </div>
                                <div v-if="post.pstool.organizationalCulture > 4">Well done! Keep up the excellent work by leveraging positive reinforcement and ensuring all external and internal stakeholders have the resources to provide input for continuous improvement and the identification of new market opportunities. Disseminate messaging on how product stewardship is a priority growth opportunity for the firm.
                                </div>
                            </div>
                            <div v-if="governanceHover">
                                <p><strong>Governance</strong></p>
                                <div v-if="post.pstool.governance < 4">Effective product stewardship management requires, at minimum, a dedicated individual or team to liaise with other functions on product socio-environmental issues. Consider establishing a dedicated full-time role to engage EHS, operations and regulatory affairs on product compliance.
                                </div>
                                <div v-if="post.pstool.governance == 4">Effective product stewardship management typically requires a combination of dedicated personnel as well as a centralized, cross-functional committee. Strengthen the involvement and quality of inputs across other functions and personnel by ensuring firm-wide visibility into processes, workflows and data.
                                </div>
                                <div v-if="post.pstool.governance > 4">Well done! Keep up the excellent work by maintaining a structured process for engaging core functions, such as EHS and regulatory affairs, as well as secondary users, such as sales and marketing. Transparent visibility on product stewardship information can help ensure that everyone perceives the value of product stewardship.
                                </div>
                            </div>
                            <div v-if="workflowsProcessesHover">
                                <p><strong>Workflows and Processes</strong></p>
                                <div v-if="post.pstool.workflowsProcesses < 4">Maintaining compliance for chemicals and components as well as responding to customer requests for product stewardship information requires clear documentation along with structured, transparent workflows and processes. Consider partnering with business unit leaders to ensure product stewardship activities are embedded as effectively as possible.
                                </div>
                                <div v-if="post.pstool.workflowsProcesses == 4">Responding to regulatory and customer requirements for product stewardship information requires clear documentation and structured processes. Consider strengthening firm-wide visibility and accountability to minimize the chances of cross-functional confusion or duplication of efforts.
                                </div>
                                <div v-if="post.pstool.workflowsProcesses > 4">Well done! Keep up the excellent work by engaging users in adopting the centralized IT solution to ensure that relevant employees can view all necessary product stewardship information as neeeded. Also encourage team members to continuously collaborate on data sharing, internal and external messaging, and monitoring the effectiveness of internal processes.
                                </div>
                            </div>
                            <div v-if="digitizationHover">
                                <p><strong>Digitization</strong></p>
                                <div v-if="post.pstool.digitization < 4">While paper and Excel-based solutions enable firms to meet minimal compliance requirements, higher volumes of data create challenges for conducting searches, validating data and version control. As a result, these activities are incredibly time consuming and often fall short on accuracy. Consider leveraging software point solutions alongside Excel spreadsheets to manage bills of material, safety data sheets and chemical information.
                                </div>
                                <div v-if="post.pstool.digitization == 4">Point solutions, such as for lifecycle analysis and product design, ensure best-in-class capabililities for each tool required. Consider leveraging data integrations to drive far more value by introducing automated alerts, real-time product updates and integration with country-based compliance registers.
                                </div>
                                <div v-if="post.pstool.digitization > 4">Well done! Keep up the excellent work by ensuring a single, current database is maintained with transparency on the firm-wide IT architecture map. Fully integrated suite of solutions will enable employees across various roles to drive far more value by leveraging advanced data analytics with automated alerts and real-time product updates.
                                </div>
                            </div>
                            <div v-if="breadthOfCoverageHover">
                                <p><strong>Breadth of Coverage</strong></p>
                                <div v-if="post.pstool.breadthOfCoverage < 4">While most firms must, at minimum, manage SDS authoring and document control to ensure regulatory compliance, firms should consider strengthening their product stewardship programme to have at least 80% coverage across foundational activities such as chemical inventory tracking, material approval requests and completion of hazard and risk assessments.
                                </div>
                                <div v-if="post.pstool.breadthOfCoverage == 4">Good job! While your firm has exhibited strong coverage across a number of foundational activities such as chemical inventory tracking and conducting hazard and risk assessments, brand-sensitive firms may also wish to consider increased involvement in 'greener' chemistry, lifecycle analysis and eco-products.
                                </div>
                                <div v-if="post.pstool.breadthOfCoverage > 4">Well done! Keep up the excellent work by continuing to invest in compliance-driven activities, such as SDS authoring and management, as well voluntary efforts across lifecycle analysis and development of 'greener' products that surpass current regulatory requirements.
                                </div>
                            </div>
                            <div v-if="analysisReportingHover">
                                <p><strong>Analysis and Reporting</strong></p>
                                <div v-if="post.pstool.analysisReporting < 4">While the majority of firms will rely on lagging indicators, firms with limited capabilities for analysis and reporting of product stewardship information should consider strengthening their data management processes to avoid costly, unexpected operational setbacks.
                                </div>
                                <div v-if="post.pstool.analysisReporting == 4">While the majority of firms will rely on indicators focused on managing compliance and operational risk, leading firms also will look to automation and artificial intelligence capabilities to provide targeted, real-time analysis and alerts. Consider learning more about software-driven analytical capabilities to see if it would benefit your firm's product stewardship reporting and decision-making efforts.
                                </div>
                                <div v-if="post.pstool.analysisReporting > 4">Well done! Keep up the excellent work by continuing to remain abreast of evolutions in software-driven capabilities for deep, targeted real-time analytics and emerging technologies for data management such as using mobile apps and augmented reality. Also continue to develop and adopt leading indicators to elevate your leadership in analysis and reporting.
                                </div>
                            </div>
                            <div v-if="supplyChainManagementHover">
                                <p><strong>Supply Chain Management</strong></p>
                                <div v-if="post.pstool.supplyChainManagement < 4">Most firms that rely on tools such as emails, spreadsheets or online portals for engaging suppliers underestimate the resource-intensive challenges associated with supply chain engagement and management. To avoid high-profile supplier-related errors, firms should actively engage supplier contacts and conduct supplier EHS risk evaluations to pre-empt potential issues.
                                </div>
                                <div v-if="post.pstool.supplyChainManagement == 4">Good job! While your firm has actively engaged suppliers on the importance and benefits of product stewardship, leading firms recognize that most suppliers have limited ability to develop their own product stewardship teams with dedicated IT solutions. Consider establishing a capacity building and performance improvement initiative to help suppliers meet your market needs and deliver the data you request.
                                </div>
                                <div v-if="post.pstool.supplyChainManagement > 4">Well done! Keep up the excellent work by actively maintaining supplier capacity building efforts and helping firms further upstream in the value chain have the necessary governance, workflows and IT infrastructure in place to manage their product stewardship efforts successfully. In addition to collecting supplier data on a regular basis, you should maintain two-way communications flows, by which suppliers can suggest ingredient changes and innovative tools for data management.
                                </div>
                            </div>
                            <div v-if="educationAwarenessHover">
                                <p><strong>Education Awareness</strong></p>
                                <div v-if="post.pstool.educationAwareness < 4">Successful product stewardship programmes not only require hiring qualified employees with chemicals expertise, but also on-going product safety awareness and training with front-line workers. Consider establishing an awareness-building initiative to strengthen employee engagement on EHS and product stewardship efforts.
                                </div>
                                <div v-if="post.pstool.educationAwareness == 4">Good job! While your firm has actively engaged in product stewardship training and industry associations, leading firms also will involve external stakeholders with feedback to ensure continuous improvement. Consider establishing structured consultative engagement processes with specific stakeholders such as NGOs to better understand their views on your industry, specific risks and negative publicity concerns.
                                </div>
                                <div v-if="post.pstool.educationAwareness > 4">Well done! Keep up the excellent work by strengthening relationships with influential individuals at external stakeholder groups such as NGOs and government agencies. Remaining on top of market pulse will ensure your firm is best positioned to capitalize on any strategic opportunities or manage impending risks.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <PSResources></PSResources>
        <canvas id="canvas" width="250" height="250"></canvas>
        <div id="png-container"></div>
    </div>
</template>

<script>
    import axios from 'axios'
    import PSResources from '~/components/PSResources'
    import moment from 'moment'

    var pdfMake = require('pdfmake/build/pdfmake.js');
    var pdfFonts = require('pdfmake/build/vfs_fonts.js');
    pdfMake.vfs = pdfFonts.pdfMake.vfs;


    export default {
        head: {
            meta: [
                { name: 'robots', content: 'noindex, nofollow' }
            ]
        },
        name: "index",
        components: {
            PSResources,
            moment
        },
        data() {
            return {
                post: {
                    pardotinfo: {
                        firstname: '',
                        lastname: ' ',
                        email: ' ',
                        phone: ' ',
                        company: ' ',
                        jobtitle: ' ',
                        industry: ' ',
                        country: ' ',
                        GDPR: true,
                        revenue: ' ',
                        message: ' '
                    },
                    pstool: {
                        organizationalCulture: '',
                        governance: '',
                        workflowsProcesses: '',
                        digitization: '',
                        breadthOfCoverage: '',
                        analysisReporting: '',
                        supplyChainManagement: '',
                        educationAwareness: '',
                        ID: '',
                        dateSubmitted: new Date()
                    }
                },
                derp: '',
                adviceWrapTopCss: {
                    top: '20%'
                },
                adviceWrap: false,
                organizationalCultureHover: false,
                governanceHover: false,
                workflowsProcessesHover: false,
                digitizationHover: false,
                breadthOfCoverageHover: false,
                analysisReportingHover: false,
                supplyChainManagementHover: false,
                educationAwarenessHover: false,
            }
        },
        asyncData(context) {
            if (context.query.id) {
                return  axios.get('https://ps-maturity-model-sphera.firebaseio.com/posts/' + context.query.id + '.json')
                    .then(res => {
                    return {
                        post: res.data
                    }
                })
            }
        },
        mounted() {
            var svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));

            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            var DOMURL = self.URL || self.webkitURL || self;
            var img = new Image();
            var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
            var url = DOMURL.createObjectURL(svg);
            img.onload = function() {
                ctx.drawImage(img, 0, 0);
                var png = canvas.toDataURL("image/png");
                document.querySelector('#png-container').innerHTML = '<img id="svgpng" src="'+png+'"/>';
                DOMURL.revokeObjectURL(png);
            };
            img.src = url;
        },
        methods: {

            mouseOverOrg: function(){
                this.organizationalCultureHover = !this.organizationalCultureHover;
                this.adviceWrap = !this.adviceWrap;
                this.adviceWrapTopCss.top = '20%'
            },
            mouseOverGov: function(){
                this.governanceHover = !this.governanceHover;
                this.adviceWrap = !this.adviceWrap;
                this.adviceWrapTopCss.top = '30%'
            },
            mouseOverWorkflows: function(){
                this.workflowsProcessesHover = !this.workflowsProcessesHover;
                this.adviceWrap = !this.adviceWrap;
                this.adviceWrapTopCss.top = '55%'
            },
            mouseOverDigitization: function(){
                this.digitizationHover = !this.digitizationHover;
                this.adviceWrap = !this.adviceWrap;
                this.adviceWrapTopCss.top = '55%'
            },
            mouseOverCoverage: function(){
                this.breadthOfCoverageHover = !this.breadthOfCoverageHover;
                this.adviceWrap = !this.adviceWrap;
                this.adviceWrapTopCss.top = '55%'
            },
            mouseOverAnalysis: function(){
                this.analysisReportingHover = !this.analysisReportingHover;
                this.adviceWrap = !this.adviceWrap;
                this.adviceWrapTopCss.top = '55%'
            },
            mouseOverSupply: function(){
                this.supplyChainManagementHover = !this.supplyChainManagementHover;
                this.adviceWrap = !this.adviceWrap;
                this.adviceWrapTopCss.top = '30%'
            },
            mouseOverEdu: function(){
                this.educationAwarenessHover = !this.educationAwarenessHover;
                this.adviceWrap = !this.adviceWrap;
                this.adviceWrapTopCss.top = '20%'
            },
            downloadPDF: function(){
                var forPDF = 'For: ' + this.post.pardotinfo.firstname + ' ' + this.post.pardotinfo.lastname;
                var companyPDF = this.post.pardotinfo.company;
                var datePDF = this.datePDFcompute;
                var orgCulturePDF = this.orgCulturePDFcalc;
                var governancePDF = this.governancePDFcalc;
                var workflowsPDF = this.workflowsPDFcalc;
                var digitizationPDF = this.digitizationPDFcalc;
                var breadthOfCoveragePDF = this.breadthOfCoveragePDFcalc;
                var analysisReportingPDF = this.analysisReportingPDFcalc;
                var supplyChainManagementPDF = this.supplyChainManagementPDFcalc;
                var educationAwarenessPDF = this.educationAwarenessPDFcalc;

                // find src of the #png-container use that src as variable here hide the canvas and #png-container with css then set the variable as the image then set labels as absolute positioned text ezpz

                var svgimgsrc = document.getElementById("svgpng").src;
                console.log(svgimgsrc);

                var docDefinition = {
                    pageSize: 'LEGAL',
                    content: [
                        {

                            columns: [
                                [
                                    {
                                        width: 270,
                                        image: 'data:image/jpeg;base64,/9j/4QlQaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/90ABAAo/+4ADkFkb2JlAGTAAAAAAf/AABEIASIBOgMAEQABEQECEQH/xADFAAEAAgMBAQEAAAAAAAAAAAAAAQQCAwUGCgcBAQADAQEBAQEBAAAAAAAAAAABAgMEBQkIBgcQAAECAwUEBQcIBwYEBQUAAAEAAgMRIQQxQVHwEmFxgQUikaGxExUyQlLB0RRTYpKT0+HxBhcjVKLi4xZVY3KC0jNDstQHNESDo3OzwsPEEQABAwICBwQIBQMFAAIDAQAAAQLwAxEhMQQSQVFhkdFxobHhBRMUFSIyUsEWU4HS8QZCkiMzYnLiQ6I0Y4Ly/9oADAMAAAERAhEAPwD5J5r94+oau/mnScMk/G4mns7ePd0neCZqfUM235p0nDJBHZxxluyKq6lTTK952EK63aWhaS0ANawCVwnT81dr0RLWS3b5LOSc/q0VVVy3WcZ4yLU6dQ3+L8lK1NyJz8iFpJP/APRYgdIPbJrwwtuBE5t31FR2csOijpCayNfgzfuk3JjU0ZrsUvreM8uJd+VOwa0g1xx5r0UY3fP0VDlSmiTzHyp3st7/AIqdRsTzJ9W2J5j5U72W9/xTUbE8x6tsTzHyp3st7/imo2J5j1bYnmPlTvZb3/FQrGxPOeD1aRPMyFoe4iTWjM1kO8eP4a0tGWqtkujd8X7+VHNaiYqWmW1zRsiHDkBfI13mTm1Xqsptpt1W5HOrGrit5+imRt7/AJtgr9LlPr1VsZJ3ELSau9J2FyydLOhuayK0eRJrsg7UM+0JzBbmOYXdoWlezv1X39QvdxTDn3GFfRUe1XMX/U47Z5YZnpWuD2tc1wc1wDmuEiHA3EZhf1DKNN7Uex12qeO5zmLZUxyk6JPPuCt7O3eVWosXyHPuCezt3kesXd3+Q59wT2du8esXd3+Q59yezt3j1q7u/wAjdAgPtD9hl1C52DW3TNW+IK1o6CtZ+qzySTeipX9W3WdPCck9DCs0KEwNaHZuJLZk3EnqGpkvap+jKNNuqxXJOw85dJe5yudbl5mzyTMndrPulf2Fn1L3dJ4R69y5Il+xepBhNlSYkDi3HhDCuuhsT5VWcpyWjqrlW+E5zkYeTA9btB/3yCyXRmotrqQtRYvkNgZ/w/zqPZ27yPWLF8hsDP8Ah/nT2du8esWL5DYGf8P86ezt3j1ixfIbAz/h/nT2du8esWL5G2DZnx4jYcOpNSZSDWi8kzIAHer09DWq7UZe5nU0hKTdd2U7D1FmscOzQgxpJd68SU9sjdQgCdKmS/o9G0Nmj09Rue1d69x41bTH1X61sNiTy6WPJszPZd2xMDxXR6tLTqZevdukiZJZslodZYk27RhuP7SGRIGt49INiSEt+O7o0eo/R6ms1fh2pv8AGy44L9jOo/1rdVURF2LuPTQosOMwRIZm0zG8EUId9IFewzStduslseC9Z3rwPc9jtVUss7Tar+0LuTl5lPWOlugT2hdycvMesdLdAntC7k5eY9Y6W6BPaF3Jy8x6x0t0Ce0LuTl5j1jpbof/0PkmX75PxuSgIInSXPLhvWb3WyznCcSFWycSbljiueZne+IQBANawQFmDGLZNcergZTLTh6wpPhJdujaSjPgqfJ4eXhxyMalNHJrJ8xe4L0/A5AgCAya3axlLn3TGS2pUlqrZMtqyfernaqXNwAFBdrie9eo1qNSzcjnVVVbrmFJUICd0/hxvFyEnT6O6QdZSIcSbrO43Ywib3NpUVmR77/S9H+kHaK7UfdaCrjw4p9+Zx6Tora6azf93x4dIqesa5r2hzSHNcJhwlIg3ESpUL+ra9lREexUVqpsyPDc1Wu1VzQlWKhAboEB9oeGNFL3OrJoneZFpnzWtGi+s7UZ+vAPclNus/8ATj4+HPI9JBgMs7AxgkLyZVcT6xOM171CiygzVb+vE8173VHazszatigQBAYkT/Kf/wCTdZKrm6ycQYXLnVLYLmVCAIDbBgxI8RsOGJk3z9Foxc4ydIDhVaUqT6r0YxLr4FKlRtJqvfkens1mZZWbDJkn03kzLnf7QDTj2+/o9BlBmq3FdqniV676z7rl2lhbmAQBAWLNaX2Z+03rNcRtsJADxnMzk4YLSnVdSddJJxq9jajdVc9i7j00KKyMwRIZBa7kQcQRWRC9Bj0e3WbkcD2uY7VcllNisVCAyZDfFeGME3HLDMnCQUoiqtkxUhVREup1h0YyQnFdOQnICU8ZYymuj1KLjcx9cu4//9H5J+7XxX74Rbpc/G4GjqfgVDnaqcZPum2FWw1q9YLipmFACSTlkgIAkk5ZIA1egLMGNsyY93Vwx2Z4XXdsu5dmjaRqfA/5V27p+v2MKtLW+JvzeMm9L2/PW9epmmBymQG1ylrBa0aS1XWT5UzWb5bIq5yNTHM3SAoLuEu6tV6jUa1uq1LIhzuVVW65hWknlUIAkk8gQE61vokk8pRE2nU6O6RdZXCHEJMAmoxhk3vZjI4iuYrQ+loHpB2iu1H3WgvdxT7ocml6K2s3WbhVTv7fsera5r2hzCHNIGy4XOGeIX9Y1zXtSoxUVqpgeG5jmLZ2CySyWIEB9oeGMGW04z2WDMylfrdvRouru1W/rJ2oZue1jVc7PdvkvkekhQYcBgZDEpDrGk3OxJIvK96jRZRZqM/k86pUdUdrOzkmOxalAgCAIAgIcJjf2+8Krm6ycSDXrsXOqWwXMg2wYUSPEbDht2nG8m5oxc7cDJaUqb6rtRkk3pR72026z8j09mszLNDDWVcZF7ze9wxlKgE6DR9/R6DaDNVM1zPDr13V3ay5JsLC3MQgCAIAgLNmtUSzP2m1aZB7LtoDEUPXbgeS0p1HU3ayZbeJV7Uqt1Vz2LuPSworIzBEhkFp7QcQ4TMnBegx7Xt1m5HC9qsdqqllk6ZG+HDdEcGMBLj3DEmhkFdEVVsmZmqo1Lrkd+z2ZlnbQAvNXPlicNwB3rrZTRicTle9XriWVcof/9L5HoL3HquHVEgHTu3UFab6eP71e6y5zkp+OamGWZZx3LG6rnmYYrmEAQBAEAQBAEBdspe47J9D2/ZJ9UGoJMrpD3r0tBqOc5KdRbUt+7xmPA5a7Wol0+bdvOkABQa7yv6drWtajW5HnOVVXHMKxUIAgCAIAgJGtUQlDs9E2mKyIILpmzkzcau8jP12im0CfVxNaVn6/onSqtKp6lf/AMZc/wDjxTptOHTaNNzPWJ/uW58Fnl+n2ZkFkFnkS1zHDaDwZ+UnXaJvryX+laOykyki0lu1Uz38T+SquqOevrL6ybNxvW5mEAQBAEAQBAZw4DrQ8Q4YG0bzg0XTcQCQBPIqUovruSmz5u5E23l+3Jave2m3XeuCHpLNZmWZmw2rjIvfKReRjKshkJmXefZoUG0GaqfNtPBr1X1X3dkmSbiwtjAIAgCAIAgCAt2O0RYMZvk2mJtuk+HOQcL9r0XAFoF/5G9N7qbrty2pvm/7XKVUa9io/C22Kmcsfo1iZBEAOhOD9sTe6UiSKFsrxsr3aKM1UVioqqmaHi1FXWspcWpmEB//0/kglISGAkv3cq3W6n42VbrdTNpwN3H+XAb1Mk8qql8jYhUIAkk5ZICAJJOWSAgNsKEYrpXNEto5ZDmtWUlqrhg3bJ9lzfURiXXM6bWtYA1okBqZMySvQRrWojW5HE5yvXWXM2tdWWvA05iXj36LpXq/9OovweHlz+xk5l8UznGcDNet2GKkKZJ5QEASSeQIAkk8hYs8B9ofsNFBIucZyaMyRLsnXvGtGi+s7VbltXcQ6o2ml3STcvooMFkBgYwEe1tVJIxJlee7gvcpUm0Wajee88571et3HX6P6QdZHbD9p9ne6bm4w53vZeSMxSeG/wBf0d6QdojtR910dV/x4p995waVoraya7f93x4eezw9a1zXta9jg5rmhzXC5wNxEqVX9cxzXtR7FRWqmCoeGqWWy5oZKxAQBAEAQGyFCfGe1kMTcazwa0XuccGjW6zKb6rkZT+Ze7jOwq9zWNV7lsiHpLNZmWaHstq4yL34uIunlKZkJnxXuUKLKDNVua5rtVZkmzvPJrVnVnXXBEyQsLV2OUk3GCtRU4ySyDo6yVOBgqKmC5kIQEAQBAEBkxjojgxjS5zjIAeJyaM1OajBEuq2ah3bPZ22dsp7URw67sCcm5NHf4aIljjqVFfgmDU2TadKyWuJZYgcJuY4/tIeDvpCcwHDDPHd0Uay0126m2fx9znfTR6Y5nqIUVkZgfDcHNORmQcWnIhes16PajkyWczjVFRbKbFYg//U+SFfu4/GpBuPDWSAzacDdr6PvSSeUKm6ScNikqEAQBPEG2FCdFdd1RLadlO4cStadJaq7kkz8s6j0Yl9p0mMDGhrRIc+2tZnW7vRERLJkcTnK5brmZqSo1q5SDNrqyN2t10t67tG0rUtTqfJsXd5c/Eo5l8UznGcDNesmRiuZCkgIAgLFngPjv2GDLaJnstE73XT4TBPhrRovrO1Wfqu6ThV9RtNus6SXyX0UKCyAwMYJAXkgTccS66Z8F7tKkykxGM/k8973PdrONquUHwlyKA6XR/SDrI7Yf1rM89ZsiTDcZzeyoocW43itD6no/0g7RHalTHR12buKfc49L0RK6a7MKvcvBep61j2xGtexwe142mubKRBuIlRf1rHNe1HMVFaqYKmPeeGrVauq7BUMlYgIAgNkKE+M9rIYm4m/BoxLjg0c594vTpvqu1GJ8S9xV72sar3ZTKJ2npLPZmWaHstq41e8ym4jhOQE6VPx9ujQZQbqtzXOfa6/dfJrVnVnXXJMkLC2MggChyXx2lXNRycQVRNxgqKmC5kIQEAQGTGOiPaxjS5zjIAeJyAU55ZhVREuuR3LPZmwGiQ2oh9N53+qwBok0Hn7tES3acVR+uvBMpvLCkzGuV/I0QFuy2t9kiTbVjqvhky2hdMGRrv/Mb0azqTv+K5+WKFKlNKiWyWSYd4W6ykA/KWNmAdk0IngRgQvSTSKSJZFS3YvQ51pPRbH//V+SFfu4/GoQEG48NZIShsacDy1LAb0KuTcZqZJyySoQG2FCMU0MgJTN8p3UmCbtY6UqfrFsmSSfbJM3vRiY4qdNrQ1oa24AaurrifRRERERuSHE5yuW65mXbz1ruE4bJJuSAoIHbz1ruE4bJJuSQhBmHVlrwPiJePfoulertTqfJ4eXMq5l8ds4zgZr1UxTAwXMhTJPKDfZ4Do7wxt1NpxoGg45E5DHvGtGi+s7VbltXdJwq+o2m27v5PRwYLILAxg4nFxzNB+C9ylSZSZqsPPe9z3XcbVoUCSTogIBqnuuqkk5ZIQ6XR/SDrG7YeC6zOM3Cc3Q3H1mCV0yJieGd/p+j/AEguhuSnUuuj+HFPucWlaKlZNdv+4nf2/aW9a1zXtDmOD2uEw5vokHLBf1zHtqMR7FRWqmB4jkVq6q3RUMlYg2QoT4z2w4Ym5x4Boxc41k0cPiLspvqu1GJdftxKPe2m3Wctk8eB6SzWdlmZsNq4yL3G9x75NEzITPx9uhQZQZqtxdtXfJx8qrVdWdrLgiZIWFsYpJP0yQhIU9kk3IknLJCgDWqFQ5L5SThVWoqW2ySyCqJuMFRUwXMhCDJjHRHBjGlznGQA8Tk0YlSiXGCJdVs1Du2ezNgNA9KKR13zz9VguDfFaIlkknLjqVNdcrNTIsKTIJJOiCEBKSTlkgauCWbxn6g//9b5IV+7j8ahAEBBuPDWSEoZtdgbs53d3v8AxlOMk4VVNxahQjFMrgKl0qSuIGJnxC0p03VFy+HfNv8AN9+NR6MTHM6TGhjQ0XDO/iTj3crh6KNa1ERuUkx4nOVy3XMyQqEAQBAEAOtUQGTXYHXd7/x79F0r1f8Ap1F+Dw8ufSjmXx2zjOBagQHx4mw2UqFzjc1u83z3X95HuUKTq7rNy2rwOeo9tNMZJsRfRwYLILAxg3uOLnH1icSR2XL3KVJtFmozLxPNc9z1u7M2rQqEAQBAEA1dOe6XFAdLo/pB1kIY8l1ne4l4MyYZPrsGWYxvvnP0/R/pB2iP1H46OufDin3SLx6XoqV012/7tuc3/Y9jZ2m1bHkHB4eA5rxIsDD65NeqO/dh/YUU9oVEo2VHJe+y2/s/g8Go5tJF9bgqS0sems1mZZoYY2rj6b8XEdsmidBM+8+9RoNoM1W4rtXeeRVququuvypkWFsZBAEAQBAEAUOS+O0q5qOTiZNY57msYCXOIAF3Mm4AKmORgvw/Mtkklzt2ezNgNEutEPpvP/SwX7M+E1oiWOGpU9YuGCSTGwrGYQBAEAQBAf/X+SFfu4/GoQBAEBk1u0cgLzfKYpiPer02K9bbAqomZ0bPGDdmEaD1XXAHImWJx913oMs1Eahx1WK74kzkmN3Wr8Vosk6cwUEDt5613CcNkk3JIUEDt5613CcNkk3JIUEDt5613CcNkk3JJshQnxXBrf8AU7Bo8DNb6Po79IqajMtq7ESTdnUqNpprO/mTcvfsuxZ2iGB1SKuvO17RoB3csF/X6ErNGYlFE+Dv/VZbuPLrOdUcrlzk2nQBmAb5jWa9TPI5yUknRAQBJJ0QEASSdEBAbIMJ8eJ5KGNp1JzHVa0+kXGkhIcytKdJ9Z2oxO1dyb5n3FKlRtNquctvue56GjDowCFIugvM4lJvDjc9s/VBvbPvX9j6I0lvo5EorjQXPei706Rf5vT6S6Z8eCPTYmU4+Gz2TXNe1rmODmOaHNc0ggzrMSmJS3r+xa9r2o9iorVTCx4KorV1VSyoZKSAp7JJuRJOWSFACnskm5Ek5ZIUAKeySbkSTlkmcNjojwxom43CcuZ3BEKucjG6zsju2ezMgNoJvIk91ZnGQ3a4RZEW6HBVctXHJNiSeCbuUs/hyVjmVLYbQkk6JBCAlJJ0QQgJSSdEEID/0Pks+SH5wfU/nX7/APYU+o/Gmsm5Of8A5HyQ/OD6n86ewp9Q1k3Jz/8AJHyQ/OdjK/8AWE9gRf7rSTJrcE5/+TbCsDojgBEIAq52xdw/atqeK1o+jFqusjrNTPDzM6lVGJe117fJJ3XB0c0UEUgf5J//ALAvQb6Ka1LNfZOzznhz+vcuaE+bhIjyxwl+zrv/AOZVT7sT6+7zHrl3FuBZWiTHxjsigcWY4A9b0Z44T5jRno5l/jetuzzOeq9fnRuO3EuebhhGOUvJSAll+0kQt19Es+teSdTn9fw7/Iebs4x5Q/6iJ6JZ9S8k6j1/DvHm7/G7Yf8AURfRLfqXknWd6vX8O8ebs4x5Q/6iJ6JZ9S8k6j1/DvHm7/G7Yf8AURfRLfqXknWd6vX8O82wuiTFds+WkMXbEgB9YzJwu+GlL0KlVdVHqnG3mZ1NLbTbdUx2YnUh9GshN2WxOJ2BMnMycRWa9uj6PpUWajFw7Ex4rY82ppT6jtZyIbPkIr+1I/0eFSFt7Iz6l5efQp6925DfCs+y6TosxI4fEncuijTRiajlW0kUzdVXFyIizsLnyVvt/wAH9QLs9Q3YuBn7RbZ3/wAkfJG/OEf6P6hT2dN49o4d4+SN+cJ/0f1Ans6bx7Rw7x8kb84R/o/qFPZ03j2jh3j5I35wn/R/UCezpvHtHDvMm2Hbox9cerKQz9Jys3RFetmrjJLLV2lI1LqnediywmWaHstbMmRe80c5wpM5AYDDevVo0GUGarc9q75OPn1qrqr7uy2JsSThZ2xSfj/SyWpkdGwdJusjvJuG1AcQdnGGTe5hwlOox8fR0L0hU0T4Pmpbty8OhyaRozayayYVE75OHoxbA4BzWhzXDaBD5gzyOyPBep75cuPq05+STE8haaNWy5ziT8r+h/F3egnvh30JzUjUSfyR8r/w/wCL+Wie+HfQnNZNu2dRJ/JPyv6H8Xd6Ce+HfQnNSNRJ/JHyv/D/AIv5aJ74d9Cc1k27Z1En8mTbSXGTYcz/AJpds2SkE98L9CW7ZO6NVqY4z9Z4dOBbRZ2yZBBcaucX1M72j9k4ADWQn31s9Wlv+2fdP1OapT11uq4JJELB6VdhB/8Al/ofFR75/wD1f/b/AMlPUJvIHSbiW/sZV+dneD/hNxlq6zfTLVWy07J/2/8AM8au0Zrtsk2Ln5wOEIH/ANz+RdHvL/h3+RgtCy2VcR5wPzI+0/kT3j/w7/Ij1Kbx5wd8yPtP6ae8l+jv8h6lN484H5kfafyJ7x/4d/kPUpvHnB3zI+0/pp7yX6O/yHqU3kecHfMt+0P3ae8f+Hf5D1Kbz//R+ThfQ6SdE/GBKAzhwzFMgZNHpPvA3DAu1x1pUXVXWT5dqydmRSo9GJjmp0Wsaxoa0SApx35zK9RjGsbqtyk2HIqquK5mSskk+yQQpAPJQkk+yR2luBHlJjz1fVcabO40PV8PDanUt8LsjmrU7fG1P0k+1787pX30wqum1pJuyTnCgkJJOWSQbYUIxXbNw9ZxuA45k3LSnTdUdZMtpSpUSm265rJL9JgaxuwwSGM7ybyZ8T+Vw9FjEY3Vaea57nrrOzk65kqxUKZJ5AoJN0OJKTTdnoXbu/BdFKrb4XfLJMMntS12zv8AsWL11mISSdEBAZsYXmQvxyAxPJWYxXrZsk3FXORqXUvsYGCQvxNKn4a3rvYxrG2TPxk3ryOcrlupn289a7hcqEBGVT2/DXC4CS/Y7a6znYeXOguMyBUwyfWZ7xKR8dWVNX4VykmHLpGjpVTWbhU8Zv8A5TvgtIDmkOa4Ta4GYI7XeK2PJW6KqLgqBCB289a3XBJOiDJrS87IBJOUqDMzoJKUS4uiYqXmMENuyKn1jn23Aa3RfDDKSYZOVV7DJVKjt5613BJOWSApBm11QCaDV0j4ralV1V1XfLJLFXN1k4zihsXZmc6pbDaEknRAQgzhwosZ7YcIF0R5k1rRMnwkAL8grNarlRrcVWcZu2Fc1qazls1D0Tf0ceWtL7Wxri0FzRDe4NcRVodNu0AcZCa9JPRVRUuqpft8zgXT2Xwatu1D/9L5ONfDsX0OzPxgbIcN0QybQD0nZCtAMS5a0qLqrsPl2yfZaVH6icZJh0WtawBrRIDUzvK9RjEY1GtyQ5FW66y5qSrkBAEAQBApbs8eRDH+jcCayORHs8/w2p1P7XHLVpKvxM5F5dBzmyHCdFdJspCrnG5ozIvO6v4Xp03VFshSpUbTS65nTa1rGhrRQVniSb59msPSaxGN1W5Hmuc566z85JdZUlQgCAIAgN0OJLquxu9+tHelV1fhd8pm9u1MywuwxM2Mc90hzOA3lWaxXrZuZVzkal1L7GBjZDnmd5XoMY2mlmyTevI5yuW6masVCAIAgCEl6x2w2Z2y+ZguPWF+yZy2hmKiYuPjox9sF+U5dI0ZKyazbJUTv7Z1TvBzXAOaQWuE2kSMxhduW55KorVVFzQza0vcGgGuWG83UClEuRe2JdZDEMACW93tH+HPL8IcqLlPDw8snO1jNVKhAEAQDWrkBm1xBrdr6J8V0Uqur8Lsirmo5OM7DZfXArrOdUVFsuZshwnxnthwml8RxkwNEyTfmKACZ4KWtc9yNbi5SFcjE13KiNQ9x0Z0Yyws2nBr47m9aJgB7DJgHZpUyE+4f0Gi6I2g3WdjUXPh2Hk6RX9a7DBiZJ91xX7HVXVdN6GB/9P5M7LtRTsE0EjtmZlupUkzovohQY6s+2Sb5Y/F9ZyU0vv2SfftNa1gDWgSFN53k4kleuxiMbqtyk6HCqqq3UyVkkn2QQpBKhJJ9kEKQSoSSfZBCkEqEkn2QX7G973CET1fbNzBO4jKlPhd1UFc92ps37ji0hvq2+sTF27f2fc9A1rWNDWignXFxzNBfwC9ljG026rcjxXOVy3dmSrFQpknkCgBTJPIFACmSeQKCSzBJcdk3CQ2sp4ndeuqg9yrqbPCTcYVURqax12MDGyHGee8r2mMaxLN/mTevnvcrlupn289a7hcoEA7eetdwAIB289a7gAQEbq1zvOtSuAk6FhtT4LxDdN0J97fmz7bTMTEhMik1rTqWwXI5NJoNqN1kwqePDtnZ6yG1oaCwhwcA7bnOc6UrdMaw3W2HZznYeK++sqOSymzmq7JJyoO3nrXcIknLJAQDt5613BJOWSAgHbz1ruCScskBTs4A2whEiPbChtL3vOy1rQSSc5XSGJmLu3ooPcrkpIl1Wb5wKVNXV1nLZqIe96L6Oh2GGHuk60PbJ8UHqhpHoMqermcexf1Oh6MykzXzqL3dmE8fCr11qrZLpTRcE+64/wdZdvE5wgP/9T5RoUNsJgY0CXbM5voATyl4L6Pta1iI1uSTh9v02fiFz3PXWVbyTFdrTgeRPeN9cfzO7H3si5zgQZrQkIAgCAIAgNsKE6K7ZFBi6Uw0Z4z4YqzKbqjrNkm9KVKiU23WSbl7EOG2E0NbQescXbyaCa9JjG022aea97nuVXSTjahRZdVxEsDiNxM5S8PDop1LfC7KSYclWl/c0tLoOZFuEAQBAEAQGTWl5kO3LersYr1shCuRqXUttaGCQ7cTvzuXaxjWNsc7lV63dyLMGLs9V1xxy47l1UqqswX5fAxqU74tzLq7b3xOYIQEAQBAEBLWlzgAJ+7eZTuQhXI1LqdCHDDBcCTMGl/iBPn8d2MRExzklk5alRXrbZJ+nLoWS1mzuDXDbguPWaPSZOu2y7mLjxvuiomFvg7MuyeXJWo+t+LKp48F/nuy7oc1wDmkOa4Ta5pmHDMcZbkVLHnqiotlSy7iVBAQBAEAQGcOHEivbDhNLnvMmtaCSeEqCQxNAFZrXOdqtS7txVzmsarnqiNQ9v0X0YyxM237L7S9soj5TDZy/Zw5iYbmbz4e7o+itoJrLjUXPhwmZ4mk6U6u6yYU0y6rx8O9eu12zcOrkL98l6FOo+mq7W3xmPgctzeCHCYM9SXc1yOS7VuhAVgf//V+UpfR/sklsk/D41q5TkDJpoQQJGQEu/DHitmvRUsuc4EovKSYZrQkKEkn2QQpBKhJJ9kGyDCdFdsig9Z0phozN8+GK0ZTdUWzczOpUbTS65ySy9iHDbCaGtApecXHM3VXosY1jdVJJw85z3PdrOzkl1zVyoULkCxCiyk1xpgTeNxM7u1bU6lvhdkc1Wlm5qYFm5dHgc4QgKZJ5AoBk1peZDmcldrFetmyThCqjUupba0NEhzOa7WMRiWQ51VVW6xCVeSdEgICxBi7PVd6Jxy47lvSq6vwu+XwMalPWxTMu+/XYu3wOcdvPWu4CAgHbz1ruAEhpcZNvPIDeTgAgVUal1OjDhNYLpnEyyxGveTs1tsdsksnG+orl4SSybVoZjA6+E70knLJBastp+TnZfWAS3qymWEmr2DGeImJ8VCfCip/aqGVaj63L/c8e3qd1rmuaHNILXCYIuIwIO/uVnZ32HnKioqouCoSqkDt5613BJOWSAgMocOJFeyFCaXxHnZa2dSc6B1BefdcLsbruRjb3VZ/OzPBMCHOa1Fc5bNRD3HRnRjLCzbcA60PHXea7Iv2GZC6ecuQ9zRtGbQbdyotVe7gnDbs7N3h6TpTq66qf7SZJ914zivXXSi3knJOQIAJt4XkTqZ1BFHLZtVWLh8u7CTZsG7ab7Tec/x8V3esau1eXmTY//W+UpfR8/DwQBAS10uq48Cb55Gk8L5yW7aiLnnOH3LXM9avWhIQG2FCdFdsigxdg0Zm+fDFXZTdUdqtkm9M6lRKbbr5/ed/Yhw2wmhjQN5xJzN1db16LGIxuqmcksnnOe57ruM1cqNauQBAKy7zv4b02g3wohEmud1bmk3iVa0HV5csBtTqW+F2RzVaX9zS1r8V0HOFBBk1peZDnkN6uxivWyEK5Gpd2Rba0NEhzzO8rtYxGJZDnc5XLjPAlXICAIAgLEKLsya70c8uO5dFKrqLqu+WTrtxqU0ddyfyXQuzsyObHbmEBIaXENF5THYFWyXU6MOEIciL8TK+lJZa57MbbFc5OmRxvqa3ZJ0yTbrNXMwgCAET0fdJSi2W4QtWW1Os5If1oJqRWbCb3taJ7pis8JGYLBvFuPDr977t+NaklVLt+dO/gs6p3Gua4BzSHNImHNucDiFKoeeqKi2dmZKpBnDhvixGQ4bS+I90mNbeT7gMVdjHVHIxqXcpVzmsar3LZqHuOi+jGWGHtuAfaHt675z2Bf5NhPqjPFe3oujeztu7GostPJPE0rSnV3WS6U0yT7rxOsuo5AgCAICJce0oD//1/lKX0f7JJbJPw+EICdkktkkjPXjIKcsSDJrqAG/BxNB/m6oOuS2Y+62XOcCUknSxChOiv2WiQFS41DRnjM7sVuxi1Harf14SWzStSolNt1k7vHrw4bYTQxoFLzi45mgqvRYxrG6rZJbJPOc91R2s7OSXXNXKhAEAQBAEBZhxQOqTMEdU+zkCfZl2cFsypb4XfKvcc1Wl/c0tNY5xkOeQXUxqvWySThyq5GpdS21oaJDtzXaxiMSyHOrlct1JV5J0SAgCSTogIAkk6ICIEWxZhRtmTXGl08uzDVLh0Uauouq75fCTcY1Kd/iSSX23WtLj1anPLG++QGsD2Z5YocqqiYqdCFCEMDPE7znwwy3rZrbfEuZyVKmsuGRuVzMJJOWSAgCSTlkgIBWR1wzUpaScMkFqyWp1ndsu2nQXGbmiU2fTGc8cxvqY+VbYq0xq0fWYpb1id/bMOzBPQQmPtDmNgtMV0WQhhkjtA1BBu43S7hq2m99tVL3ytbG+HD7fps85zkppephbM9x0Z0XDsLNtxD7Q7030LWj5uGZAhoN5oT3L2tF0ZmjpfOoua7uCHg6TpLq7rZU0ySTxXrC7Dlqa6lkn2TlJUAJ2SS2SAgCdkktkgID/9D5Sl9Hz8PBAEAQEhheQBdjf3ywWlNivdZMFCrqpc61meIbRDoBSRA9I/SmRXI8pZ+nQejPgW1t5xVUVztYurrMBrVyAIBrVyAIBrVyAICWtLjIc+GeJEuB4KWtc9dVuZVzkal1OpAPkwIZu9o+G4XL1KH+i1GO27ZsnZ5lVNddZORbXWYEIAgCAIAgCAzY1z3BrRMnlzJkQAma2IcqNS6nZs8oDQ09bN0q8qkgVzXfRVaSfFinhNst51dFqKrkzkmN8EEAioK7kVFS6ZHFa2BKAIAgCAIAgMmQ3RXNhsaXueZBox5mglfPIKzUVVsmKkK5GJrOWyIe66DazosERJPdFl5R4FYRlIiELtj2vaXq6K32ZFviq49nZNh4On30vFuFtm/tzx3Z28fdQ3tiNDmkEEAggzBBuIO/uXoot8dh4DkVFxM0ICAIAgCAID//0flh80RPnmfVd8V9SPwxW/OZyU/CHvCl9LuaDzRE+fZ9Vyj8MVvzWclk5x7wpfS7mknJ5oifPM+q74qfwxW/OZyUn3hS+l3NDJnQkaIdlsZm8ljyAM6OBGqKzf6V0h62Sqzkpm/0lRYl1a7mk8fsl9vQMRrQG2lm8mG6Z57QB7Auxv8AStVqWSsy3Ypyu9Ksct9RecndPmON+8w/s3f71b8L1vzmclK+9GJkxeadOhcg9FRuqx9phZAmG/hJ3Xnrmtmf07pDUt61i/ovWcMzJ/pGni5GLbtSTncPQUc/+pgj/wBp5nvP7QSU+4NI/MZ/iv7jn97Ul/tcn6p+0jzDH/eYP2L/AL1PcFf8yn/iv7h71pbnc0/aPMMf95g/Yv8AvU9wV/zKf+K/uHvWludzT9o8wx/3mD9i/wC9T3BX/Mp/4r+4e9aW53NP2jzDH/eYP2L/AL1PcGkL/wDJT/xX9w960tzuaftNsL9HLVGeIcO0QXOdeTCeA1ovceuaDW69P+nNJqLqpVZfsXrOSlX+mKNNquVrlTtTodmH+iMVjZfLYAJqTsRKn6rpDsXqU/6Vq0239a3W/wCq9Z3HA/02x63Vi806GZ/RSN+/QTu8nEr/APHktPw1WXBarbf9V6lPfFP6F5mwfo3Hht/81CiACQAhv2uAmRMeNyn3BpFJqr6xrkRMEsqL4lPetJy/IqX4pJnsTT5keDWOwDCYf7g4LkXQXb0t+vQn3jTvbVXuHmV37xD7In3aewu+pO/oPeNP6Xdw8yu/eIXZE+7T2F31J39Jw2PeNP6Xdw8yu/eIXZE+7T2F31J39B7xp/S7uI8yu/eIfY8+MJPYXfUnf0ncPeNP6XdxmOg4jiAI0OZNOq/43eG/GPYHL/d3L5E+8qe1rrSSy9CF0G+G2keHMy2uo4TIyrOWuOjNF1VveckndyP9Io5b2W04obfM8Uf8+GeTxP8AhWnqV3lfbm/Svd+42M6MjQx/xoZBuAY+/P0jIa3iWMdTwRU1N02cDN+ksqYoiopv81x5D9tD+o73vHh+E+ubuMvaG7l5jzXaPnYf1HfeJ65NyyTJHtDdy8yPNVo+eh/Zn7xPXJukm1XtDdy8yfNdo+dh/Ud94nrk3LJMke0N3LzI81Wj56H9mfvE9cm6SbVe0N3LzMX9HRYbHxIkeE1rGlxcWkAAf6ySThfXAqHaQ1rdZUsib5OGRZtZHORrWqqqRYukrNYwSLM+LFdMGLtsZ1Z0a0FpLGzqZzO9Z0vTejUr/wCm9Xb7oWraDXrZuRG7se/K5e/tBDu+SROPlodeH7MUE9y1/EGj/lvv2oY+6ai467eS9S/Y/wBLxZgWuscZ0MzIZ5aH1DgWbTJVnW4G/er0/wCpKDMPVv1e1DmregalX4ke1Hdi495cP/iBZhQ9GWmeIMaD8F0fiTR1/wDidzTopz/hup+c3kpH6wbN/dlp+3g/BPxHQ/Kf/knQfhup+a3ko/WDZv7ttH28H4J+I6H5Tv8AJOk4ZI/DdT81vJR+sGzf3Zaft4PwT8R0Pyn/AOSdB+G6n5reSj9YNm/u20fbwfgn4joflO/yTpOGSPw3U/NbyUfrBs392Wj7eD8E/EdD8p/+SdB+G6n5reSn/9L5fl9dz59BAbIcN0R2y0ZTNZAZkq7GK9bJ/BR70Yl1OkyG2G2TeZzOd5pNdrWoxLIcLnK9bqZqxUIBrWCAtwI8pQ3n/K84VkGE+BxQ56tLNzU/RP4nhf1q9QcvgEAQGcOFEjPbDhtm41JI6rRi5xwAnzuxpenTWo7VSSblhzmsarnZHorPAh2dmywTcZeUeb3uleamQE6DBexRpJSbqpn4ycfPqVXVXXdlsTcb1sZhANHh8UBoiwg7rAVE5tHrfS3ulv7SvM0vRNa9WknxbU3l2utguUkx55Eqe6XL0nTXlJxzLkIAgNjGbRAlf+desKCRw/FJOWaMjow4WwJzmSJk57pSAAmoVdmwyctzYoKhAEJyM2xCyh9Ey4g13GhMsQs6rNf4k+aSYyvxdpYXMUCgBAa4kRkJhe9wY1oJLnXd2PbwUOc1iazls1EJa1XLqturlPLWy2vtbqdWC0zhsMgSKSe+RILiMBcvG0jSHVlsmFNJdcV8uOKns6Po6Um3WyvXbJ9qK5jqCAIDW+GHTNxl27lZrtVeAK0pUlLDsW2aXTIghCAgJGtSKbAZhkwDMVGX4lU9ciYWXkD/0/l/1rFfXg+fRlDhuiOk0cTkN998lZjHPdZME37ij3oxLqdNjGw27IlvMpTOd7vH4nta1GpqocLnq9bqZqxUJJOiAgCSToga5ISXbPaKiG+mDXG7cD8fDAts0nj4+fLVpf3t5F1QcxsgwokaI2HDE3GZmfRa0XudcA2es706bqjrNkibCHPaxus7I9DZ7PDszNhlXGRiPPpPdmcA0YDDvPs0aTaTbJe+08+pUdVdrLlsTchYWpnJPKEBKCSeUICUGyScq8WFtTIA2vWGLiLyBUTn2+Pm6Xod0WpT+a2Kb5LZpdq7FynCccloOEjuwOfvXkolsDQyZDLyAJ1ulmM8gnbkRsvsOlDhhgn61zjdPKQrQSpXkFCrfsMnOus8vDzzUFR289a3XBJOiAgHbz1rdcEk6IJQGTH7Lg2c2mp+jPC64rKpT1vibmTn2ybOti/WqLnKmESI2EwxHuDGNE3OcZSGc85qrnI1Fc7BqEo1XLZMzytstj7U+QBZBaepDxP0n39bLJeNpOkLWWyYU0yT7qezo+jpSS6/Pv8AsUT7lzXvJOSdKBCQUknRAQApJOiDW+GHTIo6XbLBWa63ZO0iSedYzFDeFtmQPBLqmQMw2XEdnKhM9cM3OvgmVpPDIkz5LO3Ek//U+XKwWk2ktgxSGxJbIdLquEsTcHmvHjQ/Wr0fXfWX1L7q9P7tn68fHuX8BaXS9Ui1G/Kuzpwl93omQ2wxstHEylM53kr3WtaxLN/k8Zzlct1M1YqEAQBAEAQCmKlAdGxOix3iA0bRlPbcCGtaJTLpEyblUlWYxajtVM5Jjy12spp61ct0n39fAs8OzM2GVd67zKb3DHc0GchcO8+tQpJSZZNskVfGqVHVXay4Juk8E3LczCAIAgCAICe1LbdwNMSB5UzhtD3Sm5t85Cjhv8e4+XpmjIv+pTwcuaW8EnPAu1yJ82UmZlDhho6oqb75TyAMiADuE15Srcq5byTkm3AfFQQQhAQBAEAQEyBobtbig8SPLNggl7miGLzIDYABoc5nRWVVrUar1W1kLoxX4Ii6yyS/nLbbH2x4vEFvosumcHuvmSMMPH+d0jSHVlsmFNNnXH+O89XR6DaTbr8ypiUlynWEAQBAEAQBAa3sDpkGTpU9+eCs12qt1ykmMKaWiV8p4i+XPM8FKu1ktsk2b+wZXUy1uVSQoB//1flnaBDADKC+ePE76L6206TaTdVmXj2zkfgF71qLdx3bFbA/ZhRT+0kAxx9elxu60+M/H0qNdXWZUX4tnHt4/wAHBXoW+NmW3h4zu6etXeAXVJOicnEIAkk6ICAJJOiAgN0CBEtLxDhNm41nXZaBe5xEzsgdqs1qv+FufGdP0ySlSo2m3Wevw+J66yWSHZYYhjrGYL3yq49tGjATp49lNEppZk4nkVqz6rtZckyLrHyk12JMjuyuwXTTqbFvlvk5pzObtQ3LpwXFDPHbmEEk8oQEoJJ5QgJQSTyyY0vcGgVPKW8mRkBwVXO1UvnwIVbJjkdKFDbDAAqZdZ0r76XECU8z7zzqt11okm45H1HOy+U0R4E5vYDtXuGDt7cnTNc+88Ok6NdVqU890n31pVL/AAuKQ5cvHG/ivN/SxuEIHbz1rdcEk6ICAdvPWt1wSTogIDF72Q2Oe8lrWiZJPK/U91whzmsarnYNTO8nclmtVyo1M1PM222OtLtkdWEPRbnk528zzovD0nSlrrZMKe7K8mJ69DR0opdcam/huyScMCmDKl4G+XfsvC4XNvjtk6HQmBs3/kViWBSSdEBACkk6ICAFJJ0QNZ+8eKXBgXTpgBquyJ9/JZudfskmNVMSJylfqXFGuVMNgRTDxyWvgWCgH//W+WdfXI+fwmRUXio4qFJO7Y7aIgEKIeuJAPMuvfe6cgRhWuWB7qOka1mVPm2Lv8+fbv4q9DVvUZ8skw6fYuo5AgCAIDbBgRbTEEOE2bjeT6LW4uccAO9Waxz1s0pUqNpsVz8j19kssOywhDYJuMi95lN5zMiQAJ0GHh1ta1rdVuR49as6s7WdgmxC0pMiN2dDwxyCm9sQbGPlIE5BvAUkbpdp+HTTqrbGT9Srmpa6G5dBkQgCAIDJrC87IEydcBrgquWyXIVURLqdOHDbDbIel6xrXK/KawursVknDjqv13cENigzCnszCLbEqR4E5xIYmcWjHMjfS7FcGk6Ne9SnntTpxnb1Uqmt8LsylrlgOS87xNwoICAIDF72wwXvOyxoJc43ADDiSaXqHORrVc7BEkiLZrHPXVbmeYtlsdaXybNsFp6rTe76b7+sTvMl4WlaStd2qn+3s48Z45+to9BKSXX/AHFlskKWrvfiuU6QoBk10qG7v7dky1eoczWx2kmzWqnxWBIQBAEA1q7xTBMwYl06Yd9N8hOugsnLdeBVTFVICAgjt5e9Xa62Frk3MJ/RP8PxW2G9ORGPGf8A8qf/1/ln7eetdw+uKST7J8/wpAFCCJ34n3i7V1wjG2GcnQYfod2xW0RB5KMf2vqONNvIEmcnAb6+PdQr69mPvr79/nyz2beGvQVF12fLt4eU7OndTJdRzBCDdAgRLREbChiZN7j6LQMXHLW5WaxXrZs8ZyK1KjabdZ+Xievstlh2SEGMq4gGI40Lnd/VGAnQcV2I1rUs3+ZN6+NWrOrO1nYImSFnWr1KmRCgEpJOiBd+H5G7gVKbwZsfI7LjPAOOeR3dq6adTYueeEm8zc2+KG5dHYUCCSeWTGue4NaJnw3m65VcqImORDlREuuR04cNsNshU02jmRuFAOZ+POt3LrOzOSpU1sEykmGaGQQBASM9e5SOwqR4E+vDEje9oxGYu60rxj4+fpOjXvUppjmqb+w66dS/wu+Ypb+XZ3rzzUhQDF8RkJpe87LWglznVkLjdWs7hecrhDnNYiud8vGThss1rnLZuLjzNttjrS+TZthC5vtEeu7CZluAXhaTpLq66rcKfjxU9bR6CUW42V/hwKOrvfiuWScsk6UCgkJJOWSRJOqlJJk10qHwr27Jlq9UcxFW6ZySyJJ1XZrVT4rGxIKSTogeCAwJ1+EqS5rNzr4bCqqQqEDt5613AAgHbz1ruABAf//Q+WdfXI+fwQBABPC/coB3bFbfKSgxSNugY8n0pYOOJ4X8aHvoV9ZNSovx78ryYnFXoavxsT4dsnTswbPFtERsKGOsakmjWgXlxwAPHmuxrVcuqmfgcb6jKbdZy4HrrJZYVkh7EOpMnRHkSc91am+QGAnQd/U1qMSzTxq1Z1Z2s7LYm6ThZVjIKAEAQBAT4KcbAzZElJrjPImnI5UC6KdTYuH8FFamaZlljS90miZPCm84ACf53Hd70al1kljJVRuK4HRhw2w2yFST1nZywGEhNYLdy66/wclSprLbZwU2KDIIAgCAIApHiVY8Cc3sFZTc0C83TF1ZcZ8aHg0nRr3fTz2p98p3HVSqX+F2ZzokVrGl7pBrZl1dmQFJ9tMZrzXOaxFe7Bqfp1OlrVcuqma5SdfNW22utLtls2wWkljXGZJwc+8EmtJyG9eDpWkrXdqphTTLqetQoJSS64vXu4FAarPniuU6EyJUAIAgCAKQZNdKc7jlf27Jlq9ZubrLdPDzJNm/Xj71kuC4kmJdOn59uyJ10Fk5brwKqYqpAQBAEAQBAf/R+Wft5613D64pJPsnz/CkDt5613CEkn2QFIN0CDEjxAyEDPFxuaLtonDV1wlrFeuqkk3FXPaxNZ2UkufpHQ8WFBYLM+XlSP8AjESMV0pSdUyIlSsjxqfZ0aqnq0pr8+/f28Z2/wA3p7HPX1yJ8G7dJhl6BdZ5pCAlJJ0QQgJSSdEEICUknRAAmQJbRPq4n8lZqKq3TDiLomK5HVs8oQDDUknrdnVP0Rgtb2tfGTdbw4qyK/Ft+yeZcVr3x2HJimC5hQAgCAIAgCAwiPbDY6I8hrWipJuB3Xk96q+o2mxXvVEahZjVc5Eb8x5DpGK+1OLoYLYYJPkxLaeb9twu2xwlxx/kPSNX2p96eDN2/ivGcV97RGpRRNfF+/d5fqv6nDXkSTono5hQSEknLJIknVSEhJJyySJJ1UhISScskiSdVISSHGUqfn7llVZrfEkk3JEk6rK5SB289a7gAQDt5613AAgHbz1ruABAf//S+XvzXH9qD2v94C+vfslfgfPj2mj/AMuXmB0XHxfB7X+5oT2Svwk/nNXtNH/ly8x5rj+1B7X+8BPZK/Ae00f+XLzA6LtEx14UzSjnju2JGnb3omh1lztaTrmpdKoom3l5nZs0GFZofk2NJN7nTE3OzptCU+QXSzRnMS2F+3ynevE+q6o7WXLduN4djIjn4dTdq4X9S/hP0+/IzWypZcjtQOl2w4Uo7IjywAB8PZO0MNub6kSvx8ehay0qetVuqpuxw7vuefU0JXP/ANJURF2L9sJ3Jn/aCx/N2g09lnviTWHvPRtzr9idZ4x7vrb2c16Ef2gsfzVo+rD+8T3no+53LzI931t7O/oT/aCx/NWj6sP7xPeej7ncvOeL3fW3s7+hH9oLH81aPqw/vE956Pudy8x7vrb2d/Qn+0FjpKFaPqw/vFHvPR9zuXnPF7vrb2d/Qxd+kdhY0vey0NY0Ek7LK3SaOtUk3VVanpXRKTFqVNZGJtsnLPNS7PRmkVHajdVXdq9Pt5aWfpn0TD/5NsJN7vIwc8B8qIAnPFcX4q9HJgjK1uxv7jZf6f01391Pmv7Z47D+nHRR/wCRbZf/AEoVcD/6o+9PxV6P+iryb+4j8O6Z9VPmvQ3s/T3oljSHQLc4NkQRCgl0rjMGPcOKr+K/R6Y6tVG9jcP/ALdTGp/TWmOxR1PW7V/bN+5+sLoX936R+ygf90VKf1b6MX+2ryT9xT8L6f8AVS/yd+wfrC6F/d+kPsYH/cqfxb6M+mryTqPwvp31Uv8AJf2D9YXQv7v0h9jA/wC5T8W+jPpq8k6j8L6d9VL/ACX9g/WF0L+79IfYwP8AuU/Fvoz6avJOo/C+nfVS/wAl/YP1hdC/u/SH2MD/ALlPxb6M+mryTqPwvp31Uv8AJf2D9YXQmMDpEDdBgH/+oCQUL/Vvoy3y1eSdQn9L6ff5qX+S/tSd/Itn6c9HWp0gy2tht9BvkoVTdtPHlZ7RBOBl3nydM/qTR9KfZEqJSTZZMeK4+SHdR/pvSqON6auXi7pO9aR/S3ov2LbvPkYV3KLfLWC4k9L6LfJ/JOs47d/cWl76du1ehoi/pL0XEdNjLW1x9KcOEGnfPypx4clz1PSWiP8Aiaj0cvBOvQ2p+iNMZg5zLdq/tnAx8/WL2LRzhs8fK1Ue20tzuSfum9dtk9GaSmat5r0ng8/WL2LR9Rn3qe20r5O5J+8e7NI3t5r0Hn2xexaPqM+9Ce20tzuSfuni92aRvbzXpPB5+sXsWj6jPvU9tpXydyT9492aRvbzXoPPti9i0fUZ96E9tpbnck/dPF7s0je3mvSeDz7Y6dS0Vp/w2feqPbaW53JP3Twe7NI3s5r0M/PNmwhx5f5WT/8Au01y0TSqTkvZyfonXp9inu7SEyVvNSfPFm+bjdjPvFPtFL/lyTqR7v0nezvJb0xZp1ZGG8saR3RJ/HvWVSpTdi1Fvxk45j3fpG3V7zYOk4BubEluDTPfR8pzTUXNFnMj2Gqu1vNf2k+coOUX6rfe9NR0/kewVfqbzX9g85Qcov1W/wC9NR0/kewVfqbzX9g85Qcov1W+96ajp/I9gq/U3mv7B5yg5Rfqt/3pqOn8j2Cr9Tea/sHnKDlF+q3/AHpqOn8j2Cr9Tea/sP/T+Zjt5613D7InzmCAdvO/jlLW4ANXflju55iZJ5NauSSdEBCAKVMjKvHcdxUWknghStGhU223uMy2ctgZASulvPw8nS9E1f8AUp5KuU6+WrXXwU0H8t47153ZlJLJZcyEIA589a7g7JJbJJIe5rGue92y1omTMVODQMSVV9RlNivqLZiJE7dxemx1R2o3NThWq0utDze2GD1Yc5j/ADOMgC7VJV/m9M0x+lPxwpIuCfdd6nsUaDaLcMXbVKpvK5DoCggIDU9tNobyaXdp9yzc3aknYEW3wrJOOrWrlQklRJOiCEBM5VySSdEIl8DU4zNKDDH3BQaIiInEjt5613Bhskm5JCEAano01uDBZJySUzN0OJKjjMG4nDdhTXC7XW+HZJMauRNkk4WVt2ZGYQBAJTpnTV6Asw4ezV3pYZdh2vE/HVjUXFczNXXw2SdDctSAgCA2sibMmmrcKejmbx7/AHHWnU1cF+Uye3ak7y1qlRyNxEl1YKl0yMiO3nrXcIAQE9vPWu4PAXsTyVdaX/8AJXWTef/U+ZhfZE+cwQE6nmgIQBAEAQE/CvBFsqWXIkrRYI9Jkt4vka/RbPsXkaVomr/qU0u3dInhdrr4LmVvHGkl52OS7C5DnNhNL4jtlgvN/ACZMyZCmKq+oymxalRbNSc9hZjFqORrUupwrTan2h1CWQ2keTZMUv6zpCr98zLvP83pelu0l26kmTfuvE9qhRbRbh8y5rOidKq5FxNgoAQBABrVVINT2zqBnPU/cs3N2zxn6hDWsiSLkJNbjM5DjPvkFBdEsQgCAIAgHPln4oSmZvZElJpMwZSJwvoayA8OCu12r2TgVciZoWFsZgdqmSdUFpkOVTflfwkaS1yu1l8XWunCTuzV18NknQ2rYga1cgCAa1cgCA2w4uzJpq2uHok8xTW46U6mqtl+Uye3ak7/ALFnnPhUcjiuq6OxTIyJTtGG3IlZq6+WU4Gau3ZThOAS5Q//1fmZOF08QPHG/WQ+yK4Jc+c5CAJJOiAhASSdEkIQEknRJCECsjX8p3YJa6WkmGSThcrR2MhNMYnZhsEiKGssLiZzulTvHi6fQpaM32i9qSZ9+XbLbNaV6jvVp81p2THaeYtNpdaHz9GG0nybQAC0Gk3EVmR8OP8AFaXpb9KdjhSTJPuvE92hRSi22blzWT7VaYS5ZYclyYGxKAIAgCAIALxr4qQpriNHpCe8Advre5Zvamck7GN7FVxmaTAHPvkJz4LHYaolkkn6JHbz1ruDDZJNySEIHbz1ruDDZJNySEIHbz1ruDDZJNySEIA1OutcA7JJuJTM3w4h9EzdOQacRuzly+Iui6uCZFHNTNDpQ2bPpVJlOk5X0GFM8V1tZt3zfO9cFdfDZJMdxlOmvBaoQQgCAIAgCAIDdDibNDVvConzExrcdGVNVbO+Uyey+LUxkyLQu48/Ci2VdY5VdfBAoQqEB//W+ZdfYpXXW65TsPnOSNb/ABn3fHRr74LnOCCSL0K5AQBAEAQBAYve2G0ve4NaBUmZ4AAAmZKyrVadCmtWotmpLJxLsY57tVqXU4FotL7Q/wBmGPRZUhubjOZ2iMZ/j/J6VpdTTKl34U0+Vu7t3qqRD0aVJKbbZu2qc+JDkSWi8TLct4N0ufdd4ek6PqfHT+Xw8udu87qVS/wuK+p4HxXFwOgIQEAQBAEAQBTgvZJLKK8SH6zeY94WL27ULtXYsk4aFmXXMIQEAQBAEAAJIAE50RO8nJLnQgwRDEzLbph6IrQV79HdrUTFc5JcyV2vh/Z4z9S01xuJJyr/AC4cfx2YtsFncUc3cbNauWxQIBrVyAIBrVyAIAgIntS9mQpw4S13vEG6FE2Oq70e3Z4XUVmu1cHfL2+RhVpa3xNz8ZONumEpZjGdZ4BbocoQH//X+ZdfYmSdE+c4QErVrr4bQFcgJJOiSEICSTokmL3thtL3uDWtEzSZP0W1HWJ1llWrU6FNatRbNQlrXPcjWJdyy5wbTanWh2LYbSdhk7hO+4TPav5TStLqaXU13YMTJv3Xis3r6VOk2k2zcVXNZPBKviuU0GtZpa+GySWJNESFe5v1R4il3h4eZpOj6l300+Hdu8udu86KVXJrivzn3/FcXA6AgCAIAgCAIApBXiQvWbzHvCxcy2KZTiaNVMlK+vwWZZcye3nrXcGGySbkBCB289a7gw2STckkgEkACZyS1wX4UEQwCavI+ruvrrns1tsVzMlW/wD18e4361crkA61RJJyyQZtdgeVfwwG9aMdsXKcPuVcm1DYtigQBAEA5yxnwQAGeUpdvj7vjCyYfcBSAgN0OLsSDqtN0vVJv3y7eau11sFyk6mFWlrfE3MtX3VGFRctUcltpyn/0PmXX2JPnOEATIEgTpjh76rVrr4bRkSaUVyCEBi97YbHRHnZY2UzMTrgBiSsq1anQYtSotmpMM8SzWq9yNbmpwLTaX2hwmZQ2mTGUIAwJ+kTjMr+V0rSn6XU1n4MT5W7uK71nb6VKk2k2yfMualdcpoQoAQDJFS4NESHUuAobwMMyMgvM0jRvV/Gz5PDyOmlV/tdzK+p4HxXEdAQBAEAQBAEAUgrxId7mjiPeFi9q5plJsNGqmSyThoWZZcwhAAJMmiZNwGKE5YnRgwRDEzIvPPZpcNbpYrdrLfEucmXVaOW+WXj3G5Xx25lAoAQBFyJM2urI4a9m4caLRjti5TgUcm1DZrVy2KBANauxQESnLLt2hnil7doJ1q5L3xAQDWrkAUbbjbbaTzCnWXd4FdVu4//0fmXX2JknRPnOEASSdEBAZATpOtJDOfhJatdfDaQuHYYve2G0vedlgFScTQgDeTcq1qrKNNalRbNSYb14Eta566rcXHAtNpdaHzPVYKNYJCgxMqFxX8ppel1NMfrPwpp8rd3HtPUp0m0m2RVVVzvMpxWr4rlLhJJ0QEASSdEBAEtfsklkk0RIcus0UN7RSV1QbgPDhd5mk6Pqf6lP5NvDy8PDpp1bpquz3lflzz8VxG4SSdVBAEAQBAEAUgrxYXrN5j3hYvZbGeP28tGqmSyThoALjJtSaACte7xWeEk8LLZLrsOjCg+TkTV+YuE8BQT962a22K5mSu1v+sneblcBJJyySAhISScskgISDrVEknLJIM2uwPKv4YDetGO2LlOH3KuTahsWxQfD3pJF6B4ZIAgCSTlkgIAkk5ZICA//9L5l19iT5zhAEAQGESIyEwviENa2szngBKpJKpUqMpMWo9bNRJbiWa1znarc1k+2acCPa3Wl1eq1s9hu66cqHaIvp+H81pel1NLqa7rpTT5U3cV3rO30qdJtJtkxdtXfNhpXKXIQBAEAQBAEArgocqIl1yJRFctkK0WHLrNEwZzAwrU/wCWWsB5Fel/cxF1O3LynZ2U3YIjlxk4+Olc5oEAQBAEAQBAJE3CZ12pjszBubADeuGgON+4Ygb61ru3qy0kb8W3wI17/CuRkqlghAQBAEAQBAFPaDJr8D6MpCs776UlXfXw2ZfV4FHZm3Wrtd1yoQDWrkAQDWrkAQBAf//T+ZdfYhD50BSQFCEmTcf8pVkIOL0uSDCaCdmbjLCYNDK6i8P0s53rKbbrq6qrbid2ip8Krtucg0lKmgvIT51TZc6UNyJkhJKlPsQmQUuzm8BQgCl2c3gKEAUuwXAALkrfOnYdFkt+v3JWKZfqW2rNiHPPpOGAc4DcA4yHABcDkRHKiYJdTchQoCgBAEAQAKyfKpC/Y3QPTH+nvU0vsF+X9VLgv5M79mfatyhoPpSwJCwq58i7cjX6x4N8FXYgQlCyhQQFJKhQQRiOB8QpJUkVaDjL3KWfMZ3+Jd1gulc1Km2FVnMf9JUt+Yq7L9U8TJVLBAEAQBAEB//Z',

                                    },
                                    {
                                        text: 'Product Stewardship',
                                        color: '#fff',
                                        fontSize: 22,
                                        bold: true,
                                        absolutePosition: {x: 75, y: 110}
                                    },
                                    {
                                        text: 'Maturity Model',
                                        color: '#fff',
                                        fontSize: 22,
                                        bold: true,
                                        absolutePosition: {x: 75, y: 135}
                                    },
                                    {
                                        text: 'Calculation Engine',
                                        color: '#fff',
                                        fontSize: 22,
                                        bold: true,
                                        absolutePosition: {x: 75, y: 160}
                                    },
                                    {
                                        text: forPDF,
                                        color: '#fff',
                                        fontSize: 12,
                                        absolutePosition: {x: 75, y: 205}
                                    },
                                    {
                                        text: companyPDF,
                                        color: '#fff',
                                        fontSize: 12,
                                        absolutePosition: {x: 98, y: 225}
                                    },
                                    {
                                        text: datePDF,
                                        color: '#fff',
                                        fontSize: 12,
                                        absolutePosition: {x: 98, y: 245}
                                    },
                                    {
                                        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABkCAYAAAA8AQ3AAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUYwQ0Q5N0VGMkYzMTFFNzgwM0RDQ0E1NzAzNERBRjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUYwQ0Q5N0RGMkYzMTFFNzgwM0RDQ0E1NzAzNERBRjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENEJBNkQzMURBNzIxMUU2QUFGOUY3QzcxMDlFQkU1QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENEJBNkQzMkRBNzIxMUU2QUFGOUY3QzcxMDlFQkU1QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqPQY2QAADGLSURBVHja7H0HnFTV9f+dedPb9oVtVJEqAioRNZGoiRFsWGMJUaPGRA1q1ETFaGKIoonmb4yxRzQY/RuNFXvDgojSpEnbhWV32b4zO73+zvfMW0KZYd+UpXm/fq5vmXnz3p1333zfOed+z7m6RCIhJCQkJPYH6CRhSUhISMKSkJCQkIQlISEhCUtCQkJCEpaEhISEJCwJCQlJWBISEhKSsCQkJCQkYUlISEjCkpCQkJCEJSEhISEJS0JCQhKWhISEhCQsCQkJCUlYEhISByRh7c2TVz68Sk+bk6jdQe1gal9TW01tCbUF1DZQ62r8+SjJqgcQ6CH5V9rM6GW3j3Q63WR5tST6nLAmvT7FRJvogqnz4rshq3G0eZ9aUS+H81F7gNq/qa0g8orJYZOEJSEJKx9ENYw2N1MrJLKathuyuog2/8ziFBFqv6P2GBFXmxw+SVgS3y4Y8kRU40Ei1CaoL43YDVn9IEuyAozU7kSj4zxH26uJuFrlMEpISMLSQlQVtPkXteO2e9lNbW0asrLT5o089f1cNDrmQ7S9hogrJIdTQuLAhj5LotJTu47+bNyJrICnyR1MFyS/iZqS5+9wBbUOIi7pPkhISMLahawKRXI27y9pdnk91Yuld82HNYf4lkjE4yIR+1/sPB4M8jYRjST/HQ4j0CESkcgu+27/93awUfuASOsJaoocVgkJSVg9saqt1EbtZrc1qV40FZUOTESjupjPJ3R6vdApisDfCSInncnEBBUPhZOE5fUlySlOrwUCTFxMatjHT/+ORpnI8O9k2zYZeTHIlEirUA6thMS3mLCIrE6mzWJq5l527Ur5aiIxTGcwCMVuZ6KKdHTw3yCraGcnk5Ig6wkWlN5hJysrIiLtbbyP3mIRUbebD6M4HUnyIsLCNh5Khq7YGiMLjT4/kv7ZQKQ1QA6vhMS3kLCIrKbT5lUt+3Y1FKbUXgUbt7BVFvP7mYSMxcVESO0i3NwsjCUlTFzxSJT3jdBrOr1OmCsrmagibW20TzFbVuGmrUxqsMZAVrDAkn+HibSiTIbUbDGff4Pz2mcnyyGWkPgWERaR1am0mdPrkRLJVljVlZKwLFU162EFRTs62YULt7QwUZn69RPhrc0iWF8vDAUuJiVDYRH1TC+8y5YLg8spjKWltH8bW1E9hKdYLSLW3Z10GznmFU9aW7F4ksT8foPwhd+zXTX3MDnMEhLfAsIisoKu6mUtB4r4YyIaiovuFkdBqvf9dRuCsIzM1VVkIcVFIszumwhs2ECkVS4sNTUi0tpKVlcHcQ8dq8stHIeOJbcvJLoXLxHGokImK3w+5vWKUGNj8gsQcTFfwuoCUYVDyb+JxIzl5XolnJhvv+aZfnKoJSQOYMIiskLKzGe7+3DYm5yxg5VjtCvCYNHjHyljRwm97gs9uX3+b9aSZeRl4kHAXLHZmWBASoaiInIDK9i10+l0Ili3idzBduEcf2gyxoXXNm1mYtIZjcJAFhrHrqiFm1uY0OLBZJAe5p6O/lPsNpsSNy6yXfmUSQ63hMQBSFjQWdHmE9FLgN3kSCoIurcE2R30t4SFs59/dKp93bNO7iI373UQkkJunm/VGiYfU0V/njW0DBokEJTvfPd9oTebhc5iZlfQ1L+f6F6yjGNZcVhYVZXsRsZ9fhHzeESkpVWEVHdScTiIyMxsXWFfoaf+6Q1CMZlrDBb743K4JST2b6RTuv9a7Ea6EOyKCJPdIPTGZCqia4BVxCMJEQnEEEq6UiTTdHZB17JFDxYeesRU/G0dMoitJN/KVWwxOcaPEzEiocLvHSOEooiu+R+TZTVOBJuahG3EcLLEbCKwcaNIRGOi470PhHPCOCYxY1mZMBKBJRC/UvREemRZGelr0X6YidRbrRzf0seMF7quf/Hfnj+fMW9PXuBEIgGLEyRehUulNjZQqSEfcpNIVqioJ6tyr1aloL6W0QYxv6HUIA1BKhSmYZvUPi6jPgb3hRuX+gqL+VBqw6lVU7Oob3nUa7qK2po9eU2pT7heY9TrVymSif09+bpd6nX8Bn2jfoX3JSKgvpfSpj81ZKM0UP+25HAPjVTv9zL1PtreMPJSaxFJedQ6apvpXJoLGuhSWFc4kabOdm7wC2elmYyYZH9AYIlYQtR/NWhAw+//UZ/qM+X3LLjP/cmn1xQddxy7hNBjgbgCtXUi1NAgXEccLkJbthChDWGtlX/NN8IycIBwf/6FcB0+gUjKQ+5ktYh5u5PkSVaaAfEtr4/dR8VmZUvLUFzMmi3EtOBeJnhWQHQG3C2VoUcvC/bhwDtocyY1yEBOUAdMC0Be71F7k9oL1OfuLM6NrIPe5Bzr6difbPcZiG4voXYhte/08tkAtQ+pPUntpWx/dNkmP9Pn8IDFAw96O+Sk2jRc01eozaFjze+j8caP/HxqmJw6UvQu++m5jh9Re14da3cO58e5ewt3/IfO4U1BUD8WyfJOE6mVbvf2tbT/XzWeHw+KU6idRm2ySlSZAP36nNrbaj9rMyUsXMjv7fx6NBjnGBWC60bbjmLy9tVeYSszCcWsF/FoQliKjNctmDrvvlQnrHx4lS4WCLxBbt+JHW+8JRzjxgrFauNZQUNhAc8ehjbXC+uwg3iW0HX4YazJ6ultYN16YSwvE8GNtURkA8lGVMhCC3LgHrEvxLCgz0JgnnxNdithuVHHWDqR0CXu6LrrlN/10RPqt9Qu286KyhZ+DB61u2kAV2bQh5fUG2d3wI/3ItoXY38RzrHTzaoVeKghc2EuHS/el4Sl9vUn1G6jNiTLa4p47NV0zMV5Gm9YEbiPzhK55eTi4fkwtdnUt6Ys+gHLraCX3QbTseu2u09vV+/TdETXK2HRcayqJ3YNtZJ8/YzUB/btdP4veo1hEVkdnoqs2He0JHeN+JLWW/s3vm3vlYx0CGupSfi2hvj9kCd6T8m111WmOg6K8SlW65S4z/9+8YknCHNVlfCuXMnSBmiyouTGOYmkEKDHzGGUiMf9ySdkuUWZrOyjRwm9xSpcR34nSXJkTfXMGkLmAHKCZYbjwvJCMF4PFxFsF6PfVSQ20zHjmbI8k9WlIpnw/es8kJVQLQdo376mY89Rn+L5tgJfpPZElmQlVDfsKWof0PGqRB+Bjn2wGk+dkwNZAUdR+4KOd2OO/bFSQ1ra16qFkmvFE4tK3uvouJer5NxX1/K7qqt8pQarbHfHmUQbPEjvyCNZ9RhQsPg+p3Pcr7r96QmL8Giqo0CusO2XVJY8hr3cxO5f7dvJslSxcFwUDbMLZ7VFRP0xpbBy7cPpekWkFe9YuuBsspzmgajgBtpGHCxinm7WYUGT1fXxJ8mZxHhCFB1/HBOYTjEwAXkXf0UE1cSuI0SlJrK4eGbRZBR6m4X/DqzfyC6iqVy1sPQ6PrZOr+gUs/3GPN0AJmpPqtetqA/uMZ1KXCvpPGfm6Zgga7hHp+fpeHjAfUX9G98HPzD0cbFKNvkAXIPZKuFk05+DaLOI2nUi/0n8dtXS+q/qpuf7WmKc3lLHP5fjnKm6s4P7MKSG+/5qam/sfC1021lXI9TA6i4AGcHVC3ZGhLPSImKRuFBMqsWluojfvLBVDDy+hONZ5Inxa0G3ceqS819OG+R23fhfQ7i+8RvboCFDeujTMmCgiHZ1cQNBeZctE86JRxABwboaw0p2uI5xlYQQ9zKWlDJ5IYXH4CIDR9GRVWViuUW4qYksrQKyvnxsmekUPSywaNDfURJ86BJPjgHWF1T/fU/hLrhh6QLJGl3CvgKu5feob8vy5BJ2qq6Ovo/6exn19bEMxvsI2szLwSLNBCDFH2iJbWl0CdF3FCUo13j+lC4hnQvWz2t9OCapgFjptFQW1s1pH0tETiAgZ5VFeMnt624IiWggLrrrg9viWcNO7ScshUbR8Fmn6NroFxEvuYYdnteICNMysefuaVHTgMphlkED/x3ctEnE3N0isGGj6P7yK7auQECF35+ctK70Crt+3sWLRaSlRXi+WJTMJQwmcwkhl4BOCy0einAwHsdUHHayuGIc2I+Hgz1X3mByFp2f44W8cw+TlVBjZA/3pduQA1zqEzFf7mtRH/8w7tXaVzVe9fYeIqttBEPnNefpePdkQFbprgGu1dw9TFbA6XTuM3YgLCIVixrU3LGTZKGEuqIsWUADHBVmUTjYKsLeqIgGY0RcMdHwedc2iQOsrLIxTp5BbFvVrSPLbHXFrZd/Py1pzZ4Wb184/6f2MaNfsx8yhiUJkCkEN9cLz8KFLDINrN/AQXjMALqOPJIspmJhGTyI1fJ6IqLgpjqyvAIi3NgoIp2dzFum8nIOysMNjJKryfIGMv04jQemZUz8KofBO1KNV2UCJEo2qjGEBpGsVZ+VZUDtUrFvggs67qOEujOc1G7QMNZFqnWSaQWQhDrea9VtpjOqR1P7a56+6+Q8HGNWFmEP3OfvqLFOxCCfRfhAJEudZ4Irdrawjk7pSCIBudDAriDcQl9zSATaI9tiWYhZwVU0kZUVj4o7N77ZEQ60Jsel7BCnGDqlXITcMW9g89I3D31q2nnpehN64opI55olZwfrN7+L5Gb7qJHCVFYmHBPGs4iUVezkAro//UxE2lrJylpCrxvZ4jIPGMAKeRNZWLbhBwuD0yF0JrOIdnezJCLS2SXMFf05mK/YbcmyNGC0WGykfcYzA7McPK2zjDE1voUbxkmmbRW10dSqqSHwjcA1rssr6g2uBSgv/cQ+TATHq6S6P+Bi1bXfHe7PMF6DsZy23XgPx1YlSAS94YZqrY57BfXv2L19kagP5akMmjQIqhbdcPU+/yG1n2Jmmtp51A5XLVWEBLq0xkmpD8r2hHVJutgVk1O5iVNvoGcy2vSifY2XZwlhgekUnSgb63x+4WnzbtYVjJ9gLjR218/vEPUfd+CjLfQRw8hzyky2ksicQbPOvzat+fHUr4KezWtPicejKxF36vpoPv+EIx3tZFVNZNKxEiGZKqs48qYzmNjlg3sYJDcyuHEDW2WBdRu2JViba6qFpaqKg/g4GOQPSJpORMNcnkYxmE7OYvBqRHImozfAgppM1+xyah+lElzSaxDoPUsNcadDRFLjtDvMpvazTIR2GQAyhX9Qu1yNg2EGDBVi382ATLc9jek69VVNMrdK2peo5AjtGMbxFvXpnanb+d3djPWPRFKfpgX1agzvNGqIu/h2Gusw9G/UQOZYMUqrXGX2PkDsIGCjhv1gUR1G3/FGamvT7UTveajhQQD9l5bFZOAac5xbp6bhwF3ZwYzHDCByBeOROJGDTlgKjNv2CHmiHNfybA4Id12A3MDy6oWnvtagupel7k3BOno/FOqOmbYu6nIMPalcxMilNJgNUbPLcuaCU158JV3PoNOKdHS8TG7gKXDpuhctIuKp4VI0cP9gUcW6PcJC23BrG6fuYDZQbzGzy4f3DAUFLCSFqwgVPVxIrgrBAfhC1d2l/5kM89z3nDo1Q8LCD/phDbti0O7J8NgYiz+oP76dcR0d775ePp9N0L1ZdW+fo+NH0xx3sBqzOzeD486k481KczwtQfedAdP9j4g97UwGOx37bNWK0SovwSTGnSmOg7t9sUouvQE/zu/ScVoyGGvciJBrjNaw+/fp2B+mOY6WoPvusEaNzy1XSRfXdi2dr3W7cyB2pSXme2ymAl069gyNri8e/h/pVfNsl5gDLCdzgUEYHQZhchpE8xIPu4Th7qjQE4FBl1U42CZqvlvsX/T0MY09n1swdV5bNFY5wVFhCruqzI7KiYVklRnEpnfb6RjdhkBb9IVh906/Il2voNPqXPHlj801VW+itIx9zBhhGzmCXUNT//48W4hSM97lX3OlB8wiButqhW/5Cs4p9K9eIwIb61jThTQe5ChiVhHvQUQKVxGaLviw+oQ4QX/2XZlOT0/IwDXICBBgUpupWjY9gA8+vTeyyhIr8IOkY89NR1Zqv2qpweKankH84Zo8Bo0hqJxEfbhjd2Sl9hXq8R9mECMcnub1H2kkK5znpEzISu0niOYsjbGtX+R53GMqqY+kfqDNoPY4tbepfbo9WakYpuGYy7LMJnhH436FPS7hDgzfE1wHOQGwpPRJt0/Y+5nJHfQJf2uYY1ndDUFhsOqXx5//7Q4uw9qr/7U20GW6snmZN1Iw2C4Us0FUHVUm+o8vgStpaF604cFDnpielrGjc6/xe2pXn+7+atEaBNyR4AzrCZYWLCvXxCM4PcdxyCEsY4AlhkqksKKQW4gZQ8uggWx9hemz+Dyn76DKg2IUiXCURadE0yZLv6pMRY9aZ8EOzvZuooGHfAHCTqRwwMV4ug/ICrlcJ9Kxt2bQr6czcJFKVVctV7SrT9fFGfRzIW2uz3E8p2v8/G10vo1ZjjOsm4c07HpqHrVZm6kdCddUPb/We2WtuvWnI6ws+9Oo9XL1ENYOgr+e2T4o10FKcPtgVWE2EKg4okAUDLQSaYU4GB9yx1IqXZde8NKLBsfgi2NB4V3/eiv2I0vNJErHFotBJ1To9PronP6/vfqWdL2LzLk6FE0EJ5gHVr8brKsT0Y52sq7WCf8337D2yrdipapwb+IIC0rL9BQIhOodpWmCtXUsfUBFCBBUHBouIrYEasMHw/w5RTEMzfACaw2Y3qbmWWULxPuOp5vqDdE3+AUduzGLH9n/p83fNO5+Xh76eeHu4iG7ASYmtFg9lhRuikWja4142oM5fr/HNfbxB3m4lhuoHUXX88sMx/xUdfKgghoErlD343c/WOUPTAzclaEraKE2hf78cyaf06vB3v9ZN6qqHVaVtcQoCgZZuTpDxB9n8vLUB/j9khEO0W+8C8X4htkvm5mStGpvenqu3mA+OR5RIigh0/ClW2x4tZED5tGwzlBQHThv3PO/OSctaf3rmkBcSZxoqql62TXpyGRlhvJydg/BNqijhUUskL6DcjKo3oAkZxAXys1YBg9mSyzq7mYVvaGkmPfhWvJ6nVqpdMfvrzHmowWoerCEBuUCNRUmU2JAFvuCPiKrhQgM5/B5uK1aZnhO6JndyRJIDH4zS+slrNHdSDU5AB2UVcNnX6TzBHIci69VK7LXOFaO58GDdhomenK9eTDpQ60D+YnUlsIVpLa6F4IqovZDajOpYSIHwmDIRX6WybkN6uD87wWzXngbQ8JRaebcQHt/s3DVJMcOLqDeqBed63yim/YZcGyx0JPLOPb0xWMWPMpy/V3wxZkvfDTxP+eeIIy619pXeZ3mAiuRok5sfm+rMLpc1RUTzXMH3HnrwM033ZEyQA2dlmH6/T+2lw94IbKlaQpqabEintxAuH5xIifroAFJ7VVFJYtNMXuJqqawsqDrQhAeCdMQprIWKxTiID0IS2dUajIcL2SWX61xX2QPYKHZEA0SPvepSKqYl9AAbxJ7Dw/meMN66Pv8U7UCd4cCNea3KMtT3Z/j91yZ5eeO1uqu0nWYnIfxaBS95+Qdk+M57qdx+3pP3FxqYjRK/2AW8DsqxwzLx7FBWLsoYEFWfGIIRz1R4akLsK7KVpqsyKCQ22iwKUxsmz5oF8PP6P98/1uuHrZ11t9SphJ8cdZz88fN/clpibhh3oDjayy0Fc5ql7D1K7C2r2g1eJsaZw+8+w+RTTf+LuVsASQPocsfO416+6UuFDzUt3wll6aJdnvYBYwH/ByninZ5yDX0ktUVEzqziaszQM+luBwsPkUcCzGvaAcZB3Er5x4m9JzDlQleV2NL1gw+Y1bN5mO3G1SksqxQG2ZolqiBS18f30/w7V/Nw3Fe1UBYwNgsCSukEnyu8a9sMELjftdnECvLFWNQXmd3kyO7AT5zbx8S1FD13v6uSlIjRB8p4nHQbcmQ0F1huj/kjqrEZRFGqyJcA61cVbRxYRcLRWPkNiJNBy5j5XcKicR0ZcGmlevsl96a9imx9IKnP4jGKy/1NUf8zV+2C6PDKgqHFJsKR/RzF48q1Vmcvr+U3zAz7RM1+Mil0bghPtE5YfzjmPmzjxlN5FPAbiJU7IbCQk7DwUo7xpIiruoAzVXU3SX8q79hy0uh/SBChZWGMjR8saPR4gyti3zELQBMuyOpFzKJB9QfZzcN/gpq/6B2So4xsHRAUbvOfLiVGvcbmeXx1+dBb5ZtkbxBYt/DNi1SFpifyeSKRpIqpHYDNVht69VY3EUiWfizz9J3djgwZgSRuIxt2yov18AK+6Isb3BUmUXFxEKePUQqTjyW4H1cAywcD6qZJMpG/ejLec5f3JQ232rzrQ/ONRU5pnY3hKKeWq/oWN8t6j9oUxSyhhS9Xm8rDl01as5f06qkw09eGe5Y8vkvQ52tyxBkh3SBXcBgiEkLQXik4UTI6vItW84J1Eh6RtAdcatg3WZO74E2C/9G2o6IxbMpB/N7dZDyDcx4YNYWsg/IIrbSDXEftYo8niMvbgH9APxC2wxPtj/+tr1IDqVi30S2FRLeySNRmakh77hOJGupjdmTFwCEta0SIQiK/USrnoPq0FqhOB/b1mt8/G9YVkOnlIkY7QvFO+pfNS/2iEggTp/TTRxx/NLXy387I62btfyChz6sPvbgk6uOHeSLBXAB9PFEWCfq368VbV816MId7ocqZ9555+5IK6qPHBmPRxaAeFADC8QVbm5lgoKaHWaisaw0GaQnawsBeYhG8RqSpXk16WjSitQZDe1Z/FhRDXTqHvhRIQaEAmlr6Sa5Kk/HbMlj/7RcO4fY/7Cv9jnbVLLVeSIrkBNmGGeJ3MSqORHWNpEYAu4ItLML1pnUB1ZNSuY7BjsiHNOqe6+dVfBI1Rl5TgWqi7LVFWwPC3dtQGx4o3lizbi1H4x96py0Uv5VP7/vLYPVOkWxmQLV361ud42oEOZip7AUO0Sozad3r173m/63/DktaSGmZSwvm0yWUxAJ0wiqY2UdvdUmbMOHcewKpWmggIdCHmJR6LKgfkdp5Z7Vo5Or62jOZ9qZtNaqAcWVe+gH9De6Yf6Wh2N15rFfWiqNOvdDwlL20X5lWyxvSx7ICuW3F/SBReXOlLBqt3dIMCvIpBCIiUBbmFNvQFTVRxex62cpNLAKfv3rLfwehKYDvl/C7mIi+UMW8WjsiC0ftzbYL5uZ1pVZev7s+eFg4WWda9vL3WvpNxTXi/LDhwh7dZkoOKi/zlVpubHsxnvTajQ6fndCOBoJPOtdupSlCr5Vqzj47l32NUsdoNWCu4iyMpaaahHa0sA5hIrDyRUdFKeLa2PFIiFvDm4RBINI5rxdpBfU5RNX5VoxU+SnImoPtOSXJfZDworto/0q2Bvfh+45KP5fy6PliQfdJ2roozqTD2KWEDM4x/G3Cse5IB/qWqFyKP6tWBTR+rWX3UQU7ysd7eQYF9JyzLRf06IuFpgOnVrOs4fDTivnW9Ro6Sxzlnz+seGq3xzhfmB2yqf6lttmzT34779va/2y4eVId9DsqesSXevaiBiNwlZZqRf+rusG3vvUlk3XTU85exjXJ54xmswXxcirxcITcPXMVRUcWE/qr9zkJoZZ3qC32YTeZCYLy0N/20XMn5yM09lNOcV01KTm39OgPkJblKyBrqSsD2/aP9G53shhijqfSclayo2E90PC0roACFyj6B7s1+d7worZiaygsH9OZDYrvjMQ6+yZCUet9g/V1KSec2REWNtSHjjoThYSLCtODib7C1KGkpHJkFTLsm7OI8SyXrC0MEtYeJBd2MqjontLQNR/3CmqjixktTxiYAWDTEMLmpe+t+GyW6b4Hp2VcpZi7ZW3vTXsgT+fFWzxPE9uoSWxpoPOYRBda5qEf6tXFw3V3lt03YODOu/95TW7Xsz4alNlpYh6PMJYWkLuX5uIh8Ls6iHxGeWV+Xu5XLzmIUrMgKzgLsJaDG9tFaaDqtfk405SFxC4iS4+Ss8cr8a4oOc5RORe93tndwVJwNlWFh2Zj06oYlgtkwFt+yFhNWl0fVBpY8V+8H1ysXLxEM4kzQzGCSqzzldJas325JSPGNY32ywWNY8QaTkoKeNvDnO8qvXrbiYzKNtRnA9xrraVXhGGRmtTQBQMtrIrCa0WNFxNX7q58iiqPXSu84wfPPHLtya9PiWt+7DuqutfU1wl58QiOo9zSKWo+P54YRtYJUzFhdjqgrWbflVw7aO7WlnxRLnv6xVMUEh6BkFx3qFeIUIysJCURysSZbIyYqVoqOMjIV6JR2dU4BKuzuedQYMTgTqbGlZomaCa0dCmIIH1ITUO4M3xNCfnMHM4Vq0KkSvGadxvy35IWPUa9ztBHMBQsxSu1bg7AsKoiFtJ9z3SqR6h9nk+yaqHsNZt+wdZRlgMFaWPEbcqHeXgeJWB3EJor+reaeN/Fx9sFwOPKxFhHxHSeh8WnRBbPukUJqdCrqMiqo8pRhUHDsa7idDcGz1jmxaH1lp+elvavL2662e8GvQZLvRt6Qy7N7SJ9kUb+JwGux21sHSWUtfV/Wa/uoNIz1JcPgCaKtR0R+KzAkV7/36sx0K993BTctYdsS28j9gVkwosLKxVqBMe/wPTA3056HSeELVF1B6ihvy9o9Q4EpS/yLUDES/LYtyyTdWAiT85D1/tRI37rdgPf6tax+OS/aS6arbAfaKltDL8MSTpz850oV11rUntN/6CqfMQLN7cY2GZXQZh62dil6nh806u3Y5kZ1hYRQfZ2OJa858mEe6Osah0xFkVXNcdCdKYWYQ11vBJB1lpRl5ktWpSoeg3wSVCnd5BZvHhl8XXXJ82vtN0+zWvOseMPEVnMnnjcZ2IBaOiY1mtCDa2Cf/6Br37s6V3u656klf20Z99ly7u9f0eJZRjPrL2WltFzO0WkeZmXsIegXcsUw9hGVxCSB+gwdIZFCLjWHIxi9Kit/fGXYBFJKitV4v3oeD/ONUKyyRdJ5fZmovy8OTVWoHyq/3wh/qFxv3g7k/Jo0VToq7Ms69Aa4rS0zkk6Wc0kdDjGjzUY2GhhjsWkAAgaUDtdvfmgPC1hIW5wMj74HXIGmrfbhVtq71MXnit/4QCtsBQhRgpPWv/20wuoZ/jXoVDbGLQZGPh0O+t/MB68a1pB6Vx5hVvm/uX/dAxqH+g6OjDuUSM3mwTln7kAdHPPNTQdp71ssd/bXYV3xxt6xyLYFsiGuEKolgVhwNzRUnxOhf1o/dBYHoiK7iKqJEFjx6yBr3N8tC+cmfAChPJRS20zujksh7c+ep6f1l/XmjTBLWpcYz9DRiLDo37Qm5SkAeygqWGh/Eq+vvePqzYmgm0Kuv/m8M5RmdDWM/2vIAa7iAlWEyQLWDGEK4hLKuQO0IuoJ+X+cI+NccWiyIiotaV3aLuvTYWk2K/g6aWCWuxiWNhUMkjWI+YFio9dG/2jy4f8OlHwx+YnnbWoe7KCxbEncXnB5tb/f4NjcQzZqE4afxMNq99xGiLUbH9WXijdyA9h2NuByX5j0mJEO1M3mtxv4/IzpIMOaIEjddLVpYtKS5VDHRPxOfn4UaD8veaHKsS9JAWZv601n3KZfYNfX0yU3Nc/b6oH6W1kuqr6ZYk25ehpgRpLcAI9fkz2VzLnYDyLD2liBE3wsKqv8zDcXOBVtLMZWLllxkTFrmF0GKxgLTHukKVUUgb2lZ1s2gUGq2ig+zs/oGUujb4RcvybmF0KKJ8rFMMOLZE+NvD/BpIrWOdjxeqQK6hq8bCC69ixR0E5DvXdVTG/A2rrZfcmjam1f6HS14yOIumiZgSifpCwv312u54KGb3rViphBq2gIx03qXJhzcWm2Ci6uh5KCbDChCQcgkZHcgrwEH3qJusLatZGMqK3vT+9bxIjmSF4n8gPVQDfTDXeIb6ea2SiFzLhGD13jmZEK1qSbxMrZ9WV2E/jt88nMG+cAtfpuvjzGLMXdT+TX/urK9DetDfEU+j90/cS9dAq2TjsCzv94tFZmW3d8glvBX/AwEB0FZhFhAzf5ZiY3KtQX9MBDrComiona0nyBr85Cquf62FLS6o3lFypni4nfdHrqGvJcQkhVlER4VFVBxeIEpHO4SlIDHQFP9wsfXi36V1TZpvOfdt68gRFzmPmLTBWNLPptisOqwQzZZgVTWXjoG6XXEVsLuH1XP4S5mTq1NzHItcQh1ZWbC+Iq2twlhcyMX+lELnLTmSyzFqfGai+tLl6k2bi6sGDdegPMdZenPt3lIX1ujt+yLO9sl237c34Gny4f7KVpjhos1nGZLWcrpOZ2mZhYW+iRpmjiGr+fFudkUy8Zu07zx1fcQ9Ca0zvNdl4hbjIanmIz6eaYe2v7BYOyzBBfzIiLcSScGdQ4WGnhlDxK1QyQHEhdgVxKMgKRAU8gw3zmtlkoIODPKHISeWsbUD4vM2JZOmG79wc7CetVrDEq7hxy18pfSGa9NWTOiYdcYz/q2N94Q2b1EgX0B6DX/pWJTjUdjC1RPxGLmCyVlA1LviLG58QSQ5h4JcjgYpPNEut1AKXE2ee85ckgNZIa/v/RSWBmJQqLZwRab1zGn/n4vkqjVaAFPy4zzdlNCMIVfxUawSs/2NR3+XUTuN2vOqq5pJoP/O/dEd3AmZrj2Jhw2uVR3SqKhNx4MNZE9tArUfULuaGkIw0Hqh6odWecpJQrvEIF/QKlRFPPMD+l6je7nHjeqiqHjQzxIp1pLoDdv8Y3ILA5NenzJLMepm6sla4SC7S+FAeiImONEZJIQZQxCZYtDxDGL7N25hIiKDC9mfrCesstNOpAXigogUXcLrhUNtom1FNxfaQ6WHTchJhCLeqgw3iSWr7ZfOPNz32B9T6l8CzVseMRcUXp0IRkZjSXoO4LS0cKA9Ae0YrCijkfVYSMdBQB3B/wTWmsBsYHEx182Ciwi5g6F/2c+yJCqUe0Gg/qe72a2/Sjx30v7/gQWjDtDmnculqJbNZGpXimReolZAIhHJ442J73Wp2tCvnjLQ2S4iATf5uf2crNjKApGLzNdZxLhelefuIOn4V3v4EqAyaERoS8Earz6s56vjXyeSGQNwkyGIHKs+HIty6dDOAb27ybq6JRqI6WxlRpY2cAmZGguTFQDRqIEtJD2LRJFziIoNqOqAtQphVXFQnggNbuC6V5pZNQ+SC3ZGRdVRRVx2GZ9BYB/Wm7fBXW4wfLDKcdlNY7yP3rnL1D4WuYhf+vCFrtETlmCVHIPDweVkUOsdSc3B2lqeEYwRYYGs+EdH1hdU7YlwkMnKWFLMidBKcVGj5+5pb2RBVpVq/ObwDAKW20gAHEvHwHfzq0RQKrIrY4ISzff08Y2ay2o3ILvLDgDrqgcz1HjfmL3YB9Rin5qpxikPhN1G9ywePBdm8LHvqa1PsIOvTVZWdyKuvwpxLLh+mPVDsJzvQvo34lqwlOD+gaigu4LkAS4hyAn74vUNr7UwGcErQ9C9+pgidgtRYhnEBpEpBKcF5FJaS0ys76o+yuSoGLHofetFt6dMhgw99vOl3jUrF8NiQq4gyAoAWQHQY/FFVis1sKWFfEGyFvVWC68cjXxDY0XZ1CyvFXzRXFS7uJAQi6J07IgsySqhkkHXPvwD/0WWi0bsq1YWhMWni9wnOXIhq8mZLiOWR9wmtC+80pco3IWw+AVj4uF4JNEMl0pn1LFrBaKChWRyJGcIO9b62EpCTAvuIJKksdIzSAuyCFhjtn5m0bjQLRoWdLGlBvcPqT0DJifDVbC6QGp177bxrGLYExPdmz1DCsuXzEnXY6XAeRMIyTZyOP90UdddZzSxMFRvt3G+IGJZiGvB0oIryKxJDWJRfVHB2+67Tlua5Y2LBNKp2QQK84gbqB+v7sO/71nUv3+KAwz0nUAaJwjtC5DkM4aE9Ri37MXvvjGLWF5fwJ6SsMjKisWi5smQLwAo6ocEaKTntK70sngURfygfMfiqnAPEb/CzKFCbuLmjzpE50Y/E1rRMBuRF1k1Vr1oWuTm/YNdUSY4WF5lox28H+QOYDSsd+hv3HRc0YwZKdNOgu1bP01EI4lw41aOjYUaG0QiEmZhaNzn3+YKonAfW10eN7uKyB/U22w+Q3HBqTkOHpYbh4uHqdjOPThYsKx+Tef+Sx6OhWBvvA/6+Cd1EdgDEuoafpghXbyHTomUrWNTLGq6N7475BX/r48Or3UNg1EpCQv46pyX18Qiym9gTaGsDKQJ+M2UjnQwUdR/0sEkhaoNSJJGxdGuWj/rtoqH2VnV7msKic0fdiQTqnU6tq6Qfwg3EjOGcAlBbl21AbbMsLgFyGvwD8tEcVVtyqB4dO61PmP/fitRp53lDDZHcqGJymSSM+q6A5AvsNod1hURGJYYMw2sPK7rj1NDeRpArM0HfQXqdfV1XAFPVyx4mq9FBJCOhEoP7jzecD+h/t0iDnBg6TWRrMP/J9F3ZXOQe3mMmrIV3oe+O6ql3Jznh90zQntq0xkQ0abVixit8XsScf17qEKKADpIB3IGrFFYfVSRiEfjrF43OQzCWmZi8ah3a4hJCPmIsLz6jXMxqTUu7GTrCjOICLbDshp0fCmr6JEwDfsBcgco61m/tXzLefqz7zKmcQvfRY4g1iaEnAFaq6TFpReRtjZhrk4u5AyXEEX64Aqahwz4LZHVF3kewDZqN4ik0vkPquWST2BVHZSRGUXneSfPfUcxNkxBv5LjobC24Rg63r/EtwRqMjvIGUH4/+TxBwyigi7uUCwXv49+d1QBPlJkX5erx1vAylNY0PUCoX1tBMy+/yyt7J9cw8S4uWdNMdl9y8kdHI54E6wgnXpGX3OYV4HGa63LPVzYD9UVkOyMJe03zGvh2BUWqQBplQxXhNFuIMuqk1/XEQnCdSwmtxHJ1gjmQ4iqJ2L02oL6ovLm/u0pynyEO9q4ByAikChW0EEA3jxgoAht2kRu4lZebBX13VFR1FhV8WLXXafM7sNBRJ0vrPKMhSmw1BHcTiiTsxH5QfaAmxU6nblY/68P+40gMjRWR6pPTuh8tKSBwDJ7kdp9ORQRxMNjTi/75KNO2XoN59mc5fVDlZOz6frhgQUNHQLzwzM8DO5v1I56io73WZbfEVZKb8vYe/N43yDPchJ9byRGX6ze71qyM75WH3BPqnGxHrRpGKMeDO1VuDX+mTOdIuHdGPFFShHL8tQHhYNcOLiJsK4C7WFe+guKeFhcCK7DtUMRQBAVtrCeYFVBfwUXsfxQJ7uFPeLTlqUe/hxcTpAYR9gGHj5qy+2P7FKrynr5E7cZhOl2VFtA7Iq1VYnkas8IwgfrsTKOPRlwN+o+dIwcc1zjz0ft8Sl2GlDMLhymWjIQ1mH2E6JMSAagewqoP34Q3lp1QD/PhaTonC+J3gv7zaFzXJTis5i1xHLo31H7i/6b1JsddXpWq0TzcZ41YAcM6BoOUS2QsarljfF2qM94jzretao1tbS31ZL3k++sUx/OY9T7BqWToIHCTDbivMibW6YWuMwZvT5Rl5z/QvfBf79wlFHXtJKIqQwGsE5JBuPt/RXhJ360lZs5FgXpw8DjSzhdx6uuGg1iqphYwEH5+o/auYqDe5NRNC9OpuuABCFrsBSbkvGy5hCn/Xg67aml/vG4KRELcwIzlqIP1m4SliGDeAkv1G03V1Tyijg6i/lt+8EH/2hvkJX6JIIa/R2RxyWW+ri/eNL9W20S2V1DWA4bVavn2/Kd8ftapbY+h6bKk2uv/Ferp/2gkb7W+AasT4gVnxGnQjyK4112RQQ7wqJ0jJNfg8QBwXeDWeHZRLiKjZ938gwhFrMw2vTsAiI4j9SfjnV+LmOz5eNOjpHxsUOmlFO5BptdF8MyXeQSQvVuKHSJaHuHsA0bynqrRDwulLKiJ91/Of3EvUVWEhISe5Gw2Nm+9eH21roxo7qbDC/BEkIlBqjeYQ2BrBBktxQYOIUHM4KuGqtoWNjJriNmD43kPkJgCkkDhKOwpBDEhwgVJAYBqbPGwn8HOhMeX3tRSqGeTjEOxYrPloGDWIOlUxRYU1yFARVHDWUll3fdecrFcmglJL7FhMXRsXvuC38z4/Vpvq6yGeQCxhBcxywi4lRQuUNgCv2WnVzEVs4b1IkhPyoTgdaI8BNB4T2k77gGWsXgH5TxrKHRaeBt/fwO1mG564LC7656F+k4qfoQ3tIwRadXeMEJc0V/TtFBDEtnNTebaiqHdM466VE5rBISkrC2YeMNz93v6x45OOw3fIaifIVD7BzTgjXlqLSoZWgiXEoG7iOsriJyEVEJAu4eEqibl7pFB5EXVt/pqguwFVY5kVfcSSiOkpSJo+aLHhxgqR7ggA7L4HIl8wb1erKqiv/mGD26sv2WybVySCUkDlxkXc2w4faH6slnO3rgH6f/uLup4V69PlaB2UEQFPIJKw5zccUHLGgBiwp1tOLhBAtOIRr1t0VEFbl/mHUEiWHNQ+QZGosHzG6e+UDKGQVjQfGUaGcXF+JDYT690/4pWVnTWq6f1Nolx1JCQlpYvWHTzKee7WweVxP01/zMu1VsQQAeNbLa1/pYwlAy0iESkTiXqAFZhTwREQslROURBaLpC7dIRBMcx2r6yi3IsvqsftlhKdM79GffpY93uG9hGYPZ+K6ppmKY+y/TjgFZyWGUkPh2IO9LFA2efdGhitL+GxHznJmIx02YIQSJAUjLYeW8Uc/EZXYZ2X1EIF5n7jevo/HQM/yP/yFl+oztl09ONheUHqF3Oh9pv/lYtxy6XZGLDktC4ltJWD2omfULvdHsP1Qnus9NhLwnKabQyHgkZoTIFOp4SOlAVkJnaQxHhlzf9KfHpP5HEpaExN4hrFQ45Ilzi+JR0U8osX56arGwecmqy59dJ4dBEpaEhMS3kLASveNJeaUk9lsLK5GQYnAJCQlJWBISEhKSsCQkJCRhSUhISEjCkpCQkJCEJSEhIQlLQkJCQhKWhISEhCQsCQkJSVgSEhISkrAkJCQkJGFJSEhIwpKQkJCQhCUhISEhCUtCQkISloSEhIQkLAkJCQlJWBISEgcM/k+AAQCQykmDVtjjcAAAAABJRU5ErkJggg==',
                                        absolutePosition: {x: 100, y: 50},
                                        width: 150
                                    }
                                ],
                                {
                                    image: svgimgsrc,
                                    width: 200,
                                    height: 200,
                                    absolutePosition: {x: 345, y: 55}
                                },
                                {
                                    text: 'Organizational\n Culture',
                                    color: '#979797',
                                    fontSize: 8,
                                    bold: true,
                                    absolutePosition: {x: 470, y: 55}
                                },
                                {
                                    text: 'Education and\n Awareness',
                                    color: '#979797',
                                    fontSize: 8,
                                    bold: true,
                                    absolutePosition: {x: 380, y: 55}
                                },
                                {
                                    text: 'Governance',
                                    color: '#979797',
                                    fontSize: 8,
                                    bold: true,
                                    absolutePosition: {x: 525, y: 110}
                                },
                                {
                                    text: 'Supply\n Chain\n Mgmt',
                                    color: '#979797',
                                    fontSize: 8,
                                    bold: true,
                                    absolutePosition: {x: 335, y: 110}
                                },
                                {
                                    text: 'Workflows\n and\n Processes',
                                    color: '#979797',
                                    fontSize: 8,
                                    bold: true,
                                    absolutePosition: {x: 530, y: 185}
                                },
                                {
                                    text: 'Analysis\n and\n Reporting',
                                    color: '#979797',
                                    fontSize: 8,
                                    bold: true,
                                    absolutePosition: {x: 325, y: 175}
                                },
                                {
                                    text: 'Breadth of\n Coverage',
                                    color: '#979797',
                                    fontSize: 8,
                                    bold: true,
                                    absolutePosition: {x: 385, y: 240}
                                },
                                {
                                    text: 'Digitization',
                                    color: '#979797',
                                    fontSize: 8,
                                    bold: true,
                                    absolutePosition: {x: 475, y: 240}
                                }
                            ],

                        },
                        {
                            table: {
                                widths: ['*'],
                                body: [
                                    [{
                                        text: '',
                                        color: '#4697c8',
                                        fillColor: '#4697c8'
                                }]
                                ],
                                height: 5
                            },
                            layout: {
                                hLineWidth: function (i, node) {
                                    return (i === 0 || i === node.table.body.length) ? 1 : 1;
                                },
                                vLineWidth: function (i, node) {
                                    return (i === 0 || i === node.table.widths.length) ? 1 : 1;
                                },
                                hLineColor: function (i, node) {
                                    return (i === 0 || i === node.table.body.length) ? '#4697c8' : '#4697c8';
                                },
                                vLineColor: function (i, node) {
                                    return (i === 0 || i === node.table.widths.length) ? '#4697c8' : '#4697c8';
                                }
                            }
                        },
                        {
                            table: {
                                // headers are automatically repeated if the table spans over multiple pages
                                // you can declare how many rows should be treated as headers
                                widths: [ 'auto', 'auto' ],

                                body: [
                                    [ { columns: [
                                            {
                                                // auto-sized columns have their widths based on their content
                                                width: 60,
                                                margin: [0, 20],
                                                image: 'data:image/png;base64,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',

                                            },
                                            [
                                                {
                                                text: 'Organizational Culture',
                                                color: '#4697c8',
                                                bold: true
                                                },
                                                {
                                                    text: orgCulturePDF,
                                                    color: '#979797',
                                                    fontSize: 10,
                                                    bold: true
                                                }
                                            ],
                                        ]
                                    },
                                    { columns: [
                                            {
                                                // auto-sized columns have their widths based on their content
                                                width: 60,
                                                margin: [0, 20],
                                                image: 'data:image/png;base64,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',
                                            },
                                            [
                                                {
                                                    text: 'Governance',
                                                    color: '#4697c8',
                                                    bold: true
                                                },
                                                {
                                                    text: governancePDF,
                                                    color: '#979797',
                                                    fontSize: 10,
                                                    bold: true
                                                }
                                            ],
                                        ]
                                    }
                                    ],
                                    [ { columns: [
                                            {
                                                // auto-sized columns have their widths based on their content
                                                width: 60,
                                                margin: [0, 20],
                                                image: 'data:image/png;base64,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',
                                            },
                                            [
                                                {
                                                    text: 'Workflows and Processes',
                                                    color: '#4697c8',
                                                    bold: true
                                                },
                                                {
                                                    text: workflowsPDF,
                                                    color: '#979797',
                                                    fontSize: 10,
                                                    bold: true
                                                }
                                            ],
                                        ]
                                    },
                                        { columns: [
                                                {
                                                    // auto-sized columns have their widths based on their content
                                                    width: 60,
                                                    margin: [0, 20],
                                                    image: 'data:image/png;base64,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',
                                                },
                                                [
                                                    {
                                                        text: 'Digitization',
                                                        color: '#4697c8',
                                                        bold: true
                                                    },
                                                    {
                                                        text: digitizationPDF,
                                                        color: '#979797',
                                                        fontSize: 10,
                                                        bold: true
                                                    }
                                                ],
                                            ]
                                        }
                                    ],
                                    [ { columns: [
                                            {
                                                // auto-sized columns have their widths based on their content
                                                width: 60,
                                                margin: [0, 20],
                                                image: 'data:image/png;base64,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',
                                            },
                                            [
                                                {
                                                    text: 'Breadth of Coverage',
                                                    color: '#4697c8',
                                                    bold: true
                                                },
                                                {
                                                    text: breadthOfCoveragePDF,
                                                    color: '#979797',
                                                    fontSize: 10,
                                                    bold: true
                                                }
                                            ],
                                        ]
                                    },
                                        { columns: [
                                                {
                                                    // auto-sized columns have their widths based on their content
                                                    width: 60,
                                                    margin: [0, 20],
                                                    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAakAAAGpCAYAAAA3LMlbAAAABmJLR0QA/wD/AP+gvaeTAAA/QElEQVR42u2dB3hcxbm/SS/kpt7Ue9ND+k0jjTQcrN0jmZiUC6mEm0IgyT+U5HJTSHMKpAMBa885KwPBpJpAGqlAnICtnTkrisE09yJLlivuuMn/b86uwDjSztnVllPe93nmkTDSanfOzPxmvvnKYYcBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0AccfeLrjl16Tu2jeM+gNAOgYR/oDD8v7wel5T5cdT98uX5Xjqt/J1wu7PHWW4+sP5rxgapff/1/TeoOnTZkx96H0WvLpueSmJ3cXg9flvdL78q76jjzv3+ZdvSDv62Xy/bC0ERkPmxwvGJKvt3QXyi+i1wCgrUz3Bx6d8/RNsiDtkHZggnZv3gs2mMVKvl8tgrYm5+oV8v2inBE1N/iHtF90e8EPHLf8Gfn6Hqeg35r3B17szOp/Ir3cGaZcevPju9zyq7vkeYj4zBChmeNUnvXSfPgs1Yg8y82yCdlX49nf1+RZr+RUBQBtRcTlJzlf74mySEVvapssiuvChdAN1si/DcriuFz+fan8+y3y9a/yb5c5vvqm46mPys9N7yqoN+b79HPzsxcczlOJKEK9cx+Td8svD/vP1192ivrnIjiB4wdL5DQ0KKKyVvp3k5yS9jbp2Y7Ka/2JngeA9nDgwINkIRtsrkDV3faJcG0JRU1OaLIIVpvs2n19t7RAFuE/yH8XROi+IGbHE7tc7cj3rzS7+hPm3P7w9J6E5j6yq7f0knyx3CN9cFYo7K7uNydYJzzR6rXy/UZ5hnva97zUIBMHANrC1D71VFl4hjosUvU1X++Wtlm+XyuiNmROC1WhXS4L990iZvPlv38lQnaemCfPcNzgvblicHSPp15q7mCMMMel/43AOr39L5CFP5f3Bk6T99onInS9+RzSVlU/2wb5vLti0/+uGg77EQCg1XQX1CsqZrkEiVSkhfQB/71HFvytIgQbZbEfCcXNC78acV5uTmoiBH+R3/mpiNrX5GdPMuazfEEdaU5qk3ESOe7ief9mXqerGLxXzHDfy7nB7+Q9DMj3i3OuMsK6NhcKbtPMcS1vRjTl3vH1zB4AaDmyMB8jC8+W1InU5JoRjO0iJBvDU4w4jFRFbbXxcJM+u06EZbYI2jecgrlPU7kuX72l29Wnys+78nN/d4yZUkRInEvE2URtld/ZO4GAJq+Zk6wXvI/ZAwBtECn1/nxb7zPS1ap3QVsqJzVxKsjK53bVN5k9ANB6kSqGl/E209m9CFKm2g7bxkWcV65k9gBAy5FL+ousAuXr88JAXxPsKbFQcnq4wQT8hk4KfrBS2mpztyM/u6p6v3WP/Nx+Fvs4tvC5iEu6DkMDJGB7hXmW5k4u55YuctzSJ+Tf/tvuTKNuYfYAQOtPUp7+jWVh2yQL29tsr3PUef2P6iqUn2fuZozTgXE+kDuaGcYZIVwAPXWrvNYqWdxW5SueeEPGiUH+33oRvy01nB5odTSnIkL3VJ1DhqVvFxtHDeOwYRw3xJX9/caR49jCDU+Y8GGasAQ/jG2rdS+1jNkDAO0QqX7LjnnEuG4382+aANQef+D53Z4+KlcoHScL6cfkRHeOiQGSv/c3Eblbqml5VlUzXEgLhkXoNldPAtkWIj80x22Qk9C6MJ4s9BQM/iHu60Xpx88YR46pRf3CngsXP6LxcaGW1RapYI3ZmDCDAKDFIhXcadmZi1lo/lNa9ffNQmrywZng3FxB/T9ZdD0Ro7l5X04AXiVjQjVgdUtmHBNcvVNE5yARkuwRnr5e8uvNkr45w/SV6TMT6NsyM7Av+ftqmw3vCTcPFZE0gnaXtJL8+1ViLrxATmL/a5xyut3SFKcYvCwcQzGKTwOAxIiUbcesh06YM+chjb5+lz/wuDDeyNcnyGt9XUTvytD054cJS4fzlWDV9Za8gWlq+3NjgcgVt/ZB0x9j5rhcn/6A1RzXjnHhW83AUeLTQieM8Pn61bg0V1VNvmp5aIYci0+Tk3Qz49MAICVIDM9qy8KzqtbvjwWrhiIUJjANrjSLj0lgOhasGgbRenpnVkVI2kLHK199sAiZRdhkno/t5qWSEb3dfXd/0PV9Zl41JLFmkgxXLQqDrkXMZVz9WMTtc2bMmTtQc1LrtKgDQAswO1XZwQ7bLsh7+tR/mozmJljVmOOqwaqLq7+7KRde1Ktd2fGOCxO2rglF2Hg0Sl/Iv18vi2mfScMk//aO0MSV4ES5Jj+ifKY9iQm6dsOg62GTpd3kNZRnpOXrH8x4Nfkejcdizi2/uXJXpx7L7AdIAKYulM3VWCb9NlmEJfGr7HD9YDTF90AHO4vsyptFr+JOP1zJ3q77ZTGcLYvh50OTlGQeN6fItI6NipemiHF6nvGeqtfjSPWe04x7EbRgSSWLSHCNySIi4vwN8YD8mEnoa0qcHOP2/0eaExgDxGTBGXicyRgupr13yuT8PzkBzZbJWQpPAVlJieQeLLzhqW8s1dFwpS6WUlV3+S8Yj0OT0zDLO+58b/BMOX0MZ9iLUjYqoUiHuR5lg7IiX9SXkVgXoBGznbh0m4q5Zocf2uo9daksuvPkv40tf6hqlhsJT0OZWGCMCFXy7VWyiJdWihlOS42ln+WL6kvSD++SrOivMgUBGT3jY5xlEpcdv/U5C0fFxLuCoo8Ah2Aq55pYJdnNHWsyP8hi2ydf/2lMFTmTNcB4yVXctNNtkrt/sbj/JOSH3oErRYgDOSn+XEw2Z8vJ6N3GVMNl+iRPU8YDD3H616KPUrCT0QHZOglJvEtYZt0LuqXs+qcrmbTV32VCLAmLAIYCJGW+pTCgLMKZEKHc/eY4aYExS5bl6y+lf74Spu0RD7mpM/WTGD2tFCm9sHYMXXgyr1RedsO7u/X5LCTalTlJzBekChOwKia4I0wmAOMhJyehmTKhrw29kML0MyJAnjIF/IzrchYyKtwbipCrRsZKYMjpR1L36F+JAH1V+uJ4+f+vxf7fYZHy1Z8sTjXru4vB64wDifGaM95z5t5TNlKn5orl71bqc+lr5edul59fFjoq+BXX8vD0H3rkJTE0IRhCpCBhIqQeOxYrFO70TayQq24xi2/+gQGrqY8VyvlqdCxOqBLEGawLL509/U8RIXFfDz7tFMtdJs9fKzMmQDNEShILWzzm5Bl/oN7XNemUzL2OcdM3Y8EE8XZ56iwzPsI8jxIPFcaWVZLfGlP26krclNr4LyVR3I444axidECseEDAqoiQ2SGaRbdqsx9fhNz0i5BxThCX3fUVBw1EKG3Iqeij0vbVHBMFdW6r38dkkheLo8POpicvdtVSRgd0bvcoYiQeYN8KAwG9YGHV3r6umkFAyo8HezLgrm3qR23MjWWL8IPdVTOHuKuHC8JVY+U7jHDT0tnkGX+7aoKuVfyw1Or34fjq7VHDAcyGMjStF4M3VUIuyqfIZ/jOmOkxnNNhrkFTYiZMXDxU3WhGNz366g5WSmg7M2YceLAM7kuqgjSaXe+lMMv4Thqt2vZbnCd2t/w9+GEyWyMklzU1sFbulUziW2N2NIlwTULcSrB2eFdaa55cz4oJnbC//8SkWMHFlkaLceiBq69qqYnTH3i6U3HuqOUw8itWTGivQMluqnrsZyGg0eJ8Jyp3oOZuqnX3cJKZpWJNqXEvG/yQVRPaijgD5DOTHohGS7pQSb2qlm1YJUxERKrmWiD1vD7DqgltxVzM2i6Im9x2V8tXjIh79m4WHhqtrrRXv2zZhtVkf3fD7OoTnOTULgkzeQ+rJrQV495avZhtbpyQBCs6JsbD1beN1RMyGZbHXLTDNEec4Gi02IhUGGJS21FkkwlaZtWEtmI8hiqZHyJNkNHQXbWSQXylfB2sRtOXjPeR8Q6KmjsOMyONFjuR8mvfiam1JrsGqya033nCC5bbdlDGs0js0V933OC9jlt+/WTT9iBSNFq8RErm+dWWvz9M9nzojEj5+g5LgOtwvk8/t90OG2ISvMFE19NoWWgSPF+oZm/p0EnKJDKuKVLk7YNOnaTUXy2D8x4RqmPaLVJSC+m7PB3IzP1wWBdNj3TMccIP7q65aZR8gjwl6AjGrdWaicFXpyBSAOkVKXn95Za8fYt5StARuj39cTH57asdn1G6CJECSPFJqpKgttbfvoWnBB2hEiulLbFSwd8QKYB0ilR+9oLDwwzqbVwDAKIPUHGKCJ0jaucOa2r2Y0QKIEYiJWuAY4mXlPCSn/CUoCNMmTH3oWJvtsVKrUSkAFIqUn7pDdWSHbVOUt/iKUHHcGyXpmIKMKXgESmAFIqUFFSU195RI/v5aLfX/3GeEnRSpG63BPQOO739L0CkANJ4klKn1KolJyK13aQy4ylBx5CB+Ofad1LBPSbvHiIFkMqT1Lm2MiHdxeB1PCXooEgF59cO5NP7ZTf1SUQKII0ipS63pUSaNnP+s3lK0DmRctXHZCDus1yc9iJSAKkUqetsInXUef2P4ilBx+h2S1PkpLTZkkvvWkQKII0ipW+zZJtYwxOCjmKO8tZYKS+4E5GCJGJK0si9yjccT90t96tD1RpqzWvymuJcdJfEE86Y7g88OmkiJe99CXn7IOaTeM5DbHWlmjlQESloF1MunftIEY8BGVO72lBOQ/6GutNkcEjYSWql5SS1iJEEHSffxlgpRArahTj9/FxEane7aj5JccA9pghoUkRqxowDDxYryVBtU38QMJIgDiK10DJB1soEPAKRgsQIVKHUlbNmUmhBkzuces1+nRKpqTP1k6x5+9zSHxhN0HFybvAnixv6FiMuiFSGx4inX5vzyj+SPG6e8fYUZ5pzHK/0BUlSfKbc97wzX1BHTu1TT43De53SO/cxOZsZq3Wnqbo3dJ0Sqbw/8GJ5ryOW3J0eox86f5Ly9Xm1J56JSA8+jUhlj4pJSF8m95bragR8i5kr2FC521SDcppYKovfPGnnmuftzOp/YnstA+qXVdNbB8q8B0P1llrvmEh5wdvktTdZPHvPZhZA500jnvqoTIK9lvRILiKVwROUXz5bnsm2hhdtX2/Nm926q1flfD3HpNhp1Asu0vvtDcfXhs4IVPh559f7njsnUup4xwvurfF394pn5InMAuj8SSrcUalNtW3T+jpEKlsY9+28G6xp8kK+I1yQXbVAxtyney5Uj23W+z3u4nn/JmN5ZYcESjKzqEGJO3xOUkTK8ctnWj6TzFOVYyZAx+nyB55l8/IRk9/diFTGTlFyt2LuWFq4sIvnXTAsY+va7qJ2TDjE5BZdPUc2U3sj/N0NOVcNNquZEI28V7oqd9G8ZzQ2/zojUvLeL7DcRa8TC8ormQkQgx2zxEpZ60oFTakrhUglafMSZfFsWrsnLBvj6s+a+Ka6rQGFUo/8bhQz3z25gj45ef3cCnOfvsLifj7k+ANPZyZAPEx+frDMcic11MjigUghUnW6cO8VsVknp6sfRXVAMCZD+d3VEU1yc5PZzy1xnJhnOUkNm8KozASIh0h5wW2WCb62u1B+ESKFSLXJAWGPuQ/L+cFXbYHkUhPp16G4WV7T1EaLi5t8TETqTkufrWYWQGwQz6urLZNka5erHUQKkWpz2y3istopqI8eduDAgw59j8d4penGhGd/HbUxrp5qHfTuW2bZKCxjFkB8TlLF4AeWATsqIvUZRAqROiRG6lYT8CnfXydf75Cvg8ZcJ983NV+enKg2i7v0TSYA9f73N/A4cZawmvmqNdGuTXQ/t8K7z1Or25VYGmDS9Hj6JFuslAxaH5FCpGyLp/Fy65J4qHxRXygislC8yNaIwGxphljJ6wybarJH+gMPk//+jYnlifB7Qz2X3PRkROp+qv03ZJnv85gFEBucgn6rDMyNlgVi0pfOiFT6RepQTNG8rmK5q3p3JIKltk7uvirYLl9XyWlto13U1KYuN3hvFvq5rnkoGwnHWqJHX8EsgPiY+3qDZ7YjVgqRyp5IHUwY7tBXzol5+W9y1zTitDJLuS8Vp/3gT1nsZ+s8LAavcmqlujLzUOKomAUQG6LUlTK1ZxApRKpZi2fenf8UU5AwvMdqkjnwkE3VYLvzBiZGpExORVdvrR0nVT6TWQDxOk15epnNtj/ZvGuIFCJ1KOH9SF/548abLJqnXqS2UTK2v5t+nugkVf6wnGT31fKqFI/fE5gFEDeRus1iPlnb1Vt6CSKFSLVi8TQZ1yXDwQflNU0Rzp2TMPOZdEtX0c+15nrwFUs/bhaT4NHMAoibSP3emtG6WO5BpBCpVrpGG0cLcXg4P2+rdVQjCLXechkZFCnfUhdrZLIbUoBWiNT3LZN/1CkGZyBS8cWYY7sK5eeZIoSOeNQZk83BLd+nnxt3kRqjxx94vry+icPaUe9dlEmajEhNjJj6rraZ9k3lXmYUxApZ1D6cs8SdiJ2/D5HqPGFZClcf0+WpsyTQ9XcmkLYa2GoWu7WVU0hYfmXHfc3X4rqthuXrb8xpJe4iZQiLLhbCU1VdjhXSFyuSkhy1MycpXbYVbxwvwwdAhyeLeostVkra9YhUZ05IpraP9M+F4hF3u/GIk6/rJXZtf/0BsXJn4we/SIJIVU1T1zf4OZcnQag6490X3N1qT16A5ptX+tR/2qLQzeBGpNp0shX3adk4mMJ0t+XCdENqQxNjiNaZxTHuItXlqo9F2DjVasvjmFQ2Biep5ZbA/SXMQIgdoWnFt9SVctUqRKp1mNII04r6HaakhEknJPdIO1sT7BqMSj9/Ls4iFcZRWeucWbNTmBPYLcbNHZE6uG9t/aoWsiJCLMlFiJXKz15wOCLVZHHyB/5dBOmiMN1P82KFDkymnzsuUmLmq4rMZD/rHjkZXIlIVftV5q9jyS4jf+/vrIYQTxOTrxdYTlIjPZ56KSLVpE2B5FATB4ifyv3JejnFjrazDEacRSpfVO+PYuYTYR+NeD+1qdvXpyJS0rfi4Wlqa1lO2j9lNYR4Lpq++p3FvXebmKKmIVKTo9stPUf68cpJ3rekV6R8vShCjSiTMWGRjMkNUe/h5Gdfm3mR8ktvyFv6jHthiO9JytPfjTDZP4tINUaYEdzX51XcxHVrT05uMkXK7PTzYUkO62cMc/PJz34pktiH/aFWGdNqpkXKC6RQpKoVezaai+mpE+AwU71UBvEeSxG5ixGpBk5PhdJxxqtKdvO7mphEddQJFzg1aNyG5XtxLQ765XuV1JNU3i2/3PZ35XNudPrK77z/vYrw+3pzhD6TzOjqmmyfpNQplg3SzpyMVVZDiKdIueU3O9a6UuoGRKqeRWjgWbIz/YeJa2qCKO2pZqtfKV/n5wrqa6YWmAnufeBzDD6SVJHquXDxI0KX+4kFaq98vt/96wZL/0pMqLsiWAKklLz+QIZPUuda/tbGbk8fxWoI8RQpc5Fvi5WSewBEKuqpQBwAjLuv37hpL1x4K8K0UBaQL8l/H2HfbCRXpAyyESrK628f/ySvVpjS8eOJW6WPIvSpKb4YkzIe7RcpdbnFGWWtSUnFagjxRFKhyII6aLHtNxwrlRWRqi6YP81HvdQffzOwVvpaMtMPnFZv5oSki1RY38zVf3jAXZMf7MiZE6SYA2udWu2ea2HaJGP2+3VGReo6S2zZ0KEnc4B4naa8YKktVqrRQZwFkaokRtVLZJHd04Czw70mi3feDX7d5ZZf3bjZNtkiNcbUPv1WUyFWckZ6Ytb84JRL5z7S+tn7ytOiOFKEbv/F4E3ZEylLSR45ZbIKQqxxfLXAMsFHau1msyxSoeeUq9c1cHLaa0x6ssP/XjO8z9IiUo2bC8uXiUVgT4Q4qzs6nUi13f3smA1UTccotYJVEGK+0OrfWi6et8tC/A5E6l+E4X9Nsbg60xPtF3FabS6zp/TOfUwT30umRcq4+lezd9hE6h45tX4oYyeplZZ+WcQqCPEWKVd9x27TD/4XkTqoz3w9w2Q1qDNL93q5Y/lLPTWeEKk6+qDi8r8pgol1qbkDy4RImTtnS0okGZc3sQpCrJGYEynhbUpw16wr9RNEqlry3NU/y9WRby8X5pKTMhK9/d0tPNVlXqSqm4e/mmS6lr64RypOvz8LIlUJftY2kfozqyDEGhMjYfVKkxgdRCr0lPqlLIRb6zDvbTDBpD2X3PTkFpseEanDxnIjRipDv6hTd1Pt7Oe8P/Bi42Je6291F/UsVkGINcbd2bbbatRunSaRkgvmC2yf5ZAd6nC+t//jbVmcEamDNxKX543Lee3T7UYzNlMvUl7wNqsJ1NdfZxWEeCM7yloR/9VJszrLIiUBtd+ImIYn9NwTk+DiqUX9wra9P0TqPoy3pNw72XMBuo1ZB5IlUup4KdNxb42/tV+yxf8PiyDEHmusVIMBf2kQKTkRnRQ1e7mctsQUqFS7k5oiUg+k2ytfKPeoey2m2GFTnTrNIuX45TMtp6itImLdrIAQe2RS3GIZzCO28uNpFKnuvvKUiHccYVkT+fobU2237ZsMROqQxXng6eKROmQ5Se03VQDSLFK5iom6Vtn49Y5feg0rICRApPRVlvuVHY1kSk6ySJlLeMdkg4h2/7RFLqhnd+oyHpEaZ0y7wd8i1Khanm5zn77Cfm8aPJMVEOI/of3ytyMEQn4+KyIV5pLzdFkmcZRy5lvzBX1ZJzMZIFLj9YnJ8K/W22LXpL0yvSIVzLOU4Rk2eSdZASH+E1pKGTiWWCm5b5mdFZGSyf0tWSgiuJoH28Ws9GsTP9XZBRmRmuAksdR+Clbnp1ik7rTk7Rtk9YNE0FVQbxSPKFsG7/4siFR+psrlTDJS6+IW7JbL+X90WqAQqYkRAfqazR1dFurF6RUptcwyLpax+kEimNYbPM0aK9XAZE6aSJkccCbhZrQM5mpxz4XqsfEwbSFS41sI1BF5r3Ywq/n/ZvynUaREpC13qsFdrH6QDCLESjkNxEolTaSkD9y8Z8+mLdnLV7ciBx8i1QqTn/U0sVuyqJ+UNpE60h94WIQg/RKLHyRnMru17ffGpXe8CqlpEanuQvlFYr4biSBQ67rd8pRYnRgQqVrj+jx577Z8fr9Pm0iF3qn2oObfsvJBknacN1s8gdbV6wmVGJEKT5LBrVE8+XLFcuwcPRCpGuPaL73BlptSxnbbXNHbJlLF4FWysVxnMVn3svJBgnacwa8tmdB3isnvnWkUKcmo8alqMK4tHuqmODhKIFLROWHO7Q+3mr0asBLEXqRk7on4bm12WAlAJ09S34qQVeELaROpyiKmogTtrpVyGy+I47NDpGybEH2H5USxySRjTZVIecGJsqmq4dkY7JHP/X5WPkiQSAXvs9WVEvv+T9MmUvIeTpO2y7KIbevy1Rfj+uwQKeuCfYmlf0bbdapoVz/L3enZ1rparj6GlQ8StNssvSFCfJBKk0iZPHsRymub3IWLO1nNFZGaHD1mA+ZbNiKeuiJNIiWbTt8yJkbybvnlrHyQGKb2qadGqOK5JE0i5fSWPmHyElpMnHLprnKxPikgUs0QhltSdZLy9NWWYPShvDv/Kax8kBwixUrpumKlYi1S8nlloi6xLu5u/GNJEKnamDIz9pih9iSbbd9JSpdtziJxtg4ATGDysy7aQ1MuvfnxaRCpvNv/jtAuX/suaqTLLb8akUq2SFWet15ledZr0iRSOT+423K/vIoVDxKHcbG21OBZV8+iHWeRks96Q4RSDjoJzw2RivS877JtwPKzFxyeFpGSz7vcIlJLWfEgebtNuTy2OBDsEvPXu5MuUqZyrr0ontxF9ZVzSXhu7ROp8OQ5nMQmefxscXDD02bOf3ZqzH1yMrSY7m9nxYPEIa6634iQFujspIuUiO3/RcjRtygxz619IpXaZrIztKO2VDtEypwIQ8eI2p/5n6x4kDyTiBu8V1xX77VM5p8lX6QsdXZ8qRPlBp9ApDLVNpgwjFSIlCQ/djxb3r7kmm4hw3QXg9c5llgpEakgySJlEslGWIyHjEcYIpWdJp6tm9uRdaItIhUhX6E4VvyQFQ8SR88lNz25mbFScRQppxh8LUJW7OsSZaZtgkj1eOqlsjhm9yTlB5sdX709FSLlBdPlNXZYPvNprHiQSGyxUvWUnI6jSIlDxIBFhLdIhoLpmRMpKeAoz3Yos3dSKXKcyPvqlFobMXEi2dXtBe9htYNEkrcEuIrjxJAzq/+JSRSpMA2SG6yxuNmvMUlnsyZS1Q3KtfL892dUqG5ux7Nq00nqXMvrb5JclG9htYOEipS60WK7X+/4pdckUaSq+Qk3WtLFzE3c6bdJIlVJjaXulD7amR1xMqIcrOzxB56fHpFSl9ceC2rt1KJ+IasdJBJZpH9lmdT3RjUVxE+k1HfE/Xx0YoFS+/Ju6fSsipQhLDvu6m+L6W9xvmL6TXELlsp4nxnVMpAgkbrOMofryhwDEDORUl+LEFPy1SSKlCxIN9kyQ4tjxcuyLFKQBpHSt1mcRNbwJCDJ5r7jZSd9bzMmUfxOUnq1JaPGapN4FpGCJIuU8cC1jIeVPAlILHIf8VrJPGGrK1VOmkg5/sDTpZy2LcCxlMhnhkghUg+Yd3qFxUN3MU8CEovJa9esWKk4iVSU92LuJxApSLRIiSVALCG156+vFvAkIOmnqabESsXrJFU+s3bsSLCnx9MnIVLQ0nEod542kaon9di/vL44gZgwEcv8vYYnAYkmby8GODR1pn5SkkRKdpcX23K3dRXUGxEpaKlIiYhYLBWjUR2TxiNK2i/HVbN5EpBskbJnZVifL6gjkyRSUmLkH9aCjmLqRKSg9ZtArWo8q7Xdbuk5DYtgQb9V5uem2iKlz+EpQLJ3e7ZYKfH+k93YfydJpGTiLrQEOA4m9XkhUsmiq1B+njyTVeJNuu+Q57Qp55fPntQ4l3lp8c4dFSE7macACRep5sRKxUykllhOh8vTLFKyII6IEN+ahiaf5WYZo1d2u/1OUp/ZsYUbniDxSr8WUVnhGMEyn61QOm7SpzQ/ON0yFraLiL2DVQ6SLVJmN2ZJjSMTa06SRMrmlltPdvdEilQ62z0m36DJycisHRsL6gJbxWnHLb+enoJEY+6bZDCvs6RWuTFJIiXvd5VFpO5GpBLYXNlM+fo8Zu3YONdXWPpreDJ3XgCxwHju5W3lp129NFEnKZtbvR/cikgltg0lLXN9Czdj82x9Nd0feDQ9Bckf7H6w2hJrYc3/FauTlG8p0eEpldRnJafAkyR57mhWRcpk9ZZ2BLM2FKk7Lf01SC9BKoiQ/2vIVPJNzUnKU7ck9iTlBVPzYfnzrFbVFbdtiQ9i1oa5N5fVNmur5fQSpEOk/CCwXcB2F4PXJeYk5VmSy3rBXUl9VsbUJc9jVZar6nLPMra5VDYLyCJ6CdJykvq5Zfe6Wxb29yXnJBWsTKt3X+V5Bd0mEDSrImUSCGd9zoa1wCx5N6MmhwaIv9nA11+23gW46pvJOUml3wzi9Pa/QFztbzCnKnk2g2lpMhY320TqqPP6H5X1OZu7aN4zbJn+pa+uZnWDVGCq7+btZcSvSIpIGRdzy2dZxVOPoylzzkPsnpmKIn6VMf5KMdPbQkd8egrScZJqQqxUrETK1YE1d1/v3Mfw5GM2DnuDZ1rDIcSUm1wRvv3hzToFOsVyl7Ucja/PZlRBKqjESulJxUrFzNxnCXIM1jl+6TU8+ZidDiRhqpj7NlpMWAsT97nENCuC0R/eI7p6RD7DXcZ6MakxXgw+JK+3t8Y98r5csfxhRhWkZxdriZUyZpha5dZj5ThRCL5hOUntls/zAZ56vBCHlxPl2eyp/ezKv0nWZ9KvncDJZVOPW/pEw8Lnl862jPEtZk4yqiBFIqUXWyrZDuXd+U9JhEj5+gRLdugDpNeJ4Rj0VLEZyY7jwowZBx4czit34jk1rTd4WoPz1bOV2MkVg1cxqiA9ppYIsVK1klXG6k5KKqKKUK21TOK/89TjJlLBrRaR2pakrN5h+fgad72mQrQI1Ucb6yv9B5sXpPEAZFRBekTKFivlBTVjpeIkUiZTtiwOQ5b8fSt56vE6dUTIFLJ2alG/MEEnw5zduaF8TmOvrcuW8U2OQ0jdLvZLVlOLq7+dBJEKP4+rFls+z/C0mfOfzZOPyfjzB15sDVB2gzUmiDUpn6mVc0J+d5ElFnA1owpStkjod0nbUTugV1+VFJGSSWo5GZqKw41fXEOTn1cxOMOYvyyn+URlr2/lnDCFOy2nzmWMKkgV5pJVBveIZWG/OSki1eWpd4Z3GLUDQ6/hycflJG8xX1XuWb6bqDnVypOUVCawCPqdjCpIFVMuvfnx9lxgE+/O4iZSYcluS9oYk1Kolls9tAcT4Gq9Q/TUpi5fvQWREoGaveBwxxb07AfzGVmQxt3satudwESLetxEqvKeAkt6JLWx29NH8eQ7S5evj5W8fdtsYy9pjgAtE6k+/VzjvWepu3UlIwvSJ1K2WCl/4riOOIqU/M1Z9iJ6+lc8+dqYMi3SVx8XE9L04y6e929Nf06u+qO9dHzyaoC1TKT80hvkdzfUft3gAkYupPAkpVSjJ484ilQlv5naYsuk0XPh4kfw9Md5phJnI32kHBPr4+tRaVtzYWqf0oea9Td6LlSPjZCSa6+Yr76ISI3N02C6jOsdlmD1zzKCIYUiFVxu2dHuEdPMB5MiUiarts2EKTnVtuZ71fE8/UPFY/EjqtnkR8dxYNiYL5R6mnOKKp0uC+ouW7jA1D71VERq7CSlThnvuRy0mdxtsq4wiiF9O2ev9AV74bng3KSIVOUzBZfYTUm6xNM/dMOiT7Okllo13R94dBP+zl0RSsYPJHI+te4kda7FOrBZvHWPZhRD6nAqbtsWM8L4CT7jKlJhahrfVoZEMlNLKiVGwMELobrOslm51+SPm9R4k6znYkpcb3k2O7saTB2UXpFSl1vu70a6eksvYRRDCkVKv1IWH1us1C1JEqnqbn1RhBicvzACDh4LwdwIJ9B1ZhPQ8N+w5Yus/I0h43KNSB3cb/paW0qkKf7AvzOKIXVEusT29LLEiVSh9BXZXe61nAyGTd0fRsF9wn5ahGrNpt1m8u7V+/rGYzBnP0WZ9sek9mELT1KWRLzBUCPPBCAhi1OwyrJLWzPeBIizSDmz+p9oFV/jvVYj7VP2NiyLHyGxSysi5HMUjz91Rt3jzNXz7QKlRroL6hWI1CF9ZwkVkUbyZEixSFkSs05UAiDOIhUKlav75D3st5iWhvNu+eWMgmqf9fZ32+Jxqm2oHu87qUo7Ne/VrsBbdQBItENLq+aEeO6tsMzRJYxeSO/CVClzXWsCbJTS1W9KmkhNnamfZE+9E54UF2IqOWg8ePq3Mib2WcxL+x03Wh5Ek8VcTgLLIhQ3XFerfllmRUoyvuRtKZG84DZGLqT3JOXpyywLyN6eYvChpIlUdcG9zLGfpraY2B1GQr3ibmKn9LsinALOlruonZZnMKGDTtZFypiuZdMwVLvvFAU9IcUi1Vf+vwj3EN9LokiZ+lHG88m+4Ko1ZnFmNFSfrdw5ibhvjWD2Wzbl0rmPnPB1TAYLW9LfquD1eKXpiNQ489PU3bJVnfaDnzFqIb0LUqF0nCzk22tOLD/4XRJFKpzkbvALWXD3WuJM9srC/EdGQwVj/hRxuS3CHZJkjgjOn9hMpVXooGI39QWpmEutECkveJvEM26qdxMJkBqMN5XxqrKkElqQVJEybvYiQIMRFtzNsjCT/6yKKdseod5YJTBa4u3+dXwE38zZ6nuFhTXV2rSEArRGpNTxYSD1xHeqo9L/n2TEQmqJFCvlB8uSKlLhe3X1qfIZ7omy4PZ46qWMimq/edqVPtkdwXX8xoNLuoRB4hYTVbXy8x45RfWlpr9acSfll8+0bK52mswxjFZINSYvmy0LwKEecEkSKbOASkaFmyKIlGlLTVE+RsVhh5lcfY7F/blay2hbt18+NTyBGccLiduJ1NdShLIVpUDSJFJy0ryAGmmASFlipWQiDPf0qf9MrEiFn7H8cptZcyzzu7Q/U8F3bANjykTYY5xMeXMTOyV9rPNWF/aqedXX/5Oqk2dLzH36ClscY48/8HxGKqR7IZLS0/WW8k6aSFUX3POlbY9wkb9dTgeXMDLGTE7BNSY2yuKhJ8IUbIzSvzmTsspVf0pbP7XIcWKeLbA6TadRgAlMCvontgVIdmwnJV2kTL0pMV8F1gW3spBukxifcxgdRqQGnh4hx2MdTS0zd6GIVCSRutPiebuGEQoZMOmosyLUlfpB0kXKcIzb/x9y0bw64oJ6jwT6fooREjpRfM72vCO2YVMOPZV91BrvvmW13c/VCkYnZECkgumOJVZKTlJXp0Gk7vu8XqSM3AfCXHZ+OfOu6cZxRoTq9kkK1JacW0rt6bQl3n22DZXcJ7OCQfpFKnQqsMXEPDA/WJJFqjL5Q/fqbVEW10r5dHV+1p0pKq7lwbqGBCqs+htcl+Y8ic2eE2HeQ4uZ1XitsoJB6pnSO/cx9jsHtTxNImUER+6dfmetTHz/jtV81j+cMOf2h2daqPxgpgjVrnoEquooodPed82eE+Yu0LEkl3WMJypAJk5TtlgpETHjeJAakTLiLHnnZHd/Y96WNun+JicvpXouuenJWR0nJti57rspyYKehdyITRcpObk6lpNrd1HPYvWCTJCzl1wfzvcGz0yTSBm6/IHHhXctrt3jr9okDU0w3OWWpmRuIzPrxunSV2vrOkV5ejDfp5+biTnU5DkhG6Kc41o2BL7+OqsXZOQkpebVNiuoTU5BvzVtIjVmVolSlfaQWCpxvFDfysI9lTlBVzMfjNR7FyX9ND8zG70mz4mcF5wop6l9Ne759ncXg4+wekFGTlLqUsuCs6/bLX0kjSIVirTs9uU9Lxfz32gdi/B2WYRv7C6UX5TWcVFJQKwXRizdMX4guBu8F5Fq5E5Kn201PxfLPaxekAm6K3Ewo5ZL2h+lVaQMxxZueILEnSzIVVIj1XPnsk52tT81psO0jIeKM03wy4a9+R7YVpu+RaTqNfcFvmU+rhev0yNZvSATyK7tWKtLdlH/Mc0iZTApZuS9l6XdW+dCvEeEatCYaBLtZh3WgSq9T7KQrDAZtpuUZUJEP7gckarbceJqSyDvA+6JAdItUsXgZXn7pfjCtIuUwbhKi5nqb7ZikBNmqfDUUrnD+XDSxCpfKPWI0N5V+QzNSoF0X7mXdVJl9g1pnkPNP0mFm6Vadd6Gei5c/AhWL8gE+dkLDrcHDurlWRApQzXDwnfDjBMNLMrVO5xl4mxy8pQZcx8a189pAkarF/QLI2U7H9/cud2JUHdKciHeHee+iKFILbII/2pWLsiWUPmBrQ7Q0Ngik3aRGqOnGBwtO9bVTnQX9UODgMWEGqwSx5TLu9zyq2PzuaT0iry/C6vxcdsaPSGZbBxyavxqhDi7A2HgtFuagUhFNvctt/TnMlYtyBT2WKlgeNrM+c/OkkiFC7oE74oJr3+yCVar+QKlj4NvmVRU7XZfzxWDVzleWU6HSjJrB0MinKONm+/Ck9OyLr//v+4zFYonXwRvvxHxEn0OIhVh0yg1uizj6W5WLcgUMuivrz3Bgs2y0B2dNZEaM//JwjxDTptrbF6QUQKCJXh4XfX0cb2IxRlTi/qFzbzDMq9lBERe/zR5rn8RUVppCuQ14b2b+JwN8lo/P7SCsWxy/hJJ+FxVQqQsAiXmd1tKJGmKVQuyZe5z9cWWndt+WWA+lkWRGsOcAmQx/mejd1UTnFD3h8HBvl6bC0uvB7ryLNSn5R7nBJN5wJQINzFLXYXy80wL0xOJ+7FsHKaGnpnuwOnikdcnv/cPaYvC+0URwprBoPW3bSbrdm5W+c3j9U2lMq89I4XUQNosGTs+NfZZ4tCMl9zBab86LlISt1fdVNTqy9+yakHGzH3BGbZgVllMz8+ySN23iBT0u0QcVoiw7Gq6J9z9pjEjMDtzFW+7DY6Jx6qIgGkjOWM+9PVmyQayNdeME9KEz1GNSlub99UXbY4PIoyn5yMF/oamwbUxa8NhJdwG0zg1VaSk5pZ1I+SqXlYtyJhIqWm58KLfnnU56yJlMOYuiVX5oTm1iHjvbp1YdabJMw7FyZj2pvUGT4vUKWGclbo14Z99yJhfOypSUvNM+nGHxVvy86xakCmqGa7XWsou3I5IHdJvUgpdTG/nmotup/4g4Ng1Y9YNTU2+/pmpZFxvf5iYO6c5mSo62IIbO3uSUqdY7g8leFy9n1ULMsV0f+DR9rpSlVgpRGr8/ssVSmfLnZA4RKhtiTs5eWpX+Px9/ZNGxOkBQuWpmflkC/bwlEtvfnynREqyn59jCxo395GsWpA5ZHe2yrLLDmOlEKmJMRkrcjP7352veEsO5mNvClQSxBvclXPLpx7qsTcpU6i5s0uqqVPMnNKO6JxIqdmWEICRMfd/gKyJ1CKLSA2HHm6IVCTMbjzvDZxWvaeRuyu9OwbmvH2Vshth8PYsEz/Vis/u9PZ3N5zFIgb3UuZk3DGR8krXWu/NxJuSFQuyJ1Ke+qfNzOD46u2IVAOLdqUc+EdNPJFj6lf5EgfjRq4KPIm8eSJKxr09TICrbpX2tUYcAxpBPusf66h8HJe2V5IpX1H3Z22q40Rt5xPnkErZAJkhjLWxxvSUTkakJk/FUSU4S/rqOnPXJ95aa0W01jVcu0mK4IkobM5XgkAHTdl22VBc0+Wps7oK6o2dSEZazSp/W755GdVb3cSjLrjNvO9OipSMgSWW97mKGQTZPEn5Js6ldqyUePj9GJFqhWlw7iMrwqVyUijwE5LC6Edifv2FLFh/r56A7msiQDdLH/8zPJV5wZXyO363F3zaPBdzl2LuxWIjxiKO3WZcuXr+oZ8jVs3VgYj5mY32XXNPUnqlJbnsEmYMZFOkpNKn3JtYdvLqr4gUQItEKow1s6RE8tUd9Dhkkq7e0kusqW1cdQciBdAakXJm9T/R1IqymPuup8chkxjXYWtdKbn0R6QAWiNSUhzyxcbRpfbr6F/R45DdyebZ6koFQ9Vy84gUQLNFygve5ljKnsg95Y/occgsJrDTkjPM5HP7JCIF0AqRUsfLHLRl6ziNHofMIt5ic22xUnIv9R1ECqD5IuX45TMtcW+7xJPzPfQ4ZPkk5duK9slJag4iBdB8kZIQjwtsZU66fPUWehwyLFL6tAgVXG9BpACaL1Lyc1dY5t7a7kL5RfQ4ZBYx93XnLbFScpLahEgBtEKkpPCixXHp2MINT6DHIbsnKeMCaytdXck5h0gBNFukfH2HLbmsCfilxyGzmPQ89rpSipMUQEtOUnqpxbt2Bb0NTDhLLSCnctJCpACaLlLBKot332J6G5hwnr7bdnnbSpGa1hs8Le+XvyxmxZ+aBKqdbtIfc3Ju8MPuYvC6ej+LSViad4PTJQD62rgkUw3DDNzgiz0Xqscy2uMjUkf6Aw+zZnzx1QJ6GzKPLKh/t4jUllaJlCyiJ0qW5zWmLEjcSjlIWe91IpxXRL0T6CqUn+dUBH9X7MpSVO4VV7eq6CEiVf+cqNYcG7LkzryG3obMIwuYZ7GLj4rZYUezRWqqlKqQRX19rGsO+Xq7xKl80fZZpsyY+1BJMXV7rD+LGy56y/OzFxzOqI+BSHn6leFGqHbuzNn0NmSeLld/JkKs1GizRUqi7f+eiOJ4rlpjTDM1+zBCfsM4NFlcd5n6VYz6GIhUsdxlew0RsXPobWDCRZhw1sWvAZGSk8fSRIiU5C/s8QeeX1twg68mpWS6mJguYdR3XqRk/J8onrP7amZ7KZROprch80wt6hfKwjXcbpGS31uUjJOUHjbOHTUXnMLAyXLi2puAzyMn4uBbjPoYnKR8fbblWW2XsfcOehsyjyn57VhjpVpykrogGQt7cJdVcN35TxHTzHD8P4saMSXnGfWdF6kIeTM3OG759fQ2wGH2WKlWiFSXP/A4EcclTm2TR2fvcMSxo2dW+c2RToZ+6bNmYYnx3doWMV1+n9Eek5OUp6+2xSd2u6Xn0NsAlV3dne0WKYPJSyaT8Q+yux+UWJ51RhTi0Kpu8Xc6hRvfWs/n6e4rT5HTyp1iphmpxpfFoKmRcDPga+43YnWS0mXL3eEQnpgA95mr9HWdEKmDxcrEGcWl5S6a94zJfJ6jzut/lPlMcWgsdLEVqUU2r1J6GuD+k1RvJ0UKIIPmvuUWc99yehrgvpNU8KmcPVYKkQJo1klKTkqWebWInga47ySlcmLy24JIAbRepIwJ1poSSe6s6GmAsUknbsnWulKIFEBzRKpPP9exzDfj/UdPA1Qx2bud0KMNkQJouUj5pTfYwxUCn54GOAhJZrkCkQJog0hJJgkxse+wiNRX6GmAgyfOJGKlEClApKLPCaegT66ZtNnX+3LF8ofpaYAH7O7UNYgUQBtESrKb22q4mb9BTwMcPHG8YCYiBdAOkVKzawfySvYVClQCHDrx9KmNVshFpACRqkOkvNK1lvuooclmPQFI30mqUoTtHkQKoLUiJU4Tt9pEylZoEyB7ItXb/wKnwVipZuTuc4rBy/IFdWRam4lFM67+jfbR1D711O6CekW7/y604iSll1hipFbTywCHYBayfIN1pZqTBV1vEJPj5tS2sJaTHpRs5N87Yc6ch9SzeRBvr3IljY7a1K6/C608SemVlrpfy+hlgHEnT7C8XSJlii3KInp3nOtJtagcvam4enGUPpKaW8/KT7IgZSN/F1ooUgcOPChvTYkU3EkvA4wnUr6+o22Vef3gh7Jo3pspgbq/JH0k7y352X924u9C60TKmdX/RDnV1hYpP5hPLwOMf5L6W7tEylpPJ+2tGPygVv+Yi/OmnaLq+LvQWpHK+wMvls3g2tq/q66klwHGm3xu6aI2itTSTIuUp2fV7J9ombKb/nehxSLlBW8TE/em2r8bXEAvA4y7y1OnSDT8/raY+1w1N6sClXP1TlmITowg5Cs78XehlSKljhehutdyf/hZehlgvAnk6mPEHr65HSI1tRi8Tjz71mf0TmppFLfwLk+fZlsMW/F3oXUi5fjlMy1OE7sdN3gvvQww3qJYKD+vkbpSjbqg54rqw/mwREhjmS4S2HbmTLZ5uZeIbhYNfmC7w2jF34XWiJQ8hwsspr7N3W5pCr0MMA7hZX0DdaUmE8w7rTd4Wt4vf1lMUV7aW76g/8e43te9eegtvUSyYn+33X8XWmHu01dYYqRGejz1UnoZYMKdu15OWiSAVomUmmeZT0NT/IF/p5cBJkDuiW5HpABaJFL2WMShGTMOPJheBpjwJKX+ikgBtEak5M5pqeVOaiU9DFBrArrqx4gUQItOUl6wypJcdgk9DFCDbk9/3JSvRqQAmitS0bKIqIX0MEANHF+9XURqMyIF0FyRcvyBpzt+7SwikmVkLj0MUIN8n36uBH0OI1IATRYpT79SMrqsqylSfvAzehigBlNmzH1ovbFSiBQgUvY5Iaa8nO33RMS+Rw8D2E5TdcZKIVKASNnnhMmbmK9ZPy0YldPWJ+lhAAv1xkohUoBIRbmT0mdbcivulAzp76SHAawnqeDPiBRAc0VK5pVvmUsbpd7Xm+hhALtInY9IATT5JOXpqy33UcNOb/8L6GEAm0i56mMyafa1Q6Ryxf6jZfJeK6+zUAKJ75hMM69hSq7nfH3CYQcOPKiu93HRvGfIIjFbqqLeOtn3Easmn0f65DLjtcnI7vRJSpctZeOHei5Uj6WHASyYUgE5L3qsVMOlOiS7hVwmt6CmVFj59Kqo76PL1U4lyDIYTWmJEPlcwVDOH8gzujsqUotq/o541dK7ANFE6jlygTvc0sq8fWpa3tObW7UwyyX1VsctfcL2Po4t3PAE+fnBLNSzkhPr6i5/4HGM8I6Z+yxes8FyehcgAiZWSk45a1opUpLVYqD1FXDVYuuC4+nPiVfV3oyUrd+bd0unM8I7dJKyz6lF9C5AROQktbylJylPL2uDSA3aTY76J1kqXS93VJcyutsvUvnZCw6XlEe2vH0307sAUU86FSeElolUI3Wr6jZvScl064JTCL4hi8NoRkRqVNLufJXR3X6RqpjQa6cbk///F3oXIOpEdIM/tdTc5wVnye/uaOH9y27jSm97H12F8vPk50cyIlJrzWLJ6G6/SDlu+fXy7xssyWUvoXcBooqIr89rpUiZey8RkhvEJLetBYvx7rwb3DbdH3h0lPfS5esvywljfcoFalPOL5/NyO6Quc/V75B/317bBV3PoHcBIpvj1EedmnnGJu+Cbspki/v3l+V+ylQrXS3OGoOTbTLRl+Xc0kXmDqCe99LdV54i7+E2Ec5VzXgfcWnm8+RN7FehdByjuoMnqYI+uRIKMOHJf393MfgIvQsQdSIWg6PN7puMEwDNMPfpcyzzaFu+WO6hdwEiIvE0z8pbvZEQKUCkoomUml375/X6fEEdSe8CROSEOXMeko8YK4VIASJlESmvdK1lHg2bjSG9C1AHUetKIVKASB2a4kivkNPRz+U+8Pvdvj5VrBK2uMCho87rfxS9C1CfSC1EpADqFynx5jvYtXy/pOnabTH3DdKzAHUiE+tqRAqgAZGqt/nBMnoWoG6RUj9EpABaL1JykrqbngWokx5PnyQ29b2IFECLT1KeVvQsQJ3IZe/bqrWZECmA1orU7+lZgDqJGiuFSAEiNZkWjJpgX3oWoE6ixkohUoBITcppYp2UUDmCngVoAON1hEgB1CtSwb1RE/9KcuNv0qsAjYqUF9wWYaL9Oe+rU2i0LDSJe7rAnnFC/16qIH82Jz8rP3+l/FvJePCZBMjy/aCEd6yW17pzam/wPlYZgMnsGr1osVI0Gg3rAkAHTlL6+yw6NBoiBRBLuj398Vp1cGg0GiIF0DHEdv5BmXR7WXhoNEQKIIbmvmC6tew1jUY7NAv651k9ANrAMW7/f8ikG2HhodGiNbE+rBeHo9eyegC0CZlwc2Ty7WYBotGsbZ+U6ZjPqgHQRo70Bx4mOfx+K9knRhwzCVmIaLTx2gZp10s6scexagB0gO6CeoWkbzmj29UzaDTa/U2sDV/ocsuvZpUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGTz/wEWc5kIEz3MGgAAAABJRU5ErkJggg==',
                                                },
                                                [
                                                    {
                                                        text: 'Analysis and Reporting',
                                                        color: '#4697c8',
                                                        bold: true
                                                    },
                                                    {
                                                        text: analysisReportingPDF,
                                                        color: '#979797',
                                                        fontSize: 10,
                                                        bold: true
                                                    }
                                                ],
                                            ]
                                        }
                                    ],
                                    [ { columns: [
                                            {
                                                // auto-sized columns have their widths based on their content
                                                width: 60,
                                                margin: [0, 20],
                                                image: 'data:image/png;base64,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',
                                            },
                                            [
                                                {
                                                    text: 'Supply Chain Management',
                                                    color: '#4697c8',
                                                    bold: true
                                                },
                                                {
                                                    text: supplyChainManagementPDF,
                                                    color: '#979797',
                                                    fontSize: 10,
                                                    bold: true
                                                }
                                            ],
                                        ]
                                    },
                                        { columns: [
                                                {
                                                    // auto-sized columns have their widths based on their content
                                                    width: 60,
                                                    margin: [0, 20],
                                                    image: 'data:image/png;base64,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',
                                                },
                                                [
                                                    {
                                                        text: 'Education Awareness',
                                                        color: '#4697c8',
                                                        bold: true
                                                    },
                                                    {
                                                        text: educationAwarenessPDF,
                                                        color: '#979797',
                                                        fontSize: 10,
                                                        bold: true
                                                    }
                                                ],
                                            ]
                                        }
                                    ]
                                ]
                            },
                            layout: {
                                hLineWidth: function (i, node) {
                                    return (i === 0 || i === node.table.body.length) ? 1 : 1;
                                },
                                vLineWidth: function (i, node) {
                                    return (i === 0 || i === node.table.widths.length) ? 1 : 1;
                                },
                                hLineColor: function (i, node) {
                                    return (i === 0 || i === node.table.body.length) ? '#fff' : '#b0d3e7';
                                },
                                vLineColor: function (i, node) {
                                    return (i === 0 || i === node.table.widths.length) ? '#fff' : '#b0d3e7';
                                },
                                paddingTop: function (i, node) { return 10; },
                                paddingBottom: function (i, node) { return 10; },
                            }
                        }
                    ],
                    margin: [-100, 0],
                    paddingLeft: function (i, node) { return 0; },
                    paddingRight: function (i, node) { return 0; },
                };
                pdfMake.createPdf(docDefinition).download('SpheraProductStewardshipMaturityModelSelfAssessment.pdf');
            }
        },
        computed: {
            organizationalCultureScore: function() {
                if (this.post.pstool.organizationalCulture == 5) {
                    return this.organizationalCultureScore = '232.4025148547635,36.41807012330702'
                } else if (this.post.pstool.organizationalCulture == 4) {
                    return this.organizationalCultureScore = '222.83542904563626,59.51505843608918'
                } else if (this.post.pstool.organizationalCulture == 3) {
                    return this.organizationalCultureScore = '213.268343236509,82.61204674887134'
                } else if (this.post.pstool.organizationalCulture == 2) {
                    return this.organizationalCultureScore = '203.70125742738176,105.70903506165351'
                } else if (this.post.pstool.organizationalCulture == 1) {
                    return this.organizationalCultureScore = '194.1341716182545,128.80602337443565'
                }
            },
            governanceScore: function() {
                if (this.post.pstool.governance == 5) {
                    return this.governanceScore = '313.581929876693,117.59748514523645'
                } else if (this.post.pstool.governance == 4) {
                    return this.governanceScore = '290.4849415639108,127.16457095436371'
                } else if (this.post.pstool.governance == 3) {
                    return this.governanceScore = '267.38795325112864,136.73165676349095'
                } else if (this.post.pstool.governance == 2) {
                    return this.governanceScore = '244.2909649383465,146.2987425726182'
                } else if (this.post.pstool.governance == 1) {
                    return this.governanceScore = '221.19397662556432,155.86582838174547'
                }
            },
            workflowsProcessesScore: function() {
                if (this.post.pstool.workflowsProcesses == 5) {
                    return this.workflowsProcessesScore = '313.58192987669304,232.40251485476347'
                } else if (this.post.pstool.workflowsProcesses == 4) {
                    return this.workflowsProcessesScore = '290.48494156391087,222.83542904563623'
                } else if (this.post.pstool.workflowsProcesses == 3) {
                    return this.workflowsProcessesScore = '267.3879532511287,213.26834323650897'
                } else if (this.post.pstool.workflowsProcesses == 2) {
                    return this.workflowsProcessesScore = '244.29096493834652,203.70125742738173'
                } else if (this.post.pstool.workflowsProcesses == 1) {
                    return this.workflowsProcessesScore = '221.19397662556435,194.1341716182545'
                }
            },
            digitizationScore: function() {
                if (this.post.pstool.digitization == 5) {
                    return this.digitizationScore = '232.40251485476347,313.58192987669304'
                } else if (this.post.pstool.digitization == 4) {
                    return this.digitizationScore = '222.83542904563623,290.48494156391087'
                } else if (this.post.pstool.digitization == 3) {
                    return this.digitizationScore = '213.268343236509,267.3879532511287'
                } else if (this.post.pstool.digitization == 2) {
                    return this.digitizationScore = '203.70125742738173,244.29096493834652'
                } else if (this.post.pstool.digitization == 1) {
                    return this.digitizationScore = '194.1341716182545,221.19397662556435'
                }
            },
            breadthOfCoverageScore: function() {
                if (this.post.pstool.breadthOfCoverage == 5) {
                    return this.breadthOfCoverageScore = '117.59748514523653,313.58192987669304'
                } else if (this.post.pstool.breadthOfCoverage == 4) {
                    return this.breadthOfCoverageScore = '127.16457095436378,290.48494156391087'
                } else if (this.post.pstool.breadthOfCoverage == 3) {
                    return this.breadthOfCoverageScore = '136.73165676349103,267.3879532511287'
                } else if (this.post.pstool.breadthOfCoverage == 2) {
                    return this.breadthOfCoverageScore = '146.29874257261827,244.29096493834652'
                } else if (this.post.pstool.breadthOfCoverage == 1) {
                    return this.breadthOfCoverageScore = '155.8658283817455,221.19397662556435'
                }
            },
            analysisReportingScore: function() {
                if (this.post.pstool.analysisReporting == 5) {
                    return this.analysisReportingScore = '36.41807012330699,232.40251485476347'
                } else if (this.post.pstool.analysisReporting == 4) {
                    return this.analysisReportingScore = '59.51505843608916,222.83542904563623'
                } else if (this.post.pstool.analysisReporting == 3) {
                    return this.analysisReportingScore = '82.61204674887132,213.268343236509'
                } else if (this.post.pstool.analysisReporting == 2) {
                    return this.analysisReportingScore = '105.7090350616535,203.70125742738173'
                } else if (this.post.pstool.analysisReporting == 1) {
                    return this.analysisReportingScore = '128.80602337443565,194.1341716182545'
                }
            },
            supplyChainManagementScore: function() {
                if (this.post.pstool.supplyChainManagement == 5) {
                    return this.supplyChainManagementScore = '36.41807012330696,117.59748514523655'
                } else if (this.post.pstool.supplyChainManagement == 4) {
                    return this.supplyChainManagementScore = '59.51505843608915,127.1645709543638'
                } else if (this.post.pstool.supplyChainManagement == 3) {
                    return this.supplyChainManagementScore = '82.61204674887132,136.73165676349103'
                } else if (this.post.pstool.supplyChainManagement == 2) {
                    return this.supplyChainManagementScore = '105.70903506165348,146.29874257261827'
                } else if (this.post.pstool.supplyChainManagement == 1) {
                    return this.supplyChainManagementScore = '128.80602337443565,155.86582838174553'
                }
            },
            educationAwarenessScore: function() {
                if (this.post.pstool.educationAwareness == 5) {
                    return this.educationAwarenessScore = '117.59748514523645,36.41807012330702'
                } else if (this.post.pstool.educationAwareness == 4) {
                    return this.educationAwarenessScore = '127.16457095436371,59.51505843608919'
                } else if (this.post.pstool.educationAwareness == 3) {
                    return this.educationAwarenessScore = '136.73165676349097,82.61204674887135'
                } else if (this.post.pstool.educationAwareness == 2) {
                    return this.educationAwarenessScore = '146.2987425726182,105.70903506165351'
                } else if (this.post.pstool.educationAwareness == 1) {
                    return this.educationAwarenessScore = '155.86582838174547,128.80602337443568'
                }
            },
            points: function() {
                return this.workflowsProcessesScore + ' ' + this.digitizationScore + ' ' + this.breadthOfCoverageScore + ' ' + this.analysisReportingScore + ' ' + this.supplyChainManagementScore + ' ' + this.educationAwarenessScore + ' ' + this.organizationalCultureScore + ' ' + this.governanceScore
            },
            datePDFcompute: function() {
                return moment(this.post.pstool.dateSubmitted).format('l');
            },
            orgCulturePDFcalc: function() {
                if (this.post.pstool.organizationalCulture == 5) {
                    return 'Well done! Keep up the excellent work by leveraging positive reinforcement and ensuring all external and internal stakeholders have the resources to provide input for continuous improvement and the identification of new market opportunities. Disseminate messaging on how product stewardship is a priority growth opportunity for the firm.'
                } else if (this.post.pstool.organizationalCulture == 4) {
                    return 'Keep it up! Most firms have begun to tackle product stewardship through a risk-centric and improvement-oriented lens. To strengthen market presence, consider working with customers, suppliers and community members to identify new opportunities for \'greener\' chemistry and eco-products.'
                } else if (this.post.pstool.organizationalCulture < 4) {
                    return 'Ensuring compliance is a minimum prerequisite of all successful product stewardship programmes. To remain ahead of shifting market environments, consider engaging executives on impending regulatory risks and operational costs due to inefficient processes, workflows and technologies.'
                }
            },
            governancePDFcalc: function() {
                if (this.post.pstool.governance == 5) {
                    return 'Well done! Keep up the excellent work by maintaining a structured process for engaging core functions, such as EHS and regulatory affairs, as well as secondary users, such as sales and marketing. Transparent visibility on product stewardship information can help ensure that everyone perceives the value of product stewardship.'
                } else if (this.post.pstool.governance == 4) {
                    return 'Effective product stewardship management typically requires a combination of dedicated personnel as well as a centralized, cross-functional committee. Strengthen the involvement and quality of inputs across other functions and personnel by ensuring firm-wide visibility into processes, workflows and data.'
                } else if (this.post.pstool.governance < 4) {
                    return 'Effective product stewardship management requires, at minimum, a dedicated individual or team to liaise with other functions on product socio-environmental issues. Consider establishing a dedicated full-time role to engage EHS, operations and regulatory affairs on product compliance.'
                }
            },
            workflowsPDFcalc: function() {
                if (this.post.pstool.workflowsProcesses == 5) {
                    return 'Well done! Keep up the excellent work by engaging users in adopting the centralized IT solution to ensure that relevant employees can view all necessary product stewardship information as neeeded. Also encourage team members to continuously collaborate on data sharing, internal and external messaging, and monitoring the effectiveness of internal processes.'
                } else if (this.post.pstool.workflowsProcesses == 4) {
                    return 'Responding to regulatory and customer requirements for product stewardship information requires clear documentation and structured processes. Consider strengthening firm-wide visibility and accountability to minimize the chances of cross-functional confusion or duplication of efforts.'
                } else if (this.post.pstool.workflowsProcesses < 4) {
                    return 'Maintaining compliance for chemicals and components as well as responding to customer requests for product stewardship information requires clear documentation along with structured, transparent workflows and processes. Consider partnering with business unit leaders to ensure product stewardship activities are embedded as effectively as possible.'
                }
            },
            digitizationPDFcalc: function() {
                if (this.post.pstool.digitization == 5) {
                    return 'Well done! Keep up the excellent work by ensuring a single, current database is maintained with transparency on the firm-wide IT architecture map. Fully integrated suite of solutions will enable employees across various roles to drive far more value by leveraging advanced data analytics with automated alerts and real-time product updates.'
                } else if (this.post.pstool.digitization == 4) {
                    return 'Point solutions, such as for lifecycle analysis and product design, ensure best-in-class capabililities for each tool required. Consider leveraging data integrations to drive far more value by introducing automated alerts, real-time product updates and integration with country-based compliance registers.'
                } else if (this.post.pstool.digitization < 4) {
                    return 'While paper and Excel-based solutions enable firms to meet minimal compliance requirements, higher volumes of data create challenges for conducting searches, validating data and version control. As a result, these activities are incredibly time consuming and often fall short on accuracy. Consider leveraging software point solutions alongside Excel spreadsheets to manage bills of material, safety data sheets and chemical information.'
                }
            },
            breadthOfCoveragePDFcalc: function() {
                if (this.post.pstool.breadthOfCoverage == 5) {
                    return 'Well done! Keep up the excellent work by continuing to invest in compliance-driven activities, such as SDS authoring and management, as well voluntary efforts across lifecycle analysis and development of \'greener\' products that surpass current regulatory requirements.'
                } else if (this.post.pstool.breadthOfCoverage == 4) {
                    return 'Good job! While your firm has exhibited strong coverage across a number of foundational activities such as chemical inventory tracking and conducting hazard and risk assessments, brand-sensitive firms may also wish to consider increased involvement in \'greener\' chemistry, lifecycle analysis and eco-products.'
                } else if (this.post.pstool.breadthOfCoverage < 4) {
                    return 'While most firms must, at minimum, manage SDS authoring and document control to ensure regulatory compliance, firms should consider strengthening their product stewardship programme to have at least 80% coverage across foundational activities such as chemical inventory tracking, material approval requests and completion of hazard and risk assessments.'
                }
            },
            analysisReportingPDFcalc: function() {
                if (this.post.pstool.analysisReporting == 5) {
                    return 'Well done! Keep up the excellent work by continuing to remain abreast of evolutions in software-driven capabilities for deep, targeted real-time analytics and emerging technologies for data management such as using mobile apps and augmented reality. Also continue to develop and adopt leading indicators to elevate your leadership in analysis and reporting.'
                } else if (this.post.pstool.analysisReporting == 4) {
                    return 'While the majority of firms will rely on indicators focused on managing compliance and operational risk, leading firms also will look to automation and artificial intelligence capabilities to provide targeted, real-time analysis and alerts. Consider learning more about software-driven analytical capabilities to see if it would benefit your firm\'s product stewardship reporting and decision-making efforts.'
                } else if (this.post.pstool.analysisReporting < 4) {
                    return 'While the majority of firms will rely on lagging indicators, firms with limited capabilities for analysis and reporting of product stewardship information should consider strengthening their data management processes to avoid costly, unexpected operational setbacks.'
                }
            },
            supplyChainManagementPDFcalc: function() {
                if (this.post.pstool.supplyChainManagement == 5) {
                    return 'Well done! Keep up the excellent work by actively maintaining supplier capacity building efforts and helping firms further upstream in the value chain have the necessary governance, workflows and IT infrastructure in place to manage their product stewardship efforts successfully. In addition to collecting supplier data on a regular basis, you should maintain two-way communications flows, by which suppliers can suggest ingredient changes and innovative tools for data management.'
                } else if (this.post.pstool.supplyChainManagement == 4) {
                    return 'Good job! While your firm has actively engaged suppliers on the importance and benefits of product stewardship, leading firms recognize that most suppliers have limited ability to develop their own product stewardship teams with dedicated IT solutions. Consider establishing a capacity building and performance improvement initiative to help suppliers meet your market needs and deliver the data you request.'
                } else if (this.post.pstool.supplyChainManagement < 4) {
                    return 'Most firms that rely on tools such as emails, spreadsheets or online portals for engaging suppliers underestimate the resource-intensive challenges associated with supply chain engagement and management. To avoid high-profile supplier-related errors, firms should actively engage supplier contacts and conduct supplier EHS risk evaluations to pre-empt potential issues.'
                }
            },
            educationAwarenessPDFcalc: function() {
                if (this.post.pstool.educationAwareness == 5) {
                    return 'Well done! Keep up the excellent work by strengthening relationships with influential individuals at external stakeholder groups such as NGOs and government agencies. Remaining on top of market pulse will ensure your firm is best positioned to capitalize on any strategic opportunities or manage impending risks.'
                } else if (this.post.pstool.educationAwareness == 4) {
                    return 'Good job! While your firm has actively engaged in product stewardship training and industry associations, leading firms also will involve external stakeholders with feedback to ensure continuous improvement. Consider establishing structured consultative engagement processes with specific stakeholders such as NGOs to better understand their views on your industry, specific risks and negative publicity concerns.'
                } else if (this.post.pstool.educationAwareness < 4) {
                    return 'Successful product stewardship programmes not only require hiring qualified employees with chemicals expertise, but also on-going product safety awareness and training with front-line workers. Consider establishing an awareness-building initiative to strengthen employee engagement on EHS and product stewardship efforts.'
                }
            }
        }
    }
</script>

<style scoped>
    .ps-maturity-wrap {
        width: 100%;
        margin: 0 auto;
        background: #f5f5f5;
    }
    .ps-maturity-title {
        width: 100%;
        color: #fff;
        margin: 0 auto;
        padding: 80px 10px;
        background: url('~/assets/PS-Small-Hero.jpg') 50% 50% no-repeat;
        background-size: cover;
    }
    .ps-maturity-title .holder {
        margin: 0 auto;
        width: 1150px;
    }
    .ps-maturity-title .svg-bg {
        padding: 8px;
        background: #4697c8;
        margin: -15px 20px 20px;
        display: inline-block;
        border-radius: 100%;
        vertical-align: top;
    }
    .ps-maturity-title img {
        display: block;
        height: 55px;
        width: 55px;
    }
    .ps-maturity-title .text-content {
        display: inline-block;
        max-width: 90%;
        width: 550px;
    }
    .ps-maturity-title .text-content h1 {
        line-height: 1.26;
        color: #fff;
        font-weight: 700;
        font-size: 2.25em;
    }
    .ps-maturity-title .text-content h2 {
        line-height: 1.26;
        font-weight: 300;
        font-size: 1.85em;
        margin-bottom: 30px;
    }
    .ps-maturity-title .text-content p {
        line-height: 1.5;
        font-weight: 500;
    }
    .polygon-wrap {
        width: 800px;
        margin: 0 auto;
        display: inline-block;
        vertical-align: top;
    }
    .polygon-wrap .holder {
        width: 800px;
        height: 800px;
        background: #fff;
        box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
        padding: 20px;
        border-radius: 5px;
        position: relative;
    }
    .results-wrap {
        padding: 50px 10px;
        margin: 0 auto;
        width: 1250px;
        max-width: 100%;
        display: block;
    }
    .results-wrap .legend {
        padding: 20px;
        width: 375px;
        margin-right: 50px;
        background: #fff;
        box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
        display: inline-block;
        vertical-align: top;
        border-radius: 5px;
    }
    .results-wrap .legend p {
        margin: 15px 0;
    }
    .results-wrap .legend img {
        border-radius: 100%;
        border: 3px solid #4697c8;
        display: block;
        margin: 10px 0;
        width: 125px;
        height: 125px;
    }
    .results-wrap .legend a {
        color: #4697c8;;
    }
    .polygon-wrap .holder svg {
        position: relative;
        z-index: 2;
    }
    .labels-wrap {
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        position: absolute;
        z-index: 3;
    }
    .labels-wrap h4 {
        position: absolute;
        color: #979797;
        width: 200px;
        padding: 15px 5px;
        z-index: 3;
    }
    .labels-wrap h4:hover {
        cursor: pointer;
        color: #1d1d1d;
    }
    .labels-wrap #label-org-culture {
        top: 40px;
        right: 140px;
    }
    .labels-wrap #label-edu {
        top: 25px;
        left: 170px;
        width: 150px;
    }
    .labels-wrap #label-governance {
        top: 225px;
        right: 0;
        width: 80px;
    }
    .labels-wrap #label-workflows {
        bottom: 205px;
        right: 0;
        width: 70px;
    }
    .labels-wrap #label-digitization {
        bottom: 35px;
        right: 90px;
    }
    .labels-wrap #label-coverage {
        bottom: 20px;
        left: 200px;
        width: 100px;
    }
    .labels-wrap #label-analysis {
        bottom: 220px;
        left: 0;
        width: 70px;
    }
    .labels-wrap #label-supply {
        top: 195px;
        left: -15px;
        width: 150px;
    }
    .advice-wrap {
        position: absolute;
        width: 500px;
        min-height: 200px;
        left: calc(50% - 250px);
        z-index: 3;
        background: rgba(0,0,0,0.85);
        border-radius: 8px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.75);
        padding: 20px;
        color: #fff;
    }
    .advice-wrap .advice-content p strong {
        font-weight: 400;
        font-size: 18px;
    }
    .advice-wrap .advice-content div {
        padding: 10px;
    }
    .results-download-holder {
        margin: 50px auto 20px;
        display: block;
        text-align: center;
        width: 100%;
    }
    .legend .results-download-holder .download-pdf-btn {
        background: #4697c8;
        color: #fff;
        padding: 15px;
        width: 100%;
        display: block;
        text-decoration: none;
        border-radius: 5px;
        border: 3px solid #4697c8;
        font-size: 18px;
    }
    #png-container, canvas, #png-container img {
        height: 0;
        width: 0;
        opacity: 0;
        display: none;
    }
</style>