import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    // Property
    state: {
      headlines: [],
      loading: false,
      token: '',
      category: '',
      country: 'us',
    },

    // setter
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines
      },

      setLoading(state, loading) {
        state.loading = loading
      },

      setToken(state, token) {
        state.token = token
      },

      setCategory(state, category) {
        state.category = category
      },

      setCountry(state, country) {
        state.country = country
      },
    },

    // getter
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      isAuthenticated: state => !!state.token,
      category: state => state.category,
      country: state => state.country,
    },

    actions: {
      // /
      async loadHeadlines({ commit }, apiUrl) {
        commit('setLoading', true)
        const { articles } = await this.$axios.$get(apiUrl)
        commit('setLoading', false)
        commit('setHeadlines', articles)
      },

      // /register
      async authenticateUser({ commit }, userPayload) {
        try {
          commit('setLoading', true)
          const authUserData = await this.$axios.$post(
            '/register/',
            userPayload
          )
          commit('setToken', authUserData.idToken)
          commit('setLoading', false)
        } catch (err) {
          console.error(err)
          commit('setLoading', false)
        }
      },
    },
  })
}

export default createStore
