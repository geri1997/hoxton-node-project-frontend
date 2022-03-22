import React from 'react';
import SignUpForm from '../../Components/SignUpForm';
//@ts-ignore
import { useStore } from '../../Store/store';

const SignUp = () => {
    return (
        <section className='log_in'>
            <h2>Create an account</h2>
            
            <SignUpForm />
        </section>
    );
};

export default SignUp;
