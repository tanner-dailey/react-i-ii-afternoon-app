import React, { Component } from 'react';
import data from '../data';

class Movies extends Component {
    constructor(){
        super();
        this.state = {
            movieList: data[0].favoriteMovies
        }
    }
    
    componentWillReceiveProps(nextProps){
        data.map(el => {
            if(el.id === nextProps.userId){
                this.setState({movieList: el.favoriteMovies})
            }
        })
    }

render(){
    return(
        <ol>
            <li>{this.state.movieList[0]}</li>
            <li>{this.state.movieList[1]}</li>
            <li>{this.state.movieList[2]}</li>
        </ol>
    )
}
}

export default Movies

