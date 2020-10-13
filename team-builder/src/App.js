import React, { useState } from 'react';
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {

  let [ team, setTeam ] = useState([]);
  let [ formValues, setFormValues ] = useState(initialFormValues);

  let updater = ( inputName, inputValue ) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  let submit = () => {
    let newFriend = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }

    setTeam([...team, newFriend]);
    setFormValues(initialFormValues);
  }


  return (
    <>
      <Form
      values={formValues}
      update={updater}
      submit={submit}
      />
      {team.map((member) => {
        return(
          <div>
            <h1>{member.name}</h1>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
          )
      })}
    </>
  );
}

export default App;
