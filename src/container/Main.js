import React,{Component} from 'react'
import Login from '../component/credentials/Login'
import Signup from '../component/credentials/Signup'
import Axios from 'axios'
import Url from '../environments/Environment'
class Main extends Component{
    //userStatus true for old user nad false for new user
    state={
        userStatus : true,
        welcomeMsg:'',
        userInfo : {
            userName:'',
            userEmail:'',
            password:''
        }
    }
    
    userStatusHandler =()=>{
        this.setState({userStatus:! this.state.userStatus});
    }
    eventChangeHandler= e =>{
        this.setState({userInfo:{...this.state.userInfo,[e.target.name]:e.target.value}});
    }
    userLogin =(data)=>{
        Axios.post(Url.url+'login',data).then( response =>{
            console.log(response);
        }).catch(error =>{
            console.log(error)
        })
    }
    userSignup =(data)=>{
        Axios.post(Url.url+'signup',data).then( response =>{
            console.log(response);
        }).catch(error =>{
            console.log(error)
        })
    }
    onSubmitHandler = e =>{
        if( e.target.name ==='login')
            this.userLogin(this.state.userInfo);
        else if( e.target.name ==='signup'){
            this.userSignup(this.state.userInfo);
        }
        e.preventDefault();
        // console.log(this.state.userInfo);
    }
    render(){
        let credentialStatus = null;
        if( this.state.userStatus){
            credentialStatus = <Login 
                userStatusHandler ={this.userStatusHandler} 
                onSubmitHandler={this.onSubmitHandler} 
                userInfo={this.state.userInfo}
                eventChangeHandler={this.eventChangeHandler}
                />;
        }else{
            credentialStatus = <Signup 
                userStatusHandler ={this.userStatusHandler} 
                onSubmitHandler={this.onSubmitHandler}
                userInfo={this.state.userInfo}
                eventChangeHandler={this.eventChangeHandler}/>;
        }
        return(
            <div>
                {credentialStatus}
            </div>
        );
    }
}
export default Main;