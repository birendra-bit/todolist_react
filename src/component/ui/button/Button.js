import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Button = props=>{
    return(
    <button  {...props} >{props.text}</button>
    );
}
export default Button;