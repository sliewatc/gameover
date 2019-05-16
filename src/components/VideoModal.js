import React, { Component } from 'react'
import viewStore from '../stores/viewStore'
import ReactPlayer from 'react-player'

class VideoModal extends Component {
    handleCloseVideoClick = () => {
        viewStore.closeVideo()
    }
    handleClick = (e) => {
        e.stopPropagation()
    }
    render() {
        return(
            <div className={'video-modal-wrapper'}>
                <div className={'video-box'}>
                    <div className={'close-video'} onClick={this.handleCloseVideoClick}></div>
                    <ReactPlayer onClick={this.handleClick} className={'vplayer'} url={viewStore.videoUrl} playing controls volume={0.5} width='100%' height='100%'/>
                </div>
            </div>
        )
    }
}

export default VideoModal