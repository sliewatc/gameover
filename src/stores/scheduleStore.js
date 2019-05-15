import { observable, action, decorate } from "mobx";

function getToday() {
    return new Date().toJSON().slice(0,10).replace(/-/g,'-')
}
function getWeekAgo() {
    let weekInMilliseconds =  5 * 24 * 60 * 60 * 1000;
    let cur = new Date()
    cur.setTime(cur.getTime() - weekInMilliseconds)
    return cur.toJSON().slice(0,10).replace(/-/g,'-')
}

class scheduleStore {
    currentDate = getToday()
    weekAgo = getWeekAgo()
    fetchingSchedule = true
    schedule = this.fetchSchedule(this.currentDate, this.weekAgo)

    fetchSchedule(cur, end) {
        return fetch(`https://statsapi.web.nhl.com/api/v1/schedule?startDate=${end}&endDate=${cur}&expand=schedule.game.content.media.epg%2Cschedule.teams`)
            .then(response => response.json())
            .then(data => {this.fetchingSchedule = false; data.dates.reverse(); return data})
    }

    getNewScheduleByDate(date) {
        this.fetchingSchedule = true
        this.schedule = this.fetchSchedule(date, date)
        this.fetchingSchedule = false
    }
}


decorate(scheduleStore, {
    currentDate: observable,
    weekAgo: observable,
    schedule: observable,
    getNewScheduleByDate: action
})

export default new scheduleStore()