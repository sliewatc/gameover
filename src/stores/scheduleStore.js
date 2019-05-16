import { extendObservable, observable, action, decorate } from "mobx";

function getToday() {
    return new Date().toJSON().slice(0,10).replace(/-/g,'-')
}
function getWeekAgo() {
    let weekInMilliseconds =  4 * 24 * 60 * 60 * 1000;
    let cur = new Date()
    cur.setTime(cur.getTime() - weekInMilliseconds)
    return cur.toJSON().slice(0,10).replace(/-/g,'-')
}

class scheduleStore {
    currentDate = getToday()
    weekAgo = getWeekAgo()
    fetchingSchedule = true

    fetchSchedule = (cur, end) => {
        return fetch(`https://statsapi.web.nhl.com/api/v1/schedule?startDate=${end}&endDate=${cur}&expand=schedule.game.content.media.epg%2Cschedule.teams`)
            .then(response => response.json())
            .then(data => {this.fetchingSchedule = false; data.dates.reverse(); return data})
    }

    schedule = this.fetchSchedule(this.currentDate, this.weekAgo)

    getNewScheduleByDate = (date) => {
        console.log('get new')
        let d = new Date(date).toJSON().slice(0,10).replace(/-/g,'-')
        this.fetchingSchedule = true
        this.schedule = this.fetchSchedule(d, d)
    }
}


decorate(scheduleStore, {
    currentDate: observable,
    weekAgo: observable,
    schedule: observable,
    getNewScheduleByDate: action,
    fetchingSchedule: observable,
})

export default new scheduleStore()