import React from 'react';
import './Users.css';

import User from '../User/User';

const Users = (props) => {
    const totalSalary = props.selectUser.reduce((sum, item) => sum += item.salary, 0);
    return (
        <div className="users-container">
            <div className="users-list">
                {
                    props.users.map(user => {
                        return (
                            <div>
                                <User user={user} handleAddUserBtn = {props.handleAddUserBtn}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="added-list">
                <h2>Total Added : {props.selectUser.length}</h2>
                <p><strong>Total Salary: $ {totalSalary}</strong></p>
            </div>
        </div>
    );
};

export default Users;