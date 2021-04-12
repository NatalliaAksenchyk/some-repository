import PropTypes from 'prop-types';

import "./style.css";

const UserCard = ({ name, age }) => {
    return (
        <div className="wrapper">
            <p>Hello, {name}!</p>
            <p>{age} years old.</p>
        </div>
    );
};

UserCard.defaultProps = {
    name: "Some user",
}

UserCard.propTypes = {
    name: PropTypes.string,
}

export default UserCard;