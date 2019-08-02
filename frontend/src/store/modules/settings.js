import getSettingPoints from "../../graphql/getSettingPoints.gql";
import { apolloClient }  from "../../vue-apollo"

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