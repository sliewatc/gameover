import { observable, action, decorate } from "mobx";

class viewStore {
    viewState = 'default'
    videoUrl = ''

    openVideo = (url) => {
        console.log('pre',this.viewState)
        this.viewState = 'video'
        this.videoUrl = url
        console.log('post',this.videoUrl)
    }

    closeVideo = () => {
        this.viewState = 'default'
        this.videoUrl = ''
    }
}

decorate(viewStore, {
    viewState: observable,
    videoUrl: observable,
    openVideo: action,
    closeVideo: action
})

export default new viewStore()