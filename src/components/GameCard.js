import React, { Component } from 'react'
import GameItem from "./GameItem";

function makeDateString(date) {
    let stringDate = new Date(date)
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    console.log(stringDate.toDateString(options))
    return stringDate.toUTCString(options).replace("00:00:00 GMT", "");
}


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
                <div className="date-line">{makeDateString(this.props.item.date)}</div>
                <div className="day-wrapper">{this.renderGames()}</div>
            </div>
        )
    }
}

export default GameCard