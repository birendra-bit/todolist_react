import React from 'react';
import Button from '../button/Button';
import Input from '../inputfield/Input';
import './Form.css';

const Forms = props => {
    const formElementsArray =[];
        for( let key in props.orderForm ){
            formElementsArray.push({
                id:key,
                config:props.orderForm[key],
                label:props.orderForm[key].label
            })
        }
        let form=(
            <form  onSubmit={props.onSubmitHandler}>
                {
                    formElementsArray.map(formElement => (
                        <Input key={formElement.id}
                                elementType={formElement.config.elementType}
                                elementConfig={formElement.config.elementConfig}
                                value={props.userInfo[formElement.id]}
                                label={formElement.label} 
                                changed={props.eventChangeHandler}/>
                    ))
                }
                <Button type="submit" className="btn btn-success btn-block" text ={props.btnText}/>
            </form>
        );
    return (
        <div className="Form">
            {form}
        </div>
    )
};


export default Forms;
