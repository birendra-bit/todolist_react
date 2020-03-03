import React,{Component} from 'react'
import './Navigation.css'
import Button from '../ui/button/Button'
import LogoImg from '../../assets/logo.png'
import userProfileImg from '../../assets/user1.png'

const Navigation = props=>{
    let profile = null;
    if( props.userStatus ){
        profile = (
            <div className="UerProfile">
                <p>welcome Abche jkelwjoe</p>
                <img src={userProfileImg}/>
            </div>
        )
    }else{
        profile = (
            <div className="AnchorDiv">
                <a onClick={props.userStatusHandler}>{props.text}</a>
            </div>
        )
    }
        return(
            <nav className="navbar fixed-top navbar-expand-lg bg-light navbar-light">
                <div className="navbar-brand">
                        <img src={LogoImg} alt="Logo" 
                            className="img-responsive ml-1" 
                            width="100" height="40"/>
                    </div>
                <button className="navbar-toggler ml-auto" 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarTogglerDemo01" 
                        aria-controls="navbarTogglerDemo01" 
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    {profile}
                    {/* <Button type="button" className = "btn ml-auto btn-outline-primary" 
                        text ={props.text} onClick={props.userStatusHandler}/> */}
                </div>
            </nav>
        );
}

export default Navigation