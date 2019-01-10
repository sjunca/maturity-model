<template>
    <div class="ps-maturity-wrap">
        <div class="ps-maturity-title">
            <div class="holder">
                <div class="svg-bg">
                    <img src="~/assets/PS.svg">
                </div>
                <div class="text-content">
                    <h1>Product Stewardship</h1>
                    <h2>Maturity Model Self-Assessment Tool</h2>
                    <p>Sphera helps businesses improve decision-making and performance with an integrated view of their unique risk portfolio.</p>
                    <!--<p style="margin-top: 15px;font-weight: normal;">Answer each question according to your business to view your recommendations</p>-->
                </div>
            </div>
        </div>
        <form>
            <div class="tool-question-wrap">
                <div class="question-number-wrap">
                    <p><strong>Question {{ step }} of {{ stepTotal }}</strong></p>
                    <div class="progress-bar">
                        <div class="inner-progress-bar" :style="innerProgressStyle"></div>
                    </div>
                    <p class="progress-percent">Progress: <span v-model="progressNum">{{ progressNum }}%</span></p>
                </div>
                <div v-if="step === 1">

                    <h1>{{ step }}. Organizational Culture</h1>
                    <p>Select the appropriate cell that best reflects your firms current practices for organizational culture.</p>
                    <div class="picker-wrap">
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.organizationalCulture" value="1" @click.prevent="updateField('organizationalCulture', $event.target.value)">
                            <p>Considered a low value burden only to be completed where it can’t be avoided</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.organizationalCulture" value="2" @click.prevent="updateField('organizationalCulture', $event.target.value)">
                            <p>Viewed as a required activity to remain compliant and avoid fines</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.organizationalCulture" value="3" @click.prevent="updateField('organizationalCulture', $event.target.value)">
                            <p>Recognised as a valuable lens for identifying and managing operational risks</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.organizationalCulture" value="4" @click.prevent="updateField('organizationalCulture', $event.target.value)">
                            <p>Viewed as an opportunity to go beyond compliance and risk management and improve relations with workers, customers and community</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.organizationalCulture" value="5" @click.prevent="updateField('organizationalCulture', $event.target.value)">
                            <p>Considered a strategic opportunity to grow market presence or create new markets</p>
                        </div>
                    </div>

                    <div class="btn-nav-wrap" style="justify-content: flex-end;">
                        <button v-if="pstool.organizationalCulture" class="continue-submit" @click.prevent="next()">Continue</button>
                    </div>

                </div>
                <div v-if="step === 2">

                    <h1>{{ step }}. Governance</h1>
                    <p>Select the appropriate cell that best reflects your firms current practices for governance.</p>

                    <div class="picker-wrap">
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.governance" value="1" @click.prevent="updateField('governance', $event.target.value)">
                            <p>No clear leadership or functional responsibility</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.governance" value="2" @click.prevent="updateField('governance', $event.target.value)">
                            <p>Responsibility limited to regulatory affairs</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.governance" value="3" @click.prevent="updateField('governance', $event.target.value)">
                            <p>Involvement of EHS and operations. Dedicated product stewardship role(s) to drive efforts</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.governance" value="4" @click.prevent="updateField('governance', $event.target.value)">
                            <p>Centralized visibility led by product stewardship function with cooperation of various core functions such as supply chain, EHS, operations and regulatory affairs</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.governance" value="5" @click.prevent="updateField('governance', $event.target.value)">
                            <p>Centralized visibility led by product stewardship function with a cross-functional committee and diverse involvement of core functions and inclusion of fringe users such as sales when necessary</p>
                        </div>
                    </div>

                    <div class="btn-nav-wrap">
                        <button class="previous" @click.prevent="prev()">Previous</button>
                        <button v-if="pstool.governance" class="continue-submit" @click.prevent="next()">Continue</button>
                    </div>

                </div>
                <div v-if="step === 3">

                    <h1>{{ step }}.  Workflows and Processes</h1>
                    <p>Select the appropriate cell that best reflects your firms current practices for workflows and processes.</p>

                    <div class="picker-wrap">
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.workflowsProcesses" value="1" @click.prevent="updateField('workflowsProcesses', $event.target.value)">
                            <p>Ad hoc, issue-based management. Lack of documented procedures</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.workflowsProcesses" value="2" @click.prevent="updateField('workflowsProcesses', $event.target.value)">
                            <p>Corporate-driven efforts with minimal engagement across internal stakeholders</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.workflowsProcesses" value="3" @click.prevent="updateField('workflowsProcesses', $event.target.value)">
                            <p>Business units are equal partners with corporate in driving product stewardship activities</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.workflowsProcesses" value="4" @click.prevent="updateField('workflowsProcesses', $event.target.value)">
                            <p>Cross-functional cooperation. Continuous improvement of structured processes and workflows based on stakeholder feedback</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.workflowsProcesses" value="5" @click.prevent="updateField('workflowsProcesses', $event.target.value)">
                            <p>Cross-functional cooperation. Continuous improvement and transparent visibility into processes, accountable individual(s), and remaining action items</p>
                        </div>
                    </div>

                    <div class="btn-nav-wrap">
                        <button class="previous" @click.prevent="prev()">Previous</button>
                        <button v-if="pstool.workflowsProcesses" class="continue-submit" @click.prevent="next()">Continue</button>
                    </div>

                </div>
                <div v-if="step === 4">

                    <h1>{{ step }}. Digitization</h1>
                    <p>Select the appropriate cell that best reflects your firms current practices for digitization.</p>


                    <div class="picker-wrap">
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.digitization" value="1" @click.prevent="updateField('digitization', $event.target.value)">
                            <p>Paper-based</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.digitization" value="2" @click.prevent="updateField('digitization', $event.target.value)">
                            <p>Excel spreadsheets; custom tools</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.digitization" value="3" @click.prevent="updateField('digitization', $event.target.value)">
                            <p>Software point solutions used alongside Excel spreadsheets</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.digitization" value="4" @click.prevent="updateField('digitization', $event.target.value)">
                            <p>Consolidated software solutions with basic data analytics</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.digitization" value="5" @click.prevent="updateField('digitization', $event.target.value)">
                            <p>Single solution or fully integrated suite of solutions, where possible, with advanced data analytics</p>
                        </div>
                    </div>

                    <div class="btn-nav-wrap">
                        <button class="previous" @click.prevent="prev()">Previous</button>
                        <button v-if="pstool.digitization" class="continue-submit" @click.prevent="next()">Continue</button>
                    </div>

                </div>
                <div v-if="step === 5">

                    <h1>{{ step }}. Breadth Of Coverage</h1>
                    <p>Select the appropriate cell that best reflects your firms current practices for breadth of coverage.</p>


                    <div class="picker-wrap">
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.breadthOfCoverage" value="1" @click.prevent="updateField('breadthOfCoverage', $event.target.value)">
                            <p>10% - 50%</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.breadthOfCoverage" value="2" @click.prevent="updateField('breadthOfCoverage', $event.target.value)">
                            <p>50% - 70%</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.breadthOfCoverage" value="3" @click.prevent="updateField('breadthOfCoverage', $event.target.value)">
                            <p>70% - 80%</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.breadthOfCoverage" value="4" @click.prevent="updateField('breadthOfCoverage', $event.target.value)">
                            <p>80% - 90%</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.breadthOfCoverage" value="5" @click.prevent="updateField('breadthOfCoverage', $event.target.value)">
                            <p>90% - 100%</p>
                        </div>
                    </div>

                    <div class="btn-nav-wrap">
                        <button class="previous" @click.prevent="prev()">Previous</button>
                        <button v-if="pstool.breadthOfCoverage" class="continue-submit" @click.prevent="next()">Continue</button>
                    </div>

                </div>
                <div v-if="step === 6">

                    <h1>{{ step }}. Analysis and Reporting</h1>
                    <p>Select the appropriate cell that best reflects your firms current practices for analysis and reporting.</p>


                    <div class="picker-wrap">
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.analysisReporting" value="1" @click.prevent="updateField('analysisReporting', $event.target.value)">
                            <p>None</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.analysisReporting" value="2" @click.prevent="updateField('analysisReporting', $event.target.value)">
                            <p>Reliance on lagging indicators</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.analysisReporting" value="3" @click.prevent="updateField('analysisReporting', $event.target.value)">
                            <p>Metrics focused on compliance and operational risk purposes</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.analysisReporting" value="4" @click.prevent="updateField('analysisReporting', $event.target.value)">
                            <p>Reliance on leading indicators and targeted analysis to identify operational improvements</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.analysisReporting" value="5" @click.prevent="updateField('analysisReporting', $event.target.value)">
                            <p>Use of automation and artificial intelligence to produce deep, targeted real-time analysis and reporting</p>
                        </div>
                    </div>

                    <div class="btn-nav-wrap">
                        <button class="previous" @click.prevent="prev()">Previous</button>
                        <button v-if="pstool.analysisReporting" class="continue-submit" @click.prevent="next()">Continue</button>
                    </div>

                </div>
                <div v-if="step === 7">

                    <h1>{{ step }}. Supply Chain Management</h1>
                    <p>Select the appropriate cell that best reflects your firms current practices for supply chain management.</p>


                    <div class="picker-wrap">
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.supplyChainManagement" value="1" @click.prevent="updateField('supplyChainManagement', $event.target.value)">
                            <p>Reactive engagement when necessary</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.supplyChainManagement" value="2" @click.prevent="updateField('supplyChainManagement', $event.target.value)">
                            <p>Reliance on tools such as emails, spreadsheets or online portals to manage data</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.supplyChainManagement" value="3" @click.prevent="updateField('supplyChainManagement', $event.target.value)">
                            <p>Use of supplier EHS and sustainability risk evaluations to pre-empt potential issues</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.supplyChainManagement" value="4" @click.prevent="updateField('supplyChainManagement', $event.target.value)">
                            <p>Structured engagements with customers and suppliers on the importance and benefits of product stewardship</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.supplyChainManagement" value="5" @click.prevent="updateField('supplyChainManagement', $event.target.value)">
                            <p>Directly involved in customer and supplier capacity building and performance improvement efforts</p>
                        </div>
                    </div>

                    <div class="btn-nav-wrap">
                        <button class="previous" @click.prevent="prev()">Previous</button>
                        <button v-if="pstool.supplyChainManagement" class="continue-submit" @click.prevent="next()">Continue</button>
                    </div>

                </div>
                <div v-if="step === 8">

                    <h1>{{ step }}. Education and Awareness</h1>
                    <p>Select the appropriate cell that best reflects your firms current practices for education and awareness.</p>


                    <div class="picker-wrap">
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.educationAwareness" value="1" @click.prevent="updateField('educationAwareness', $event.target.value)">
                            <p>None</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.educationAwareness" value="2" @click.prevent="updateField('educationAwareness', $event.target.value)">
                            <p>Hiring qualified employees with relevant expertise</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.educationAwareness" value="3" @click.prevent="updateField('educationAwareness', $event.target.value)">
                            <p>Hiring qualified employees with on-going product stewardship training</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.educationAwareness" value="4" @click.prevent="updateField('educationAwareness', $event.target.value)">
                            <p>In addition to stage three, have membership in industry associations and internal efforts on awareness for product safety</p>
                        </div>
                        <div class="pick-item">
                            <input type="radio" v-model="pstool.educationAwareness" value="5" @click.prevent="updateField('educationAwareness', $event.target.value)">
                            <p>In addition to stage four, have structured consultative engagements with advocacy, NGO and government groups</p>
                        </div>
                    </div>

                    <div class="btn-nav-wrap">
                        <button class="previous" @click.prevent="prev()">Previous</button>
                        <button v-if="pstool.educationAwareness" class="continue-submit" @click.prevent="next()">Continue</button>
                    </div>

                </div>
                <div v-if="step === 9">
                    <h2 style="width: 500px;margin: 10px auto 20px;text-align: center;line-height: 1.4;">Complete your information to receive your results and recommendations!</h2>
                    <full-pardot-form />
                    <div class="btn-nav-wrap">
                        <button class="previous" @click.prevent="prev()">Previous</button>
                        <button v-if="pardotinfo.firstname && pardotinfo.lastname && pardotinfo.email && pardotinfo.phone && pardotinfo.firstname && pardotinfo.company && pardotinfo.jobtitle && pardotinfo.industry && pardotinfo.country" class="continue-submit" @click.prevent="submit()">Submit</button>
                        <button class="previous" v-else disabled style="cursor: default">*Please finish form*</button>
                    </div>
                </div>

            </div>
        </form>
    </div>
</template>

<script>
    import FullPardotForm from "../../components/FullPardotForm";
    import axios from 'axios'

    export default {
        components: {FullPardotForm},
        name: "index",
        data() {
            return {
                step: 1,
                stepTotal: 9,
                progressNum: 11,
                pstool: this.$store.state.pstool,
                pardotinfo: this.$store.state.pardotinfo
            }
        },
        methods: {
            prev() {
                this.step--;
            },
            next() {
                this.step++;
            },
            updateField(field, value) {
                this.$store.commit('updatepstool', {
                    [field]: value
                });
            },
            submit() {
                let self = this;

                axios.post('https://ps-maturity-model-sphera.firebaseio.com/posts.json', this.$store.state)
                    .then(result => {
                    return {
                        post: result.data
                    }
                }).then(function(result) {
                        self.$store.commit('updatepstool', {
                            ID: result.post.name
                        });
                    // updateField('ID', result.post.name);
                    // self.$store.commit('updateID', result.post.name);
                    // self.$store.state.pstool.ID = result.post.name;
                    self.$router.push('result?id=' + result.post.name);
                })
                    .catch(e => console.log(e))
            }
        },
        watch: {
            step(newVal) {
                this.progressNum = ((newVal/this.stepTotal)*100).toFixed(0)
            }
        },
        computed: {
            innerProgressStyle: function() {
                return {
                    'width': this.progressNum + '%',
                    height: '4px',
                    backgroundColor: '#009bde',
                    borderRadius: '2px'
                }
            }
        }
    }
</script>

<style scoped>
    .ps-maturity-wrap {
        width: 100%;
        margin: 0 auto;
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
        margin-bottom: 20px;
    }
    .ps-maturity-title .text-content p {
        line-height: 1.5;
        font-weight: 500;
    }
    form {
        width: 100%;
        padding: 50px 10px;
        margin: 0 auto;
        background: #f5f5f5;
    }
    form .tool-question-wrap {
        width: 1250px;
        max-width: 100%;
        margin: 0 auto;
        position: relative;
    }
    form .tool-question-wrap div h1 {
        padding-top: 60px;
        color: rgba(0,0,0,0.85);
        font-size: 26px;
        font-weight: 700;
    }
    form .tool-question-wrap div p {
        color: #4a4a4a;
        margin-bottom: 10px;
    }
    .question-number-wrap {
        width: 200px;
        right: 0;
        top: 0;
        position: absolute;
    }
    .question-number-wrap .progress-percent {
        text-align: right;
        font-size: 10px;
        color: #4a4a4a;
        padding: 10px 0;
    }
    .btn-nav-wrap {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 50px 0;
        min-height: 138px;
    }
    .btn-nav-wrap button {
        padding: 10px;
        width: 150px;
        border: 1px solid #d8d8d8;
        font-weight: 500;
        letter-spacing: 0.2px;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        background: #d8d8d8;
        color: #000;
        transition: 0.15s all ease-in-out;
    }
    .btn-nav-wrap button:hover, .btn-nav-wrap button:focus, .btn-nav-wrap button:active {
        background: #f2f2f2;
        border: 1px solid #000;
    }
    button.continue-submit {
        background: #3b4;
        color: #fff;
        padding: 10px;
        width: 150px;
        border: 1px solid #3b4;
        font-weight: 500;
        letter-spacing: 0.2px;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.15s all ease-in-out;
    }
    button.continue-submit:hover, button.continue-submit:focus, button.continue-submit:active {
        background: #f2f2f2;
        border: 1px solid #3b4;
        color: #3b4;
    }
    .btn-nav-wrap button.continue-submit {
        background: #3b4;
        color: #fff;
    }
    .btn-nav-wrap button.continue-submit:hover, .btn-nav-wrap button.continue-submit:focus, .btn-nav-wrap button.continue-submit:active {
        background: #f2f2f2;
        border: 1px solid #3b4;
        color: #3b4;
    }
    .picker-wrap {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .picker-wrap .pick-item {
        padding: 20px;
        background: #fff;
        color: rgba(132,132,132,0.9);
        width: 235px;
        min-height: 215px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        position: relative;
    }
    .picker-wrap .pick-item input {
        position: absolute;
        top: 5px;
        right: 5px;
        height: 20px;
        width: 20px;
    }
    form .picker-wrap .pick-item p {
        color: rgba(132,132,132,0.9);
        margin: 0 auto;
        max-width: 100%;
    }
    .progress-bar {
        width: 200px;
        height: 4px;
        border-radius: 2px;
        background: #bbb;
    }
</style>

