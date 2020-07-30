const state = {
  count: 0,
  vuexName: 'This is vuexName'
}

// state成员操作
const mutations = {
  setVuexName (state, args) {
    state.vuexName = args || 'unknown'
  }
}

// 加工state成员给外界
const getters = {
  getVuexName (state, getters) {
    return `【${state.vuexName}】 by getters`
  }
}

// 异步操作
const actions = {
  setVuexNameAsync ({ commit }, args) {
    commit('setVuexName', args)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
