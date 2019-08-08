const Helpers = {}

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December" 
] 

Helpers.install = function (Vue, options) {
    Vue.mixin({
        methods: {
            readableDate(date) {
                let string = ''
                date = new Date(date)
                console.log(date.getDay())
                string = MONTHS[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() 
                return string
            }
        }
    })
}

export default Helpers