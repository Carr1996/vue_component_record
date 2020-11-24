export default {
    //近n月第一天(n<=12)
    beforeNMonthDay(n) {
        let d = new Date()
        let year = d.getFullYear()
        let month = d.getMonth() - n + 1
        if (month <= 0) {
            month = String(month + 12)
            year = String(year - 1)
        }
        if (month.length == 1) {
            month = '0' + month
        }
        let data = year + '-' + month + '-01'
        return data
    }
}