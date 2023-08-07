import React from 'react';
import { Link } from 'react-router-dom';
import "./UserCard.css";
import userLogo from "../../img/user.png";
import { ROUTES } from '../../constants';

const UserCard = (props) => {

    let { user } = props;

    return (

        <div className='user-card'>

            <img src={userLogo} alt='user' />

            <div className='username-block'>
                <h3>{user.username}</h3>
                <p>{user.email}</p>
            </div>

            <Link to={ROUTES.alboms(user.id)} className='alboms-btn'>alboms</Link>

        </div>
    );
}

export default UserCard;
