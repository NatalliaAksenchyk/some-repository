import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from "../../../../Routes/routesName";
import UserCard from "../UserCard";

const HomePageLoyout = ({ userList, handleUserFaund }) => {
    return (
        <div>
            <h1>HOME PAGE!</h1>
            <div className="content_area">
                <Link to={ROUTES.COUNTER_PAGE}>
                    <button>GO TO COUNTER</button>
                </Link>
            </div>
            <div>
                {userList.map(({ name, age }, index) => (
                    <div key={index} onClick={() => handleUserFaund(index)}>
                        <UserCard name={name} age={age} />
                    </div>
                ))}
            </div>
        </div>
    );
};

HomePageLoyout.defaultProps = {
    name: "Some user",
}

HomePageLoyout.propTypes = {
    name: PropTypes.string,
}

export default HomePageLoyout;