import logo from './logo.svg';
import './App.css';
import Form from './component/Form' //importing Form.js
import React, { useState } from 'react';

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
  return (
    <div className="container">
      <header>
        <h1>Users App</h1>
      </header>

      <Form 
        values={formValues}
      />
    </div>
  );
}

export default App;
