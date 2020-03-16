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
  const getIndex = (id,data)=>{
    const index = data.findIndex( d=>{
        return d._id === id;
    })
    return index;
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
    const data = [...this.state.data];
    const index = getIndex(id,data);
    const dataAtIndex = {
        ...data[index]
    }
    const val = {...dataAtIndex.data}
    val[key] = !val[key];
    dataAtIndex.data = val;
    data[index] = dataAtIndex

       Axios.put(Url.url+'task',dataAtIndex,{headers:headers}).then( response =>{
            if( response.status === 200 ){
                this.setState({
                    data:data
                })
            }else{
                
            }
       }).catch(error =>{
            console.log(error)
        })
    }
    deleteTask = id =>{
        const data = [...this.state.data];
        const index = getIndex(id,data);
        // debugger
        if( index !== -1 ){
            Axios.delete(Url.url+'task',{
                headers:headers,
                params:{'id':id}
            })
            .then( response =>{
                if(response.status === 200 ){                    
                    data.splice(index,1);
                    this.setState({
                        data:data
                    })
                }
            }).catch(error =>{
                console.log(error)
            })
        }
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
    deleteTaskHandler=(e,key)=>{
        this.deleteTask(key);
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
    taskStatusHandler = (e, id, key)=>{
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
                            taskStatusHandler={this.taskStatusHandler}
                            deleteTaskHandler = {this.deleteTaskHandler}/>
                        })
                    }
                </div>
            )
        }else{
            listview = (
                <div className="row mt-5">
                    <div className="mx-auto col-lg-8 col-md-8 col-sm-6 d-flex flex-wrap">
                        {
                            this.state.data.map((d)=>{
                                // debugger
                            return <Cards key={d._id} 
                                    data={d.data} 
                                    id={d._id}
                                    taskStatusHandler={this.taskStatusHandler}
                                    deleteTaskHandler = {this.deleteTaskHandler}/>
                                })
                        }
                    </div>
                </div>
            )
        }
        return(
            <div >
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
        )
    }
}
export default Homepage