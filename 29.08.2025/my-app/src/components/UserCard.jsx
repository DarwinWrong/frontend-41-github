import React from "react";
import PropTypes from "prop-types";

function UserCard({ user }) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Вік: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
    )
}

UserCard.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
}
export default UserCard