import React, { useState } from 'react'
import FormSignUp from './FormSignUp'
import FormSuccess from './FormSuccess';

function Form() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
       
            <div className='form-container'>
            <span className='close-btn'>×</span>
             <div className='form-content-left'>
             <img className='form-img' src={require("../../images/img-3.svg").default} alt='spaceship' />
            </div>
            {!isSubmitted ? (
            <FormSignUp submitForm={submitForm} />
             ) : (
            <FormSuccess />
            )}
        </div>
        
    )
}

export default Form