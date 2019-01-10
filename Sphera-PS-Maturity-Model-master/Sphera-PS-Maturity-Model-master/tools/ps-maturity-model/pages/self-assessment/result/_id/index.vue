<template>
        <div class="ps-maturity-wrap">
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
                    Director, Product Stewardship Sales<br>
                    Phone: +1 438 797 4601<br>
                    Email: <a href="mailto:jaouad@sphera.com">jaouad@sphera.com</a></p>


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
                            <polygon fill="rgba(70, 151, 200,0.85)" :points="points" />
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
</template>

<script>
    import axios from 'axios'
    import PSResources from '~/components/PSResources'

    export default {
        name: "index",
        components: {
            PSResources
        },
        data() {
            return {
                post: null,
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
            return  axios.get('https://ps-maturity-model-sphera.firebaseio.com/posts/' + context.params.id + '.json')
                .then(res => {
                return {
                    post: res.data
                }
            })
                .catch(e => context.error(e))
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
        background: rgba(0,0,0,0.75);
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
</style>