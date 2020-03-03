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
        // console.log(e.target.name,' ',e.target.value)
        this.setState({userInfo:{...this.state.userInfo,[e.target.name]:e.target.value}});
    }
    userSignup =(data)=>{
        Axios.post(Url.url+'signup',data).then( response =>{
            console.log(response);
        }).catch(error =>{
            console.log(error)
        })
        this.props.history.push({pathname:'/homepage'})
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