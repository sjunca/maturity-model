import Vuex from 'vuex'

import mutations from './mutations'

const createStore = () => {
    return new Vuex.Store({
        state: {
            pardotinfo: {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                company: '',
                jobtitle: '',
                industry: '',
                country: '',
                GDPR: true,
                revenue: '',
                message: ''
            },
            pstool: {
                organizationalCulture: null,
                governance: null,
                workflowsProcesses: null,
                digitization: null,
                breadthOfCoverage: null,
                analysisReporting: null,
                supplyChainManagement: null,
                educationAwareness: null,
                ID: null,
                dateSubmitted: new Date()
            },
        },
        mutations
    })
}

export default createStore