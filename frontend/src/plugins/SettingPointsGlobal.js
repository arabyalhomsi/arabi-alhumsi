import getSettingPoints from "../graphql/getSettingPoints.gql";

const SettingPointsGlobal = {}

SettingPointsGlobal.install = function (Vue, options) {
    Vue.mixin({
        apollo: {
            settingPoints: getSettingPoints
        },
        computed: {
            SettingPoints () {
                let settingPoints = this.settingPoints
                let newOb = {}

                if (!settingPoints)
                    return false

                settingPoints.forEach((p) => {
                    let value = p.value
                    try {
                        value = JSON.parse(value.replace(/'/g, '"'))
                    } catch (e) {
                        // do nothing
                    }
                    newOb[p.key] = value
                })

                return newOb
            }
        }
    })
}

export default SettingPointsGlobal