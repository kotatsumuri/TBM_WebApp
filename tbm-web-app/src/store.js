import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trashBoxDatas: null,
  },
  mutations: {
    setTrashBoxDatas(state, dataBaseValue) {
      state.trashBoxDatas = dataBaseValue ;
    }
  },
  actions: {

  },
  getters: {
    trashBoxDatas(state) {
      return state.trashBoxDatas;
    }
  }
})
