import React from 'react';
import User from '../User/User';
import noData from '../../images/noData.svg';

const Users = ({ users }) => {

    return (
        <div>
            {
                //Checking if users array have length or not so that NO DATA FOUND message can be displayed on UI if there is no user.
                users.length
                    ?
                    <div className="text-start mt-0 mt-md-4">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th className="d-none d-lg-table-cell" scope="col">Phone</th>
                                    <th className="d-none d-lg-table-cell" scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => <User
                                        key={user.id}
                                        user={user}
                                    ></User>)
                                }
                            </tbody>
                        </table>

                    </div>
                    :
                    // No users found message showing on UI
                    <div className="mt-4">
                        <h1 className="fw-bold">No Contact Found</h1>
                        <p>We did not find any user of your search</p>
                        <img className="img-fluid col-9 col-md-6 col-lg-3 mx-auto" src={noData} alt="" />
                    </div>
            }
        </div>
    );
};

export default Users;