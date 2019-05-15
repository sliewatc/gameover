import React, { Component } from 'react';
import MainView from './MainView'
import viewStore from '../stores/viewStore'
import ReactPlayer from 'react-player'
import { observer } from 'mobx-react'

class Home extends Component {
    render() {
        return (
            <div className="gameover">
                <div className="gameover-inner">
                    <div className="gameover-title">GAME OVER</div>
                    <MainView/>
                    {viewStore.viewState === 'video' ? <ReactPlayer url={viewStore.videoUrl} playing controls/> : ''}
                </div>
            </div>
        );
    }
}

export default observer(Home);
