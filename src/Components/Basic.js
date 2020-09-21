import React, { Component } from 'react';
import data from '../data';

class Basic extends Component {
    constructor() {
        super();
        this.state = {
            name: `${data[0].name.first} ${data[0].name.last}`,
            from: `${data[0].city}, ${data[0].country}`,
            title: `${data[0].title}`,
            employer: `${data[0].employer}`
        }
    }

    componentWillReceiveProps(nextProps){
        data.map(el => {
            if(el.id === nextProps.userId){
                this.setState({name: `${el.name.first} ${el.name.last}`})
                this.setState({from: `${el.city}, ${el.country}`})
                this.setState({title: `${el.title}`})
                this.setState({employer: `${el.employer}`})
            }
        })
    }

    render(){
        return(
            <div className='basic'>
                <h1>{this.state.name}</h1>
                <h2>From: <b>{this.state.from}</b></h2>
                <h2>Job Title: <b>{this.state.title}</b></h2>
                <h2>Employer: <b>{this.state.employer}</b></h2>
            </div>
        )
    }
}

export default Basic