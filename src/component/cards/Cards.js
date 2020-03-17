import React from 'react';
import '../list/ListView.css'
import Moment from 'react-moment'
import 'moment-timezone'

const Cards = props => {
    const {data, taskStatusHandler,id, deleteTaskHandler}= props
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card h-75 w-100">
                <div className="card-body">
                    <div className="d-flex">
                        {
                            data.isCompleted?<i className="fa fa-check-circle-o" 
                                        aria-hidden="true" 
                                        name="isCompleted"
                                        onClick={(e)=>taskStatusHandler(e,id,'isCompleted')}/>:
                                    <i className="fa fa-circle-thin" aria-hidden="true"
                                        name="isCompleted"
                                        onClick={(e)=>taskStatusHandler(e,id,'isCompleted')}/>
                        }
                        <h5 className="ml-2">{data.title}</h5>
                        {
                                data.isImportant?<i className="fa fa-star ml-auto" 
                                        aria-hidden="true"
                                        onClick={(e)=>taskStatusHandler(e,id,'isImportant')}/>:
                                <i className="fa fa-star-o ml-auto" 
                                        aria-hidden="true" 
                                        onClick={(e)=>taskStatusHandler(e,id,'isImportant')}/>
                            }
                    </div>
                    <h6 ><Moment format="DD/MM/YYYY">{data.dueDate}</Moment></h6>
                    <p>{data.description}</p>
                    
                </div>
                <i className="fa fa-trash m-3" 
                        aria-hidden="true"
                        onClick={(e)=>deleteTaskHandler(e,id)}/>
            </div>
        </div>
    )
};

export default Cards;
