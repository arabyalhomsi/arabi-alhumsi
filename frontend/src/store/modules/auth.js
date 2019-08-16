import { getAccessToken } from '@/api/auth'

const state = {
    auth: JSON.parse(localStorage.getItem('auth')) || {}
}

const getters = {
    auth (state) {
        return state.auth
    },
    authenticated (state) {
        return state.auth.accessToken ? true : false
    }
}


const actions = {
    async getAuthValues ({ commit }, payload) {
        let username = payload.username
        let password = payload.password

        const query = await getAccessToken(username, password)

        let authValues = {
            accessToken: query.data.accessToken,
            accessTokenExpiresAt: query.data.accessTokenExpiresAt
        }

        localStorage.setItem('auth', JSON.stringify(authValues))

        commit('setAuthValues', authValues)
    }
}

const mutations = {
    setAuthValues (state, authValues) {
        state.auth = authValues
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}