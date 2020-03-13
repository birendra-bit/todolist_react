import React,{Component} from 'react'
import Url from '../../environments/Environment'
import Axios from 'axios'
import Navigation from '../../component/navigation/Navigation'
import Navbar from '../../component/navigation/Navbar'
import ListView from '../../component/list/ListView'
import Cards from '../../component/cards/Cards'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization':localStorage.getItem('token')
  }
class Homepage extends Component{
        state={
            listview:false,
            userStatus: true,
            dropDown: false,
            displayAll: true,
            daily:false,
            monthly:false,
            data:[]
        }
    componentDidMount(){
        Axios.get(Url.url+'task',{headers:headers}).then( response =>{
            this.setState({
                data : response.data
            })
            // console.log('data : ',this.state.data)
        }).catch(error =>{
            console.log(error)
        })
        
    }
    updateState = (id,key)=>{
        const index = this.state.data.findIndex( d=>{
            return d._id === id;
        })
       const toUpdateData = {
           ...this.state.data[index]
       };
       const valueAtIndex = {...toUpdateData.data}
       valueAtIndex[key] = !valueAtIndex[key];
       toUpdateData.data = valueAtIndex
       Axios.put(Url.url+'task',toUpdateData,{headers:headers}).then( response =>{
        // this.setState({
        //     data : response.data
        // })
        // console.log('data : ',this.state.data)
    }).catch(error =>{
        console.log(error)
    })

    //    this.setState({
    //        data:{...this.state.data,[index] : toUpdateData}
    //    })
    }
    addTask = (e,values) =>{
        let data = {
            user:localStorage.getItem('userEmail'),
            data:values
        }
        Axios.post(Url.url+'task',data,{headers:headers})
        .then( response =>{
            let updateData = [...this.state.data];
            updateData = updateData.concat(response.data);
            this.setState({
                data:updateData
            })
            console.log('after post : ',updateData);
        }).catch(error =>{
            console.log(error)
        })
    }
    logoutHandler =()=>{
        localStorage.clear();
        this.props.history.goBack({pathname:'/'});
    }
    toggleHandler =()=>{
        this.setState(prevSate =>({
            dropDown:!prevSate.dropDown
        }));
    }
    isCompleteHandler = (e, id, key)=>{
        this.updateState(id,key);
    }
    addActiveClass = (e,name) =>{
        if( name === 'displayAll'){
            this.setState(prevState=>({
                displayAll : prevState.displayAll? prevState.displayAll:!prevState.displayAll,
                daily : prevState.daily? !prevState.daily:prevState.daily,
                monthly: prevState.monthly? !prevState.monthly: prevState.monthly
            }));
        }else if( name ==='daily'){
            this.setState(prevState=>({
                displayAll: prevState.displayAll? !prevState.displayAll:prevState.displayAll,
                daily: prevState.daily? prevState.daily: !prevState.daily,
                monthly: prevState.monthly? !prevState.monthly: prevState.monthly
            }))
        }else{
            this.setState(prevState=>({
                displayAll: prevState.displayAll? !prevState.displayAll:prevState.displayAll,
                daily: prevState.daily? !prevState.daily: prevState.daily,
                monthly: prevState.monthly? prevState.monthly: !prevState.monthly
            }))
        }
    }
    
    render(){
        let listview = [];
        if( this.state.listview){
            listview = (
                <div>
                    {
                    this.state.data.map((d)=>{
                        // debugger
                    return <ListView key={d._id} 
                            data={d.data} 
                            id={d._id}
                            isCompleteHandler={this.isCompleteHandler}/>
                        })
                    }
                </div>
            )
        }else{
            listview = (
                <div className="row mt-5">
                    <div className="mx-auto col-lg-8 col-md-8 col-sm-6 col-xs-6 d-flex">
                        {
                            this.state.data.map((d)=>{
                                // debugger
                            return <Cards key={d._id} 
                                    data={d.data} 
                                    id={d._id}
                                    isCompleteHandler={this.isCompleteHandler}/>
                                })
                        }
                    </div>
                </div>
            )
        }
        return(
            <div>
                <Navigation userStatusHandler ={this.logoutHandler} 
                        text='Logout'
                        userStatus={this.state.userStatus}
                        dropDown={this.state.dropDown}
                        toggleHandler = {this.toggleHandler} 
                        />
                        <br/><br/><br/><br/>
                    <Navbar state={this.state} addActiveClass ={this.addActiveClass} 
                        addTask={this.addTask} />
                   {
                       listview
                   }
            </div>
            // <Home logoutHandler={this.logoutHandler}
            //     toggleHandler={this.toggleHandler}
            //     addActiveClass={this.addActiveClass}
            //     addTask={this.addTask}
            //     state={this.state}
            //     />
        )
    }
}
export default Homepage