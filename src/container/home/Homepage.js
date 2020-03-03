import React,{Component} from 'react'
import Home from '../../component/home/Home'
class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={
            userStatus: true
        };
    }
    logoutHandler =()=>{
        console.log('ougout')
        this.props.history.goBack();
    }
    render(){
        return(
            <Home logoutHandler={this.logoutHandler}
                userStatus={this.state.userStatus} />
        )
    }
}
export default Homepage