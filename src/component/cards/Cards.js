import React from 'react';
import '../list/ListView.css'

const Cards = props => {
    const {data, isCompleteHandler,id}= props
    return (
        <div className="card w-50 mx-1 p-2">
            <div className="d-flex">
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
                <p>Description : {data.description}</p>
                <p >Due Date {data.dueDate}</p>
                <i className="fa fa-trash ml-auto" aria-hidden="true"/>
        </div>
    )
};

export default Cards;
