import React, { Component } from 'react'
import GameItem from "./GameItem";

class GameCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.item)
    }

    renderGames() {
        return(
            this.props.item.games.map((game) => {
                return(
                    <GameItem game={game}/>
                )
            })
        )
    }

    render() {
        return(
            <div>
                <div>{this.props.item.date}</div>
                <div className="day-wrapper">{this.renderGames()}</div>
            </div>
        )
    }
}

export default GameCard