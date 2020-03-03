import React,{Component} from 'react'
import Login from '../../component/credentials/Login'
import Axios from 'axios'
import Url from '../../environments/Environment'

class Loginpage extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                userName:'',
                userEmail:'',
                password:''
            },
            userStatus:false
        }
        
    }
    userLogin =(data)=>{
        Axios.post(Url.url+'login',data).then( response =>{
            console.log(response);
            this.props.history.push({pathname:'/homepage'})
        }).catch(error =>{
            console.log(error)
        })
        this.props.history.push({pathname:'/homepage'})
    }
    eventChangeHandler= e =>{
        this.setState({userInfo:{...this.state.userInfo,[e.target.name]:e.target.value}});
    }
    signupHandler = () =>{
        // console.log('signup: ')
        this.props.history.push({pathname:'/signuppage'})
    }
    onSubmitHandler = e =>{
        e.preventDefault();
        this.userLogin(this.state.userInfo);
    }
    render(){
        
        return(
            <Login
                signupHandler={this.signupHandler}
                onSubmitHandler={this.onSubmitHandler} 
                userInfo={this.state.userInfo}
                eventChangeHandler={this.eventChangeHandler} 
                userStatus={this.state.userStatus}/>
        )
    }
}

export default Loginpage