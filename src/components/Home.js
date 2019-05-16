import React, { Component } from 'react';
import MainView from './MainView'
import viewStore from '../stores/viewStore'
import scheduleStore from '../stores/scheduleStore'
import VideoModal from './VideoModal'
import { observer } from 'mobx-react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cal: false
        }
    }

    toggleCal = () => {
        this.setState((prevState) => ({
            cal: !prevState.cal
        }))
        console.log(this.state.cal)
    }

    render() {
        console.log(scheduleStore.fetchingSchedule);

        return (
            <React.Fragment>
                <div className="gameover">

                    <div className="gameover-inner">
                        <div className="gameover-title">GAME OVER</div>
                        <div className="cal-picker">
                            <div onClick={this.toggleCal} className={'more-close'}>
                                {this.state.cal ? 'CLOSE' : 'MORE'}
                            </div>
                            {this.state.cal ?
                                <DayPicker
                                    className={'game-cal-picker'}
                                    selectedDays={scheduleStore.selectedDay}
                                    onDayClick={scheduleStore.getNewScheduleByDate}
                                />
                                : ''}
                        </div>
                        {scheduleStore.fetchingSchedule ? '' : <MainView/>}
                    </div>

                </div>
                {viewStore.viewState === 'video' ? <VideoModal/> : ''}
            </React.Fragment>
    );
    }
}

export default observer(Home);
