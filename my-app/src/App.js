import logo from './logo.svg';
import './App.css';
import Form from './component/Form' //importing Form.js
import React, { useState } from 'react';
import axios from 'axios'

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
  termsOfService: "",
};

//set initial users as an empty array and button disable true
const initialUsers = [];
const initialDisabled = true


function App() {
  //states
  const [users, setUser] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormError] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  //get helper to put users info on sucess impliments
  const getUsers = () => {

  }
  return (
    <div className="container">
      <header>
        <h1>Users App</h1>
      </header>

      <Form 
        values={formValues}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
