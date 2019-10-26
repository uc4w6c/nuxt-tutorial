import Vuex from 'vuex'

export default() => (new Vuex.Store({
    state: {
        items: [],
        users: {},
        userItems: {}
    },
    getters: {
        items: (state) => state.items,
        users: (state) => state.users,
        userItems: (state) => state.userItems
    },
    mutations: {
        setItems (state, { items }) {
            state.items = items
        },
        setUser (state, { user }) {
            state.user[user.id] = user
        },
        setUserItems(state, { user, items }) {
            state.userItems[user.id] = items
        }
    },
    actions: {
        async fetchItems({ commit }) {
            // 以下一時的にログ出力する
            this.$axios.interceptors.request.use(request => {
                console.log('Starting Request: ', request)
                return request
            })
            this.$axios.interceptors.response.use(response => {
                console.log('Response: ', response)
                return response
            })

            const items = await this.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js')
            commit('setItems', { items })
        },
        async fetchUserInfo({ commit }, { id }) {
            const [user, items] = await Promise.all([
                this.$axios.$get(`https://qiita.com/api/v2/users/${id}`),
                this.$axios.$get(`https://qiita.com/api/v2/items?query=user:${id}`)
            ])
            commit('setUser', { user })
            commit('serUserItems', { user, items })
        }
    }
}))
