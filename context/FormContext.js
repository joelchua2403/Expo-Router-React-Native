import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({children}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isRecruiter, setIsRecruiter] = useState(true);

    return (
        <FormContext.Provider value={{name, setName, email, setEmail, message, setMessage, isRecruiter, setIsRecruiter }}>
        {children}
        </FormContext.Provider>
    );
    }

export { FormContext, FormProvider };