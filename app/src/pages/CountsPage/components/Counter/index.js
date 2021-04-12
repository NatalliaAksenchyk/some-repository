import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from "../../../../Routes/routesName";

import "./style.css"

const Counter = ({ countValue, parityType, color, handlIncrement, handlDecrement, handlReset }) => {
    return (
        <>
            <div className="counter_wrapper">
                <div className="count-screen">{countValue}</div>
                <div id='fg' className='parity_count' style={{ backgroundColor: color }}>{parityType}</div>
                <div className="buttons_wrapper">
                    <button onClick={handlIncrement}>+</button>
                    <button onClick={handlReset}>Reset</button>
                    <button onClick={handlDecrement}>-</button>
                </div>
            </div>
            <Link to={ROUTES.HOME_PAGE}>
                <button>GO TO HOME PAGE</button>
            </Link>
        </>
    );
};

Counter.propTypes = {
    countValue: PropTypes.number.isRequired,
    parityType: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    handlIncrement: PropTypes.func.isRequired,
    handlReset: PropTypes.func.isRequired,
    handlDecrement: PropTypes.func.isRequired,
};

export default Counter;