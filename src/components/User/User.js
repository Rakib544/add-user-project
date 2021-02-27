import React from 'react';
import './User.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    const {img, name, email, phone, salary} = props.user
    return (
        <div className="single-user-container">
            <div>
                <img className="single-user-img" src={img} alt={name}/>
            </div>
            <div className="single-user-info">
                <h2>{name}</h2>
                <h5>{email}</h5>
                <h5>{phone}</h5>
                <strong>Salary: $ {salary}</strong>
                <button className="add-user-button" onClick = {() => props.handleAddUserBtn(props.user) }><FontAwesomeIcon icon={faPlus} /> Add User</button>
            </div>
        </div>
    );
};

export default User;