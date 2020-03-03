import React, { Component } from 'react'
import Navigation from '../navigation/Navigation.js'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <Navigation userStatusHandler ={this.props.logoutHandler} 
                        text='Logout'
                        userStatus={this.props.userStatus} />
            </div>
        )
    }
}

export default Home
