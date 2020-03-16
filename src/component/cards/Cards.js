import React from 'react';
import '../list/ListView.css'

const Cards = props => {
    const {data, taskStatusHandler,id, deleteTaskHandler}= props
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card">
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
                    <h6 >{data.dueDate}</h6>
                    <p>{data.description}</p>
                    <i className="fa fa-trash ml-auto" 
                        aria-hidden="true"
                        onClick={(e)=>deleteTaskHandler(e,id)}/>
                </div>
            </div>
        </div>
        // <div className="card w-50 mx-1 p-2">
        //     <div className="d-flex">
        //         {
        //             data.isCompleted?<i className="fa fa-check-circle-o" 
        //                         aria-hidden="true" 
        //                         name="isCompleted"
        //                         onClick={(e)=>isCompleteHandler(e,id,'isCompleted')}/>:
        //                     <i className="fa fa-circle-thin" aria-hidden="true"
        //                         name="isCompleted"
        //                         onClick={(e)=>isCompleteHandler(e,id,'isCompleted')}/>
        //         }
        //         <p className="ml-2">{data.title}</p>
        //         {
        //                 data.isImportant?<i className="fa fa-star ml-auto" 
        //                         aria-hidden="true"
        //                         onClick={(e)=>isCompleteHandler(e,id,'isImportant')}/>:
        //                 <i className="fa fa-star-o ml-auto" 
        //                         aria-hidden="true" 
        //                         onClick={(e)=>isCompleteHandler(e,id,'isImportant')}/>
        //             }
        //     </div>
        //         <p>Description : {data.description}</p>
        //         <p >Due Date {data.dueDate}</p>
        //         <i className="fa fa-trash ml-auto" aria-hidden="true"/>
        // </div>
    )
};

export default Cards;
