import React from 'react';
//import styled from 'styled-components';


export default function Form(props){
    
    // const StyledForm = styled.form`
    //     width: auto;
    //     border: 2px solid black;
    //     margin: 2rem;
    //     padding: 2rem;
    //     display: flex;
    //     flex-direction: column;
    //     flex-wrap: nowrap;
    //     align-item: center;

    //     button {
    //         width: 7 rem;
    //         height: 2rem;
    //         border-radius: 5px;
    //         background-color: white;
    //         border: 2px solid black;
    //     }
    // `

    const {values, submit, change, disable, errors} = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const onChange = (event) => {
        const {name, value, type} = event.target;
        change (name, value, type);
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="from-group-inputs">
                <h3>Add User Information</h3>

                <label>
                    Name:
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name="name"
                        type="text"
                    />
                </label>
                <label>
                    Email:
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name="email"
                        type="email"
                    />
                </label>
                <label>
                    Password:
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                    />
                </label>
                <label>
                    Terms of Service:
                    <input 
                        value={values.termsOfService}
                        onChange={onChange}
                        name="terms"
                        type="checkbox"
                    />
                </label>
            </div>
        </form>
    )
}