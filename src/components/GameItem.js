import React, { Component } from 'react'
import viewStore from "../stores/viewStore";

class GameItem extends Component {
    handleVidOpen = () => {
        if (this.props.game.status.codedGameState !== '7') return
        viewStore.openVideo(this.props.game.content.media.epg[3].items[0].playbacks[9].url)
    }

    render() {
        let game = this.props.game
        return(
            <div className="game-item-wrapper"  onClick={this.handleVidOpen}>
                <div className="game-item-title">
                    <img height="100px" width="100px" src={`https://www-league.nhlstatic.com/builds/site-core/01c1bfe15805d69e3ac31daa090865845c189b1d_1458063644/images/team/logo/current/${game.teams.away.team.id}_dark.svg`}/>
                    <div>
                        <div className={'team-abr'}>{ `${game.teams.away.team.abbreviation}` }</div>
                        <div>{ `${game.teams.away.team.teamName}` }</div>
                    </div>
                    <span className='at-spacer'>at</span>
                    <div>
                        <div className={'team-abr'}>{ `${game.teams.home.team.abbreviation}` }</div>
                        <div>{ `${game.teams.home.team.teamName}` }</div>
                    </div>
                    <img height="100px" width="100px" src={`https://www-league.nhlstatic.com/builds/site-core/01c1bfe15805d69e3ac31daa090865845c189b1d_1458063644/images/team/logo/current/${game.teams.home.team.id}_dark.svg`}/>
                </div>

                <div>
                    { /*(game.status.codedGameState === "7" ? game.content.media.epg[3].items[0].playbacks[9].url : 'incomplete') */ }
                </div>
            </div>
        )
    }
}

export default GameItem