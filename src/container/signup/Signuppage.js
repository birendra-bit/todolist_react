import React,{ Component } from 'react'
import Signup from '../../component/credentials/Signup'
import Axios from 'axios'
import Url from '../../environments/Environment'

class Signuppage extends Component{
    constructor(props){
        super(props);
        this.state ={
            userInfo : {
                userName:'',
                userEmail:'',
                password:''
            },
            userStatus:false
        }
    }
    loginHandler =()=>{
        this.props.history.goBack();
    }
    eventChangeHandler= e =>{
        e.preventDefault();
        this.setState({userInfo:{...this.state.userInfo,[e.target.name]:e.target.value}});
    }
    userSignup =(data)=>{
        console.log('signup:',Url.url)
        Axios.post(Url.url+'signup',data).then( response =>{
            console.log(response);
            this.props.history.push({pathname:'/'})
        }).catch(error =>{
            console.log(error)
        })
    }
    onSubmitHandler = e =>{
            e.preventDefault();
            this.userSignup(this.state.userInfo);
            console.log(this.state.userInfo);
    }
    render(){
        return(
            <Signup loginHandler ={this.loginHandler} 
                    onSubmitHandler={this.onSubmitHandler}
                    userInfo={this.state.userInfo}
                    eventChangeHandler={this.eventChangeHandler}
                    userStatus={this.state.userStatus}/>
        )
    }
}

export default Signuppage