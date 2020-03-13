import React from 'react';
import './ListView.css'

const ListView = props => {
    const {data, isCompleteHandler,id}= props
    return (
        <div className="row mt-5">
            <div className="mx-auto col-lg-8 col-md-8 col-sm-6 col-xs-6 d-inline">
                <div className="d-flex p-2">
                    {
                        data.isCompleted?<i className="fa fa-check-circle-o" 
                                    aria-hidden="true" 
                                    name="isCompleted"
                                    onClick={(e)=>isCompleteHandler(e,id,'isCompleted')}/>:
                                <i className="fa fa-circle-thin" aria-hidden="true"
                                    name="isCompleted"
                                    onClick={(e)=>isCompleteHandler(e,id,'isCompleted')}/>
                    }
                    <p className="ml-2">{data.title}</p>
                    {
                            data.isImportant?<i className="fa fa-star ml-auto" 
                                    aria-hidden="true"
                                    onClick={(e)=>isCompleteHandler(e,id,'isImportant')}/>:
                            <i className="fa fa-star-o ml-auto" 
                                    aria-hidden="true" 
                                    onClick={(e)=>isCompleteHandler(e,id,'isImportant')}/>
                        }
                </div>
                <div>
                    <p className="ml-4">{data.description}</p>
                    <div className="d-flex p-2">
                        <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    <p className="ml-2">Due Date {data.dueDate}</p>
                        <i className="fa fa-trash ml-auto" aria-hidden="true"/>
                    </div>
                </div>
                <hr/>
        </div>
    </div>
    )
};

export default ListView;