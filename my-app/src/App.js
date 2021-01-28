import React, { useEffect, useState } from 'react';
import Form from './component/Form' //importing Form.js
import axios from 'axios';
import schema from './Validation/formSchema';
import * as yup from 'yup';
import './App.css';

//set the initial form values and form errors emptystrings
const initialFormValues = {
  name: "",
  email: "",
  passowrd: "",
  termsOfService: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  //termsOfService: "",
};

//set initial users as an empty array and button disable true
const initialUsers = [];
const initialDisabled = true;


function App() {
  //states
  const [users, setUser] = useState(initialUsers); //array
  const [formValues, setFormValues] = useState(initialFormValues); //object
  const [formErrors, setFormError] = useState(initialFormErrors); //object
  const [disabled, setDisabled] = useState(initialDisabled); //boolean
  
  //get helper to put users info on sucess impliments
  const getUsers = () => {
    axios
    .get('https://reqres.in/api/users')
    .then((response) => {
        setUser([response.data]);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const updateNewUser = (newUser) =>{
    //this is POST 
    axios
    .post('https://reqres.in/api/users', newUser)
    .then((response) => {
      setUser([...users, response.data]);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormError({
          ...formErrors, [name]:"",
        })
      })
      .catch((error) => {
        setFormError({
          ...formErrors, [name]: error.errors[0],
        });
      });
      
      setFormValues({
        ...formValues, [name]:value
      })
  }

  //when user hit the submit button
  const submitForm = () =>{
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.passowrd.trim(),
      //for checkbox and boolean value
      termsOfService: ['termsOfService'].filter(
        termsOfService => formValues[termsOfService]
      )
    }
    updateNewUser(newUser); // updating new users informetion
  }

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    schema
    .isValid(formValues)
    .then((valid) => {
      setDisabled(!valid)
    }, [formValues])
  })
  return (
    <div className="container">
      <header>
        <h1>Users App</h1>
      </header>

      <Form 
        values={formValues}
        change={inputChange}
        submit={submitForm}
        disabled={disabled}
        errors={formErrors}
      />
      <div>
        {users.map((user) => {
          return(
            <div>
              {user.name}
              {user.email}
              {user.password}
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

export default App;
