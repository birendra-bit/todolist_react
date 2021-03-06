import React from 'react';
import './ListView.css'
import Moment from 'react-moment'
import 'moment-timezone'

const ListView = props => {
    const {data, taskStatusHandler,id,deleteTaskHandler}= props
    return (
        <div className="row mt-5">
            <div className="mx-auto col-lg-8 col-md-8 col-sm-6 col-xs-6 d-inline">
                <div className="d-flex p-2">
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
                <div>
                    <p className="ml-4">{data.description}</p>
                    <div className="d-flex p-2">
                        <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    <h6 className="ml-2">
                        Due Date <Moment format="DD/MM/YYYY">{data.dueDate}</Moment>
                    </h6>
                    <i className="fa fa-trash ml-auto" 
                        aria-hidden="true"
                        onClick={(e)=>deleteTaskHandler(e,id)}/>
                    </div>
                </div>
                <hr/>
        </div>
    </div>
    )
};

export default ListView;