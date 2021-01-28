import React from 'react';

export default function Form(props){
    const {values, submit, change, disable, errors} = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const onChange = (event) => {
        const {name, value, type, checked} = event.target;
        const valueToTerms = type === "checkbox"? checked : value;
        change (name, valueToTerms);
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="from-group-inputs">
                <h3>Add User Information</h3>
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfService}</div>
                </div>
                <div className="username">
                    <label>
                        Name:
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name="name"
                            type="text"
                        />
                    </label>
                </div>
                <div className="email">
                    <label>
                        Email:
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name="email"
                            type="email"
                        />
                    </label>
                </div>
                <div className="password">
                    <label>
                        Password:
                        <input 
                            value={values.password}
                            onChange={onChange}
                            name="password"
                            type="password"
                        />
                    </label>
                </div>
                <div className="checkbox">
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

                <button disabled={disable}>submit</button>
            </div>
        </form>
    )
}