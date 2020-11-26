export default {
    // 当天时间
    setTime() {
        let date = new Date()
        const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        let nowDate = {
            month: months[date.getMonth()],
            day: date.getDate(),
            week: weeks[date.getDay()]
        }
        return nowDate
    },
    // 近n月第一天(n<=12)
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