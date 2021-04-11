import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Remove from '../../UI/Remove/Remove'
import PropTypes from "prop-types";

const User = ({ id, firstname, lastname, email, birthdate, deleted }) => {
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{email}</td>
            <td>{birthdate}</td>
            <td onClick={deleted} ><Remove /></td>
        </tr>
    );
};

User.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    birthdate: PropTypes.string,
    deleted: PropTypes.func
};

export default User;


