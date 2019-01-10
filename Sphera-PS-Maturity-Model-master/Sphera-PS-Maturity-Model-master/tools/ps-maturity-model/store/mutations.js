const mutations = {
    increment(state) {
        state.counter++
    },
    updatePardotInfo: function (state, pardotinfo) {
        Object.assign(state.pardotinfo, pardotinfo);
    },
    updatepstool: function (state, pstool) {
        Object.assign(state.pstool, pstool);
    }
}

export default mutations