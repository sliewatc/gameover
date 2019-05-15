import React, { Component } from 'react'
import scheduleStore from "../stores/scheduleStore";
import GameCard from './GameCard'

class MainView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waiting: true,
            schedule: null
        }
    }
    componentDidMount() {
        scheduleStore.schedule
            .then(schedule => {console.log('In view', schedule); return schedule})
            .then(schedule => this.setState({waiting: false, schedule: schedule}))
    }

    renderSchedule() {
        if (this.state.waiting) {
            return(
                <span>WAITING</span>
            )
        } else {
            return (
                <React.Fragment>
                    {this.state.schedule.dates.map((item, key) => {
                        return <GameCard key={key} item={item}/>
                    })}
                </React.Fragment>
            )
        }
    }

    render() {
        return(
            <div>
                { this.renderSchedule() }
            </div>
        )
    }
}

export default MainView