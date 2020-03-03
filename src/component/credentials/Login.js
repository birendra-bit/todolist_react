import React, { Component } from 'react'
import Navigation from '../navigation/Navigation'
import Form from '../ui/form/Form'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderForm:{
                userEmail:{
                    elementType:'input',
                    elementConfig:{
                        name:'userEmail',
                        type:'email',
                        placeholder:'Your Email',
                        required:true
                    },
                    label:'Email'
                },
                password:{
                    elementType:'input',
                    elementConfig:{
                        name:'password',
                        type:'password',
                        placeholder:'Your Password',
                        required:true
                    },
                    label:'Password'
                }
            }
        }
    }
    render() {
        return (
            <div>
                <Navigation userStatusHandler ={this.props.signupHandler} 
                        text='Signup'
                        userStatus={this.props.userStatus} />
                <br/>
                <Form onSubmitHandler={this.props.onSubmitHandler}
                        orderForm={this.state.orderForm}
                        userInfo={this.props.userInfo}
                        eventChangeHandler={this.props.eventChangeHandler}
                        btnText='Login'/>
            </div >
        )
    }
}

export default Login
