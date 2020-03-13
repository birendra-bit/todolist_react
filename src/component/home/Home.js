// import React, { Component } from 'react'
// import Navigation from '../navigation/Navigation.js'
// import Navbar from '../navigation/Navbar'
// import ListView from '../list/ListView'

// class Home extends Component {
//     render() {
//         const {state,logoutHandler,toggleHandler,addActiveClass} = this.props;
//         console.log('list adat',state.data)
//         const listview = state.data.map((task, index)=>{
//             return <ListView key={index} task={task.data}/>
//         });
//         return (
//             <div>
//                 <Navigation userStatusHandler ={logoutHandler} 
//                         text='Logout'
//                         userStatus={state.userStatus}
//                         dropDown={state.dropDown}
//                         toggleHandler = {toggleHandler} 
//                         />
//                         <br/><br/><br/><br/>
//                     <Navbar state={state} addActiveClass ={addActiveClass} 
//                         addTask={this.props.addTask} />
//                    {
//                        listview
//                    }
//             </div>
//         )
//     }
// }

// export default Home
