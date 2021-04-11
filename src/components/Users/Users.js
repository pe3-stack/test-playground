import React from "react";

import User from "./User/User";

const Users = ({ users, deleted }) =>
    users.map((user, index) => {
        return (
            <tbody key={index}>
                <User
                    id={index + 1}
                    key={index}
                    firstname={user.firstname}
                    lastname={user.lastname}
                    email={user.email}
                    birthdate={user.birthdate}
                    deleted={() => deleted(index)}
                /></tbody>
        );
    });

export default Users;
