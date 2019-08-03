import getSettingPoints from "../../graphql/getSettingPoints.gql";
import { apolloClient }  from "../../vue-apollo"

// wrong: apolloClient and vuex should be completely separate
// single source of truth
// vuex only for local state that does not come from an API

const state = {
    settingPoints: []
}

const getters = {
    settingPoints (state) {
        return state.settingPoints
    },
    settingPoint (state) {
        return (key) => {
            let result = state.settingPoints.find(obj => obj.key == key)

            return result.value
        }
    }
}


const actions = {
    async fetchSettingPoints ({ commit }) {
        const query = await apolloClient.query({
            query: getSettingPoints
        })
        let settingPoints = query.data.settingPoints
        commit('setSettingPoints', settingPoints)
    }
}

const mutations = {
    setSettingPoints (state, settingPoints) {
        state.settingPoints = settingPoints
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}