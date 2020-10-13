import React from 'react';

export default function Form(props) {
    let { values, update, submit } = props;


    let onChange = (evt) => {
        let { name, value } = evt.target;
        update(name, value);
    }

    let onSubmit = (evt) => {
        evt.preventDefault();
        submit()
    }

    return(
        <form onSubmit={onSubmit}>
            <label>
                Name:
                 <input
                 type='text'
                 name='name'
                 value={values.name}
                 onChange={onChange}
                 placeHolder='Name'
                 maxLength='40'
                 >
                 </input>
            </label>
            <label>
                Email:
                 <input
                 type='email'
                 name='email'
                 value={values.email}
                 onChange={onChange}
                 placeHolder='Email'
                 maxLength='40'
                 >
                 </input>
            </label>
            <label>Role
                <select
                    name='role'
                    value={values.role}
                    onChange={onChange}
                >
                    <option value=''>--select role--</option>
                    <option value='student'>Full-Stack Engineer</option>
                    <option value='student'>Front-End Engineer</option>
                    <option value='instructor'>Back-End Engineer</option>
                    <option value='student'>Data Science Developer</option>
                    <option value='tl'>Designer</option>
                </select>
            </label>
            <input type='submit'></input>
        </form>
    )
}