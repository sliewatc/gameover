import React, { Component } from 'react'
import viewStore from "../stores/viewStore";

class GameItem extends Component {
    handleVidOpen = () => {
        if (this.props.game.status.codedGameState !== '7') return
        viewStore.openVideo(this.props.game.content.media.epg[3].items[0].playbacks[9].url)
    }

    render() {
        let game = this.props.game
        let tbd = this.props.game.status.codedGameState !== '7';
        let awayImg = game.teams.away.team.id == 54 ?
            'http://www-league.nhlstatic.com/nhl.com/builds/site-core/7b691016e3ba4529909cac4ea7c0bd0f701786ee_1556733694/images/logos/team/current/team-54-dark.svg' :
            'https://www-league.nhlstatic.com/builds/site-core/01c1bfe15805d69e3ac31daa090865845c189b1d_1458063644/images/team/logo/current/' + game.teams.away.team.id +'_dark.svg'
        let homeImg = game.teams.home.team.id == 54 ?
            'http://www-league.nhlstatic.com/nhl.com/builds/site-core/7b691016e3ba4529909cac4ea7c0bd0f701786ee_1556733694/images/logos/team/current/team-54-dark.svg' :
            'https://www-league.nhlstatic.com/builds/site-core/01c1bfe15805d69e3ac31daa090865845c189b1d_1458063644/images/team/logo/current/' + game.teams.home.team.id +'_dark.svg'

        return(
            <div className={`game-item-wrapper ${tbd ? 'game-tbd' : ''}`}  onClick={this.handleVidOpen}>
                <div className="game-item-title">
                    <img height="80px" width="80px" src={awayImg}/>
                    <div className={'game-item-team-name '}>
                        <div className={'team-abr'}>{ `${game.teams.away.team.abbreviation}` }</div>
                        <div>{ `${game.teams.away.team.teamName}` }</div>
                    </div>
                    <span className='at-spacer'>at</span>
                    <div className={'game-item-team-name '}>
                        <div className={'team-abr'}>{ `${game.teams.home.team.abbreviation}` }</div>
                        <div>{ `${game.teams.home.team.teamName}` }</div>
                    </div>
                    <img height="80px" width="80px" src={homeImg}/>
                </div>
            </div>
        )
    }
}

export default GameItem