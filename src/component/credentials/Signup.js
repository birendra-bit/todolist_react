import React, { Component } from 'react'
import Navigation from '../navigation/Navigation'
import Form from '../ui/form/Form'


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
                orderForm:{
                    userName:{
                        elementType:'input',
                        elementConfig:{
                            name:'userName',
                            type:'text',
                            placeholder:'Your Name',
                            required:true
                        },
                        label:'Name'
                    },
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
                <Navigation userStatusHandler ={this.props.loginHandler} 
                        text='Login'
                        userStatus={this.props.userStatus}/>
                <br/>
                <Form onSubmitHandler={this.props.onSubmitHandler}
                        orderForm={this.state.orderForm}
                        userInfo={this.props.userInfo}
                        eventChangeHandler={this.props.eventChangeHandler}
                        btnText='Signup'/>
            </div >
        )
    }
}

export default Signup
