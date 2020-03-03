import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import Loginpage from './login/Loginpage'
import Signuppage from './signup/Signuppage'
import Homepage from './home/Homepage'

class Indexpage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Route path='/' exact component = {Loginpage}/>
                <Route path='/signuppage' component = {Signuppage}/>
                <Route path='/homepage' component = {Homepage}/>
            </div>
        )
    }
}
export default Indexpage