import React,{Component} from 'react'
import './Navigation.css'
import LogoImg from '../../assets/logo.png'

const Navigation = props=>{
    let profile = null;
    if( props.userStatus ){
        profile = (
            <div className="cards UerProfile">
               <div className="UserProfileDisplay">
                <p>welcome Abche jkelwjoe</p>
                    <i className="fa fa-user-circle-o UserIcon" aria-hidden="true"></i>
                    {props.dropDown ?<i className="fa fa-caret-up Dropdown" aria-hidden="true" onClick={props.toggleHandler}/>
                        : <i className="fa fa-caret-down Dropdown" aria-hidden="true" onClick={props.toggleHandler}/>
                    }
               </div>
               {props.dropDown ?<ul>
                            <li>Edit Profile</li>
                            <li><i class="fa fa-list mt-1" aria-hidden="true"/>
                                &nbsp;&nbsp;&nbsp;<p>List</p></li>
                            <li><i class="fa fa-th-large mt-1" aria-hidden="true"/>
                                &nbsp;&nbsp;&nbsp;<p>Cards</p></li>
                                <li onClick={props.userStatusHandler} >Logout</li>
                            </ul>:null }
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
                <div className="navbar-brand ml-5">
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
                </div>
            </nav>
        );
}

export default Navigation