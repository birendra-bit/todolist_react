import React,{Component} from 'react';
import './Navbar.css'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
// import datePicker from 'react-bootstrap-date-picker'

const initialState={
    title : '',
    description : '',
    createdOn:Date.now(),
    dueDate : Date.now(),
    isCompleted : false,
    isImportant : false
}
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state= initialState;
    }
    changeHandler = e =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    dateChangeHandler = date=>{
        this.setState({
            dueDate: date
        })
    }
    addTaskHandler = (e)=>{
        this.props.addTask(e,this.state);
        this.setState(initialState);
    }
    render(){
    const {displayAll, completed, pending, important } = this.props.state;
    const {addActiveClass} = this.props;
    return (
        <div className="row">
            <div className="Main m-auto col-lg-8 col-md-4 col-sm-6 col-xs-6">
                <div className={displayAll? 'active':null}
                    onClick={(e)=> addActiveClass(e,'displayAll')} >
                    <span>All</span>
                </div>
                <div className={completed ? 'active':null}
                    onClick={(e)=> addActiveClass(e,'completed')}>
                    <span>Completed</span>
                </div>
                <div className={pending? 'active':null}
                    onClick={(e)=> addActiveClass(e,'pending')}>
                    <span>Pending</span>
                </div>
                <div className={important? 'active':null}
                    onClick={(e)=> addActiveClass(e,'important')}>
                    <span>Important</span>
                </div>
                <div className="AddTask" data-toggle="modal" data-target="#exampleModalCenter">
                    <span className="Add">Add</span><span> Task</span>
                </div>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" 
                role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" 
                role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" 
                        id="exampleModalCenterTitle">Add a new Note!!</h5>
                        <button type="button" 
                        className="close" data-dismiss="modal" 
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body font-weight-bold">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Title</label>
                                <input type="text" className="form-control" 
                                        id="formGroupExampleInput" 
                                        placeholder="Enter Task Title"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Due Date</label>
                                <DatePicker selected={this.state.dueDate}
                                    excludeTimes
                                    onChange={this.dateChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="comment">description:</label>
                                <textarea className="form-control" 
                                        rows="5" id="comment"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.changeHandler}/>
                            </div>
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" 
                                data-dismiss="modal">Cancel</button>
                        <button type="button" 
                                className="btn btn-primary"
                                onClick={this.addTaskHandler}
                                data-dismiss="modal">Add</button>
                    </div>
                    </div>
                </div>
            </div>
         </div>
        )
    }
};

export default Navbar;
