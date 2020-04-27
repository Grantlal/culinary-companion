import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	recipes: 10, // The TV inventory
	account: {
		id: 0,
		filters: [""]
	}
  },
  getters: {
	  getId()
	  {
		  return this.account.id;
	  }
  },
  mutations: {
  },
  actions: {
  }
});