import React, { useState } from 'react';

const Form = () => {

    const [ nickname, setNickname ] = useState<string>();

    const getNickname = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        window.location.replace(`user/${nickname}`);
    };


    return (
        <div className='text-center mt-5'>
            
            <b className='text-white'>Digite seu nome de usuário</b>
            <form onSubmit={(e)=> getNickname(e)}>
                <div className='col-md-4 d-flex mx-auto mt-3'>
                    <input type="text" 
                        required={true} 
                        placeholder='Nickname' 
                        onChange={ e => setNickname(e.currentTarget.value)} 
                        className='form_control'
                    />

                    <input type="submit" className='botton-2 ml-2' />
                </div>
            </form>
        
        </div>
    );
}; 


export default Form;